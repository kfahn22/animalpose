import gradio as gr
import jax
import jax.numpy as jnp
import numpy as np
from flax.jax_utils import replicate
from flax.training.common_utils import shard
from PIL import Image
from diffusers import FlaxStableDiffusionControlNetPipeline, FlaxControlNetModel
import gc

report_url = 'https://wandb.ai/john-fozard/dog-cat-pose/runs/kmwcvae5'
sketch_url = 'https://editor.p5js.org/kfahn/full/OshQky7RS'

def create_key(seed=0):
    return jax.random.PRNGKey(seed)

def addp5sketch(url):
   iframe = f'<iframe src ={url} style="border:none;height:495px;width:100%"/frame>'
   return gr.HTML(iframe)

def wandb_report(url):
    iframe = f'<iframe src ={url} style="border:none;height:1024px;width:100%"/frame>'
    return gr.HTML(iframe)

control_img = 'myimage.jpg'

controlnet, controlnet_params = FlaxControlNetModel.from_pretrained(
    "JFoz/dog-cat-pose", dtype=jnp.bfloat16
)
pipe, params = FlaxStableDiffusionControlNetPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5", controlnet=controlnet, revision="flax", dtype=jnp.bfloat16
)

def infer(prompts, negative_prompts, image):

    params["controlnet"] = controlnet_params
    
    num_samples = 1 #jax.device_count()
    rng = create_key(0)
    rng = jax.random.split(rng, jax.device_count())
    image = Image.fromarray(image)
    
    prompt_ids = pipe.prepare_text_inputs([prompts] * num_samples)
    negative_prompt_ids = pipe.prepare_text_inputs([negative_prompts] * num_samples)
    processed_image = pipe.prepare_image_inputs([image] * num_samples)
    
    p_params = replicate(params)
    prompt_ids = shard(prompt_ids)
    negative_prompt_ids = shard(negative_prompt_ids)
    processed_image = shard(processed_image)
    
    output = pipe(
        prompt_ids=prompt_ids,
        image=processed_image,
        params=p_params,
        prng_seed=rng,
        num_inference_steps=50,
        neg_prompt_ids=negative_prompt_ids,
        jit=True,
    ).images[0,0]
    
    #output_images = pipe.numpy_to_pil(np.asarray(output.reshape((num_samples,) + output.shape[-3:])))
    del image
    gc.collect()
    
    output=np.array(output, dtype=np.float32)
    return output

with gr.Blocks(theme='kfahn/AnimalPose') as demo:  
  gr.Markdown(
      """
      <h1 style="text-align: center;">
      Animal Pose Control Net
      </h1>
     
      <h3 style="text-align: center;"> This is a demo of Animal Pose ControlNet, which is a model trained on runwayml/stable-diffusion-v1-5 with new type of conditioning.
      </h3>
      """) 
  with gr.Row():
    with gr.Column():
      prompts  = gr.Textbox(label="Prompt", placeholder="animal standing, best quality, highres")
      negative_prompts  = gr.Textbox(label="Negative Prompt", value="lowres, two heads, bad muzzle, bad anatomy, missing ears, missing paws")
      conditioning_image = gr.Image(label="Conditioning Image")
      run_btn = gr.Button("Run")
      wandb = wandb_report(report_url)
    with gr.Column():
      keypoint_tool = addp5sketch(sketch_url)
      output = gr.Image(
                label="Result",
            )
      gr.Markdown(
        """
        [Dataset](https://huggingface.co/datasets/JFoz/dog-poses-controlnet-dataset)  
        [Diffusers model](https://huggingface.co/JFoz/dog-pose)  
        [Github](https://github.com/fi4cr/animalpose)   
        [Training Report](https://wandb.ai/john-fozard/dog-cat-pose/runs/kmwcvae5)
        """)     

  run_btn.click(fn=infer, inputs = [prompts, negative_prompts, conditioning_image], outputs = output)
    
#gr.Interface(fn=infer, inputs = ["text", "text", "image"], outputs = output,
            #examples=[["a Labrador crossing the road", "low quality", "myimage.jpg"]])   
    

demo.launch(debug=True)