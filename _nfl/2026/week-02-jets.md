---
title: "Packers at Jets"
description: "Green Bay visits the New York Jets in Week 2 of the 2026 season."
date: 2026-08-30
game_date: 2026-09-20
season: 2026
week_label: "Week 2"
week_order: 2
phase: regular
opponent: New York Jets
opponent_abbr: NYJ
home_away: away
team_logo: /assets/img/nfl/gb.png
opponent_logo: /assets/img/nfl/jet.png
stadium: MetLife Stadium
city: East Rutherford, New Jersey
kickoff: "1:00 PM EDT"
status: Final/OT
team_score: 20
opponent_score: 17
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
    url: https://www.nfl.com/games/packers-at-jets-2026-reg-2
  - label: ESPN team stats
    url: https://www.espn.com/nfl/matchup/_/gameId/401872936
stats:
  - id: offensive_epa_play
    group: Efficiency
    metric: Offensive EPA/play
    game: "-0.222"
    opponent: "-0.106"
    season: "-0.195"
  - id: defensive_epa_play
    group: Efficiency
    metric: Defensive EPA/play allowed
    game: "-0.106"
    opponent: "-0.222"
    season: "-0.067"
  - id: offensive_success_rate
    group: Efficiency
    metric: Offensive success rate
    game: "32.0%"
    opponent: "38.0%"
    season: "35.9%"
  - id: defensive_success_rate
    group: Efficiency
    metric: Defensive success rate allowed
    game: "38.0%"
    opponent: "32.0%"
    season: "36.9%"
  - id: dropback_epa_play
    group: Passing and rushing
    metric: Dropback EPA/play
    game: "-0.099"
    opponent: "0.086"
    season: "-0.075"
  - id: rush_epa_play
    group: Passing and rushing
    metric: Rush EPA/play
    game: "-0.441"
    opponent: "-0.439"
    season: "-0.435"
  - id: cpoe
    group: Passing and rushing
    metric: Completion percentage over expected
    game: "-13.6 pp"
    opponent: "5.9 pp"
    season: "-11.3 pp"
  - id: proe
    group: Passing and rushing
    metric: Pass rate over expected
    game: "-3.3 pp"
    opponent: "4.7 pp"
    season: "-2.5 pp"
  - id: explosive_play_rate
    group: Explosiveness
    metric: Explosive-play rate
    game: "6.0%"
    opponent: "4.2%"
    season: "10.3%"
  - id: explosive_play_rate_allowed
    group: Explosiveness
    metric: Explosive-play rate allowed
    game: "4.2%"
    opponent: "6.0%"
    season: "3.8%"
  - id: qb_hit_rate_allowed
    group: Pressure
    metric: QB-hit rate allowed
    game: "9.4%"
    opponent: "16.7%"
    season: "23.1%"
  - id: defensive_qb_hit_rate
    group: Pressure
    metric: Defensive QB-hit rate
    game: "16.7%"
    opponent: "9.4%"
    season: "16.5%"
  - id: sack_rate_allowed
    group: Pressure
    metric: Sack rate allowed
    game: "9.4%"
    opponent: "9.1%"
    season: "9.0%"
  - id: defensive_sack_rate
    group: Pressure
    metric: Defensive sack rate
    game: "9.1%"
    opponent: "9.4%"
    season: "9.7%"
  - id: third_down_efficiency
    group: Situational
    metric: Third-down efficiency
    game: "11.1%"
    opponent: "42.1%"
    season: "19.0%"
  - id: red_zone_efficiency
    group: Situational
    metric: Red-zone touchdown efficiency
    game: "50.0%"
    opponent: "66.7%"
    season: "37.5%"
  - id: turnover_margin
    group: Situational
    metric: Turnover margin
    game: "-1"
    opponent: "+1"
    season: "-2"
  - id: penalties_yards
    group: Situational
    metric: Penalties / yards
    game: "14 / 133"
    opponent: "13 / 156"
    season: "26 / 231"
  - id: neutral_pace
    group: Situational
    metric: Neutral-situation pace
    game: "41.3 sec/play"
    opponent: "31.2 sec/play"
    season: "32.6 sec/play"
tactical:
game_script: |
It wasn’t pretty. LaFleur’s words right after the game sum up quite well
the Packers’ longest game of the season so far, ending with a thrilling
finish in OT.

The Packers were challenged to provide a fast and strong response after
the collapse against the Vikings, possibly showing that the fourth-quarter
collapse was more of an unexpected event than the team’s usual response
when adversity takes over the script. LaFleur’s team has lost nine times
since 2023 after leading in the fourth quarter, four of those times while
holding a lead of 10+ points.

The Packers’ answer was neither pretty, decisive, nor convincing. In fact,
putting aside for a moment the NFL mantra — which I have never particularly
liked — a win is a win, the game leaves even more question marks about
the rest of the season. In my view, offensive efficiency, O-line consistency,
and team discipline were the areas where the high marks from the opener were
asking for confirmation in this game. I believe all three actually went south.

In particular, GB committed 14 penalties for 133 yards, worsening the
performance of the opener in Minnesota. This is an aspect that I find
particularly worrying. Beyond the technical and tactical aspects related to
players and coaching staff, giving away so many yards on penalties seems to
suggest, already this early in the season, a lack of common purpose among the
players and an inability by the coaching staff to instill and maintain
discipline.

offense:

defense: |
The game was largely taken over by both defenses, which kept the score at a
low 7–7 until the end of the third quarter and effectively controlled the game
until the final eight minutes of regulation, when Love led the comeback.

The Packers defense hit the quarterback almost twice as often as the Jets did,
while recording a similar number of sacks — four for the Packers and three for
the Jets. Lukas Van Ness had one of those days, with 10 total tackles, 1.5
sacks, four QB hits and three tackles for loss, making his presence more than
felt by the Jets offense. Looking at these numbers, it seems that the GB
defensive corps had a very productive game at the individual level.

However, team-wise, the balance slightly shifted toward the Jets, with the
Packers allowing their offense to operate at a somewhat higher success rate.
In fact, GB lost more than twice as much expected-point value per play as the
Jets, with an offensive EPA of −0.222 compared with the Jets’ −0.106. On the
other hand, GB did a better job of limiting explosive plays, allowing them on
just 4.2% of plays compared with 6.0% allowed by the Jets.

A mention of (dis)honour goes to Javon Bullard. For a team looking for
discipline, the unsportsmanlike conduct penalty called on third-and-9 in the
first quarter, after successfully defending a pass, was inexcusable.key_moments_intro: |
    The score remained 7–7 until the final three minutes of the third quarter.
    It was not a game defined by clear-cut turning points; momentum remained
    fairly steady throughout. Still, the special teams unit deserves an honorary
    mention. Green Bay allowed only two yards on three returns, consistently 
    nailing the Jets deep in their own territory at each field change. 
    A special mention goes to Trey Smack. Not that he did anything special, but
    that is probably the point. After years of struggles at the position, the
    Packers may have finally found a reliable kicker.
key_moments:
  - quarter: Q4
    clock: "1:20"
    title: Fourth-down stop
    text: |
      The defense stopped Braelon Allen at midfield on fourth-and-one right
      before the end of regulation. A first down there would almost certainly
      have put the Jets in position for a game-winning field goal.
---
