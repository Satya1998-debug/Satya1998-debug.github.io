---
layout: page
title: MPPT under partial shading
description: Bachelor's thesis and IEEE STPEC 2020 paper. A curve-scanning tracker that finds the global maximum on a multi-peak P–V curve.
importance: 3
category: research
related_publications: true
img: assets/img/publication_preview/ieee_algo.png
featured: true
featured_rank: 6
icon: ti ti-solar-panel
period: 2019 – 2020
tech: [MATLAB, Simulink, C, Power Electronics]
---

Bachelor's thesis in Electrical Engineering at the National Institute of Technology, Silchar (July 2019 – May 2020), and the paper that came out of it.

Under partial shading, a photovoltaic array's power–voltage curve has several peaks. Perturb-and-observe and incremental conductance sit on a local peak and stay there. The tracker in this work sweeps the voltage range by stepping the duty cycle of the DC–DC converter, then settles on the global maximum power point.

The algorithm was simulated in MATLAB/Simulink and checked on hardware under changing irradiance. Reported efficiency in the paper is 96.49% under partial shading and 99.34% under uniform irradiance, with no extra sensing circuit.

{% cite 9297794 %}

Skills: MATLAB, Simulink, C, MPPT, solar PV.
