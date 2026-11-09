---
layout: conference
title: LISA Consortium Meeting 2027
description: LISA Consortium Meeting 2027 at the Gran Sasso Science Institute, 5-8 July 2027.
permalink: /meetings/lisa-consortium-2027/
conference: lisa-consortium-2027
conference_page: home
---

{% assign conference = site.data.conferences[page.conference] %}

<section class="conference-hero">
  {% if conference.hero_image %}
    <img class="conference-hero-art" src="{{ conference.hero_image | relative_url }}" alt="" aria-hidden="true">
  {% endif %}
  <div class="conference-hero-inner">
    <p class="conference-eyebrow">{{ conference.date_display }}</p>
    <h1>LISA Consortium Meeting <span>2027</span></h1>
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
    </aside>
  </div>
</section>

<section class="conference-section conference-practical">
  <h2>What to know</h2>

  <div class="conference-placeholder-grid conference-placeholder-grid-three">
    <article class="conference-placeholder-card">
      <span>01 / Travel</span>
      <h3>Getting to GSSI</h3>
      <p><a class="conference-address" href="https://www.gssi.it/images/GSSI_how_to_get.pdf" target="_blank" rel="noopener noreferrer">How to reach L&rsquo;Aquila and the GSSI</a></p>
    </article>
    <article class="conference-placeholder-card">
      <span>02 / Registration</span>
      <h3>Expression of Interest</h3>
      <p>If you are willing or expected to participate in this meeting, please fill out the form at this <a class="conference-address" href="https://docs.google.com/forms/d/1eXjVuQi2xarfBENJAw-BzBsRY-mcRBRvmoxS897kKiQ/edit" target="_blank" rel="noopener noreferrer">link</a>.</p>
    </article>
    <article class="conference-placeholder-card">
      <span>03 / Contact</span>
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

{% comment %}
<section class="conference-section conference-members">
  <h2>For LISA members</h2>
  <p>The detailed scientific programme, talk abstracts and slides are reserved to LISA members and will be published on the meeting Indico page. The link will appear here once available.</p>
</section>
{% endcomment %}

<section class="conference-section conference-committee-section">
  <div class="conference-committees-with-poster">
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
    <aside class="conference-poster-thumb" aria-label="Event poster">
      {% if conference.poster_thumbnail %}
        <a class="conference-poster-thumb-frame has-image" href="{{ conference.poster_full | default: conference.poster_thumbnail | relative_url }}" target="_blank" rel="noopener noreferrer" title="Open full-size poster">
          <img src="{{ conference.poster_thumbnail | relative_url }}" alt="LISA Consortium Meeting 2027 poster" loading="lazy">
        </a>
      {% else %}
        <div class="conference-poster-thumb-frame" role="img" aria-label="Event poster (coming soon)">
          <span>Poster coming soon.</span>
        </div>
      {% endif %}
      <span class="conference-poster-thumb-caption">Poster</span>
    </aside>
  </div>
</section>

<section class="conference-section conference-group-section">
  <h2>Group photo</h2>
  <div class="conference-group-frame" role="img" aria-label="Group photo (coming soon)">
    <!-- Replace the paragraph below with: <img src="{{ '/assets/img/meetings/lisa-consortium-2027-group.webp' | relative_url }}" alt="LISA Consortium Meeting 2027 group photo" loading="lazy"> -->
    <p>Group photo coming soon.</p>
  </div>
</section>
