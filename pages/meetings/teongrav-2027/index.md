---
layout: conference
title: TEONGRAV Meeting 2027
description: TEONGRAV Meeting 2027 at the Gran Sasso Science Institute, 9-11 February 2027.
permalink: /meetings/teongrav-2027/
conference: teongrav-2027
conference_page: home
---

{% assign conference = site.data.conferences[page.conference] %}

<section class="conference-hero">
  <div class="conference-hero-inner">
    <p class="conference-eyebrow">{{ conference.date_display }}</p>
    <h1>TEONGRAV Meeting <span>2027</span></h1>
    <p class="conference-hero-location">{{ conference.venue_short }}, {{ conference.city }}</p>
  </div>
</section>

<section class="conference-section conference-about">
  <h2>About the meeting</h2>
  <p class="conference-lede">{{ conference.description }}</p>
</section>

<section class="conference-section">
  <h2>What to know</h2>

  <div class="conference-placeholder-grid">
    <article class="conference-placeholder-card">
      <span>01 / Venue</span>
      <h3>Meeting rooms</h3>
      <p>Room and access information will be announced.</p>
    </article>
    <article class="conference-placeholder-card">
      <span>02 / Travel</span>
      <h3>Getting to GSSI</h3>
      <p>Travel and local transport information will be announced.</p>
    </article>
    <article class="conference-placeholder-card">
      <span>03 / Registration</span>
      <h3>How to register</h3>
      <p>{% if conference.registration_url %}<a href="{{ conference.registration_url }}">Registration is open.</a>{% else %}Registration details will be announced shortly.{% endif %}</p>
    </article>
    <article class="conference-placeholder-card">
      <span>04 / Contact</span>
      <h3>Questions</h3>
      <p>{% if conference.contact %}{{ conference.contact }}{% else %}A conference contact will be published shortly.{% endif %}</p>
    </article>
  </div>
</section>

<section class="conference-section conference-committee-section">
  <div class="conference-committees">
    <section class="conference-committee" aria-labelledby="scientific-committee-title">
      <h3 id="scientific-committee-title">Scientific Organizing Committee</h3>
      <ul>
        {% for member in conference.scientific_committee %}
          <li>{{ member }}</li>
        {% endfor %}
      </ul>
    </section>

    <section class="conference-committee" aria-labelledby="local-committee-title">
      <h3 id="local-committee-title">Local Organizing Committee</h3>
      <ul>
        {% for member in conference.local_committee %}
          <li>{{ member }}</li>
        {% endfor %}
      </ul>
    </section>
  </div>
</section>
