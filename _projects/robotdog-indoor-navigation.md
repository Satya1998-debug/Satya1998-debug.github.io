---
layout: page
title: RoboDog Guide
description: "Master's thesis: a Unitree Go1 that guides people indoors by voice, plans with a local LLM agent, and only walks through doors it has checked."
importance: 1
category: research
featured: true
featured_rank: 1
img: assets/img/moments/robotdog_mount.jpg
icon: ti ti-robot
period: 2025 – 2026
tech: [LangGraph, ROS Noetic, YOLO11, Jetson Orin, RAG]
github: https://github.com/Satya1998-debug/robotdog_guide
---

<div class="project-hero-meta">
  <span><i class="ti ti-school"></i> Master's thesis · <a href="https://www.ias.uni-stuttgart.de/">IAS</a>, University of Stuttgart</span>
  <span><i class="ti ti-users"></i> Supervised by Prof. Andrey Morozov and Joachim Nilsen Grimstad</span>
</div>

<div class="project-links">
  <a class="btn-modern btn-primary-modern btn-sm-modern" href="https://github.com/Satya1998-debug/robotdog_guide" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-github"></i> robotdog_guide (agent)</a>
  <a class="btn-modern btn-ghost-modern btn-sm-modern" href="https://github.com/Satya1998-debug/door_navigation" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-github"></i> door_navigation (ROS)</a>
  <a class="btn-modern btn-ghost-modern btn-sm-modern" href="https://www.linkedin.com/posts/satyabrata-pradhan-00a6b916b_masterthesis-robotics-humanrobotinteraction-activity-7520618952218189824-ph3K" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-linkedin"></i> Technical deep dive</a>
</div>

**RoboDog Guide: Human–Robot Teaming for Indoor Navigation.** The goal was to turn a Unitree Go1 into a speech-driven indoor guide that handles the doors on its planned route safely. You ask it where someone's office is, it explains, asks for your approval, and walks you there. A high-level agentic AI framework sits on top of a classical robotics stack, and everything runs offline on the robot.

<figure class="project-video">
  <video controls playsinline preload="none" poster="{{ 'assets/img/robotdog/demo_poster.jpg' | relative_url }}">
    <source src="{{ 'assets/video/robodog_demo.mp4' | relative_url }}" type="video/mp4">
  </video>
  <figcaption class="caption">Demo: the Go1 follows the planned path (right), detects the door ahead (left) and goes through it.</figcaption>
</figure>

<div class="metric-row">
  <div class="metric"><span class="metric-value">0.901</span><span class="metric-label">door detection mAP@0.5</span></div>
  <div class="metric"><span class="metric-value">5 Hz</span><span class="metric-label">perception on Jetson Orin</span></div>
  <div class="metric"><span class="metric-value">3</span><span class="metric-label">layers: agent, bridge, ROS</span></div>
  <div class="metric"><span class="metric-value">100%</span><span class="metric-label">offline, no cloud calls</span></div>
</div>

## How it fits together

Speech → agentic reasoning → user approval → ROS navigation → door perception → passability decision → traverse, or ask for help.

{% include figure.liquid path="assets/img/robotdog/architecture.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Architecture: agentic system, ROS bridge, ROS middleware" caption="End-to-end flow. The agent never drives motors directly; approved tool calls go through the bridge into the ROS navigation stack." %}

## The hardware

I integrated an external NVIDIA Jetson AGX Orin, an Intel RealSense D455 RGB-D camera, a RoboSense RS-Helios 16-beam LiDAR and a microphone/speaker array with the Go1, using custom 3D-printed mounts. The original robot stack runs ROS Melodic. The ROS layer runs ROS Noetic on Python 3.8, and the agent runs on Python 3.11.

{% include figure.liquid path="assets/img/robotdog/hardware.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Hardware specifications of the RoboDog Guide" caption="Sensor and compute setup on the Go1. Inference runs fully offline with Ollama, and perception is accelerated with TensorRT." %}

