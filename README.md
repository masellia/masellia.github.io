# Andrea Maselli Jekyll Website Prototype

A clean GitHub Pages / Jekyll rebuild of the Wix personal website.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## GitHub Pages deployment

1. Use the `masellia.github.io` repository so the site is published at `https://masellia.github.io/`.
2. Upload these files.
3. In GitHub, enable Pages from the repository settings.
4. Review the site metadata and profile links in `_config.yml`.
5. Add real images in `assets/img/`, especially `hero.jpg`.

## Main editable files

- `_config.yml`: site metadata and external profiles
- `_data/navigation.yml`: navigation menu
- `_data/news.yml`: news archive entries
- `index.md`: homepage text
- `pages/*.md`: internal pages
- `assets/css/main.css`: visual design

## Maintenance conventions

- Treat the root-level `cv.pdf` as the authoritative source for talks, meetings, and publications. When updating those sections, extract the latest information from that file and update the corresponding structured website data.
- Preserve Andrea's manual typography, title and subtitle sizing, vertical-bar lengths, and spacing adjustments. Do not normalize or overwrite those visual choices unless explicitly requested.

## The QB Room

Game data is stored by season under `_nfl/`. Collection documents are not published as standalone pages; each one becomes an interactive entry at `/me/qb-room/` with inline Stats, Tactical Analysis, and Key Moments panels.

Use filenames such as `_nfl/2026/week-01-opponent.md` and this front matter:

```yaml
---
title: "Week 1: Packers at Opponent"
description: "Metadata description; not displayed in the archive."
date: 2026-09-12
game_date: 2026-09-13
season: 2026
week_label: "Week 1"
week_order: 1
phase: regular
opponent: Opponent Name
opponent_abbr: OPP
home_away: away
team_logo: /assets/img/nfl/gb.png
opponent_logo: /assets/img/nfl/opp.png
team_score:
opponent_score:
status: Scheduled
kickoff: "3:25 PM CDT"
stadium: Stadium Name
city: City, State
stats_ready: false
stats_game_label: Game
stats_season_label: 2026 Season
stats_sources:
  - label: nflverse play-by-play
    url: https://github.com/nflverse/nflverse-data/releases/tag/pbp
stats:
  - id: offensive_epa_play
    group: Efficiency
    metric: Offensive EPA/play
    game:
    opponent:
    season:
tactical:
  game_script:
  offense:
  defense:
key_moments_intro:
key_moments: []
---
```

Keep `stats_ready: false` before the game. Afterward, set it to `true`, fill each metric's `game`, `opponent`, and `season` values, add `stats_note` with the methodology, and add labeled `stats_sources` links. The game-only `opponent` value appears in brackets under a column labeled with `opponent_abbr`; season values remain Packers-only. Preserve metric IDs so values can be used consistently in future quantitative work.

Use valid run and pass plays for EPA and success rates, and report defensive values as opponent values allowed. Define explosive plays as passes gaining at least 20 yards or runs gaining at least 10. Calculate QB-hit rates per dropback and sack rates per pass attempt including sacks. Third-down and red-zone rates are conversions divided by official opportunities; turnover margin is takeaways minus giveaways. Use `penalties_yards` for accepted team penalties and enforcement yardage, formatted as `penalties / yards`. Neutral pace is the mean game-clock interval between consecutive offensive snaps in the same drive during quarters 1-3 with the score within eight points. After Week 1, the game and season-to-date values are identical.

Tactical fields accept Markdown. `key_moments_intro` accepts optional Markdown prose displayed without a heading above the numbered moments. Key moments use structured entries and may include an image:

```yaml
key_moments_intro: |
  Optional introductory analysis appears here.

key_moments:
  - quarter: Q4
    clock: "2:14"
    title: "Moment title"
    text: "What happened and why it mattered."
    image: /assets/img/nfl/2026/week-01/example.jpg
    image_alt: "Meaningful description"
    image_caption: "Optional caption"
```

Use the NFL season year for `season`, including playoff games played in January of the following calendar year. Use `week_order` to control chronological display. Set `date` to a non-future publication date and restart the local Jekyll server after changing collection configuration.

## Conference subsites

Small conference websites live under `/meetings/<slug>/` and use the standalone `conference` layout. Each event has one data file under `_data/conferences/` and three lightweight pages for Home, Timetable, and Participants under `pages/meetings/<slug>/`.

The page front matter identifies the shared data and active local-navigation item:

```yaml
---
layout: conference
title: Conference title
permalink: /meetings/conference-slug/
conference: conference-slug
conference_page: home
---
```

Use `conference_page: timetable` and `conference_page: participants` on the other two pages. Store dates, venue details, committees, timetable sessions, and consented public participant information in `_data/conferences/<slug>.yml`. Participant entries may contain `name`, `affiliation`, and an optional public `url`; do not store private registration data or email addresses in the repository.

Add `website: /meetings/<slug>/` to the corresponding `_data/meetings.yml` entry to display a Conference website link from the main Meetings page. Conference-specific styles belong in `assets/css/conference.css` and use the `.conference-*` namespace.

Timetable talk slots may include a `topic` matching an ID in the conference's `talk_topics` list. The timetable then displays the corresponding colour marker automatically:

```yaml
- time: 09:00–09:30
  type: talk
  title: Talk title
  speaker: Speaker name
  affiliation: Institution
  topic: theory-numerics
```

TEONGRAV 2027 uses `theory-numerics`, `waveform-modelling`, `data-analysis`, and `astrophysics`.
