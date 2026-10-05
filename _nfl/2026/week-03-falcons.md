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
      or the O-line to become the [Cowboys’ Great Wall](https://www.dallascowboys.com/video/the-great-wall-of-dallas-the-perfect-unit-273811){:target="_blank" rel="noopener noreferrer"}.
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
      ultimately, his salary — works as long as fans remain entertained. 
      Given the effort they make to follow and support the team, they have every right to 
      criticize his performance.

  offense: |
    When the Packers scored with Watson on the second possession, I thought 
      LaFleur and the offense had finally managed to install a good game plan. 
      What followed were 27 unanswered points by the Falcons, stretching into the 
      fourth quarter, a final offensive EPA of 0.014 — basically zero expected points 
      added per play — and an offensive success rate below 40%. Notably, a rush EPA 
      of -0.301, with 17 (17!) yards on 9 (9!) carries, which forced the offense to become 
      one-dimensional and Love to throw 53 times.	
      
      The complete inability of the team to run the ball is a dagger to 
      LaFleur’s offense, which needs both air and ground threats to move the 
      ball as vertically as possible with explosive plays (the team had a 6% 
      explosive-play rate, compared with an average of 8.9% across the season). 
      Josh Jacobs, the sky knows when/if he will return, would probably not 
      add much to this picture. And we all know who to blame. 
      
      The offensive line was atrocious, both in pass protection and in the run game. 
      Lack of communication, lack of experience, poor fundamentals, players 
      not up to the standard. Maybe a linear combination of all of the above. 
      The QB-hit rate allowed jumped to 22.2%, more than twice the 9.4% 
      recorded against the Jets the previous week. 
      
      I think some frames from the game speak for themselves about how 
      this offense operated. The examples I'll discuss here 
      all come from the first half, but the underlying problems 
      remained largely unchanged after halftime

      The two figures in the first row below show two screen-pass plays, which 
      to me highlight the complete disorganization of the blocking. 
      In the first case, Love passed to Lloyd, who was immediately tackled, 
      despite having three O-linemen blocking for him against only one Atlanta linebacker. 
      On the second play, Lloyd is able to gain more yards, but both Packers O-linemen 
      contribute almost nothing to the play, being immediately overwhelmed by 
      a single Falcons defender.
      
      Pictures in the second row show why Love may not survive the 2026 season. 
      In the first image, Love is able to complete a pass to Kraft out of desperation, 
      with the three Falcons defenders on the right still able to hit Love at the end 
      of the play with a dangerous pancake. The second picture is almost inexplicable. 
      Love has the ball at the Packers’ 12-yard line and is hit by a Falcons linebacker 
      left completely unblocked to run at full speed toward the QB.  

      <div class="nfl-img-row">
      <figure>
      <a class="nfl-img-link" href="/assets/img/nfl/week-03-falcons/w326-q1-1-10-p-1-21.jpg">
      <img src="/assets/img/nfl/week-03-falcons/w326-q1-1-10-p-1-21.jpg" alt="First-and-10 play with 1:21 remaining in the first quarter" loading="lazy">
      </a>
      <figcaption>Q1 · 1st &amp; 10 · 1:21</figcaption>
      </figure>
      <figure>
      <a class="nfl-img-link" href="/assets/img/nfl/week-03-falcons/w326-q1-1-20-p-8-16.jpg">
      <img src="/assets/img/nfl/week-03-falcons/w326-q1-1-20-p-8-16.jpg" alt="First-and-20 play with 8:16 remaining in the first quarter" loading="lazy">
      </a>
      <figcaption>Q1 · 1st &amp; 20 · 8:16</figcaption>
      </figure>
      </div>

      <div class="nfl-img-row">
      <figure>
      <a class="nfl-img-link" href="/assets/img/nfl/week-03-falcons/w326-q1-3-13-p-0-30.jpg">
      <img src="/assets/img/nfl/week-03-falcons/w326-q1-3-13-p-0-30.jpg" alt="Third-and-13 play with 0:30 remaining in the first quarter" loading="lazy">
      </a>
      <figcaption>Q1 · 3rd &amp; 13 · 0:30</figcaption>
      </figure>
      <figure>
      <a class="nfl-img-link" href="/assets/img/nfl/week-03-falcons/w326-q2-3-9-p-9-43.jpg">
      <img src="/assets/img/nfl/week-03-falcons/w326-q2-3-9-p-9-43.jpg" alt="Third-and-9 play with 9:43 remaining in the second quarter" loading="lazy">
      </a>
      <figcaption>Q2 · 3rd &amp; 9 · 9:43</figcaption>
      </figure>
      </div>
     
      Blocking in the run game clearly did not work either. 
      Look at the two pictures below. In both cases Lloyd has no space 
      in the gap to run through, with O-linemen collapsing or leaving 
      defenders completely free to tackle the runner. In the second picture, 
      No. 53 of the Falcons is literally in the gap through which Lloyd is supposed 
      to run...  

      <div class="nfl-img-row">
      <figure>
      <a class="nfl-img-link" href="/assets/img/nfl/week-03-falcons/w326-q1-2-1-r-6-01.jpg">
      <img src="/assets/img/nfl/week-03-falcons/w326-q1-2-1-r-6-01.jpg" alt="Second-and-1 play with 6:01 remaining in the first quarter" loading="lazy">
      </a>
      <figcaption>Q1 · 2nd &amp; 1 · 6:01</figcaption>
      </figure>
      <figure>
      <a class="nfl-img-link" href="/assets/img/nfl/week-03-falcons/w326-q2-1-11-r-10-33.jpg">
      <img src="/assets/img/nfl/week-03-falcons/w326-q2-1-11-r-10-33.jpg" alt="First-and-11 play with 10:33 remaining in the second quarter" loading="lazy">
      </a>
      <figcaption>Q2 · 1st &amp; 11 · 10:33</figcaption>
      </figure>
      </div>

      While almost every sports outlet is probably pointing fingers at the 
      O-line — rightfully so — in my opinion Love’s performance, and his style of 
      play more generally, were not convincing either. I want to spend more than a 
      few words on this, and be honest. I don’t believe Love is a winning type of 
      QB, if such a breed even exists. To be precise with the terminology, to me 
      a winning QB is one who gets first downs. Multiple times. Consistently. Moving 
      the chains and exhausting the opposing defense. Six years into the league, 
      Love instead keeps favoring hero balls, deep passes into double coverage 
      and extremely tight windows with a very low probability of completion, rather 
      than checkdowns and efficient short plays that could move the chains. 
      Sure, when the pass connects — and often you also need an adjustment by 
      the receiver and a pinch of luck — the crowd explodes and everything seems 
      perfect. But in the grand scheme of things, how much does Love’s style actually 
      help the Packers win?
      
      When LaFleur says at halftime that one of the offense’s problems is its 
      inability to get into rhythm, well, I believe Love’s style becomes part 
      of the problem. 
      
      The pictures below show, in my opinion, two situations in which 
      better — or simply different — choices could have led to different 
      results. On the left, the Packers are facing second-and-13 from their own 20-yard line.
      Kraft in the middle and Brooks in the flat are open, but Love decides 
      to throw a deep ball to Golden in double coverage. The pass falls incomplete, 
      and the drive ends in a three-and-out on the next play. On the right, it is 
      second-and-5 in the second quarter. Here the receivers are covered more 
      effectively by the defense, but Kraft still has inside leverage on his defender. 
      Instead of attacking the middle of the field, Love again chooses 
      a 30-plus-yard throw to Golden, who is running a corner route. Once 
      again, three-and-out.
      
      <div class="nfl-img-row">
      <figure>
      <a class="nfl-img-link" href="/assets/img/nfl/week-03-falcons/w326-q1-2-13-p-0-36.jpg">
      <img src="/assets/img/nfl/week-03-falcons/w326-q1-2-13-p-0-36.jpg" alt="Second-and-13 play with 0:36 remaining in the first quarter" loading="lazy">
      </a>
      <figcaption>Q1 · 2nd &amp; 13 · 0:36</figcaption>
      </figure>
      <figure>
      <a class="nfl-img-link" href="/assets/img/nfl/week-03-falcons/w326-q2-2-5-p-3-56.jpg">
      <img src="/assets/img/nfl/week-03-falcons/w326-q2-2-5-p-3-56.jpg" alt="Second-and-5 play with 3:56 remaining in the second quarter" loading="lazy">
      </a>
      <figcaption>Q2 · 2nd &amp; 5 · 3:56</figcaption>
      </figure>
      </div>
      
      According to [PerThirtySix](https://perthirtysix.com/nfl/qbs?season=2026){:target="_blank" rel="noopener noreferrer"}, 
      Love has a CPOE of -10.1 over three weeks 
      (Completion Percentage Over Expected), with a success rate of 40%. 
      By comparison, Purdy leads with +6.3 and a 65.2% success rate. 
      To add a few numbers from the first few weeks, Love has an [aDOT](https://sumersports.com/players/quarterback/?plays=25){:target="_blank" rel="noopener noreferrer"}
      (Average Depth of Target) of 8.97, not too far below Purdy, again, at 10.65. 
      In summary, it seems to me that Love has a tendency to throw deep, while his 
      completion percentage and success rate remain low, meaning the QB (and the offense) 
      are not really able to move the chains.

      Along with Love and LaFleur’s vertical offense, I also believe that part of this 
      problem is overcompensation for the poor pass protection. Love has one of the 
      [lowest](https://sumersports.com/players/quarterback/?plays=25){:target="_blank" rel="noopener noreferrer"} times to throw in
      the league through Week 3. He seems to try to make the most of the few clean 
      opportunities he gets in the pocket to compensate for those in which he has to 
      scramble for his life.
      
  defense: |
    The interception 30 seconds into the game, and the three-and-out on the very 
      next possession, seemed to set the stage for a shutdown performance by the Packers defense. 
      Things went really south instead, with Gannon's group run over — literally — by 
      the Falcons. 
    
      The epitome of the defensive performance is probably in two numbers: 
      41 carries for a total of 242 yards on the ground by Atlanta, with the majority 
      (194) coming from Bijan Robinson. 
    
      Atlanta's offense was successful on 64.6% of its plays, with a very positive 0.332 
      expected points added per action. The Falcons basically succeeded on two out of three 
      plays, regardless of whether they attacked on the ground or through the air. 
      Combined with zero sacks (9.1% defensive sack rate against the Jets) and a 3.8% QB-hit rate 
      (16.7% against the Jets) by the Packers, we can fairly say that Atlanta's O-line 
      controlled the line of scrimmage in both phases, either protecting Penix 
      or opening lanes for their running backs.

key_moments_intro:
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
  - quarter: Q3
    clock: "10:01"
    title: Another 4th-and-1 stop 
    text: |
      I understand there was no other option. And it was also important to send a message, 
      showing that the team was fully committed to getting back into the game. Still, failing 
      to convert a fourth-and-1, 12 yards from the Falcons' goal line, probably put a 
      dagger through the Packers’ comeback hopes.
---
