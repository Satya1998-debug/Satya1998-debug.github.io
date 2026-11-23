---
layout: page
title: Cardiac MRI features
description: Research thesis, grade 1.0. Extract and visualize cardiac features from MRI, evaluated on NAKO and UK Biobank.
importance: 2
category: research
---

Research thesis with University Hospital Tübingen and ISS, University of Stuttgart (November 2024 – May 2025). Grade 1.0.

The framework pulls clinical features out of cardiac MRI and shows them in one place. It was evaluated on the NAKO and UK Biobank datasets.

The pipeline combines models that already do one job well:

- U-Net for segmentation
- MOPNet for motion estimation
- DeepStrain's Green–Lagrange strain module for the strain tensor
- PyRadiomics for radiomics

From those, the tool reports ventricular volumes and diameters, stroke volume, ejection fraction, and myocardial strain, and draws an AHA bullseye. A Streamlit interface is the front end for looking at a case and comparing features.

Skills: Python, PyTorch, TensorFlow, PyRadiomics, Streamlit, Plotly, Pandas, NumPy.
