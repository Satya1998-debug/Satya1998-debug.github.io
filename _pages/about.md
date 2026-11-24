---
layout: about
title: about
permalink: /
subtitle: Software Engineer @ <a href='https://neura-robotics.com/'>NEURA Robotics</a> | M.Sc. Electrical Engineering @ <a href='https://www.uni-stuttgart.de/'>Universität Stuttgart</a>
description: Satyabrata Pradhan, software engineer at NEURA Robotics building applications for the 4NE1 humanoid. Robotics, computer vision, and agentic AI.

profile:
  image: prof_pic.jpg

hero:
  status: Software Engineer @ NEURA Robotics
  greeting: Hi, I'm
  lead: I build software for
  roles:
    - humanoid robots
    - quadrupeds that guide people
    - computer vision pipelines
    - agentic AI on real hardware
    - test rigs that run themselves
  tagline: Robotics software engineer in Stuttgart. I like the part where code meets hardware, from LLM-driven robot dogs to vision pipelines and CI-driven test benches.
  location: Stuttgart, Germany
  floating_chips:
    - icon: ti ti-robot
      text: 4NE1 humanoid
    - icon: ti ti-map-pin
      text: Stuttgart, DE

stats:
  - value: "5+"
    label: years building software
  - value: "4"
    label: companies — NEURA, Mercedes-Benz, Bosch, Huawei
  - value: "3"
    label: countries — India, Japan, Germany
  - value: "1.0"
    label: research thesis grade

currently:
  - icon: ti ti-robot
    label: Building
    text: Robot applications for the 4NE1 humanoid at NEURA Robotics
  - icon: ti ti-route
    label: Researching
    text: "Master thesis: RoboDog Guide, a voice-driven Unitree Go1 that guides people through buildings and doors"
  - icon: ti ti-school
    label: Studying
    text: M.Sc. Electrical Engineering, University of Stuttgart
  - icon: ti ti-heart-handshake
    label: Open to
    text: Conversations about robotics, embodied AI and computer vision

spotlight:
  kicker: Master's thesis
  title: RoboDog Guide
  subtitle: Human–robot teaming for indoor navigation
  text: >-
    A Unitree Go1 that you talk to. It answers questions about the building, asks before it moves, walks you to the right room and
    checks every door on the way before going through it. A local LLM agent sits on top of a classical ROS navigation stack, and all
    of it runs offline on a Jetson Orin.
  video: assets/video/robodog_demo.mp4
  poster: assets/img/robotdog/demo_poster.jpg
  url: /projects/robotdog-indoor-navigation/
  post: https://www.linkedin.com/posts/satyabrata-pradhan-00a6b916b_masterthesis-robotics-humanrobotinteraction-activity-7520618952218189824-ph3K
  metrics:
    - value: "0.901"
      label: door detection mAP@0.5
    - value: 5 Hz
      label: perception on the robot
    - value: 3
      label: layers, from speech to motors
  tech: [LangGraph, Qwen, RAG, ROS Noetic, YOLO11, Depth Anything V2, TensorRT]

skills:
  - group: Languages
    icon: ti ti-code
    items: [Python, C, C++, Julia, MATLAB]
  - group: Robotics
    icon: ti ti-robot
    items: [ROS, NVIDIA Jetson, Raspberry Pi, Linux, SLAM, Behaviour Trees]
  - group: AI & Vision
    icon: ti ti-brain
    items: [PyTorch, TensorFlow, OpenCV, YOLO, Open3D, Hugging Face, NumPy, scikit-learn]
  - group: Agentic AI
    icon: ti ti-sparkles
    items: [LangGraph, LangChain, Ollama, MCP, RAG, VLMs]
  - group: DevOps & Tooling
    icon: ti ti-git-branch
    items: [Git, Docker, Jenkins, GitHub Actions, Azure DevOps, Bazel, CMake]
  - group: Backend & Data
    icon: ti ti-stack-2
    items: [FastAPI, Flask, Django, Streamlit, Elasticsearch, Kafka, Redis]

testimonials:
  - name: Stefan Gutmann
    role: Supervised Satya as a working student
    quote: >-
      From day one, Satyabrata demonstrated a strong sense of initiative and a genuine enthusiasm for learning. He consistently
      delivered high-quality work and always delivered results on time. [...] Beyond his technical skills, Satyabrata brought a
      positive energy to the workplace.
  - name: NithyaKumar Radhakrishnan
    role: Former colleague
    quote: >-
      Satya is one of the admirable key team owners, responsible for core component delivery in the team. [...] Excellent technical
      and design solution knowledge in Python/ML, which makes Satya unique, with a positive role-model attitude.

moments:
  - img: assets/img/moments/neura_4ne1.jpg
    caption: With 4NE1 at NEURA Robotics
  - img: assets/img/moments/ciif_badge.jpg
    caption: Representing NEURA at CIIF 2026 in China
  - img: assets/img/moments/neura_booth.jpg
    caption: On the NEURA booth
  - img: assets/img/moments/robotdog_mount.jpg
    caption: The RoboDog Guide hardware on the Go1
  - img: assets/img/moments/thesis_talk.jpg
    caption: Giving a talk
  - img: assets/img/fa25/group_fa.jpg
    caption: Ferienakademie 2025 in Sarntal, Italy
  - img: assets/img/moments/neura_team.jpg
    caption: Team NEURA
  - img: assets/img/moments/uni_stuttgart.jpg
    caption: University of Stuttgart

experience_limit: 6
featured_projects: true

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes the contact section at the bottom of the page

announcements: # if we comment this then the new part will not be shown
  enabled: true # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts: # if we comment this then the posts part will be skipped
  enabled: true
  scrollable: false # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I'm **Satyabrata** (Satya). I build software that has to meet hardware: robots that move through real rooms, vision models that have to work on a real camera, and test rigs that run without someone standing next to them.

Since May 2026 I've been a software engineer at [NEURA Robotics](https://neura-robotics.com/), developing robot applications for the **4NE1 humanoid** in the Proof-of-Concept team. I've represented NEURA at CIIF 2026 in China and was part of the Munich NeuraGYM opening with 4NE1 Gen 4. Before that I worked as a Werkstudent at [Mercedes-Benz](https://group.mercedes-benz.com/) on object detection and pose refinement for the robotics team, and at [Bosch](https://www.bosch.de/) on sensor test automation and siren detection for automated driving.

Two years ago I didn't know much about robotics. That changed during my exchange semester in Tokyo in 2024, and I've been building robots ever since. My master's thesis at the [Institute of Industrial Automation and Software Engineering](https://www.ias.uni-stuttgart.de/) (M.Sc. [Electrical Engineering](https://www.f05.uni-stuttgart.de/ei/), [University of Stuttgart](https://www.uni-stuttgart.de/)) is [**RoboDog Guide**](/projects/robotdog-indoor-navigation/): a Unitree Go1 that guides people indoors by voice. A local LLM agent in LangGraph decides what to do, a ROS bridge turns approved decisions into navigation goals, and a door coordinator checks every door before the robot goes through it. The whole stack runs offline on an NVIDIA Jetson Orin.

I've also built a cardiac MRI analysis framework (research thesis, graded 1.0), flight software for a JAXA asteroid mission, and a knowledge graph for Huawei's Petal Search. Along the way I've lived and studied in India, Japan ([Science Tokyo](https://www.isct.ac.jp/en), on a Baden-Württemberg-Stipendium) and Germany.

Away from the lab I hike, sketch, and look for the next viewpoint.
