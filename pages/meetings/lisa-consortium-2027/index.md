---
layout: conference
title: LISA Consortium Meeting 2027
description: LISA Consortium Meeting 2027 at the Gran Sasso Science Institute, 5-8 July 2027.
permalink: /meetings/lisa-consortium-2027/
conference: lisa-consortium-2027
conference_page: home
venue_map: true
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

<section class="conference-section conference-venues" id="meeting-venues" aria-labelledby="meeting-venues-title">
  <div class="conference-venues-intro">
    <div>
      <p class="conference-section-kicker">Three buildings / one campus</p>
      <h2 id="meeting-venues-title">Meeting venues</h2>
    </div>
    <p>Sessions will take place in three GSSI buildings around the Rectorate. Select a marker for room information, or use the building directory below the map.</p>
  </div>

  <div class="conference-map-frame">
    <div
      class="conference-map"
      id="conference-venue-map"
      role="region"
      aria-label="Interactive map of LISA Consortium Meeting buildings"
      data-map-zoom="{{ conference.venue_map.zoom | default: 17 }}">
      <p class="conference-map-status">Interactive venue map loading&hellip;</p>
    </div>
    <noscript><p class="conference-map-noscript">The interactive map requires JavaScript. All venue information is available in the building directory below.</p></noscript>
  </div>

  <script type="application/json" id="conference-venue-data">{{ conference.venue_map.venues | jsonify }}</script>

  <div class="conference-venue-directory" aria-label="Meeting building directory">
    {% for venue in conference.venue_map.venues %}
      <details class="conference-venue-card" id="venue-{{ venue.id }}">
        <summary>
          <span class="conference-venue-number" aria-hidden="true">{{ venue.marker_label }}</span>
          <span>
            <strong>{{ venue.name }}</strong>
            <small>{{ venue.address }}</small>
          </span>
          <span class="conference-venue-chevron" aria-hidden="true"></span>
        </summary>
        <div class="conference-venue-card-body">
          <p class="conference-venue-address">{{ venue.address }}<br>{{ venue.postal }}</p>
          <div class="conference-room-list">
            {% for room in venue.rooms %}
              <article class="conference-room-card">
                {% if room.image %}
                  <img src="{{ room.image | relative_url }}" alt="{{ room.image_alt | default: room.name | escape }}" loading="lazy">
                {% else %}
                  <div class="conference-room-placeholder" role="img" aria-label="Room photo coming soon">
                    <span>{{ room.caption | default: 'Photo coming soon' }}</span>
                  </div>
                {% endif %}
                <div>
                  <h3>{{ room.name }}</h3>
                  {% if room.floor %}<p>{{ room.floor }}</p>{% endif %}
                  {% if room.capacity %}<p>Capacity: {{ room.capacity }}</p>{% endif %}
                </div>
              </article>
            {% endfor %}
          </div>
          <div class="conference-venue-actions">
            <button type="button" class="conference-show-on-map" data-venue-id="{{ venue.id }}" hidden>Show on map</button>
            <a href="{{ venue.directions_url }}" target="_blank" rel="noopener noreferrer">Open directions</a>
          </div>
        </div>
      </details>
    {% endfor %}
  </div>
</section>

<section class="conference-section conference-practical">
  <h2>What to know</h2>

  <div class="conference-placeholder-grid">
    <article class="conference-placeholder-card">
      <span>01 / Venue</span>
      <h3>Meeting buildings</h3>
      <p><a class="conference-address" href="{{ conference.venue_map_url }}">{{ conference.venue_room }}<br>{{ conference.venue_address }}<br>{{ conference.venue_postal }}</a></p>
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

<section class="conference-section conference-members">
  <h2>For LISA members</h2>
  <p>The detailed scientific programme, talk abstracts and slides are reserved to LISA members and will be published on the meeting Indico page. The link will appear here once available.</p>
</section>

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
