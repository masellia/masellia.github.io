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
  offense: |
    If LaFleur could describe one of his offensive dreams, I am pretty sure it 
      would resemble the performance against the Bears. Love threw for 367 yards, 
      completing 80% of his passes for 2 TDs and his highest passer rating of 
      the season. Two more touchdowns by MarShawn Lloyd brought the total to 31 
      points, which could have been 38 if Smack had done his kicking job. 

      More than the points, you could feel throughout the game the Packers' 
      ability (and willingness) to do whatever they wanted against the Bears' defense. 

      Watson and Golden both recorded over 100 receiving yards, with 
      their longest receptions going for 53 and 50 yards, respectively.  
      Just to give an example of how aggressive LaFleur and Love were — probably 
      sensing the weaknesses in the Bears' secondary — the first TD pass 
      to Christian Watson was a 42-yard bomb on first-and-10 from Chicago's 
      42-yard line. The second score was even more impressive. The drive 
      consisted of just of four plays: a 31-yard pass to Watson, a run 
      for a loss, an incompletion, a 43-yard touchdown nullified by a penalty, 
      and finally a 53-yard touchdown pass to Watson.
    
      The Packers recorded an offensive EPA/play of 0.259, their highest this season, 
      with a massive Completion Percentage Over Expected of +16.2 percentage 
      points and an explosive-play rate of 13.8%, well above the league median 
      through five weeks. 

      As I said, the Bears' secondary did everything possible to help LaFleur 
      play his explosive game. But credit also goes to the offensive line, 
      which has shown progress in pass protection, making Love more comfortable 
      with his preferred deep-passing style. 

      If I have to find something to criticize about the offensive performance, 
      I'd point to two aspects. First, considering how dominant the offense was 
      on the field, I believe we wasted opportunities to score even more, 
      with four punts (and two missed field goals). 
      Second, the running game. Yes, Lloyd scored his first NFL 
      touchdown, and then added a second. But 70 total rushing yards on 26 carries 
      is still poor for a team that wants to compete for a postseason spot. 
      Rush EPA/play remains close to zero, but still negative, and a pass rate 
      over expected of almost six percentage points signals an offense that 
      remains largely one-dimensional.

  defense: |
    Four sacks, eight tackles for loss, ten QB hits, three interceptions and two 
      recovered fumbles. There is little to add except that the Packers' defense 
      had a heck of a day, holding the Bears to just seven points, all scored 
      in the second quarter. Green Bay recorded a defensive EPA/play allowed of 
      −0.340, by far its lowest value this season, compared with a season average 
      of −0.034, highlighting its complete control over the Bears' offense.
    
      Two things stand out above all. First, Gannon continues to demonstrate his 
      ability to generate pressure on the QB, with a QB-hit rate above 19% for 
      the second week in a row, even without his star pass rusher Parsons and 
      the recently injured Edgerrin Cooper.
      Second, the Packers' defense is elite at generating turnovers, 
      especially when it comes to intercepting the opposing quarterback, 
      [leading](https://www.espn.com/nfl/stats/team/_/view/turnovers/split/opponent/table/passing/sort/interceptions/dir/desc){:target="_blank" rel="noopener noreferrer"} 
      the league in interceptions.
key_moments_intro: |
    Only four penalties for 25 yards. A season low for the Packers, 
      addressing one of the team's most critical issues so far. 
      The numbers are particularly significant considering how emotionally 
      charged the game was, given the rivalry and the crisis Green Bay 
      had been facing leading up to kickoff.

      On the negative side, a big step backward for Trey Smack, who made only 
      one of three field-goal attempts and missed an extra point. While 
      wind was clearly a factor — Santos also missed a field goal for the Bears — 
      the early part of the season has not been exceptional for Smack, 
      who is 7-for-10 on field goals and 9-for-11 on extra points.
key_moments: []
---
