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
     Nobody expected the Packers to suddenly turn into a historically high-scoring offense, 
      or the O-line to become the [Cowboys Great Wall](https://www.dallascowboys.com/video/the-great-wall-of-dallas-the-perfect-unit-273811). 
      Yet nobody expected, either, that after five minutes the Falcons would expose everything that has been 
      wrong with LaFleur’s team — probably since the beginning of his tenure in Green Bay.
      
      The Packers were called upon to build on the win over the Jets, and in particular to show 
      that the offense — and the O-line especially — was finally on a path toward 
      greater efficiency and solidity.
      
      By the end of the first quarter, I could already have written the final summary of the game, 
      regardless of the final score: atrocious O-line, poor decisions by Love, non-existent run game, 
      poor defense. More shocking, and incredibly frustrating, was a general lack of purpose across 
      the entire team, almost as if the fate of the squad had somehow already been written.
      
      The Packers were booed by their own fans at Lambeau. It was difficult to imagine anything worse. 
      Then Tucker Kraft decided to criticize the fans for their lack of support in a postgame interview. 
      Perhaps someone should explain to Kraft that professional sports entertainment — and, 
      ultimately, his salary — works as long as fans remain - entertained -. 
      Given the effort they make to follow and support the team, they have every right to 
      criticize his performance.
  offense: |
    When the Packers scored with Watson at the second possession, I thought honestly 
     the game would have been

     While any form of sport content in the World is probably pointing fingers at 
     the O-line - rightfully so -, in my opinion Love performance, and his style of 
     play were not convincing either. I want to write more than few words here. And 
     be honest, because I don't believe Love is a winning type of QB, if a breed of 
     this kind exists. To be precise with the nomenclature, a winning QB is one that takes first down home. Multiple times. Continuosly. 
     Exausting the opposing defense. 
     Six years into the league, Love insteads keep favouring 
     hero balls, long passes in double coverage and extreme tight windows, with 
     with very low probability of completions, rather than checkdowns and  
     efficient short plays that could move the chains. Sure, when the pass connects - 
     and most of the times you also need WR adjustements and a pinch of luck -  
     the crowd explodes, and all seems heaven. But on the grand scheme how much does 
     Love's style help the Packers winning? When LaFluer midtime says that 
     one the problems of the offense is not getting in rythm, well, in my opinion 
     Love styles becomes a problem. 
     The picture belows shows in my opinion two cases in which better (or different) 
     choices would have led to different resutls. On the left: Packers are 2&13 on their 
     own 20, both Kraft and Broks in the flat are open, but Love decides to throw a bomb 
     to Golden in double coverage. Pass incomplete, and 3 and out on the following play. 
     On the right, 2&5 in the second quarter. Here receivers are more covered well by the defense, 
     still Kraft is in front of his defender. Instead of attacking the center of the field 
     Love chooses again to throw a 30+ yards pass to Golden who is following a corner route. Again, 3 and out.
     <div class="nfl-img-row">
     <figure>
      <img src="/assets/img/nfl/week-03-falcons/w326-q1-2-13-p-0-36.jpg" alt="Q1 2&13" loading="lazy">
      <figcaption>Your caption here.</figcaption>
     </figure>
     <figure>
      <img src="/assets/img/nfl/week-03-falcons/w326-q2-2-5-p-3-56.jpg" alt="Q2 2&5" loading="lazy">
     <figcaption>Your caption here.</figcaption>
     </figure>
    </div>

   
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
