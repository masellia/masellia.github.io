---
title: "Cowboys at Packers"
description: "Green Bay hosts the Dallas Cowboys in Week 6 of the 2026 season."
date: 2026-10-18
game_date: 2026-10-18
season: 2026
week_label: "Week 6"
week_order: 6
phase: regular
opponent: Dallas Cowboys
opponent_abbr: DAL
home_away: home
team_logo: /assets/img/nfl/gb.png
opponent_logo: /assets/img/nfl/cw.png
stadium: Lambeau Field
city: Green Bay, Wisconsin
kickoff: "7:20 PM CDT"
status: Final
team_score: 23
opponent_score: 13
stats_ready: true
stats_season_label: 2026 season
stats_note: EPA and success rates use valid run and pass plays; defensive figures are opponent values allowed. Explosive plays are passes gaining at least 20 yards or runs gaining at least 10. QB-hit rates use dropbacks, while sack rates use pass attempts including sacks. Penalties and yards are accepted team penalties and enforcement yardage. Neutral pace is the mean game-clock interval between consecutive offensive snaps in the same drive during quarters 1-3 with the score within eight points.
stats_sources:
  - label: nflverse 2026 play-by-play
    url: https://github.com/nflverse/nflverse-data/releases/download/pbp/play_by_play_2026.csv.gz
  - label: nflverse play-by-play data dictionary
    url: https://nflreadr.nflverse.com/articles/dictionary_pbp.html
  - label: NFL Game Center
    url: https://www.nfl.com/games/cowboys-at-packers-2026-reg-6
stats:
  - id: offensive_epa_play
    group: Efficiency
    metric: Offensive EPA/play
    game: "0.034"
    opponent: "-0.133"
    season: "-0.010"
  - id: defensive_epa_play
    group: Efficiency
    metric: Defensive EPA/play allowed
    game: "-0.133"
    opponent: "0.034"
    season: "-0.056"
  - id: offensive_success_rate
    group: Efficiency
    metric: Offensive success rate
    game: "38.2%"
    opponent: "42.3%"
    season: "40.2%"
  - id: defensive_success_rate
    group: Efficiency
    metric: Defensive success rate allowed
    game: "42.3%"
    opponent: "38.2%"
    season: "43.8%"
  - id: dropback_epa_play
    group: Passing and rushing
    metric: Dropback EPA/play
    game: "0.138"
    opponent: "-0.163"
    season: "0.116"
  - id: rush_epa_play
    group: Passing and rushing
    metric: Rush EPA/play
    game: "-0.157"
    opponent: "-0.070"
    season: "-0.265"
  - id: cpoe
    group: Passing and rushing
    metric: Completion percentage over expected
    game: "-5.8 pp"
    opponent: "-3.1 pp"
    season: "-3.6 pp"
  - id: proe
    group: Passing and rushing
    metric: Pass rate over expected
    game: "4.9 pp"
    opponent: "5.1 pp"
    season: "3.3 pp"
  - id: explosive_play_rate
    group: Explosiveness
    metric: Explosive-play rate
    game: "8.8%"
    opponent: "1.4%"
    season: "9.2%"
  - id: explosive_play_rate_allowed
    group: Explosiveness
    metric: Explosive-play rate allowed
    game: "1.4%"
    opponent: "8.8%"
    season: "5.8%"
  - id: qb_hit_rate_allowed
    group: Pressure
    metric: QB-hit rate allowed
    game: "18.2%"
    opponent: "12.3%"
    season: "18.7%"
  - id: defensive_qb_hit_rate
    group: Pressure
    metric: Defensive QB-hit rate
    game: "12.3%"
    opponent: "18.2%"
    season: "15.1%"
  - id: sack_rate_allowed
    group: Pressure
    metric: Sack rate allowed
    game: "6.8%"
    opponent: "1.8%"
    season: "5.4%"
  - id: defensive_sack_rate
    group: Pressure
    metric: Defensive sack rate
    game: "1.8%"
    opponent: "6.8%"
    season: "6.6%"
  - id: third_down_efficiency
    group: Situational
    metric: Third-down efficiency
    game: "61.1%"
    opponent: "38.5%"
    season: "35.5%"
  - id: red_zone_efficiency
    group: Situational
    metric: Red-zone touchdown efficiency
    game: "50.0%"
    opponent: "50.0%"
    season: "50.0%"
  - id: turnover_margin
    group: Situational
    metric: Turnover margin
    game: "+1"
    opponent: "-1"
    season: "+4"
  - id: penalties_yards
    group: Situational
    metric: Penalties / yards
    game: "11 / 96"
    opponent: "11 / 108"
    season: "57 / 465"
  - id: neutral_pace
    group: Situational
    metric: Neutral-situation pace
    game: "32.6 sec/play"
    opponent: "33.3 sec/play"
    season: "33.0 sec/play"
