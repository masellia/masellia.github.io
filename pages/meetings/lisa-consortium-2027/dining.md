---
layout: conference
title: Dining | LISA Consortium Meeting 2027
description: Places to eat during the LISA Consortium Meeting 2027 in L'Aquila.
permalink: /meetings/lisa-consortium-2027/dining/
conference: lisa-consortium-2027
conference_page: dining
conference_map: true
map_script: conference-dining-map.js
---

{% assign conference = site.data.conferences[page.conference] %}

<section class="conference-page-intro">
  <p class="conference-section-kicker">Food around the city</p>
  <h1>Dining in L&rsquo;Aquila</h1>
  <p>Places to eat during the meeting. Select a marker for the address, or browse the list below the map.</p>
</section>

<section class="conference-page-body conference-dining-page" aria-label="Dining map and list">
  {% include conference-dining-map.html %}
</section>
