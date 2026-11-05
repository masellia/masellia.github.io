---
title: "Packers at Lions"
description: "Green Bay visits the Detroit Lions in Week 7 of the 2026 season."
date: 2026-10-25
game_date: 2026-10-25
season: 2026
week_label: "Week 7"
week_order: 7
phase: regular
opponent: Detroit Lions
opponent_abbr: DET
home_away: away
team_logo: /assets/img/nfl/gb.png
opponent_logo: /assets/img/nfl/lio.png
stadium: Ford Field
city: Detroit, Michigan
kickoff: "4:25 PM EDT"
status: Final
team_score: 17
opponent_score: 20
stats_ready: true
stats_season_label: 2026 season
stats_note: EPA and success rates use valid run and pass plays; defensive figures are opponent values allowed. Explosive plays are passes gaining at least 20 yards or runs gaining at least 10. QB-hit rates use dropbacks, while sack rates use pass attempts including sacks. Penalties and yards are accepted team penalties and enforcement yardage. Neutral pace is the mean game-clock interval between consecutive offensive snaps in the same drive during quarters 1-3 with the score within eight points.
stats_sources:
  - label: nflverse 2026 play-by-play
    url: https://github.com/nflverse/nflverse-data/releases/download/pbp/play_by_play_2026.csv.gz
  - label: nflverse play-by-play data dictionary
    url: https://nflreadr.nflverse.com/articles/dictionary_pbp.html
  - label: NFL Game Center
    url: https://www.nfl.com/games/packers-at-lions-2026-reg-7
stats:
  - id: offensive_epa_play
    group: Efficiency
    metric: Offensive EPA/play
    game: "0.037"
    opponent: "-0.063"
    season: "-0.003"
  - id: defensive_epa_play
    group: Efficiency
    metric: Defensive EPA/play allowed
    game: "-0.063"
    opponent: "0.037"
    season: "-0.057"
  - id: offensive_success_rate
    group: Efficiency
    metric: Offensive success rate
    game: "33.8%"
    opponent: "52.3%"
    season: "39.2%"
  - id: defensive_success_rate
    group: Efficiency
    metric: Defensive success rate allowed
    game: "52.3%"
    opponent: "33.8%"
    season: "45.0%"
  - id: dropback_epa_play
    group: Passing and rushing
    metric: Dropback EPA/play
    game: "0.151"
    opponent: "0.279"
    season: "0.121"
  - id: rush_epa_play
    group: Passing and rushing
    metric: Rush EPA/play
    game: "-0.238"
    opponent: "-0.415"
    season: "-0.261"
  - id: cpoe
    group: Passing and rushing
    metric: Completion percentage over expected
    game: "-0.5 pp"
    opponent: "-1.0 pp"
    season: "-3.0 pp"
  - id: proe
    group: Passing and rushing
    metric: Pass rate over expected
    game: "5.1 pp"
    opponent: "-7.2 pp"
    season: "3.6 pp"
  - id: explosive_play_rate
    group: Explosiveness
    metric: Explosive-play rate
    game: "10.8%"
    opponent: "10.8%"
    season: "9.5%"
  - id: explosive_play_rate_allowed
    group: Explosiveness
    metric: Explosive-play rate allowed
    game: "10.8%"
    opponent: "10.8%"
    season: "6.5%"
  - id: qb_hit_rate_allowed
    group: Pressure
    metric: QB-hit rate allowed
    game: "13.0%"
    opponent: "3.0%"
    season: "18.1%"
  - id: defensive_qb_hit_rate
    group: Pressure
    metric: Defensive QB-hit rate
    game: "3.0%"
    opponent: "13.0%"
    season: "13.7%"
  - id: sack_rate_allowed
    group: Pressure
    metric: Sack rate allowed
    game: "2.2%"
    opponent: "3.0%"
    season: "4.9%"
  - id: defensive_sack_rate
    group: Pressure
    metric: Defensive sack rate
    game: "3.0%"
    opponent: "2.2%"
    season: "6.1%"
  - id: third_down_efficiency
    group: Situational
    metric: Third-down efficiency
    game: "33.3%"
    opponent: "50.0%"
    season: "35.2%"
  - id: red_zone_efficiency
    group: Situational
    metric: Red-zone touchdown efficiency
    game: "25.0%"
    opponent: "40.0%"
    season: "46.2%"
  - id: turnover_margin
    group: Situational
    metric: Turnover margin
    game: "+1"
    opponent: "-1"
    season: "+5"
  - id: penalties_yards
    group: Situational
    metric: Penalties / yards
    game: "8 / 81"
    opponent: "5 / 50"
    season: "65 / 546"
  - id: neutral_pace
    group: Situational
    metric: Neutral-situation pace
    game: "29.7 sec/play"
    opponent: "30.0 sec/play"
    season: "32.3 sec/play"
