---
layout: page
permalink: /repositories/
title: repositories
description: Code from my thesis, hackathons, research and the courses I taught myself, all on GitHub.
nav: true
nav_order: 5
---

{% for group in site.data.repositories.repo_groups %}

<h2 class="repo-group-title"><i class="{{ group.icon }}"></i> {{ group.title }}</h2>
<div class="repo-grid">
  {% for repo in group.repos %}
    {% assign owner = repo.owner | default: site.data.repositories.github_users.first %}
    <article class="repo-card">
      <a class="project-card-link" href="https://github.com/{{ owner }}/{{ repo.name }}" target="_blank" rel="noopener noreferrer" aria-label="{{ repo.name }} on GitHub"></a>
      <div class="repo-card-head">
        <i class="ti {% if repo.fork %}ti-git-fork{% else %}ti-brand-github{% endif %}"></i>
        <h3>{{ repo.name }}</h3>
        {% if repo.fork %}<span class="repo-badge">fork</span>{% endif %}
      </div>
      <p>{{ repo.description }}</p>
      <div class="chip-row">
        {% for topic in repo.topics %}
          <span class="chip">{{ topic }}</span>
        {% endfor %}
      </div>
      <div class="repo-card-foot">
        {% if repo.language %}
          <span class="repo-lang"><span class="repo-lang-dot" style="background: {{ site.data.repositories.language_colors[repo.language] | default: '#888' }}"></span>{{ repo.language }}</span>
        {% endif %}
        {% if repo.project %}
          <a class="repo-project-link" href="{{ repo.project | relative_url }}">Project page <i class="ti ti-arrow-right"></i></a>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</div>
{% endfor %}

{% if site.data.repositories.github_users %}

<h2 class="repo-group-title"><i class="ti ti-chart-dots"></i> GitHub stats</h2>

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}

  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>
{% endfor %}
{% endif %}
{% endif %}
