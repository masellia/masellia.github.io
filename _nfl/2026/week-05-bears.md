---
title: "Bears at Packers"
description: "Green Bay hosts the Chicago Bears in Week 5 of the 2026 season."
date: 2026-10-11
game_date: 2026-10-11
season: 2026
week_label: "Week 5"
week_order: 5
phase: regular
opponent: Chicago Bears
opponent_abbr: CHI
home_away: home
team_logo: /assets/img/nfl/gb.png
opponent_logo: /assets/img/nfl/chg.png
stadium: Lambeau Field
city: Green Bay, Wisconsin
kickoff: "12:00 PM CDT"
status: Final
team_score: 31
opponent_score: 7
stats_ready: true
stats_season_label: 2026 season
stats_note: EPA and success rates use valid run and pass plays; defensive figures are opponent values allowed. Explosive plays are passes gaining at least 20 yards or runs gaining at least 10. QB-hit rates use dropbacks, while sack rates use pass attempts including sacks. Penalties and yards are accepted team penalties and enforcement yardage. Neutral pace is the mean game-clock interval between consecutive offensive snaps in the same drive during quarters 1-3 with the score within eight points.
stats_sources:
  - label: nflverse 2026 play-by-play
    url: https://github.com/nflverse/nflverse-data/releases/download/pbp/play_by_play_2026.csv.gz
  - label: nflverse play-by-play data dictionary
    url: https://nflreadr.nflverse.com/articles/dictionary_pbp.html
  - label: NFL Game Center
    url: https://www.nfl.com/games/bears-at-packers-2026-reg-5
stats:
  - id: offensive_epa_play
    group: Efficiency
    metric: Offensive EPA/play
    game: "0.259"
    opponent: "-0.340"
    season: "-0.021"
  - id: defensive_epa_play
    group: Efficiency
    metric: Defensive EPA/play allowed
    game: "-0.340"
    opponent: "0.259"
    season: "-0.039"
  - id: offensive_success_rate
    group: Efficiency
    metric: Offensive success rate
    game: "46.6%"
    opponent: "38.2%"
    season: "40.7%"
  - id: defensive_success_rate
    group: Efficiency
    metric: Defensive success rate allowed
    game: "38.2%"
    opponent: "46.6%"
    season: "44.1%"
  - id: dropback_epa_play
    group: Passing and rushing
    metric: Dropback EPA/play
    game: "0.492"
    opponent: "-0.477"
    season: "0.111"
  - id: rush_epa_play
    group: Passing and rushing
    metric: Rush EPA/play
    game: "-0.077"
    opponent: "-0.037"
    season: "-0.292"
  - id: cpoe
    group: Passing and rushing
    metric: Completion percentage over expected
    game: "16.2 pp"
    opponent: "-7.8 pp"
    season: "-3.1 pp"
  - id: proe
    group: Passing and rushing
    metric: Pass rate over expected
    game: "5.9 pp"
    opponent: "2.0 pp"
    season: "2.9 pp"
  - id: explosive_play_rate
    group: Explosiveness
    metric: Explosive-play rate
    game: "13.8%"
    opponent: "7.4%"
    season: "9.3%"
  - id: explosive_play_rate_allowed
    group: Explosiveness
    metric: Explosive-play rate allowed
    game: "7.4%"
    opponent: "13.8%"
    season: "6.8%"
  - id: qb_hit_rate_allowed
    group: Pressure
    metric: QB-hit rate allowed
    game: "14.3%"
    opponent: "19.1%"
    season: "18.8%"
  - id: defensive_qb_hit_rate
    group: Pressure
    metric: Defensive QB-hit rate
    game: "19.1%"
    opponent: "14.3%"
    season: "16.0%"
  - id: sack_rate_allowed
    group: Pressure
    metric: Sack rate allowed
    game: "5.9%"
    opponent: "9.1%"
    season: "5.1%"
  - id: defensive_sack_rate
    group: Pressure
    metric: Defensive sack rate
    game: "9.1%"
    opponent: "5.9%"
    season: "8.1%"
  - id: third_down_efficiency
    group: Situational
    metric: Third-down efficiency
    game: "33.3%"
    opponent: "28.6%"
    season: "27.6%"
  - id: red_zone_efficiency
    group: Situational
    metric: Red-zone touchdown efficiency
    game: "66.7%"
    opponent: "50.0%"
    season: "50.0%"
  - id: turnover_margin
    group: Situational
    metric: Turnover margin
    game: "+5"
    opponent: "-5"
    season: "+3"
  - id: penalties_yards
    group: Situational
    metric: Penalties / yards
    game: "4 / 25"
    opponent: "3 / 20"
    season: "46 / 369"
  - id: neutral_pace
    group: Situational
    metric: Neutral-situation pace
    game: "34.6 sec/play"
    opponent: "23.1 sec/play"
    season: "33.1 sec/play"
tactical:
  game_script: | 
    I hate the Bears. Since the first time I started following the Packers. One of my fondest 
      football memories is Aaron Rodgers beating the Bears on one leg, after coming back from injury in 
      the second half of the 2018 regular-season [game](https://www.youtube.com/watch?v=SeTJPojyLN0){:target="_blank" rel="noopener noreferrer"}. 
      So this may be the only game in which "a win is a win", clean or dirty. 
    
      That said, the Packers entered Week 5 as heavy underdogs, facing their greatest 
      [rivals](https://en.wikipedia.org/wiki/Bears–Packers_rivalry){:target="_blank" rel="noopener noreferrer"} 
      in football after four weeks of criticism, still in search of an identity. 
      Possibly a defining game, even at this early stage of the season.

      The Bears played without their franchise quarterback. Still, I think it is 
      fair to say that the game went far beyond expectations for the Packers, 
      who dominated Chicago in every phase of the game. A punch in the face, to quote 
      Ben Johnson (I could be more explicit if I really wanted to cite him and 
      lose any sense of etiquette). The Packers scored 31 points, which could have been at least 38 
      if Trey Smack had done his job when it mattered. And overall, a general sense of domination, 
      with LaFleur (I liked him a lot today, including his poise during the 
      postgame handshake) almost seeming intent on ridiculing the opposing defense.

      Beyond the excitement, some questions, especially concerning the run 
      game and the offense's ability to score in the red zone, 
      remain open. For the time being, the Packers can prepare with less 
      pressure and more confidence for the Monday night showdown against the Cowboys.
  offense:
  defense:
key_moments_intro: |
    Five turnovers, with 3 interceptions and two recovered fumbles.
key_moments:
  - quarter: Q1
    clock: "3:06"
    title: Roughing the passer 
    text: |
      I get it, a penalty in the first quarter cannot define a game. Yet, when 
      Brenton Cox roughed the passer, erasing a third-down stop by the 
      defense, I felt something in the overall momentum of the game had just changed. 
      Not to mention, on the very next play Bijan Robinson rushed for more than 50 yards 
      into Green Bay territory, setting the stage for Atlanta's touchdown. 




---
