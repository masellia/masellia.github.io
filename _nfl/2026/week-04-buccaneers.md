---
title: "Packers at Buccaneers"
description: "Green Bay visits the Tampa Bay Buccaneers in Week 4 of the 2026 season."
date: 2026-10-04
game_date: 2026-10-04
season: 2026
week_label: "Week 4"
week_order: 4
phase: regular
opponent: Tampa Bay Buccaneers
opponent_abbr: TB
home_away: away
team_logo: /assets/img/nfl/gb.png
opponent_logo: /assets/img/nfl/tb.png
stadium: Raymond James Stadium
city: Tampa, Florida
kickoff: "1:00 PM EDT"
status: Final
team_score: 17
opponent_score: 14
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
    url: https://www.nfl.com/games/packers-at-buccaneers-2026-reg-4
  - label: ESPN team stats
    url: https://www.espn.com/nfl/matchup/_/gameId/401872968
stats:
  - id: offensive_epa_play
    group: Efficiency
    metric: Offensive EPA/play
    game: "0.018"
    opponent: "-0.038"
    season: "-0.091"
  - id: defensive_epa_play
    group: Efficiency
    metric: Defensive EPA/play allowed
    game: "-0.038"
    opponent: "0.018"
    season: "0.041"
  - id: offensive_success_rate
    group: Efficiency
    metric: Offensive success rate
    game: "46.2%"
    opponent: "44.3%"
    season: "39.2%"
  - id: defensive_success_rate
    group: Efficiency
    metric: Defensive success rate allowed
    game: "44.3%"
    opponent: "46.2%"
    season: "45.7%"
  - id: dropback_epa_play
    group: Passing and rushing
    metric: Dropback EPA/play
    game: "0.230"
    opponent: "-0.078"
    season: "0.028"
  - id: rush_epa_play
    group: Passing and rushing
    metric: Rush EPA/play
    game: "-0.271"
    opponent: "0.065"
    season: "-0.366"
  - id: cpoe
    group: Passing and rushing
    metric: Completion percentage over expected
    game: "5.3 pp"
    opponent: "1.2 pp"
    season: "-7.0 pp"
  - id: proe
    group: Passing and rushing
    metric: Pass rate over expected
    game: "1.0 pp"
    opponent: "-6.4 pp"
    season: "2.2 pp"
  - id: explosive_play_rate
    group: Explosiveness
    metric: Explosive-play rate
    game: "5.8%"
    opponent: "6.6%"
    season: "8.2%"
  - id: explosive_play_rate_allowed
    group: Explosiveness
    metric: Explosive-play rate allowed
    game: "6.6%"
    opponent: "5.8%"
    season: "6.6%"
  - id: qb_hit_rate_allowed
    group: Pressure
    metric: QB-hit rate allowed
    game: "6.7%"
    opponent: "19.4%"
    season: "19.8%"
  - id: defensive_qb_hit_rate
    group: Pressure
    metric: Defensive QB-hit rate
    game: "19.4%"
    opponent: "6.7%"
    season: "14.9%"
  - id: sack_rate_allowed
    group: Pressure
    metric: Sack rate allowed
    game: "0.0%"
    opponent: "10.0%"
    season: "4.9%"
  - id: defensive_sack_rate
    group: Pressure
    metric: Defensive sack rate
    game: "10.0%"
    opponent: "0.0%"
    season: "7.8%"
  - id: third_down_efficiency
    group: Situational
    metric: Third-down efficiency
    game: "20.0%"
    opponent: "41.7%"
    season: "26.1%"
  - id: red_zone_efficiency
    group: Situational
    metric: Red-zone touchdown efficiency
    game: "66.7%"
    opponent: "100.0%"
    season: "46.7%"
  - id: turnover_margin
    group: Situational
    metric: Turnover margin
    game: "0"
    opponent: "0"
    season: "-2"
  - id: penalties_yards
    group: Situational
    metric: Penalties / yards
    game: "10 / 68"
    opponent: "4 / 17"
    season: "42 / 344"
  - id: neutral_pace
    group: Situational
    metric: Neutral-situation pace
    game: "34.6 sec/play"
    opponent: "30.3 sec/play"
    season: "32.7 sec/play"
