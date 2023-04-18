# Animal Pose Dataset

[Source](https://sites.google.com/view/animal-pose/)  

Dataset splits:
- Part I contains cats, dogs, horses, sheep, cows with bounding boxes and keypoints
- Part II contains 7 other species with bounding boxes, to do unsupervised domain adaption

[Repo](https://github.com/noahcao/animal-pose-dataset)  

[Paper](https://openaccess.thecvf.com/content_ICCV_2019/html/Cao_Cross-Domain_Adaptation_for_Animal_Pose_Estimation_ICCV_2019_paper.html)  

This paper uses both pose-labeled human data and a (much smaller) pose-labeled animal dataset combined with a box-labeled animal dataset.  The basic premise is that there are skeletal similarites between the humans and animals that can be leveraged to improve model performance for animal pose estimation.  They also generate "psuedo" labels for similar (four-legged) animal domains not included in the dataset which are incorporated into the model if they pass a filter for relability.  

Citation

@inproceedings{cao2019cross,
  title={Cross-domain adaptation for animal pose estimation},
  author={Cao, Jinkun and Tang, Hongyang and Fang, Hao-Shu and Shen, Xiaoyong and Lu, Cewu and Tai, Yu-Wing},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
  pages={9498--9507},
  year={2019}
}

## Potential Annotation Tools

[CVAT](https://github.com/opencv/cvat)  
[jsbroks](https://github.com/jsbroks/coco-annotator)