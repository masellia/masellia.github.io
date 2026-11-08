---
layout: conference
title: Code of Conduct | LISA Consortium Meeting 2027
description: Code of Conduct for the LISA Consortium Meeting 2027 in L'Aquila.
permalink: /meetings/lisa-consortium-2027/code-of-conduct/
conference: lisa-consortium-2027
conference_page: code-of-conduct
---

{% assign conference = site.data.conferences[page.conference] %}

<section class="conference-page-intro">
  <p class="conference-section-kicker">Respect / safety / inclusion</p>
  <h1>Code of Conduct</h1>
  <p>All participants should feel welcome and safe. Harassment and discrimination of any kind are taken seriously, and reports are handled by the organizing committee.</p>
</section>

<section class="conference-page-body conference-prose" aria-label="Code of Conduct">
  <p>Everyone attending the LISA Consortium Meeting 2027 is expected to treat others with respect and without prejudice. This applies in person, online, and at all meeting-related events.</p>

  <h2>Expected behaviour</h2>
  <p>Unacceptable behaviour includes, but is not limited to:</p>
  <ul>
    <li>Harassment</li>
    <li>Bullying</li>
    <li>Discrimination</li>
    <li>Retaliation</li>
  </ul>
  <p>Discrimination on the basis of any of the following is not acceptable:</p>
  <ul>
    <li>Race</li>
    <li>Ethnicity</li>
    <li>Biological sex</li>
    <li>Gender identity</li>
    <li>Sexual orientation</li>
    <li>Age</li>
    <li>Disability</li>
    <li>Religion</li>
    <li>Socio-economic status</li>
    <li>Civil status</li>
    <li>Family status</li>
  </ul>

  <h2>Definitions</h2>
  <p>Following the standards of the LISA Consortium, this Code of Conduct adopts the definitions of sexual harassment and other harassment set out in the <a href="{{ conference.code_of_conduct.policy_url }}" target="_blank" rel="noopener noreferrer">Anti-Harassment Policy for Meetings and Activities of the American Astronomical Society and Divisions</a>.</p>

  <h2>Sexual harassment</h2>
  <p>Sexual harassment refers to unwelcome sexual advances, requests for sexual favours, and other verbal or physical conduct of a sexual nature. Behaviour and language that are welcome to one person may be unwelcome or offensive to another, so individuals must take care that their words and actions communicate respect for others. This is especially important for those in positions of authority, since people with lower rank or status may be reluctant to object or express discomfort.</p>
  <p>Sexual harassment does not refer to occasional compliments of a socially acceptable nature. It refers to behaviour that is not welcome, is personally offensive, undermines morale, and therefore interferes with work effectiveness. Examples of behaviour that, when unwelcome, may constitute sexual harassment include: sexual flirtation, advances or propositions; verbal comments or physical actions of a sexual nature; sexually degrading words used to describe a person; displays of sexually suggestive objects or pictures; sexually explicit jokes; and unnecessary touching.</p>

  <h2>Other harassment</h2>
  <p>Harassment and bullying on the basis of any other protected characteristic are also strictly prohibited. This includes epithets, slurs or negative stereotyping; threatening, intimidating or hostile acts (in person or by email); denigrating jokes; and the display or circulation of written or graphic material that denigrates or shows hostility or aversion toward an individual or group. Even where an individual victim cannot be identified, lewd, offensive or inappropriate behaviour may be construed as harassment and cannot be tolerated in a professional, collegial environment.</p>

  <h2>Discrimination</h2>
  <p>Discrimination refers to bias or prejudice that results in the denial of opportunity or unfair treatment in selection, promotion or transfer. It is commonly practised on grounds such as age, disability, ethnicity, origin, political belief, race, religion or sex &mdash; factors that are irrelevant to a person&rsquo;s competence or suitability.</p>

  <h2>Retaliation</h2>
  <p>Retaliation refers to taking action to negatively affect another person because they reported an act of discrimination or harassment.</p>

  <h2>Reporting</h2>
  <p>If you believe you have been subject to, or have witnessed, behaviour that violates this Code of Conduct, please report it immediately to a member of the local organizing committee.</p>
  <div class="conference-conduct-contact">
    <strong>Local organizing committee</strong>
    <ul>
      {% for contact in conference.code_of_conduct.contacts %}
        <li><a href="mailto:{{ contact.email }}">{{ contact.name }}</a></li>
      {% endfor %}
    </ul>
  </div>
</section>