## Layer I: the agent

The offline agentic workflow combines **LangGraph**, local **Qwen** models, **RAG** over data scraped from the university website, **Vosk** speech recognition and **pyttsx3 / eSpeak** speech output. Every turn goes through context processing and intent extraction, then the graph decides between a plain conversation, a clarification question, a RAG lookup (for example _which room is this person in?_), or a robot action.

{% include figure.liquid path="assets/img/robotdog/agent_graph.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="LangGraph agent graph of the RoboDog Guide" caption="The LangGraph state machine. HITL-1 is the first human-in-the-loop gate: the navigate tool pauses until the person approves the goal." %}

## Layer II: the ROS bridge

Approved tool calls become ROS-compatible commands. A `roslibpy` client talks over the **rosbridge WebSocket** to a custom `/agent/start_navigation` service. Navigation only starts after the human approves it, and structured execution feedback (success, or a reason for failure) flows back to the agent so it can explain what happened.

{% include figure.liquid path="assets/img/robotdog/ros_bridge.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="ROS bridge flow" caption="From an approved navigate() call to move_base and the Door Coordinator." %}

## Layer III: navigation and door perception

**Navigation.** LIO-SAM for LiDAR–IMU odometry and mapping, AMCL for global localisation, and move_base with NavfnROS and TEB for planning and obstacle avoidance.

**Door perception and geometry.** YOLO11m, fine-tuned on single doors, double doors and handles, finds the door in the image. Glass doors return almost no RealSense depth, so **Depth Anything V2** (metric ViT-S, TensorRT-accelerated and calibrated to the RealSense range) fills the gap. RGB-D back-projection plus RANSAC plane fitting then gives the door's 3D centre, width and normal.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/robotdog/single_door.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Single door detection" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/robotdog/double_door.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Double door detection" %}
  </div>
</div>
<div class="caption">Live detections from the robot's camera: a half-open single door with its handle, and a double glass door.</div>

{% include figure.liquid path="assets/img/robotdog/depth_compare.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="RGB, RealSense depth and Depth Anything depth of a glass door" caption="Why the learned depth model is needed: on a glass door the RealSense depth (middle) is full of holes, while Depth Anything V2 (right) gives a smooth estimate." %}

<div class="row">
  <div class="col-sm-7 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/robotdog/yolo_val.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="YOLO11m validation predictions" %}
  </div>
  <div class="col-sm-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/robotdog/pr_curve.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Precision-recall curve" %}
  </div>
</div>
<div class="caption">YOLO11m validation batch and precision–recall curve: mAP@0.5 of 0.901 over all classes (double door 0.995, handle 0.906, single door 0.721).</div>

## Safe door traversal

A **Door Coordinator** watches the upcoming TEB path and only reacts to doors that intersect the route. For each such door the robot:

1. computes and drives to a **pre-door pose**,
2. estimates the **door state** and whether it is physically passable,
3. goes through only if the door is open and wide enough. Otherwise it **asks a human for help** (HITL-2), with a VLM on top for scene understanding,
4. drives to the **post-door pose** and resumes the original goal.

The whole navigation and door traversal is one state machine.

{% include figure.liquid path="assets/img/robotdog/door_coordinator.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Door Coordinator state machine" caption="Part 1: goal dispatch, path monitoring and pre-door approach. Part 2: door detection, passability check, human approval and traversal." %}

## The principle behind it

> Uncertain language or visual perception should never become direct robot motion. It should become structured, explainable, and safety-gated action.

**Stack:** Python, ROS Noetic, LangGraph, LangChain, Ollama / Qwen, ChromaDB (RAG), Vosk, YOLO11, Depth Anything V2, TensorRT, Open3D, OpenCV, LIO-SAM, AMCL, move_base, TEB, Unitree Go1, Jetson AGX Orin, RealSense D455, RoboSense LiDAR.
