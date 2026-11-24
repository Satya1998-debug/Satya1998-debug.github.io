---
layout: page
title: Behaviour cloning with transformers
description: A modified Behavior Transformer (BeT) policy for the PushT manipulation task, trained with Hugging Face LeRobot.
importance: 2
category: side-projects
featured: true
featured_rank: 5
img: assets/img/projects/bc_frame.jpg
icon: ti ti-hand-grab
period: 2025
tech: [PyTorch, LeRobot, Transformers, Imitation Learning]
github: https://github.com/Satya1998-debug/behaviour_transformer_policy
---

Personal project (July 2025).

Behaviour cloning learns a policy directly from demonstrations: show the robot how a task is done, and train a model to map what it sees to what it should do next. I adapted a **Behavior Transformer (BeT)** to Hugging Face's [LeRobot](https://github.com/huggingface/lerobot) framework and trained it on the **PushT** task, where the agent has to push a T-shaped block into a target pose.

Demonstrations of the same task are multi-modal: you can push the block around the left or the right side, and averaging the two gives a policy that does neither. BeT handles this with **action discretisation** (k-means bins over the action space) plus a learned **offset correction** that recovers continuous actions.

<div class="row">
  <div class="col-sm-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/bc_demo.gif" class="img-fluid rounded z-depth-1" alt="BeT policy rollout on PushT" %}
  </div>
  <div class="col-sm-7 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/bc_loss.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Training and evaluation loss" %}
  </div>
</div>
<div class="caption">Left: a rollout of the trained policy on PushT. Right: training and evaluation loss.</div>

Code: [behaviour_transformer_policy](https://github.com/Satya1998-debug/behaviour_transformer_policy).

**Stack:** Python, PyTorch, LeRobot, transformers, imitation learning.
