---
layout: page
title: Siren detection in the audio loop
description: Werkstudent work at Bosch. An Azure pipeline around a ROS siren classifier, plus the Docker and Bazel move that kept the build reproducible.
importance: 2
category: industry
icon: ti ti-volume
period: 2023 – 2024
tech: [Python, ROS, Azure DevOps, Docker, Bazel]
---

Software developer (Werkstudent) at Robert Bosch GmbH, Stuttgart (October 2023 – March 2024).

Automated driving needs to notice a siren in the audio stream, not only in a notebook. I built the Azure pipeline that runs siren detection inside the audio-data loop, and fixed ROS and Python failures in the classifier and trainer so that loop could actually finish.

The surrounding move was a Bazel migration of the existing architecture. I tightened the Docker setup so the same image built under Bazel as it had under the old system.

Skills: Python, ROS, Docker, Azure DevOps, Bazel, Linux.
