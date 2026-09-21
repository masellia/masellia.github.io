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
  <div class="conference-about-grid">
    <div class="conference-about-text">
      {% for paragraph in conference.about %}
        <p>{{ paragraph }}</p>
      {% endfor %}
    </div>
    <aside class="conference-about-logos" aria-label="Host institutions">
      <a href="{{ conference.venue_url }}" target="_blank" rel="noopener noreferrer">
        <img src="{{ '/assets/pdf/meetings/gssi.png' | relative_url }}" alt="Gran Sasso Science Institute" loading="lazy">
      </a>
      <a href="https://www.infn.it/" target="_blank" rel="noopener noreferrer">
        <img src="{{ '/assets/pdf/meetings/infn.png' | relative_url }}" alt="Istituto Nazionale di Fisica Nucleare" loading="lazy">
      </a>
    </aside>
  </div>
</section>

<section class="conference-section conference-practical">
  <h2>What to know</h2>

  <div class="conference-placeholder-grid">
    <article class="conference-placeholder-card">
      <span>01 / Venue</span>
      <h3>Meeting rooms</h3>
      <p><a class="conference-address" href="https://www.google.com/maps/search/?api=1&amp;query=Via+Michele+Jacobucci+2%2C+67100+L%27Aquila+AQ%2C+Italy" target="_blank" rel="noopener noreferrer">Auditorium (blue room), Rectorate<br>Via Michele Jacobucci, 2<br>67100 L&rsquo;Aquila (AQ), ITALY</a></p>
    </article>
    <article class="conference-placeholder-card">
      <span>02 / Travel</span>
      <h3>Getting to GSSI</h3>
      <p><a class="conference-address" href="https://www.gssi.it/images/GSSI_how_to_get.pdf" target="_blank" rel="noopener noreferrer">How to reach L&rsquo;Aquila and the GSSI</a></p>
    </article>
    <article class="conference-placeholder-card">
      <span>03 / Registration</span>
      <h3>How to register</h3>
      <p>{% if conference.registration_url %}<a class="conference-address" href="{{ conference.registration_url }}" target="_blank" rel="noopener noreferrer">Registration is open &mdash; register here.</a>{% else %}Registration details will be announced shortly.{% endif %}</p>
    </article>
    <article class="conference-placeholder-card">
      <span>04 / Contact</span>
      <h3>Questions</h3>
      {% if conference.contacts and conference.contacts.size > 0 %}
        <div class="conference-contact-list">
          {% for contact in conference.contacts %}
            <a href="mailto:{{ contact }}">{{ contact }}</a>
          {% endfor %}
        </div>
      {% else %}
        <p>A conference contact will be published shortly.</p>
      {% endif %}
    </article>
  </div>
</section>

<section class="conference-section conference-poster-section">
  <h2>Poster</h2>
  <div class="conference-poster-frame" role="img" aria-label="Event poster (coming soon)">
    <!-- Replace the paragraph below with: <img src="{{ '/assets/img/meetings/teongrav-2027-poster.webp' | relative_url }}" alt="TEONGRAV Meeting 2027 poster" loading="lazy"> -->
    <p>Event poster coming soon.</p>
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

<section class="conference-section conference-group-section">
  <h2>Group photo</h2>
  <div class="conference-group-frame" role="img" aria-label="Group photo (coming soon)">
    <!-- Replace the paragraph below with: <img src="{{ '/assets/img/meetings/teongrav-2027-group.webp' | relative_url }}" alt="TEONGRAV Meeting 2027 group photo" loading="lazy"> -->
    <p>Group photo coming soon.</p>
  </div>
</section>
