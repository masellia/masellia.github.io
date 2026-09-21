---
layout: conference
title: Participants | TEONGRAV Meeting 2027
description: Participant list for the TEONGRAV Meeting 2027 at GSSI.
permalink: /meetings/teongrav-2027/participants/
conference: teongrav-2027
conference_page: participants
---

{% assign conference = site.data.conferences[page.conference] %}

<header class="conference-page-intro">
  <p class="conference-kicker">{{ conference.venue_short }} / {{ conference.year }}</p>
  <h1>Participants</h1>
  <p>Only names and affiliations approved for public display will appear on this page.</p>
</header>

<div class="conference-page-body">
  {% if conference.participants and conference.participants.size > 0 %}
    <ul class="conference-participant-list">
      {% for participant in conference.participants %}
        <li>
          <strong>{% if participant.url %}<a href="{{ participant.url }}" target="_blank" rel="noopener noreferrer">{{ participant.name }}</a>{% else %}{{ participant.name }}{% endif %}</strong>
          <span>{{ participant.affiliation }}</span>
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <section class="conference-empty-state">
      <div>
        <h2>List to be announced</h2>
        <p>The participant list will be published closer to the meeting.</p>
      </div>
    </section>
  {% endif %}
</div>
