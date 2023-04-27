import gradio as gr
import jax
import jax.numpy as jnp
import numpy as np
from flax.jax_utils import replicate
from flax.training.common_utils import shard
from PIL import Image
from diffusers import FlaxStableDiffusionControlNetPipeline, FlaxControlNetModel
import cv2

def create_key(seed=0):
    return jax.random.PRNGKey(seed)

controlnet, controlnet_params = FlaxControlNetModel.from_pretrained(
    "JFoz/dog-cat-pose", dtype=jnp.bfloat16
)
pipe, params = FlaxStableDiffusionControlNetPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5", controlnet=controlnet, revision="flax", dtype=jnp.bfloat16
)

def infer(prompt, image):
    params["controlnet"] = controlnet_params
    
    num_samples = 1 #jax.device_count()
    rng = create_key(0)
    rng = jax.random.split(rng, jax.device_count())
    im = image
    image = Image.fromarray(im)
    
    #prompt_ids = pipe.prepare_text_inputs([prompts] * num_samples)
    #negative_prompt_ids = pipe.prepare_text_inputs([negative_prompts] * num_samples)
    processed_image = pipe.prepare_image_inputs([image] * num_samples)
    
    p_params = replicate(params)
    #prompt_ids = shard(prompt_ids)
    #negative_prompt_ids = shard(negative_prompt_ids)
    processed_image = shard(processed_image)
    
    output = pipe(
        prompt_ids=prompt_ids,
        image=processed_image,
        params=p_params,
        prng_seed=rng,
        num_inference_steps=50,
        #neg_prompt_ids=negative_prompt_ids,
        jit=True,
    ).images
    
    output_images = pipe.numpy_to_pil(np.asarray(output.reshape((num_samples,) + output.shape[-3:])))
    return output_images

#gr.Interface(infer, inputs=["text", "text", "image"], outputs="gallery").launch()

title = "Animal Pose Control Net"
description = "This is a demo of Animal Pose ControlNet, which is a model trained on runwayml/stable-diffusion-v1-5 with new type of conditioning."

with gr.Blocks(theme=gr.themes.Default(font=[gr.themes.GoogleFont("Inconsolata"), "Arial", "sans-serif"])) as demo:
    gr.Markdown(
        """
    # Animal Pose Control Net
    # This is a demo of Animal Pose Control Net, which is a model trained on runwayml/stable-diffusion-v1-5 with new type of conditioning.
    """)

gr.Examples(
        examples=[
            #["a tortoiseshell cat is sitting on a cushion"],
            #["a yellow dog standing on a lawn"],
            ["a tortoiseshell cat is sitting on a cushion",  "https://huggingface.co/JFoz/dog-cat-pose/blob/main/images_0.png"],
            ["a yellow dog standing on a lawn", "https://huggingface.co/JFoz/dog-cat-pose/blob/main/images_1.png"],
        ],
    inputs=[
            prompt, image
        ],
        outputs=output,
        fn=infer,
        cache_examples=True,
    )

gr.Interface(fn = infer, inputs = ["text", "text", "image"], outputs = "image",
            title = title, description = description, examples = gr.examples, theme='gradio/soft').launch()

gr.Markdown(
        """
    * [Dataset](https://huggingface.co/datasets/JFoz/dog-poses-controlnet-dataset)
    * [Diffusers model](), [Web UI model](https://huggingface.co/JFoz/dog-pose)
    * [Training Report](https://wandb.ai/john-fozard/dog-cat-pose/runs/kmwcvae5))
    """)