tactical:
  game_script: |
       America's Game of the Week, with the Lions coming off their bye. 193 meetings 
       between the two teams, with LaFleur holding an 8-6 record against Detroit. 
       Good news for the Packers, who get Josh Jacobs back in the backfield, 
       hoping for a spark in a much-needed running game. The stage seemed 
       set for a great matchup, with both teams looking to confirm their 
       growth and find stability.

       Instead, it ended with widespread outrage over terrible officiating, 
       which affected the Packers more than the Lions. Some roughing-the-passer 
       calls were simply nonsensical, at least if we still want to distinguish 
       football from flag football. An unnecessary roughness penalty called 
       on Wyatt screams of complete incompetence by the officials, especially 
       considering that, in the postgame report, they confirmed they had not 
       officially blown the play dead before the action that led to the penalty.

       That said, being 17-17, when Brandon Cisse pushed Williams out of the end zone 
       on fourth-and-5 with one minute remaining in the third quarter, and Nixon 
       tackled Gibbs on fourth-and-1 with five minutes left in the game, I 
       thought the Packers would pull it off. Instead, the offense ran 
       four plays: a run for no gain, a 5-yard completion, an incompletion, 
       and a blocked field-goal attempt. The Lions went on the field 
       holding the ball enough to secure a victory kick with zero seconds 
       left on the clock.

       The Packers and Lions had almost identical time of possession 
       (29:59 vs. 30:01), total plays (65 vs. 66), and comparable passing 
       yards (264 vs. 296), with Green Bay also holding a +1 turnover margin. 
       What made the difference, beyond the usual inconsistent running game, 
       was the complete inability to finish drives in the red zone 
       and the missed field goals.
  offense: |    
      Let's start with the (very) ugly. I did not expect Jacobs 
      to make a historic comeback. Rust can be heavy after 
      such a prolonged and intense period of inactivity. Still, 
      having him back alongside Love did not really change the outcome 
      of the running game. A total of 60 yards on the ground 
      (including 20 yards from Lloyd and 4 from Williams), for an average of 
      3.2 yards per carry. Among the worst in the league. With a rush EPA/play 
      of -0.238, the worst since Week 4, the offense seems incapable of 
      posing any real ground threat to the Lions (116 yards for Jahmyr Gibbs...).
      I am not sure how many times we can repeat this narrative each week, 
      or how much this lack of productivity is affecting the team, particularly 
      on red-zone drives. Jacobs did bring back a running style more focused 
      on exploiting O-line gaps and breaking tackles, something that was missing 
      in particular from Lloyd (who has a rather annoying tendency to bounce 
      runs outside). Probably the biggest impact Jacobs had was in the passing game, 
      as he ended the game with 55 receiving yards (second only to Christian Watson) 
      and a TD.

      Setting aside the brilliant performance against the Bears, the offense 
      continues to hover around zero offensive EPA/play. A historically poor 
      running game is surely dragging down LaFleur's passing offense. 
      Love completed 60% of his passes, with 2 TDs and 1 interception, while 
      receivers dropped at least four passes (a recurring problem for the Packers 
      this year), contributing to a gap between his raw completion rate and 
      his 70.7% adjusted completion percentage. 

      I am trying to evaluate Love's performance(s) to understand how is playing 
      and honeslty, some his numbers honestly seem to contradict one another, 
      perhaps distorted by the dysfunctional offense the Packers currently have. 
      Against the Lions, Love recorded an [average depth of target](https://www.acmepackingcompany.com/green-bay-packers-analysis/88710/packers-by-the-numbers-stats-from-the-week-7-loss-to-the-lions){:target="_blank" rel="noopener noreferrer"} of 10.9 yards, 
      a time to throw of 2.61 seconds, and faced pressure on 37% of his dropbacks.
      His [2026 season averages](https://sumersports.com/players/fa8e600/jordan-love/){:target="_blank" rel="noopener noreferrer"}
      are 9.45 yards of aDOT and 2.46 seconds to throw the ball.

      We can compare these numbers with other elite QBs in the league: 
      [Purdy, Allen and Burrow](https://sumersports.com/players/quarterback/?plays=50){:target="_blank" rel="noopener noreferrer"}
      have an aDOT of 8.00, 9.29 and 7.74 yards, respectively, with 
      times to throw of 2.88, 2.85 and 2.57 seconds. 
      Love also faces pressure, but not particularly often 
      [compared](https://www.pro-football-reference.com/years/2026/passing_advanced.htm){:target="_blank" rel="noopener noreferrer"}
      with the league average, while recording one of the lowest pocket times 
      in the league.
      I find it difficult to put together a coherent picture from these 
      numbers.
      Love seems to favor attacking the field vertically much more 
      aggressively than these other QBs, while operating with a relatively 
      short pocket-time window, the [lowest](https://www.pro-football-reference.com/years/2026/passing_advanced.htm){:target="_blank" rel="noopener noreferrer"} in the league (note that pocket time stops when pressure 
      arrives or the ball is released, whichever comes first, while time 
      to throw measures the time elapsed from the snap to the actual release 
      of the ball).

      I am not sure whether a clear chain of logical statements can be constructed here. 
      I am probably trying to find an explanation for an offense that lives 
      off occasional highs and (many) lows, remaining inconsistent most of the time. 
      But I believe LaFleur and Love are playing a game that, at the moment — 
      maybe because of the O-line, the rushing game, drops, Love's decisions, 
      or all of these combined — is not sustainable. 
      In fact, GB recorded +0.151 dropback EPA/play (+0.279 for the Lions) 
      and an offensive success rate of 33.8% (52.3% for the Lions), while 
      producing two more explosive plays than Detroit (6 vs. 4). The Packers 
      generated more explosive plays, but Goff and company were more efficient 
      and able to move the chains consistently throughout all four quarters.
  defense: |
key_moments_intro:
key_moments: []
---
