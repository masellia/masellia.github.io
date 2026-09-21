---
layout: conference
title: Timetable | TEONGRAV Meeting 2027
description: Timetable for the TEONGRAV Meeting 2027 at GSSI.
permalink: /meetings/teongrav-2027/timetable/
conference: teongrav-2027
conference_page: timetable
---

{% assign conference = site.data.conferences[page.conference] %}

<header class="conference-page-intro">
  <h1>Timetable</h1>
  <p>The detailed scientific programme, speakers, and session chairs will be published here.</p>
</header>

<div class="conference-page-body">
  {% for day in conference.timetable %}
    <section class="conference-day" aria-labelledby="conference-day-{{ forloop.index }}">
      <header class="conference-day-label">
        <span>{{ day.day }}</span>
        <h2 id="conference-day-{{ forloop.index }}">{{ day.date }}</h2>
      </header>

      <div class="conference-sessions">
        {% for session in day.sessions %}
          <article class="conference-session">
            <span class="conference-session-time">{{ session.time }}</span>
            <div>
              <h3>{{ session.title }}</h3>
              {% if session.details %}<p>{{ session.details }}</p>{% endif %}
            </div>
          </article>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>
