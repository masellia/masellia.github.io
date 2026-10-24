---
layout: section
title: The QB Room
description: Tactical and statistical analysis of Green Bay Packers games.
permalink: /me/qb-room/
---

<section class="nfl-landing" aria-labelledby="nfl-masthead-title">
  <header class="nfl-masthead">
    <div class="nfl-masthead-line"></div>
    <div class="nfl-masthead-copy">
      <p>{{ site.data.nfl.kicker }}</p>
      <h1 id="nfl-masthead-title">THE QB ROOM</h1>
      <div>{{ site.data.nfl.tagline }}</div>
    </div>
  </header>

  {% assign nfl_seasons = site.nfl | group_by: 'season' | sort: 'name' | reverse %}

  {% if nfl_seasons.size > 0 %}
    <div class="nfl-archive">
      {% for nfl_season in nfl_seasons %}
        {% assign nfl_season_posts = nfl_season.items | sort: 'week_order' %}
        <details class="nfl-season"{% if forloop.first %} open{% endif %}>
          <summary class="nfl-season-header">
            <span>{{ site.data.nfl.archive_label }}</span>
            <h2 id="nfl-season-{{ nfl_season.name }}">{{ nfl_season.name }} Season</h2>
          </summary>

          <div class="nfl-season-list">
            {% for nfl_post in nfl_season_posts %}
              {% include nfl-archive-entry.html post=nfl_post %}
            {% endfor %}
          </div>
        </details>
      {% endfor %}
    </div>
  {% else %}
    <p class="nfl-empty">The first game analysis will appear here.</p>
  {% endif %}

  <footer class="nfl-landing-footer">
    <p>{{ site.data.nfl.disclaimer }}</p>
  </footer>
</section>
