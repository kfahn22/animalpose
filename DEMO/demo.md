## Tips in Discord

Here are some tips for your demos
1. Try to allocate time for them! Demos are an amazing artifact and outcome of your project and having a high-quality demo helps increase the impact of the demo
2. Have examples. If you're using Gradio, use gr.Examples or examples=[..] to predefine some examples. They are a great way to explain users what's the expected input
3. Cache examples. If using examples, most users will use them as their first experience, so no need to repeat operations. If using gr.Interface, it will cache by default. If using gr.Blocks with gr.Examples, use cache_examples=True
4. Add some UI elements. E.g. some nice title, description, link to repos (model/dataset repos, GitHub project if any, paper, etc)
5. Simple UIs tend to be more intuitive and nicer for most users. If you want to have additional configuration, hide it under an accordion or a second tab. That way your UI is welcoming towards users
6. Share the demos! Share them in ⁠jax-diffusers-sprint and ask for feedback