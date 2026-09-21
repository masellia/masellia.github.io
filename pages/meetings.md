---
layout: section
title: Meetings
permalink: /meetings/
---

<div class="page-header">
  <div class="page-header-line"></div>
  <div class="page-header-title">MEETINGS</div>
</div>

<section class="meetings-list-section">
  <div class="meetings-list">
    {% for meeting in site.data.meetings %}
      <article class="meeting-entry{% if meeting.poster %} has-poster{% endif %}">
        {% if meeting.poster %}
          <div class="meeting-poster">
            <iframe
              src="{{ meeting.poster | relative_url }}#page=1&amp;toolbar=0&amp;navpanes=0"
              title="Poster for {{ meeting.title }}"
              loading="lazy">
            </iframe>
            <a href="{{ meeting.poster | relative_url }}" target="_blank" rel="noopener">View poster</a>
          </div>
        {% endif %}

        <div class="meeting-content">
          <time>{{ meeting.date }}</time>
          <h2>{{ meeting.title }}</h2>
          <p>{{ meeting.details }}</p>
          <span>{{ meeting.role }}</span>
          {% if meeting.website %}
            <a class="meeting-website" href="{{ meeting.website | relative_url }}" target="_blank" rel="noopener noreferrer">Conference website <span aria-hidden="true">&rarr;</span></a>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>
