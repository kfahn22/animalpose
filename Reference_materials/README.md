## Flax

[Flax](https://flax.readthedocs.io/en/latest/getting_started.html)

[Google cloud cli](https://cloud.google.com/sdk/docs/install)
[google auth](https://cloud.google.com/sdk/auth_success)

[connecting to persistent disk](https://cloud.google.com/tpu/docs/setup-persistent-disk#mount-pd)

[min-snr](https://arxiv.org/abs/2303.09556)

[gradient accumulation](https://github.com/lllyasviel/ControlNet/blob/main/docs/train.md#more-consideration-sudden-converge-phenomenon-and-gradient-accumulation)

[wandb](https://docs.wandb.ai/quickstart)

[profiling the code](https://jax.readthedocs.io/en/latest/profiling.html)

## Using VSC
[VSC](https://medium.com/@ivanzhd/vscode-sftp-connection-to-compute-engine-on-google-cloud-platform-gcloud-9312797d56eb)

[tunnels](https://code.visualstudio.com/docs/remote/tunnels)

## Hosting locally

[local](https://jax.readthedocs.io/en/latest/jax-101/06-parallelism.html#aside-hosts-and-devices-in-jax)

## Setting up a training journal

- Version by Soumik Rakshit
[journal](http://wandb.me/jax-controlnet)

## tmux

[github](https://github.com/tmux/tmux/wiki)  
[UMICH](https://teamdynamix.umich.edu/TDClient/47/LSAPortal/KB/ArticleDet?ID=1688)   
[tutorial](https://www.hostinger.com/tutorials/tmux-beginners-guide-and-cheat-sheet/)


## Loading data
[](https://huggingface.co/docs/datasets/loading#local-and-remote-files)

[Train control net with diffusors](https://huggingface.co/blog/train-your-controlnet)


## Media Pipe
--Humans
[MediaPipe](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker)

https://github.com/huggingface/community-events/tree/main/jax-controlnet-sprint#prepare-a-dataset-with-mediapipe-and-hugging-face

## Recommandations from HF team

- 1. Fine-tuning instead of training from scratch. If you're fine-tuning, you start from a strong base and diffusion models are quite easy to fine-tune
- 2. If you have to train from scratch, keep the model small. Small models have faster iteration and are more stable. Dalle-mini was an amazing POC after the sprint, it was still undertrained, but it was a great base to start from.
- 3. Use existing open-source implementations as much as possible. We have many training scripts in diffusers - adapt those for your use case
- 4. Parallelize the tasks to a max. You can do many things in parallel: While one is constantly improving the data, another one takes care of getting the training up and running, another one else adds intermediate validation with W&B, another one is prepping the demo
- 5. Ask questions if you're stuck early on. We can help you unblock you! 