tactical:
  game_script: | 
    I am not sure what I was expecting from this game. 
    Considering my overall concerns about the team and LaFleur’s 
    management, a complete collapse by the Packers against a 0-3 
    team missing its starting QB was not an event with zero 
    probability. For sure, I would have expected a spark of 
    pride, something to prove that the players want to fight for 
    every inch of the field while wearing that jersey. 
    Instead, the Battle of the Bays turned into a battle in 
    the mud. One of those victories (please don’t tell me a 
    win is a win) that are indicative of how bad the team 
    is (at least at the moment). A thrilling 17-14 victory, 
    with an absolutely boring second half in which the two teams 
    scored a combined 14 points, and undrafted rookie Jalon Daniels, 
    replacing an injured Baker Mayfield, scored his first NFL touchdown 
    (and threw two picks).
    
    All of this after Brian Gutekunst went into emergency mode 
    during the week, signing four veteran O-linemen and reversing 
    his preseason [optimism](https://www.instagram.com/p/Dd4fbebD8La/?img_index=1){:target="_blank" rel="noopener noreferrer"}. Many (including LaFleur) would say 
    that there were some positive signs compared with the Falcons 
    game. I don't want to play the role of the "always negative critic", 
    but questions about whether these positives are random occurrences 
    or the seeds of a structured improvement remain very much open. 
    With the Bears up next, I guess we're going to see 
    what kind of mettle this team is made of.

  offense:  |
    Let's start with the good things, then. The new additions, 
      Travis Glover and Laken Tomlinson, took their places 
      at right and left guard, respectively. Out of necessity 
      (Aaron Banks and Jacob Monk are injured) or by choice, the 
      changes seemed effective, with the O-line performing 
      well, at least in pass protection. The QB-hit rate allowed 
      dropped to a season low of 6.7%, with Love taking no sacks. 
      The offensive success rate also improved considerably, 
      reaching 46.2%, the highest so far in 2026, along with 
      a very positive 0.230 dropback EPA/play (0.066 against 
      the Falcons). 
    
      That said, the Bucs didn't enter Week 4 with 
      an elite defensive front, having one of the lowest [pressure 
      rates](https://www.sharpfootballanalysis.com/stats-nfl/nfl-defensive-line-stats/
      ){:target="_blank" rel="noopener noreferrer"} in the league. 
      And in fact, highlighting how dysfunctional the Packers offense remains 
      despite the O-line's progress, offensive EPA/play stagnated at an almost 
      irrelevant 0.018 (0.014 in Week 3). 
      The running game remains the weak point of LaFleur's offense.  
      The Packers clearly tried to be more balanced, 
      attacking on the ground more often than in the previous game 
      (pass rate over expected dropped to 1.0 pp from 
      11.8 pp in Week 3). Rush EPA/play 
      remained consistently negative: the team rushed for 86 yards in total 
      on 25 carries, almost half of Tampa Bay's total, averaging a very modest 
      3.5 yards per rush. 
      The Packers rank last in the league in [yards before contact](https://www.sharpfootballanalysis.com/stats-nfl/nfl-defensive-line-stats/
      ){:target="_blank" rel="noopener noreferrer"} per RB rush, with 
      an average of 0.5 yards across the first four weeks. This suggests that 
      the O-line is not really creating running lanes for the 
      running backs, leaving Lloyd, Johnson and Brooks to generate 
      additional yardage after contact. 
       
      With 6.6 yards per pass, an explosive-play rate remaining flat 
      at around 6%, and a very low 20% third-down conversion rate, 
      the offense seemed capable of moving the chains, but only up 
      to a certain point. Green Bay reached the Buccaneers' 
      red zone just three times, scoring two touchdowns. Tucker Kraft 
      scored his first TD of the season, hopefully shaking off the 
      last rust from his previous injury.

  defense: |
  
key_moments_intro: |
    The Packers continue their steady path of inflicting as much 
    damage on themselves as possible, committing 10 penalties for 
    a total of 68 yards. The team currently holds the dubious 
    distinction of being the most [undisciplined](https://www.footballdb.com/statistics/penalties.html?sort=numyds){:target="_blank" rel="noopener noreferrer"} 
    in the league in terms of penalty yards (344), and ranks 
    second in the total number of penalties committed (42).
key_moments:
  - quarter: Q3
    clock: "8:54"
    title: Another man down
    text: |
      Edgerrin Cooper was all over the field during the game, 
      recording 9 tackles, 1 sack and 1 interception returned for 
      18 yards. Then he went down with a non-contact injury, which 
      turned out to be a season-ending Achilles tear. A tremendous loss 
      for the Packers' best linebacker so far this season, and a leader 
      of the defense.
  - quarter: Q4
    clock: "1:47"
    title: Ewan Williams wreaks havoc
    text: |
      Jonathan Gannon decided to seal the game by sending 
      Ewan Williams on a blitz during the final series. 
      Williams recorded his first NFL sack on Tampa Bay's 
      second down, then forced Jalon Daniels into an incomplete 
      pass on fourth-and-11, securing the win for the Packers.
---