tactical:
  game_script: |
    The Packers winning the Divisional Round against the Cowboys 
      on January 15, 2017, with an incredible throw and catch by Rodgers and Cook. 
      The thrilling [victory](https://www.reddit.com/r/GreenBayPackers/comments/1x0qv3z/nine_years_ago_today_aaron_rodgers_needed_75_yds/){:target="_blank" rel="noopener noreferrer"} in Dallas during Week 5 of 2017, 
      with a 12-yard touchdown pass to Davante Adams and only 11 seconds remaining. 
      These stay two of my fondest Packers memories from my ten years 
      of following the team. The games against the Cowboys remain part of a strong rivalry 
      between two NFC teams that face each other at least once every three years. 

      The Sunday Night game was not the most spectacular among their recent meetings 
      in terms of scoring. The Packers defense won the game, with Gannon's group holding 
      Dallas to just 7 points until the final minute, intercepting Dak Prescott 
      twice.

      The Packers offense came with its usual highs and lows. 
      The receiving corps, led by Watson and Golden, continues to look elite in the 
      league — despite three costly drops. The running game, however, 
      remains the real Achilles' heel of LaFleur's offense. Hopefully, Josh Jacobs 
      coming off the Commissioner's Exempt List may spark new life into an offense 
      that, for the moment, looks one-dimensional. 

      Green Bay is now 4-2 after a rough start to the season and many doubts about 
      the team's stability. I believe the Packers are still searching for a real identity, 
      which will soon be tested against tough opponents over the next four weeks (Lions, 
      Panthers, Patriots and Vikings).
      
  offense: |
    I am not sure how to interpret the Packers' offensive performance. Love 
      closes the first quarter with a touchdown on the opening possession, followed 
      by an interception on the second. A field goal and another touchdown 
      close out the first half. LaFleur's offense doesn't punt for the first 
      time until one minute into the third quarter. Then, plenty of inconsistency, 
      with only six additional points, all coming from Smack's field goals.

      Offensive EPA/play remains close to the season average at 0.034, with the 
      second-lowest offensive success rate of the season.

      I don't think Love played particularly well. He completed 56% of his 
      passes, ranking now third from the bottom in completion percentage among QBs 
      who have played six games. Completion Percentage Over Expected 
      against the Cowboys also turned negative at -5.8 percentage points, 
      after two positive weeks. 
      On one hand, drops by receivers certainly don't help: the 
      Packers rank [second](https://www.pro-football-reference.com/years/2026/advanced.htm){:target="_blank" rel="noopener noreferrer"} 
      behind the Titans in this unfortunate category, with a 9% drop rate. 
      Golden dropped a costly pass just one play before catching the 
      touchdown at the end of the second quarter. On the other hand, 
      Love also ranks sixth 
      in percentage of bad throws, which could be partially explained by the 
      offensive line's performance. The unit has actually improved in pass 
      protection over the last two games (following the new additions), although 
      Love was still sacked three times against the Cowboys.

      Love also scored a TD from the 1-yard line. And that was about it for the run 
      game which, I don't know how many times we can say this, is basically 
      non-existent. A rush EPA/play of -0.157, 57 yards in total on 26 carries, 
      with the longest run coming from Love himself for 13 yards. I don't think these 
      numbers even deserve a comment.

      I can only hope that Josh Jacobs can help reinvigorate the running game. 
      Because the current running back corps doesn't seem up to the task, despite 
      some recent [excitement](https://www.youtube.com/watch?v=l46RpJU4Tw0){:target="_blank" rel="noopener noreferrer"} 
      which, to me, comes from completely naive analyses.

      The 8:17-minute drive in the second quarter, which ended with a field goal 
      by Smack, summarises the problem, I believe.
      The Packers rank ninth in the league with 21 red-zone trips (inside the opponent's 20), 
      but 24th in the percentage of trips that [ended](https://www.sharpfootballanalysis.com/stats-nfl/nfl-red-zone-stats/){:target="_blank" rel="noopener noreferrer"} with a TD, and 31st (second from the bottom) in the percentage of trips 
      ending with either a TD or a field goal.

      We don't know how to finish drives.
      
  defense: |
    Let me say it again. Gannon and his unit won the game, there is no doubt about it.
      It's not only that the Cowboys' offense was almost shut down until garbage time, 
      but rather the general sense of dominance throughout all four quarters. 
      The Packers defense was ferocious at every point of contact, holding Dallas 
      to a defensive EPA of -0.133. I think at times it was "too ferocious". 
      Two taunting penalties at this level are inexcusable, and this is something 
      that could cost the Packers dearly when games become win-or-go-home affairs.

      I think the secondary played particularly well. High marks for the 
      safeties Bullard and Williams, and the cornerbacks Nixon and Cisse, 
      who combined for 24 tackles. 
      Among the key plays of the game were interceptions by Williams, who continues 
      to establish himself as an elite player in the league, and 2025 rookie Cisse, 
      who is emerging as a leading cornerback for the Packers. A potential third 
      interception by Carrington Valentine was wiped out by a roughing-the-passer 
      penalty on Lukas Van Ness at 7:43 in the fourth quarter.
   
      The first interception by the Packers was a thing of beauty, both for the scheme 
      orchestrated by Gannon and Williams' execution. The two pictures below 
      show the play. Prescott was about to throw, still shaken by a heavy hit from 
      Zaire Franklin, who had blitzed him on the previous play. Williams lined up at 
      the line of scrimmage, almost as if ready to blitz Prescott again. As soon as the 
      center snapped the ball, he dropped back toward the middle of the field, 
      catching Prescott by surprise. The intended throw to Lamb on the right 
      ended up in the arms of the Packers safety.

      I think Williams' interception was a game changer, coming so early in 
      the game and killing Dallas' momentum as they tried to answer the Packers' 
      opening score. 

      <div class="nfl-img-row">
      <figure>
      <a class="nfl-img-link" href="/assets/img/nfl/week-06-cowboys/w626-q2-3-8-d-14-17.jpg">
      <img src="/assets/img/nfl/week-06-cowboys/w626-q2-3-8-d-14-17.jpg" alt="Third-and-8 play for Dallas, 37 seconds into the second quarter" loading="lazy">
      </a>
      <figcaption>Q2 · 3rd &amp; 8 · 14:23</figcaption>
      </figure>
      <figure>
      <a class="nfl-img-link" href="/assets/img/nfl/week-06-cowboys/w626-q2-3-8-d-14-17_v2.jpg">
      <img src="/assets/img/nfl/week-06-cowboys/w626-q2-3-8-d-14-17_v2.jpg" alt="Third-and-8 play for Dallas, 37 seconds into the second quarter" loading="lazy">
      </a>
      <figcaption>Q2 · 3rd &amp; 8 · 14:23</figcaption>
      </figure>
      </div>

      The second pick, by Cisse with two minutes remaining in the second quarter, 
      put a dagger into Dallas, giving Jordan Love the opportunity to score 
      and send the Packers into halftime with a 17-0 lead. 

      I also want to give credit to Javon Bullard, whom I have been somewhat critical 
      of in previous weeks for his excessive passion, which has cost the team 
      precious yards. His defensive play at the beginning of the fourth quarter, 
      breaking up a Prescott pass on fourth-and-2, set the final tone for the game, 
      showing the Cowboys that there was no room for high-risk gambles. 

      If there is something to criticize, it is the defense's inability to 
      consistently pressure the quarterback with its defensive line. 
      Only one sack, by Van Ness, and the second-lowest QB-hit rate of the season. 
      Help from Micah Parsons coming off the injury list is much needed at this point.

key_moments_intro: |
    Two things worth mentioning. First, 3/3 on field-goal attempts and 2/2 on 
    extra points for Trey Smack, who finally went perfect for an entire game. 
    Gold for LaFleur's special teams unit.

    On the negative side, 11 penalties for 96 yards marked the team’s highest total 
    since Week 2, which now leads the league with 465 penalty yards in total. 
    While things are improving on other fronts, penalties remain a huge problem 
    for the Packers. I blame the coaching staff for the team's lack of discipline. 
    A winning team cannot sustain this level of self-inflicted punishment — 
    especially with such narrow margins on offense, and even more so when 
    games become decisive for the season.

key_moments:
  - quarter: Q2
    clock: "14:23"
    title: Williams intercepts Prescott
    text: |
      It's the third time I've mentioned this play. But I think Williams' 
      interception set the tone for the defense throughout the game and broke 
      Dallas' early momentum.
---
