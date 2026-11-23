---
layout: page
title: Pan-tilt rig for sensor tests
description: Werkstudent work at Bosch. A 3-axis pan-tilt arm that aims sensors under test, driven from a Raspberry Pi and wired into Jenkins.
importance: 1
category: industry
---

Software developer (Werkstudent) at Robert Bosch GmbH, Ludwigsburg (since September 2024).

Linux driver tests for sensors need the sensor pointed in a known direction, over and over, without someone turning a bracket by hand. I built a 3-axis pan-tilt arm for that. Real-time control runs on a Raspberry Pi in Python and C, and the rig is called from the existing Jenkins pipelines so a test job can move the sensor the same way it flashes a board.

The Pi images themselves are customized with SDM, an open-source SD card manager, so every bench machine boots the same stack.

Skills: Python, C, Raspberry Pi, Linux, Jenkins, CMake, Git.
