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
    <p class="conference-eyebrow">{{ conference.date_display }} / {{ conference.city }}</p>
    <h1>TEONGRAV Meeting <span>2027</span></h1>
    <p class="conference-hero-location">
      {{ conference.venue }}<br>
      {{ conference.city }}
    </p>
  </div>
  <div class="conference-orbit" aria-hidden="true"></div>
</section>

<section class="conference-section">
  <div class="conference-intro-grid">
    <div>
      <p class="conference-kicker">About the meeting</p>
      <p class="conference-lede">{{ conference.description }}</p>
    </div>
    <dl class="conference-facts">
      <div>
        <dt>Dates</dt>
        <dd>{{ conference.date_display }}</dd>
      </div>
      <div>
        <dt>Venue</dt>
        <dd><a href="{{ conference.venue_url }}" target="_blank" rel="noopener noreferrer">{{ conference.venue }}</a></dd>
      </div>
      <div>
        <dt>Location</dt>
        <dd>{{ conference.city }}</dd>
      </div>
      <div>
        <dt>Registration</dt>
        <dd>{% if conference.registration_url %}<a href="{{ conference.registration_url }}">Register</a>{% else %}Details to be announced{% endif %}</dd>
      </div>
    </dl>
  </div>
</section>

<section class="conference-section">
  <p class="conference-kicker">Organization</p>
  <h2>Committees</h2>

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

<section class="conference-section">
  <p class="conference-kicker">Plan your visit</p>
  <h2>Practical information</h2>

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
      <span>03 / Contact</span>
      <h3>Questions</h3>
      <p>{% if conference.contact %}{{ conference.contact }}{% else %}A conference contact will be published shortly.{% endif %}</p>
    </article>
  </div>
</section>
