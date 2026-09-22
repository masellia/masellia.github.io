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
</header>

<div class="conference-page-body">
  {% for day in conference.timetable %}
    <section class="conference-day" aria-labelledby="conference-day-{{ forloop.index }}">
      <header class="conference-day-label">
        <span>{{ day.day }}</span>
        <h2 id="conference-day-{{ forloop.index }}">{{ day.date }}</h2>
      </header>

      <div class="conference-blocks">
        {% for block in day.blocks %}
          <details class="conference-block"{% if forloop.first and forloop.parentloop.first %} open{% endif %}>
            <summary>
              <span class="conference-block-label">{{ block.label }}</span>
              <span class="conference-block-meta">{{ block.time_range }} &middot; {{ block.slots.size }} items</span>
              <span class="conference-block-chevron" aria-hidden="true"></span>
            </summary>
            <div class="conference-slots">
              {% for slot in block.slots %}
                {% if slot.type == 'break' %}
                  <div class="conference-slot conference-slot-break">
                    <span class="conference-slot-time">{{ slot.time }}</span>
                    <div>
                      <h3>{{ slot.title }}</h3>
                    </div>
                  </div>
                {% else %}
                  <article class="conference-slot">
                    <span class="conference-slot-time">{{ slot.time }}</span>
                    <div>
                      <h3>{{ slot.title }}</h3>
                      <p>{{ slot.speaker }}{% if slot.affiliation %} &middot; {{ slot.affiliation }}{% endif %}</p>
                    </div>
                  </article>
                {% endif %}
              {% endfor %}
            </div>
          </details>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>
