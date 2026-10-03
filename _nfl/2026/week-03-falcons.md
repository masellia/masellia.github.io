---
title: "Falcons at Packers"
description: "Green Bay hosts the Atlanta Falcons in Week 3 of the 2026 season."
date: 2026-09-25
game_date: 2026-09-24
season: 2026
week_label: "Week 3"
week_order: 3
phase: regular
opponent: Atlanta Falcons
opponent_abbr: ATL
home_away: home
team_logo: /assets/img/nfl/gb.png
opponent_logo: /assets/img/nfl/flc.png
stadium: Lambeau Field
city: Green Bay, Wisconsin
kickoff: "7:15 PM CDT"
status: Final
team_score: 14
opponent_score: 35
stats_ready: true
stats_game_label: Game
stats_season_label: 2026 season
stats_note: EPA and success rates use valid run and pass plays; defensive figures are opponent values allowed. Explosive plays are passes gaining at least 20 yards or runs gaining at least 10. QB-hit rates use dropbacks, while sack rates use pass attempts including sacks. Penalties and yards are accepted team penalties and enforcement yardage. Neutral pace is the mean game-clock interval between consecutive offensive snaps in the same drive during quarters 1-3 with the score within eight points.
stats_sources:
  - label: nflverse 2026 play-by-play
    url: https://github.com/nflverse/nflverse-data/releases/download/pbp/play_by_play_2026.csv.gz
  - label: nflverse play-by-play data dictionary
    url: https://nflreadr.nflverse.com/articles/dictionary_pbp.html
  - label: NFL Game Center
    url: https://www.nfl.com/games/falcons-at-packers-2026-reg-3
  - label: ESPN team stats
    url: https://www.espn.com/nfl/matchup/_/gameId/401872948
stats:
  - id: offensive_epa_play
    group: Efficiency
    metric: Offensive EPA/play
    game: "0.014"
    opponent: "0.332"
    season: "-0.122"
  - id: defensive_epa_play
    group: Efficiency
    metric: Defensive EPA/play allowed
    game: "0.332"
    opponent: "0.014"
    season: "0.066"
  - id: offensive_success_rate
    group: Efficiency
    metric: Offensive success rate
    game: "39.7%"
    opponent: "64.6%"
    season: "37.2%"
  - id: defensive_success_rate
    group: Efficiency
    metric: Defensive success rate allowed
    game: "64.6%"
    opponent: "39.7%"
    season: "46.2%"
  - id: dropback_epa_play
    group: Passing and rushing
    metric: Dropback EPA/play
    game: "0.066"
    opponent: "0.366"
    season: "-0.017"
  - id: rush_epa_play
    group: Passing and rushing
    metric: Rush EPA/play
    game: "-0.301"
    opponent: "0.309"
    season: "-0.410"
  - id: cpoe
    group: Passing and rushing
    metric: Completion percentage over expected
    game: "-8.5 pp"
    opponent: "8.8 pp"
    season: "-10.1 pp"
  - id: proe
    group: Passing and rushing
    metric: Pass rate over expected
    game: "11.8 pp"
    opponent: "-6.6 pp"
    season: "2.5 pp"
  - id: explosive_play_rate
    group: Explosiveness
    metric: Explosive-play rate
    game: "6.3%"
    opponent: "12.3%"
    season: "8.9%"
  - id: explosive_play_rate_allowed
    group: Explosiveness
    metric: Explosive-play rate allowed
    game: "12.3%"
    opponent: "6.3%"
    season: "6.7%"
  - id: qb_hit_rate_allowed
    group: Pressure
    metric: QB-hit rate allowed
    game: "22.2%"
    opponent: "3.8%"
    season: "22.7%"
  - id: defensive_qb_hit_rate
    group: Pressure
    metric: Defensive QB-hit rate
    game: "3.8%"
    opponent: "22.2%"
    season: "13.3%"
  - id: sack_rate_allowed
    group: Pressure
    metric: Sack rate allowed
    game: "1.9%"
    opponent: "0.0%"
    season: "6.1%"
  - id: defensive_sack_rate
    group: Pressure
    metric: Defensive sack rate
    game: "0.0%"
    opponent: "1.9%"
    season: "7.1%"
  - id: third_down_efficiency
    group: Situational
    metric: Third-down efficiency
    game: "40.0%"
    opponent: "60.0%"
    season: "27.8%"
  - id: red_zone_efficiency
    group: Situational
    metric: Red-zone touchdown efficiency
    game: "50.0%"
    opponent: "80.0%"
    season: "41.7%"
  - id: turnover_margin
    group: Situational
    metric: Turnover margin
    game: "0"
    opponent: "0"
    season: "-2"
  - id: penalties_yards
    group: Situational
    metric: Penalties / yards
    game: "6 / 45"
    opponent: "6 / 83"
    season: "32 / 276"
  - id: neutral_pace
    group: Situational
    metric: Neutral-situation pace
    game: "29.5 sec/play"
    opponent: "32.7 sec/play"
    season: "31.7 sec/play"
tactical:
  game_script: |
    Nobody expected that Packers transformed in an historical high-scoring offense, 
      or the O-line turned into the [Cowboys Great Wall](https://www.dallascowboys.com/video/the-great-wall-of-dallas-the-perfect-unit-273811). Yet, nobody also expected that after 5 minutes the Falcons would expose 
      everything bad FaFleur team has been. Probably since the beginning 
      of is tenure in Green Bay. Atrocious O-line, poor decisions by Love, 
      non-existant run game, poor defense. The Packers got booed by their own 
      fans at Lambreu. It was difficult to think about something worse. Then 
      Tucker Kraft decided to blame the fans for their poor supportive attitude 
      in a postgame interview. Maybe someone shoudl explain Kraft that entertaintment 
      sport (and his salary) works as long as the fans are entertained. 
      And given the efforts they make in following the team they have all 
      the rights to blame his lack of performance.
  offense: |
   When the Packers scored with Watson at the second possession, I thought honestly 
   the game would have been
   3-11 (9:10 -1) skyy moore opne on the center at the down line
   field goad blocked Q2 3:42
  defense: |
   The interception 30 seconds, 3-out just after the beginning of the match
key_moments_intro:
key_moments:
  - quarter: Q1
    clock: "3:06"
    title: Roughing the passer 
    text: |
      I get it, a penalty in the first quarter cannot define a game. Still, when 
      Brenton Cox roughed the passer erasing a third down stop by the 
      defense, I felt something in the overall momentum of the game just changed. 
      Not to mention, on the very next play Bijan Robinson rushed for more than 50 yards 
      into Green Bay terrirory setting the field for Atlanta's touchdown. 
---