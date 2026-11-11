---
layout: conference
title: Local Organizing Committee | LISA Consortium Meeting 2027
description: Local Organizing Committee for the LISA Consortium Meeting 2027 at GSSI.
permalink: /meetings/lisa-consortium-2027/information/local-organizing-committee/
conference: lisa-consortium-2027
conference_page: local-organizing-committee
conference_section: information
---

{% assign conference = site.data.conferences[page.conference] %}

<header class="conference-page-intro">
  <p class="conference-section-kicker">The team at GSSI</p>
  <h1>Local Organizing Committee</h1>
  <p>The local team coordinating the LISA Consortium Meeting 2027 in L&rsquo;Aquila.</p>
</header>

<div class="conference-page-body">
  <div class="conference-profile-grid">
    {% for member in conference.local_committee %}
      <article class="conference-profile-card">
        {% if member.image %}
          <img src="{{ member.image | relative_url }}" alt="{{ member.image_alt | default: member.name | escape }}" loading="lazy">
        {% else %}
          <div class="conference-profile-placeholder" role="img" aria-label="Portrait of {{ member.name }} coming soon">
            <span>{{ member.initials }}</span>
          </div>
        {% endif %}
        <h2>{{ member.name }}</h2>
      </article>
    {% endfor %}
  </div>
</div>
