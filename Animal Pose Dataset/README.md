# Information about the Animal Pose Dataset

## Animal pose dataset 

[Source](https://sites.google.com/view/animal-pose/)

Dataset splits:
- Part I contains cats, dogs, horses, sheep, cows with bounding boxes and keypoints
- Part II contains 7 other species with bounding boxes, to do unsupervised domain adaption

[Repo](https://github.com/noahcao/animal-pose-dataset)

[Paper](Cross-Domain Adaptation for Animal Pose Estimation)

This paper uses both pose-labeled human data and a (much smaller) pose-labeled animal dataset combined with a box-labeled animal dataset.  The idea is that there are skeletal similarites between the humans and animals that can be leveraged to improve model performance for animal pose estimation.  They also generate "psuedo" labels for similar (four legged) animal domains not included in the dataset.  


## Potential Annotation Tools

[CVAT](https://github.com/opencv/cvat)
[jsbroks](https://github.com/jsbroks/coco-annotator)