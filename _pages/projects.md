---
layout: page
title: projects
permalink: /projects/
description: Research, industry and hackathon work in robotics, computer vision, medical imaging and automation.
nav: true
nav_order: 1
display_categories: [research, industry, side-projects]
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if sorted_projects.size > 0 %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category | replace: "-", " " }}</h2>
  </a>
  <div class="project-grid">
    {% for project in sorted_projects %}
      {% include project_card.liquid project=project %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}
{% else %}
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="project-grid">
    {% for project in sorted_projects %}
      {% include project_card.liquid project=project %}
    {% endfor %}
  </div>
{% endif %}
</div>
