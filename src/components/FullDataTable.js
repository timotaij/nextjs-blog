const FullDataTable = (currentPlayerPick, percentileScores, playerGrades) => {
  return [
    {
      title: "Biographical Data",
      vsaverage: true,
      stats: [
        [
          2,
          "Minutes",
          currentPlayerPick[0]["Minutes"],
          percentileScores["Minutes"],
          playerGrades["Minutes"],
        ],
        [
          2,
          "Years of Experience",
          currentPlayerPick[0]["Years of Experience"],
          percentileScores["Years of Experience"],
          playerGrades["Years of Experience"],
        ],
        [
          2,
          "Overall 2K Rating",
          currentPlayerPick[0]["Overall 2K Rating"],
          percentileScores["Overall 2K Rating"],
          playerGrades["Overall 2K Rating"],
        ],
        [
          2,
          "2022-23 Cap Figure (M$)",
          currentPlayerPick[0]["2022-23 Cap Figure (M$)"],
          percentileScores["2022-23 Cap Figure (M$)"],
          playerGrades["2022-23 Cap Figure (M$)"],
        ],
        [
          1,
          "Age",
          currentPlayerPick[0]["Age"],
          percentileScores["Age"],
          playerGrades["Age"],
        ],
        [
          1,
          "Height",
          currentPlayerPick[0]["Height"],
          percentileScores["Height"],
          playerGrades["Height"],
        ],
        [
          1,
          "Weight",
          currentPlayerPick[0]["Weight"],
          percentileScores["Weight"],
          playerGrades["Weight"],
        ],
        [
          3,
          "2022-23 Cap_pct",
          currentPlayerPick[0]["2022-23 Cap_pct"],
          percentileScores["2022-23 Cap_pct"],
          playerGrades["2022-23 Cap_pct"],
        ],
      ],
    },
    {
      title: "Opportunity & Usage",
      vsaverage: true,
      stats: [
        [
          1,
          "Total Offensive Load_pct",
          currentPlayerPick[0]["Total Offensive Load_pct"],
          percentileScores["Total Offensive Load_pct"],
          playerGrades["Total Offensive Load_pct"]
        ],
        [
          2,
          "Minutes/Game",
          currentPlayerPick[0]["Minutes/Game"],
          percentileScores["Minutes/Game"],
          playerGrades["Minutes/Game"]
        ],
        [
          2,
          "Ball Dominance_pct",
          currentPlayerPick[0]["Ball Dominance_pct"],
          percentileScores["Ball Dominance_pct"],
          playerGrades["Ball Dominance_pct"]
        ],
        [
          2,
          "Quick Decision Making_pct",
          currentPlayerPick[0]["Quick Decision Making_pct"],
          percentileScores["Quick Decision Making_pct"],
          playerGrades["Quick Decision Making_pct"]
        ],
        [
          2,
          "Primary Defender Involvement Rate",
          currentPlayerPick[0]["Primary Defender Involvement Rate"],
          percentileScores["Primary Defender Involvement Rate"],
          playerGrades["Primary Defender Involvement Rate"]
        ],
        [
          3,
          "Games Played",
          currentPlayerPick[0]["Games Played"],
          percentileScores["Games Played"],
          playerGrades["Games Played"]
        ],
        [
          3,
          "Games Started",
          currentPlayerPick[0]["Games Started"],
          percentileScores["Games Started"],
          playerGrades["Games Started"]
        ],
        [
          3,
          "Games Started_pct",
          currentPlayerPick[0]["Games Started_pct"],
          percentileScores["Games Started_pct"],
          playerGrades["Games Started_pct"]
        ],
        [
          3,
          "Touches/Game",
          currentPlayerPick[0]["Touches/Game"],
          percentileScores["Touches/Game"],
          playerGrades["Touches/Game"]
        ],
        [
          3,
          "Scoring Possessions / 75",
          currentPlayerPick[0]["Scoring Possessions / 75"],
          percentileScores["Scoring Possessions / 75"],
          playerGrades["Scoring Possessions / 75"]
        ],
        [
          3,
          "Usage Rate_pct",
          currentPlayerPick[0]["Usage Rate_pct"],
          percentileScores["Usage Rate_pct"],
          playerGrades["Usage Rate_pct"]
        ],
        [
          3,
          "True Usage_pct",
          currentPlayerPick[0]["True Usage_pct"],
          percentileScores["True Usage_pct"],
          playerGrades["True Usage_pct"]
        ],
        [
          3,
          "Time Off-Ball_pct",
          currentPlayerPick[0]["Time Off-Ball_pct"],
          percentileScores["Time Off-Ball_pct"],
          playerGrades["Time Off-Ball_pct"]
        ],
        [
          3,
          "Quick Decision Making Pass_pct",
          currentPlayerPick[0]["Quick Decision Making Pass_pct"],
          percentileScores["Quick Decision Making Pass_pct"],
          playerGrades["Quick Decision Making Pass_pct"]
        ],
        [
          3,
          "Offensive Involvement Rate",
          currentPlayerPick[0]["Offensive Involvement Rate"],
          percentileScores["Offensive Involvement Rate"],
          playerGrades["Offensive Involvement Rate"]
        ],
        [
          3,
          "FGA",
          currentPlayerPick[0]["FGA"],
          percentileScores["FGA"],
          playerGrades["FGA"]
        ],
        [
          3,
          "3PT FGA",
          currentPlayerPick[0]["3PT FGA"],
          percentileScores["3PT FGA"],
          playerGrades["3PT FGA"]
        ],
        [
          3,
          "2PT FGA",
          currentPlayerPick[0]["2PT FGA"],
          percentileScores["2PT FGA"],
          playerGrades["2PT FGA"]
        ],
        [
          3,
          "Rim FGA",
          currentPlayerPick[0]["Rim FGA"],
          percentileScores["Rim FGA"],
          playerGrades["Rim FGA"]
        ],
        [
          3,
          "Short Midrange FGA",
          currentPlayerPick[0]["Short Midrange FGA"],
          percentileScores["Short Midrange FGA"],
          playerGrades["Short Midrange FGA"]
        ],
        [
          3,
          "Minutes Consistency",
          currentPlayerPick[0]["Minutes Consistency"],
          percentileScores["Minutes Consistency"],
          playerGrades["Minutes Consistency"]
        ],
        [
          3,
          "Usage Consistency",
          currentPlayerPick[0]["Usage Consistency"],
          percentileScores["Usage Consistency"],
          playerGrades["Usage Consistency"]
        ],
      ],
    },
    {
      title: "Contextual Data",
      vsaverage: false,
      stats: [
        [
          3,
          "Lineup Finishing",
          currentPlayerPick[0]["Lineup Finishing_pct"],
          percentileScores["Lineup Finishing_pct"],
          playerGrades["Lineup Finishing_pct"],
        ],
        [
          3,
          "Lineup Playmaking",
          currentPlayerPick[0]["Lineup Playmaking_pct"],
          percentileScores["Lineup Playmaking_pct"],
          playerGrades["Lineup Playmaking_pct"],
        ],
        [
          3,
          "Lineup Spacing",
          currentPlayerPick[0]["Lineup Spacing_pct"],
          percentileScores["Lineup Spacing_pct"],
          playerGrades["Lineup Spacing_pct"],
        ],
        [
          1,
          "Matchup Difficulty",
          currentPlayerPick[0]["Matchup Difficulty"],
          percentileScores["Matchup Difficulty"],
          playerGrades["Matchup Difficulty"],
        ],
        [
          1,
          "D Position Versatility",
          currentPlayerPick[0]["Defensive Positional Versatility"],
          percentileScores["Defensive Positional Versatility"],
          playerGrades["Defensive Positional Versatility"],
        ],
        [
          3,
          "D Role Versatility",
          currentPlayerPick[0]["Defensive Role Versatility"],
          percentileScores["Defensive Role Versatility"],
          playerGrades["Defensive Role Versatility"],
        ],
        [
          2,
          "Foul Trouble Percentage",
          currentPlayerPick[0]["Foul Trouble_pct"],
          percentileScores["Foul Trouble_pct"],
          playerGrades["Foul Trouble_pct"],
        ],
        [
          2,
          "Fouls Drawn / 75",
          currentPlayerPick[0]["Fouls Drawn / 75"],
          percentileScores["Fouls Drawn / 75"],
          playerGrades["Fouls Drawn / 75"],
        ],
        [
          2,
          "Fouls Committed / 75",
          currentPlayerPick[0]["Fouls Committed / 75"],
          percentileScores["Fouls Committed / 75"],
          playerGrades["Fouls Committed / 75"],
        ],
        [
          2,
          "Overall Coverage Versatility",
          currentPlayerPick[0]["Overall Coverage Versatility"],
          percentileScores["Overall Coverage Versatility"],
          playerGrades["Overall Coverage Versatility"],
        ],
        [
          2,
          "Overall Coverage Aggression",
          currentPlayerPick[0]["Overall Coverage Aggression"],
          percentileScores["Overall Coverage Aggression"],
          playerGrades["Overall Coverage Aggression"],
        ],
        [
          3,
          "Guarded O-LEBRON",
          currentPlayerPick[0]["Guarded O-LEBRON"],
          percentileScores["Guarded O-LEBRON"],
          playerGrades["Guarded O-LEBRON"],
        ],
        [
          3,
          "P&R Coverage Aggression",
          currentPlayerPick[0]["P&R Coverage Aggression"],
          percentileScores["P&R Coverage Aggression"],
          playerGrades["P&R Coverage Aggression"],
        ],
        [
          3,
          "P&R Coverage Versatility",
          currentPlayerPick[0]["P&R Coverage Versatility"],
          percentileScores["P&R Coverage Versatility"],
          playerGrades["P&R Coverage Versatility"],
        ],
        [
          3,
          "DHO Coverage Aggression",
          currentPlayerPick[0]["DHO Coverage Aggression"],
          percentileScores["DHO Coverage Aggression"],
          playerGrades["DHO Coverage Aggression"],
        ],
        [
          3,
          "DHO Coverage Versatility",
          currentPlayerPick[0]["DHO Coverage Versatility"],
          percentileScores["DHO Coverage Versatility"],
          playerGrades["DHO Coverage Versatility"],
        ],
        [
          3,
          "Off-Ball Coverage Aggression",
          currentPlayerPick[0]["Off-Ball Coverage Aggression"],
          percentileScores["Off-Ball Coverage Aggression"],
          playerGrades["Off-Ball Coverage Aggression"],
        ],
        [
          3,
          "Off-Ball Coverage Versatility",
          currentPlayerPick[0]["Off-Ball Coverage Versatility"],
          percentileScores["Off-Ball Coverage Versatility"],
          playerGrades["Off-Ball Coverage Versatility"],
        ],
        [
          3,
          "Stable Avg 2PT Shot Distance",
          currentPlayerPick[0]["Stable Avg 2PT Shot Distance"],
          percentileScores["Stable Avg 2PT Shot Distance"],
          playerGrades["Stable Avg 2PT Shot Distance"],
        ],
        [
          3,
          "Stable Avg 2PT Shot Distance",
          currentPlayerPick[0]["Stable Avg 2PT Shot Distance"],
          percentileScores["Stable Avg 2PT Shot Distance"],
          playerGrades["Stable Avg 2PT Shot Distance"],
        ],
        [
          3,
          "Guarded Ball Dominance_pct",
          currentPlayerPick[0]["Guarded Ball Dominance_pct"],
          percentileScores["Guarded Ball Dominance_pct"],
          playerGrades["Guarded Ball Dominance_pct"],
        ],
        [
          3,
          "Guarded Off-Ball_pct",
          currentPlayerPick[0]["Guarded Off-Ball_pct"],
          percentileScores["Guarded Off-Ball_pct"],
          playerGrades["Guarded Off-Ball_pct"],
        ],
        [
          3,
          "Avg Height Guarded",
          currentPlayerPick[0]["Avg Height Guarded"],
          percentileScores["Avg Height Guarded"],
          playerGrades["Avg Height Guarded"],
        ],
        [
          3,
          "Pace Impact Estimate",
          currentPlayerPick[0]["Pace Impact Estimate"],
          percentileScores["Pace Impact Estimate"],
          playerGrades["Pace Impact Estimate"],
        ],
      ],
    },
    {
      title: "Lineup Context",
      vsaverage: false,
      stats: [
        [
          1,
          "Overall Gravity Context",
          currentPlayerPick[0]["Overall Gravity Context"],
          percentileScores["Overall Gravity Context"],
          playerGrades["Overall Gravity Context"]
        ],
        [
          2,
          "Rim Shot Creation Context",
          currentPlayerPick[0]["Rim Shot Creation Context"],
          percentileScores["Rim Shot Creation Context"],
          playerGrades["Rim Shot Creation Context"]
        ],
        [
          2,
          "Rim Shot Making Context",
          currentPlayerPick[0]["Rim Shot Making Context"],
          percentileScores["Rim Shot Making Context"],
          playerGrades["Rim Shot Making Context"]
        ],
        [
          2,
          "Playmaking Talent Context",
          currentPlayerPick[0]["Playmaking Talent Context"],
          percentileScores["Playmaking Talent Context"],
          playerGrades["Playmaking Talent Context"]
        ],
        [
          2,
          "One on One Talent Context",
          currentPlayerPick[0]["One on One Talent Context"],
          percentileScores["One on One Talent Context"],
          playerGrades["One on One Talent Context"]
        ],
        [
          2,
          "On-Ball Defense Context",
          currentPlayerPick[0]["On-Ball Defense Context"],
          percentileScores["On-Ball Defense Context"],
          playerGrades["On-Ball Defense Context"]
        ],
        [
          2,
          "Ball Screen Navigation Context",
          currentPlayerPick[0]["Ball Screen Navigation Context"],
          percentileScores["Ball Screen Navigation Context"],
          playerGrades["Ball Screen Navigation Context"]
        ],
        [
          2,
          "Off-Ball Chaser Defense Context",
          currentPlayerPick[0]["Off-Ball Chaser Defense Context"],
          percentileScores["Off-Ball Chaser Defense Context"],
          playerGrades["Off-Ball Chaser Defense Context"]
        ],
        [
          2,
          "Help Defensive Activity Context",
          currentPlayerPick[0]["Help Defensive Activity Context"],
          percentileScores["Help Defensive Activity Context"],
          playerGrades["Help Defensive Activity Context"]
        ],
        [
          2,
          "On-Ball Gravity Context",
          currentPlayerPick[0]["On-Ball Gravity Context"],
          percentileScores["On-Ball Gravity Context"],
          playerGrades["On-Ball Gravity Context"]
        ],
        [
          2,
          "Off-Ball Gravity Context",
          currentPlayerPick[0]["Off-Ball Gravity Context"],
          percentileScores["Off-Ball Gravity Context"],
          playerGrades["Off-Ball Gravity Context"]
        ],
        [
          2,
          "LEBRON Context",
          currentPlayerPick[0]["LEBRON Context"],
          percentileScores["LEBRON Context"],
          playerGrades["LEBRON Context"]
        ],
        [
          2,
          "O-LEBRON Context",
          currentPlayerPick[0]["O-LEBRON Context"],
          percentileScores["O-LEBRON Context"],
          playerGrades["O-LEBRON Context"]
        ],
        [
          2,
          "D-LEBRON Context",
          currentPlayerPick[0]["D-LEBRON Context"],
          percentileScores["D-LEBRON Context"],
          playerGrades["D-LEBRON Context"]
        ],
        [
          3,
          "Experience Context",
          currentPlayerPick[0]["Experience Context"],
          percentileScores["Experience Context"],
          playerGrades["Experience Context"]
        ],
        [
          3,
          "Age Context",
          currentPlayerPick[0]["Age Context"],
          percentileScores["Age Context"],
          playerGrades["Age Context"],
            ],
        [
          3,
          "Height Context",
          currentPlayerPick[0]["Height Context"],
          percentileScores["Height Context"],
          playerGrades["Height Context"]
        ],
        [
          3,
          "Position Estimate Context",
          currentPlayerPick[0]["Position Estimate Context"],
          percentileScores["Position Estimate Context"],
          playerGrades["Position Estimate Context"]
        ],
        [
          3,
          "Games Started % Context",
          currentPlayerPick[0]["Games Started % Context"],
          percentileScores["Games Started % Context"],
          playerGrades["Games Started % Context"]
        ],
        [
          3,
          "Minutes Per Game Context",
          currentPlayerPick[0]["Minutes Per Game Context"],
          percentileScores["Minutes Per Game Context"],
          playerGrades["Minutes Per Game Context"]
        ],
        [
          3,
          "Touches Per Game Context",
          currentPlayerPick[0]["Touches Per Game Context"],
          percentileScores["Touches Per Game Context"],
          playerGrades["Touches Per Game Context"]
        ],
        [
          3,
          "Scoring Possessions Per 75 Context",
          currentPlayerPick[0]["Scoring Possessions Per 75 Context"],
          percentileScores["Scoring Possessions Per 75 Context"],
          playerGrades["Scoring Possessions Per 75 Context"]
        ],
        [
          3,
          "Ball Dominance % Context",
          currentPlayerPick[0]["Ball Dominance % Context"],
          percentileScores["Ball Dominance % Context"],
          playerGrades["Ball Dominance % Context"]
        ],
        [
          3,
          "Usage Rate % Context",
          currentPlayerPick[0]["Usage Rate % Context"],
          percentileScores["Usage Rate % Context"],
          playerGrades["Usage Rate % Context"]
        ],
        [
          3,
          "Total Offensive Load % Context",
          currentPlayerPick[0]["Total Offensive Load % Context"],
          percentileScores["Total Offensive Load % Context"],
          playerGrades["Total Offensive Load % Context"]
        ],
        [
          3,
          "Matchup Difficulty Context",
          currentPlayerPick[0]["Matchup Difficulty Context"],
          percentileScores["Matchup Difficulty Context"],
          playerGrades["Matchup Difficulty Context"]
        ],
        [
          3,
          "Defensive Position Estimate Context",
          currentPlayerPick[0]["Defensive Position Estimate Context"],
          percentileScores["Defensive Position Estimate Context"],
          playerGrades["Defensive Position Estimate Context"]
        ],
        [
          3,
          "Defensive Positional Versatility Context",
          currentPlayerPick[0]["Defensive Positional Versatility Context"],
          percentileScores["Defensive Positional Versatility Context"],
          playerGrades["Defensive Positional Versatility Context"]
        ],
        [
          3,
          "Defensive Role Versatility Context",
          currentPlayerPick[0]["Defensive Role Versatility Context"],
          percentileScores["Defensive Role Versatility Context"],
          playerGrades["Defensive Role Versatility Context"]
        ],
        [
          3,
          "Foul Trouble % Context",
          currentPlayerPick[0]["Foul Trouble % Context"],
          percentileScores["Foul Trouble % Context"],
          playerGrades["Foul Trouble % Context"]
        ],
        [
          3,
          "3PT Shot Making Context",
          currentPlayerPick[0]["3PT Shot Making Context"],
          percentileScores["3PT Shot Making Context"],
          playerGrades["3PT Shot Making Context"]
        ],
        [
          3,
          "3PT Shot Creation Context",
          currentPlayerPick[0]["3PT Shot Creation Context"],
          percentileScores["3PT Shot Creation Context"],
          playerGrades["3PT Shot Creation Context"]
        ],
        [
          3,
          "3PT Shooting Talent Context",
          currentPlayerPick[0]["3PT Shooting Talent Context"],
          percentileScores["3PT Shooting Talent Context"],
          playerGrades["3PT Shooting Talent Context"]
        ],
        [
          3,
          "Cuts Per 75 Context",
          currentPlayerPick[0]["Cuts Per 75 Context"],
          percentileScores["Cuts Per 75 Context"],
          playerGrades["Cuts Per 75 Context"]
        ],
        [
          3,
          "Drives Per 75 Context",
          currentPlayerPick[0]["Drives Per 75 Context"],
          percentileScores["Drives Per 75 Context"],
          playerGrades["Drives Per 75 Context"]
        ],
        [
          3,
          "Finishing Talent Context",
          currentPlayerPick[0]["Finishing Talent Context"],
          percentileScores["Finishing Talent Context"],
          playerGrades["Finishing Talent Context"]
        ],
        [
          3,
          "Passing Creation Volume Context",
          currentPlayerPick[0]["Passing Creation Volume Context"],
          percentileScores["Passing Creation Volume Context"],
          playerGrades["Passing Creation Volume Context"]
        ],
        [
          3,
          "Passing Efficiency Context",
          currentPlayerPick[0]["Passing Efficiency Context"],
          percentileScores["Passing Efficiency Context"],
          playerGrades["Passing Efficiency Context"]
        ],
        [
          3,
          "Passing Versatility Context",
          currentPlayerPick[0]["Passing Versatility Context"],
          percentileScores["Passing Versatility Context"],
          playerGrades["Passing Versatility Context"]
        ],
        [
          3,
          "Passing Creation Quality Context",
          currentPlayerPick[0]["Passing Creation Quality Context"],
          percentileScores["Passing Creation Quality Context"],
          playerGrades["Passing Creation Quality Context"]
        ],
        [
          3,
          "Box Creation Context",
          currentPlayerPick[0]["Box Creation Context"],
          percentileScores["Box Creation Context"],
          playerGrades["Box Creation Context"]
        ],
        [
          3,
          "Putbacks Per 75 Poss Context",
          currentPlayerPick[0]["Putbacks Per 75 Poss Context"],
          percentileScores["Putbacks Per 75 Poss Context"],
          playerGrades["Putbacks Per 75 Poss Context"]
        ],
        [
          3,
          "Offensive Rebounding Impact Context",
          currentPlayerPick[0]["Offensive Rebounding Impact Context"],
          percentileScores["Offensive Rebounding Impact Context"],
          playerGrades["Offensive Rebounding Impact Context"]
        ],
        [
          3,
          "Offensive Rebounding Talent Context",
          currentPlayerPick[0]["Offensive Rebounding Talent Context"],
          percentileScores["Offensive Rebounding Talent Context"],
          playerGrades["Offensive Rebounding Talent Context"]
        ],
        [
          3,
          "Steals Per 75 Poss Context",
          currentPlayerPick[0]["Steals Per 75 Poss Context"],
          percentileScores["Steals Per 75 Poss Context"],
          playerGrades["Steals Per 75 Poss Context"]
        ],
        [
          3,
          "Rim Deterrence % Context",
          currentPlayerPick[0]["Rim Deterrence % Context"],
          percentileScores["Rim Deterrence % Context"],
          playerGrades["Rim Deterrence % Context"]
        ],
        [
          3,
          "Rim dFG% vs Expected pct Context",
          currentPlayerPick[0]["Rim dFG% vs Expected pct Context"],
          percentileScores["Rim dFG% vs Expected pct Context"],
          playerGrades["Rim dFG% vs Expected pct Context"]
        ],
        [
          3,
          "Rim Points Saved Per 75 Context",
          currentPlayerPick[0]["Rim Points Saved Per 75 Context"],
          percentileScores["Rim Points Saved Per 75 Context"],
          playerGrades["Rim Points Saved Per 75 Context"]
        ],
        [
          3,
          "Rim Protection Context",
          currentPlayerPick[0]["Rim Protection Context"],
          percentileScores["Rim Protection Context"],
          playerGrades["Rim Protection Context"]
        ],
        [
          3,
          "Defensive Rebounding Impact Context",
          currentPlayerPick[0]["Defensive Rebounding Impact Context"],
          percentileScores["Defensive Rebounding Impact Context"],
          playerGrades["Defensive Rebounding Impact Context"]
        ],
        [
          3,
          "Defensive Rebounding Talent Context",
          currentPlayerPick[0]["Defensive Rebounding Talent Context"],
          percentileScores["Defensive Rebounding Talent Context"],
          playerGrades["Defensive Rebounding Talent Context"]
        ],
        [
          3,
          "Defensive eFG% Impact Context",
          currentPlayerPick[0]["Defensive eFG% Impact Context"],
          percentileScores["Defensive eFG% Impact Context"],
          playerGrades["Defensive eFG% Impact Context"]
        ],
        [
          3,
          "Defensive FT Rate Impact Context",
          currentPlayerPick[0]["Defensive FT Rate Impact Context"],
          percentileScores["Defensive FT Rate Impact Context"],
          playerGrades["Defensive FT Rate Impact Context"]
        ],
        [
          3,
          "Defensive Turnover Generation Impact Context",
          currentPlayerPick[0]["Defensive Turnover Generation Impact Context"],
          percentileScores["Defensive Turnover Generation Impact Context"],
          playerGrades["Defensive Turnover Generation Impact Context"]
        ],
        [
          3,
          "Offensive eFG% Impact Context",
          currentPlayerPick[0]["Offensive eFG% Impact Context"],
          percentileScores["Offensive eFG% Impact Context"],
          playerGrades["Offensive eFG% Impact Context"]
        ],
        [
          3,
          "Offensive FT Rate Impact Context",
          currentPlayerPick[0]["Offensive FT Rate Impact Context"],
          percentileScores["Offensive FT Rate Impact Context"],
          playerGrades["Offensive FT Rate Impact Context"]
        ],
        [
          3,
          "Offensive Turnover Generation Impact Context",
          currentPlayerPick[0]["Offensive Turnover Generation Impact Context"],
          percentileScores["Offensive Turnover Generation Impact Context"],
          playerGrades["Offensive Turnover Generation Impact Context"]
        ],
        [
          3,
          "Floater Talent Context",
          currentPlayerPick[0]["Floater Talent Context"],
          percentileScores["Floater Talent Context"],
          playerGrades["Floater Talent Context"]
        ],
        [
          3,
          "C&S 3PT Shot Making Context",
          currentPlayerPick[0]["C&S 3PT Shot Making Context"],
          percentileScores["C&S 3PT Shot Making Context"],
          playerGrades["C&S 3PT Shot Making Context"]
        ],
        [
          3,
          "Midrange Pull Up Talent Context",
          currentPlayerPick[0]["Midrange Pull Up Talent Context"],
          percentileScores["Midrange Pull Up Talent Context"],
          playerGrades["Midrange Pull Up Talent Context"]
        ],
        [
          3,
          "3PT Pull Up Talent Context",
          currentPlayerPick[0]["3PT Pull Up Talent Context"],
          percentileScores["3PT Pull Up Talent Context"],
          playerGrades["3PT Pull Up Talent Context"]
        ],
        [
          3,
          "Middle Game Talent Context",
          currentPlayerPick[0]["Middle Game Talent Context"],
          percentileScores["Middle Game Talent Context"],
          playerGrades["Middle Game Talent Context"]
        ],
        [
          3,
          "Deep 3PT Shooting Talent Context",
          currentPlayerPick[0]["Deep 3PT Shooting Talent Context"],
          percentileScores["Deep 3PT Shooting Talent Context"],
          playerGrades["Deep 3PT Shooting Talent Context"]
        ],
        [
          3,
          "Pull Up Shooting Talent Context",
          currentPlayerPick[0]["Pull Up Shooting Talent Context"],
          percentileScores["Pull Up Shooting Talent Context"],
          playerGrades["Pull Up Shooting Talent Context"]
        ],
        [
          3,
          "Off-Ball Shot Making Context",
          currentPlayerPick[0]["Off-Ball Shot Making Context"],
          percentileScores["Off-Ball Shot Making Context"],
          playerGrades["Off-Ball Shot Making Context"]
        ],
        [
          3,
          "Self-Created Shot Making Context",
          currentPlayerPick[0]["Self-Created Shot Making Context"],
          percentileScores["Self-Created Shot Making Context"],
          playerGrades["Self-Created Shot Making Context"]
        ],
        [
          3,
          "Transition Shooting Talent Context",
          currentPlayerPick[0]["Transition Shooting Talent Context"],
          percentileScores["Transition Shooting Talent Context"],
          playerGrades["Transition Shooting Talent Context"]
        ],
        [
          3,
          "Half Court Shooting Talent Context",
          currentPlayerPick[0]["Half Court Shooting Talent Context"],
          percentileScores["Half Court Shooting Talent Context"],
          playerGrades["Half Court Shooting Talent Context"]
        ],
        [
          3,
          "Overall Shot Making Context",
          currentPlayerPick[0]["Overall Shot Making Context"],
          percentileScores["Overall Shot Making Context"],
          playerGrades["Overall Shot Making Context"]
        ],
        [
          3,
          "Overall Shot Creation Context",
          currentPlayerPick[0]["Overall Shot Creation Context"],
          percentileScores["Overall Shot Creation Context"],
          playerGrades["Overall Shot Creation Context"]
        ],
        [
          3,
          "Shooting Talent Context",
          currentPlayerPick[0]["Shooting Talent Context"],
          percentileScores["Shooting Talent Context"],
          playerGrades["Shooting Talent Context"]
        ],
        [
          3,
          "Screener Mobile Defense Context",
          currentPlayerPick[0]["Screener Mobile Defense Context"],
          percentileScores["Screener Mobile Defense Context"],
          playerGrades["Screener Mobile Defense Context"]
        ],
        [
          3,
          "Screener Rim Defense Context",
          currentPlayerPick[0]["Screener Rim Defense Context"],
          percentileScores["Screener Rim Defense Context"],
          playerGrades["Screener Rim Defense Context"]
        ],
        [
          3,
          "Post Defense Context",
          currentPlayerPick[0]["Post Defense Context"],
          percentileScores["Post Defense Context"],
          playerGrades["Post Defense Context"]
        ],
        [
          3,
          "Screening Talent Context",
          currentPlayerPick[0]["Screening Talent Context"],
          percentileScores["Screening Talent Context"],
          playerGrades["Screening Talent Context"]
        ],
        [
          3,
          "Quick Decision Making % Context",
          currentPlayerPick[0]["Quick Decision Making % Context"],
          percentileScores["Quick Decision Making % Context"],
          playerGrades["Quick Decision Making % Context"]
        ],
        [
          3,
          "Fouls Drawn Per 75 Context",
          currentPlayerPick[0]["Fouls Drawn Per 75 Context"],
          percentileScores["Fouls Drawn Per 75 Context"],
          playerGrades["Fouls Drawn Per 75 Context"]
        ],
        [
          3,
          "Fouls Committed Per 75 Context",
          currentPlayerPick[0]["Fouls Committed Per 75 Context"],
          percentileScores["Fouls Committed Per 75 Context"],
          playerGrades["Fouls Committed Per 75 Context"]
        ],
        [
          3,
          "Offensive Involvement Rate Context",
          currentPlayerPick[0]["Offensive Involvement Rate Context"],
          percentileScores["Offensive Involvement Rate Context"],
          playerGrades["Offensive Involvement Rate Context"]
        ],
        [
          3,
          "Primary Defender Involvement Rate Context",
          currentPlayerPick[0]["Primary Defender Involvement Rate Context"],
          percentileScores["Primary Defender Involvement Rate Context"],
          playerGrades["Primary Defender Involvement Rate Context"]
        ],
        [
          3,
          "BPM LA-RAPM Context",
          currentPlayerPick[0]["BPM LA-RAPM Context"],
          percentileScores["BPM LA-RAPM Context"],
          playerGrades["BPM LA-RAPM Context"]
        ],
        [
          3,
          "O-BPM LARAPM Context",
          currentPlayerPick[0]["O-BPM LARAPM Context"],
          percentileScores["O-BPM LARAPM Context"],
          playerGrades["O-BPM LARAPM Context"]
        ],
        [
          3,
          "D-BPM LA-RAPM Context",
          currentPlayerPick[0]["D-BPM LA-RAPM Context"],
          percentileScores["D-BPM LA-RAPM Context"],
          playerGrades["D-BPM LA-RAPM Context"]
        ],
        [
          3,
          "EPM Context",
          currentPlayerPick[0]["EPM Context"],
          percentileScores["EPM Context"],
          playerGrades["EPM Context"]
        ],
        [
          3,
          "O-EPM Context",
          currentPlayerPick[0]["O-EPM Context"],
          percentileScores["O-EPM Context"],
          playerGrades["O-EPM Context"]
        ],
        [
          3,
          "D-EPM Context",
          currentPlayerPick[0]["D-EPM Context"],
          percentileScores["D-EPM Context"],
          playerGrades["D-EPM Context"]
        ],
        [
          3,
          "Overall 2K Rating Context",
          currentPlayerPick[0]["Overall 2K Rating Context"],
          percentileScores["Overall 2K Rating Context"],
          playerGrades["Overall 2K Rating Context"]
        ],
      ],
    },
    {
      title: "Perimeter Shooting",
      vsaverage: false,
      stats: [
        [
          1,
          "3PT Shooting Talent",
          currentPlayerPick[0]["3PT Shooting Talent"],
          percentileScores["3PT Shooting Talent"],
          playerGrades["3PT Shooting Talent"]
        ],
        [
          2,
          "3PT_pct",
          currentPlayerPick[0]["3PT_pct"],
          percentileScores["3PT_pct"],
          playerGrades["3PT_pct"]
        ],
        [
          2,
          "3PT Shot Quality",
          currentPlayerPick[0]["3PT Shot Quality"],
          percentileScores["3PT Shot Quality"],
          playerGrades["3PT Shot Quality"]
        ],
        [
          2,
          "3PT Shot Making",
          currentPlayerPick[0]["3PT Shot Making"],
          percentileScores["3PT Shot Making"],
          playerGrades["3PT Shot Making"]
        ],
        [
          2,
          "3PT Shot Creation",
          currentPlayerPick[0]["3PT Shot Creation"],
          percentileScores["3PT Shot Creation"],
          playerGrades["3PT Shot Creation"]
        ],
        [
          2,
          "C&S 3PT Shot Making",
          currentPlayerPick[0]["C&S 3PT Shot Making"],
          percentileScores["C&S 3PT Shot Making"],
          playerGrades["C&S 3PT Shot Making"]
        ],
        [
          2,
          "3PT Pull Up Talent",
          currentPlayerPick[0]["3PT Pull Up Talent"],
          percentileScores["3PT Pull Up Talent"],
          playerGrades["3PT Pull Up Talent"]
        ],
        [
          2,
          "Off-Ball Gravity",
          currentPlayerPick[0]["Off-Ball Gravity"],
          percentileScores["Off-Ball Gravity"],
          playerGrades["Off-Ball Gravity"]
        ],
        [
          3,
          "Pull Up 3PT_pct",
          currentPlayerPick[0]["Pull Up 3PT_pct"],
          percentileScores["Pull Up 3PT_pct"],
          playerGrades["Pull Up 3PT_pct"]
        ],
        [
          3,
          "C&S 3PT_pct",
          currentPlayerPick[0]["C&S 3PT_pct"],
          percentileScores["C&S 3PT_pct"],
          playerGrades["C&S 3PT_pct"]
        ],
        [
          3,
          "ATB 3PT_pct",
          currentPlayerPick[0]["ATB 3PT_pct"],
          percentileScores["ATB 3PT_pct"],
          playerGrades["ATB 3PT_pct"]
        ],
        [
          3,
          "Corner 3PT_pct",
          currentPlayerPick[0]["Corner 3PT_pct"],
          percentileScores["Corner 3PT_pct"],
          playerGrades["Corner 3PT_pct"]
        ],
        [
          3,
          "3PT Openness Rating",
          currentPlayerPick[0]["3PT Openness Rating"],
          percentileScores["3PT Openness Rating"],
          playerGrades["3PT Openness Rating"]
        ],
        [
          3,
          "Avg. 3PT Shot Distance",
          currentPlayerPick[0]["Avg. 3PT Shot Distance"],
          percentileScores["Avg. 3PT Shot Distance"],
          playerGrades["Avg. 3PT Shot Distance"]
        ],
        [
          3,
          "3PT Foul Rate_pct",
          currentPlayerPick[0]["3PT Foul Rate_pct"],
          percentileScores["3PT Foul Rate_pct"],
          playerGrades["3PT Foul Rate_pct"]
        ],
        [
          3,
          "3PTA Rate_pct",
          currentPlayerPick[0]["3PTA Rate_pct"],
          percentileScores["3PTA Rate_pct"],
          playerGrades["3PTA Rate_pct"]
        ],
        [
          3,
          "3PT Pull Up Shot Making",
          currentPlayerPick[0]["3PT Pull Up Shot Making"],
          percentileScores["3PT Pull Up Shot Making"],
          playerGrades["3PT Pull Up Shot Making"]
        ],
        [
          3,
          "3PT Pull Up Shot Quality",
          currentPlayerPick[0]["3PT Pull Up Shot Quality"],
          percentileScores["3PT Pull Up Shot Quality"],
          playerGrades["3PT Pull Up Shot Quality"]
        ],
        [
          3,
          "3PT Pull Up Shot Creation",
          currentPlayerPick[0]["3PT Pull Up Shot Creation"],
          percentileScores["3PT Pull Up Shot Creation"],
          playerGrades["3PT Pull Up Shot Creation"]
        ],
        [
          3,
          "3PT Pull Up_pct",
          currentPlayerPick[0]["3PT Pull Up_pct"],
          percentileScores["3PT Pull Up_pct"],
          playerGrades["3PT Pull Up_pct"]
        ],
        [
          3,
          "Deep 3PT Shooting Talent",
          currentPlayerPick[0]["Deep 3PT Shooting Talent"],
          percentileScores["Deep 3PT Shooting Talent"],
          playerGrades["Deep 3PT Shooting Talent"]
        ],
        [
          3,
          "Stable Avg 3PT Shot Distance",
          currentPlayerPick[0]["Stable Avg 3PT Shot Distance"],
          percentileScores["Stable Avg 3PT Shot Distance"],
          playerGrades["Stable Avg 3PT Shot Distance"]
        ],
      ],
    },
    {
      title: "Guarded By Data",
      vsaverage: false,
      stats: [
        [
          1,
          "Guarded by Big_pct",
          currentPlayerPick[0]["Guarded by Big_pct"],
          percentileScores["Guarded by Big_pct"],
          playerGrades["Guarded by Big_pct"]
        ],
        [
          1,
          "Guarded by Guard_pct",
          currentPlayerPick[0]["Guarded by Guard_pct"],
          percentileScores["Guarded by Guard_pct"],
          playerGrades["Guarded by Guard_pct"]
        ],
        [
          1,
          "Guarded by Wing_pct",
          currentPlayerPick[0]["Guarded by Wing_pct"],
          percentileScores["Guarded by Wing_pct"],
          playerGrades["Guarded by Wing_pct"]
        ],
        [
          3,
          "Guarded by C_pct",
          currentPlayerPick[0]["Guarded by C_pct"],
          percentileScores["Guarded by C_pct"],
          playerGrades["Guarded by C_pct"]
        ],
        [
          3,
          "Guarded by PF_pct",
          currentPlayerPick[0]["Guarded by PF_pct"],
          percentileScores["Guarded by PF_pct"],
          playerGrades["Guarded by PF_pct"]
        ],
        [
          3,
          "Guarded by PG_pct",
          currentPlayerPick[0]["Guarded by PG_pct"],
          percentileScores["Guarded by PG_pct"],
          playerGrades["Guarded by PG_pct"]
        ],
        [
          3,
          "Guarded by SF_pct",
          currentPlayerPick[0]["Guarded by SF_pct"],
          percentileScores["Guarded by SF_pct"],
          playerGrades["Guarded by SF_pct"]
        ],
        [
          3,
          "Guarded by SG_pct",
          currentPlayerPick[0]["Guarded by SG_pct"],
          percentileScores["Guarded by SG_pct"],
          playerGrades["Guarded by SG_pct"]
        ],
      ],
    },
    {
      title: "Guarded By Defensive Data",
      vsaverage: false,
      stats: [
        [
          1,
          "Guarded by D-LEBRON",
          currentPlayerPick[0]["Guarded by D-LEBRON"],
          percentileScores["Guarded by D-LEBRON"],
          playerGrades["Guarded by D-LEBRON"]
        ],
        [
          3,
          "Guarded by Defensive Rebounding Impact",
          currentPlayerPick[0]["Guarded by Defensive Rebounding Impact"],
          percentileScores["Guarded by Defensive Rebounding Impact"],
          playerGrades["Guarded by Defensive Rebounding Impact"]
        ],
        [
          3,
          "Guarded by On-Ball Defense",
          currentPlayerPick[0]["Guarded by On-Ball Defense"],
          percentileScores["Guarded by On-Ball Defense"],
          playerGrades["Guarded by On-Ball Defense"]
        ],
        [
          3,
          "Guarded by Ball Screen Navigation",
          currentPlayerPick[0]["Guarded by Ball Screen Navigation"],
          percentileScores["Guarded by Ball Screen Navigation"],
          playerGrades["Guarded by Ball Screen Navigation"]
        ],
        [
          3,
          "Guarded by Off-Ball Chaser Defense",
          currentPlayerPick[0]["Guarded by Off-Ball Chaser Defense"],
          percentileScores["Guarded by Off-Ball Chaser Defense"],
          playerGrades["Guarded by Off-Ball Chaser Defense"]
        ],
        [
          3,
          "Guarded by Anchor Big_pct",
          currentPlayerPick[0]["Guarded by Anchor Big_pct"],
          percentileScores["Guarded by Anchor Big_pct"],
          playerGrades["Guarded by Anchor Big_pct"]
        ],
        [
          3,
          "Guarded by Chaser_pct",
          currentPlayerPick[0]["Guarded by Chaser_pct"],
          percentileScores["Guarded by Chaser_pct"],
          playerGrades["Guarded by Chaser_pct"]
        ],
        [
          3,
          "Guarded by Helper_pct",
          currentPlayerPick[0]["Guarded by Helper_pct"],
          percentileScores["Guarded by Helper_pct"],
          playerGrades["Guarded by Helper_pct"]
        ],
        [
          3,
          "Guarded by Low Activity_pct",
          currentPlayerPick[0]["Guarded by Low Activity_pct"],
          percentileScores["Guarded by Low Activity_pct"],
          playerGrades["Guarded by Low Activity_pct"]
        ],
        [
          3,
          "Guarded by Low Minute_pct",
          currentPlayerPick[0]["Guarded by Low Minute_pct"],
          percentileScores["Guarded by Low Minute_pct"],
          playerGrades["Guarded by Low Minute_pct"]
        ],
        [
          3,
          "Guarded by Mobile Big_pct",
          currentPlayerPick[0]["Guarded by Mobile Big_pct"],
          percentileScores["Guarded by Mobile Big_pct"],
          playerGrades["Guarded by Mobile Big_pct"]
        ],
        [
          3,
          "Guarded by Point of Attack_pct",
          currentPlayerPick[0]["Guarded by Point of Attack_pct"],
          percentileScores["Guarded by Point of Attack_pct"],
          playerGrades["Guarded by Point of Attack_pct"]
        ],
        [
          3,
          "Guarded by Wing Stopper_pct",
          currentPlayerPick[0]["Guarded by Wing Stopper_pct"],
          percentileScores["Guarded by Wing Stopper_pct"],
          playerGrades["Guarded by Wing Stopper_pct"]
        ],
        [
          3,
          "Guarded by Rim Protection",
          currentPlayerPick[0]["Guarded by Rim Protection"],
          percentileScores["Guarded by Rim Protection"],
          playerGrades["Guarded by Rim Protection"]
        ],
        [
          3,
          "Guarded by Help Defensive Activity",
          currentPlayerPick[0]["Guarded by Help Defensive Activity"],
          percentileScores["Guarded by Help Defensive Activity"],
          playerGrades["Guarded by Help Defensive Activity"]
        ],
        [
          3,
          "Guarded by Guarded USG%",
          currentPlayerPick[0]["Guarded by Guarded USG%"],
          percentileScores["Guarded by Guarded USG%"],
          playerGrades["Guarded by Guarded USG%"]
        ],
        [
          3,
          "Guarded by Guarded O-LEBRON",
          currentPlayerPick[0]["Guarded by Guarded O-LEBRON"],
          percentileScores["Guarded by Guarded O-LEBRON"],
          playerGrades["Guarded by Guarded O-LEBRON"]
        ],
      ],
    },
    {
      title: "Guarded Data",
      vsaverage: false,
      stats: [
        [
          3,
          "Guarded Rim Shot Creation",
          currentPlayerPick[0]["Guarded Rim Shot Creation"],
          percentileScores["Guarded Rim Shot Creation"],
          playerGrades["Guarded Rim Shot Creation"]
        ],
        [
          3,
          "Guarded Rim Shot Making",
          currentPlayerPick[0]["Guarded Rim Shot Making"],
          percentileScores["Guarded Rim Shot Making"],
          playerGrades["Guarded Rim Shot Making"]
        ],
        [
          3,
          "Guarded 3PT Shooting Talent",
          currentPlayerPick[0]["Guarded 3PT Shooting Talent"],
          percentileScores["Guarded 3PT Shooting Talent"],
          playerGrades["Guarded 3PT Shooting Talent"]
        ],
        [
          3,
          "Guarded 3PT Shot Creation",
          currentPlayerPick[0]["Guarded 3PT Shot Creation"],
          percentileScores["Guarded 3PT Shot Creation"],
          playerGrades["Guarded 3PT Shot Creation"]
        ],
        [
          3,
          "Guarded 3PT Shot Making",
          currentPlayerPick[0]["Guarded 3PT Shot Making"],
          percentileScores["Guarded 3PT Shot Making"],
          playerGrades["Guarded 3PT Shot Making"]
        ],
        [
          3,
          "Guarded Offensive Rebounding Talent",
          currentPlayerPick[0]["Guarded Offensive Rebounding Talent"],
          percentileScores["Guarded Offensive Rebounding Talent"],
          playerGrades["Guarded Offensive Rebounding Talent"]
        ],
        [
          3,
          "Guarded Shooting Talent",
          currentPlayerPick[0]["Guarded Shooting Talent"],
          percentileScores["Guarded Shooting Talent"],
          playerGrades["Guarded Shooting Talent"]
        ],
        [
          3,
          "Guarded Middle Game Talent",
          currentPlayerPick[0]["Guarded Middle Game Talent"],
          percentileScores["Guarded Middle Game Talent"],
          playerGrades["Guarded Middle Game Talent"]
        ],
        [
          3,
          "Guarded Offensive Involvement Rate",
          currentPlayerPick[0]["Guarded Offensive Involvement Rate"],
          percentileScores["Guarded Offensive Involvement Rate"],
          playerGrades["Guarded Offensive Involvement Rate"]
        ],
        [
          3,
          "Guarded Pick & Roll Ball Handler Frequency_pct",
          currentPlayerPick[0]["Guarded Pick & Roll Ball Handler Frequency_pct"],
          percentileScores["Guarded Pick & Roll Ball Handler Frequency_pct"],
          playerGrades["Guarded Pick & Roll Ball Handler Frequency_pct"]
        ],
        [
          3,
          "Guarded Playmaking Talent",
          currentPlayerPick[0]["Guarded Playmaking Talent"],
          percentileScores["Guarded Playmaking Talent"],
          playerGrades["Guarded Playmaking Talent"]
        ],
        [
          3,
          "Guarded Stable Post Up PPP",
          currentPlayerPick[0]["Guarded Stable Post Up PPP"],
          percentileScores["Guarded Stable Post Up PPP"],
          playerGrades["Guarded Stable Post Up PPP"]
        ],
      ],
    },
    {
      title: "Play Type Frequencies",
      vsaverage: false,
      stats: [
        [
          3,
          "Spot Up Frequency_pct",
          currentPlayerPick[0]["Spot Up Frequency_pct"],
          percentileScores["Spot Up Frequency_pct"],
          playerGrades["Spot Up Frequency_pct"]
        ],
        [
          3,
          "Pick & Roll Ball Handler Frequency_pct",
          currentPlayerPick[0]["Pick & Roll Ball Handler Frequency_pct"],
          percentileScores["Pick & Roll Ball Handler Frequency_pct"],
          playerGrades["Pick & Roll Ball Handler Frequency_pct"]
        ],
        [
          3,
          "Cuts & Dump Off Frequency_pct",
          currentPlayerPick[0]["Cuts & Dump Off Frequency_pct"],
          percentileScores["Cuts & Dump Off Frequency_pct"],
          playerGrades["Cuts & Dump Off Frequency_pct"]
        ],
        [
          3,
          "Perimeter Isolation Frequency_pct",
          currentPlayerPick[0]["Perimeter Isolation Frequency_pct"],
          percentileScores["Perimeter Isolation Frequency_pct"],
          playerGrades["Perimeter Isolation Frequency_pct"]
        ],
        [
          3,
          "Post Up Frequency_pct",
          currentPlayerPick[0]["Post Up Frequency_pct"],
          percentileScores["Post Up Frequency_pct"],
          playerGrades["Post Up Frequency_pct"]
        ],
        [
          3,
          "Putback Frequency_pct",
          currentPlayerPick[0]["Putback Frequency_pct"],
          percentileScores["Putback Frequency_pct"],
          playerGrades["Putback Frequency_pct"]
        ],
        [
          3,
          "Pick & Roll Roll/Pop/Slip Frequency_pct",
          currentPlayerPick[0]["Pick & Roll Roll/Pop/Slip Frequency_pct"],
          percentileScores["Pick & Roll Roll/Pop/Slip Frequency_pct"],
          playerGrades["Pick & Roll Roll/Pop/Slip Frequency_pct"]
        ],
        [
          3,
          "Off Screen Frequency_pct",
          currentPlayerPick[0]["Off Screen Frequency_pct"],
          percentileScores["Off Screen Frequency_pct"],
          playerGrades["Off Screen Frequency_pct"]
        ],
        [
          3,
          "Handoff Frequency_pct",
          currentPlayerPick[0]["Handoff Frequency_pct"],
          percentileScores["Handoff Frequency_pct"],
          playerGrades["Handoff Frequency_pct"]
        ],
      ],
    },
    {
      title: "One on One",
      vsaverage: false,
      stats: [
        [
          1,
          "One on One Talent",
          currentPlayerPick[0]["One on One Talent"],
          percentileScores["One on One Talent"],
          playerGrades["One on One Talent"]
        ],
        [
          1,
          "Midrange Talent",
          currentPlayerPick[0]["Midrange Talent"],
          percentileScores["Midrange Talent"],
          playerGrades["Midrange Talent"]
        ],
        [
          2,
          "Total Isolations / 75",
          currentPlayerPick[0]["Total Isolations / 75"],
          percentileScores["Total Isolations / 75"],
          playerGrades["Total Isolations / 75"]
        ],
        [
          2,
          "Floater Talent",
          currentPlayerPick[0]["Floater Talent"],
          percentileScores["Floater Talent"],
          playerGrades["Floater Talent"]
        ],
        [
          2,
          "Midrange Pull Up Talent",
          currentPlayerPick[0]["Midrange Pull Up Talent"],
          percentileScores["Midrange Pull Up Talent"],
          playerGrades["Midrange Pull Up Talent"]
        ],
        [
          2,
          "Midrange Shot Making",
          currentPlayerPick[0]["Midrange Shot Making"],
          percentileScores["Midrange Shot Making"],
          playerGrades["Midrange Shot Making"]
        ],
        [
          2,
          "Midrange Shot Quality",
          currentPlayerPick[0]["Midrange Shot Quality"],
          percentileScores["Midrange Shot Quality"],
          playerGrades["Midrange Shot Quality"]
        ],
        [
          2,
          "Midrange Shot Creation",
          currentPlayerPick[0]["Midrange Shot Creation"],
          percentileScores["Midrange Shot Creation"],
          playerGrades["Midrange Shot Creation"]
        ],
        [
          2,
          "Stable Post Up PPP",
          currentPlayerPick[0]["Stable Post Up PPP"],
          percentileScores["Stable Post Up PPP"],
          playerGrades["Stable Post Up PPP"]
        ],
        [
          2,
          "Stable Isolation PPP",
          currentPlayerPick[0]["Stable Isolation PPP"],
          percentileScores["Stable Isolation PPP"],
          playerGrades["Stable Isolation PPP"]
        ],
        [
          3,
          "Total Iso Impact / 75",
          currentPlayerPick[0]["Total Iso Impact / 75"],
          percentileScores["Total Iso Impact / 75"],
          playerGrades["Total Iso Impact / 75"]
        ],
        [
          3,
          "Total Isolation eFG_pct",
          currentPlayerPick[0]["Total Isolation eFG_pct"],
          percentileScores["Total Isolation eFG_pct"],
          playerGrades["Total Isolation eFG_pct"]
        ],
        [
          3,
          "Iso TO Rate_pct",
          currentPlayerPick[0]["Iso TO Rate_pct"],
          percentileScores["Iso TO Rate_pct"],
          playerGrades["Iso TO Rate_pct"]
        ],
        [
          3,
          "Iso Foul Drawn Rate_pct",
          currentPlayerPick[0]["Iso Foul Drawn Rate_pct"],
          percentileScores["Iso Foul Drawn Rate_pct"],
          playerGrades["Iso Foul Drawn Rate_pct"]
        ],
        [
          3,
          "Floater Shot Making",
          currentPlayerPick[0]["Floater Shot Making"],
          percentileScores["Floater Shot Making"],
          playerGrades["Floater Shot Making"]
        ],
        [
          3,
          "Floater Shot Creation",
          currentPlayerPick[0]["Floater Shot Creation"],
          percentileScores["Floater Shot Creation"],
          playerGrades["Floater Shot Creation"]
        ],
        [
          3,
          "Floater FG_pct",
          currentPlayerPick[0]["Floater FG_pct"],
          percentileScores["Floater FG_pct"],
          playerGrades["Floater FG_pct"]
        ],
        [
          3,
          "Midrange Pull Up Shot Making",
          currentPlayerPick[0]["Midrange Pull Up Shot Making"],
          percentileScores["Midrange Pull Up Shot Making"],
          playerGrades["Midrange Pull Up Shot Making"]
        ],
        [
          3,
          "Midrange Pull Up Shot Quality",
          currentPlayerPick[0]["Midrange Pull Up Shot Quality"],
          percentileScores["Midrange Pull Up Shot Quality"],
          playerGrades["Midrange Pull Up Shot Quality"]
        ],
        [
          3,
          "Midrange Pull Up Shot Creation",
          currentPlayerPick[0]["Midrange Pull Up Shot Creation"],
          percentileScores["Midrange Pull Up Shot Creation"],
          playerGrades["Midrange Pull Up Shot Creation"]
        ],
        [
          3,
          "Midrange Pull Up_pct",
          currentPlayerPick[0]["Midrange Pull Up_pct"],
          percentileScores["Midrange Pull Up_pct"],
          playerGrades["Midrange Pull Up_pct"]
        ],
      ],
    },
    {
      title: "Off Ball Movement",
      vsaverage: false,
      stats: [
        [
          1,
          "Movement Pts. / 75 Poss",
          currentPlayerPick[0]["Movement Pts. / 75 Poss"],
          percentileScores["Movement Pts. / 75 Poss"],
          playerGrades["Movement Pts. / 75 Poss"]
        ],
        [
          2,
          "Movement Attack Rate_pct",
          currentPlayerPick[0]["Movement Attack Rate_pct"],
          percentileScores["Movement Attack Rate_pct"],
          playerGrades["Movement Attack Rate_pct"]
        ],
        [
          2,
          "Movement Dist. Rating",
          currentPlayerPick[0]["Movement Dist. Rating"],
          percentileScores["Movement Dist. Rating"],
          playerGrades["Movement Dist. Rating"]
        ],
        [
          2,
          "Movement Speed Rating",
          currentPlayerPick[0]["Movement Speed Rating"],
          percentileScores["Movement Speed Rating"],
          playerGrades["Movement Speed Rating"]
        ],
        [
          2,
          "Movement Impact / 75",
          currentPlayerPick[0]["Movement Impact / 75"],
          percentileScores["Movement Impact / 75"],
          playerGrades["Movement Impact / 75"]
        ],
        [
          2,
          "Stable Cut PPP",
          currentPlayerPick[0]["Stable Cut PPP"],
          percentileScores["Stable Cut PPP"],
          playerGrades["Stable Cut PPP"]
        ],
        [
          2,
          "Stable Off Screen PPP",
          currentPlayerPick[0]["Stable Off Screen PPP"],
          percentileScores["Stable Off Screen PPP"],
          playerGrades["Stable Off Screen PPP"]
        ],
        [
          3,
          "Off Screen Poss/ 75 Poss",
          currentPlayerPick[0]["Off Screen Poss/ 75 Poss"],
          percentileScores["Off Screen Poss/ 75 Poss"],
          playerGrades["Off Screen Poss/ 75 Poss"]
        ],
        [
          3,
          "Off Screen Share_pct",
          currentPlayerPick[0]["Off Screen Share_pct"],
          percentileScores["Off Screen Share_pct"],
          playerGrades["Off Screen Share_pct"]
        ],
        [
          3,
          "Off Screen eFG_pct",
          currentPlayerPick[0]["Off Screen eFG_pct"],
          percentileScores["Off Screen eFG_pct"],
          playerGrades["Off Screen eFG_pct"]
        ],
        [
          3,
          "Cuts/75",
          currentPlayerPick[0]["Cuts/75"],
          percentileScores["Cuts/75"],
          playerGrades["Cuts/75"]
        ],
        [
          3,
          "Cut Share_pct",
          currentPlayerPick[0]["Cut Share_pct"],
          percentileScores["Cut Share_pct"],
          playerGrades["Cut Share_pct"]
        ],
        [
          3,
          "Cut FG_pct",
          currentPlayerPick[0]["Cut FG_pct"],
          percentileScores["Cut FG_pct"],
          playerGrades["Cut FG_pct"]
        ]
      ],
    },
    {
      title: "Finishing",
      vsaverage: false,
      stats: [
        [
          1,
          "Finishing Talent",
          currentPlayerPick[0]["Finishing Talent"],
          percentileScores["Finishing Talent"],
          playerGrades["Finishing Talent"]
        ],
        [
          2,
          "Rim Shot Creation",
          currentPlayerPick[0]["Rim Shot Creation"],
          percentileScores["Rim Shot Creation"],
          playerGrades["Rim Shot Creation"]
        ],
        [
          2,
          "Drive Assist/Pass_pct",
          currentPlayerPick[0]["Drive Assist/Pass_pct"],
          percentileScores["Drive Assist/Pass_pct"],
          playerGrades["Drive Assist/Pass_pct"]
        ],
        [
          2,
          "Drive Foul Drawn Rate_pct",
          currentPlayerPick[0]["Drive Foul Drawn Rate_pct"],
          percentileScores["Drive Foul Drawn Rate_pct"],
          playerGrades["Drive Foul Drawn Rate_pct"]
        ],
        [
          2,
          "Rim Shot Quality",
          currentPlayerPick[0]["Rim Shot Quality"],
          percentileScores["Rim Shot Quality"],
          playerGrades["Rim Shot Quality"]
        ],
        [
          2,
          "Rim Shot Making",
          currentPlayerPick[0]["Rim Shot Making"],
          percentileScores["Rim Shot Making"],
          playerGrades["Rim Shot Making"]
        ],
        [
          3,
          "Drives / 75",
          currentPlayerPick[0]["Drives / 75"],
          percentileScores["Drives / 75"],
          playerGrades["Drives / 75"]
        ],
        [
          3,
          "Total Shots at Rim / 75",
          currentPlayerPick[0]["Total Shots at Rim / 75"],
          percentileScores["Total Shots at Rim / 75"],
          playerGrades["Total Shots at Rim / 75"]
        ],
        [
          3,
          "Unassisted Rim FGA / 75",
          currentPlayerPick[0]["Unassisted Rim FGA / 75"],
          percentileScores["Unassisted Rim FGA / 75"],
          playerGrades["Unassisted Rim FGA / 75"]
        ],
        [
          3,
          "% of Rim Unassisted_pct",
          currentPlayerPick[0]["% of Rim Unassisted_pct"],
          percentileScores["% of Rim Unassisted_pct"],
          playerGrades["% of Rim Unassisted_pct"]
        ],
        [
          3,
          "Drive Passout Rate_pct",
          currentPlayerPick[0]["Drive Passout Rate_pct"],
          percentileScores["Drive Passout Rate_pct"],
          playerGrades["Drive Passout Rate_pct"]
        ],
        [
          3,
          "Drive Assist Rate_pct",
          currentPlayerPick[0]["Drive Assist Rate_pct"],
          percentileScores["Drive Assist Rate_pct"],
          playerGrades["Drive Assist Rate_pct"]
        ],
        [
          3,
          "Contact Finish Rate_pct",
          currentPlayerPick[0]["Contact Finish Rate_pct"],
          percentileScores["Contact Finish Rate_pct"],
          playerGrades["Contact Finish Rate_pct"]
        ],
        [
          3,
          "Rim FG_pct",
          currentPlayerPick[0]["Rim FG_pct"],
          percentileScores["Rim FG_pct"],
          playerGrades["Rim FG_pct"]
        ],
      ],
    },
    {
      title: "Screening and Rolling",
      vsaverage: false,
      stats: [
        [
          1,
          "Screening Talent",
          currentPlayerPick[0]["Screening Talent"],
          percentileScores["Screening Talent"],
          playerGrades["Screening Talent"]
        ],
        [
          2,
          "Stable P&R Roll Man PPP",
          currentPlayerPick[0]["Stable P&R Roll Man PPP"],
          percentileScores["Stable P&R Roll Man PPP"],
          playerGrades["Stable P&R Roll Man PPP"]
        ], [
          2,
          "Roll Man Poss / 75 Poss",
          currentPlayerPick[0]["Roll Man Poss / 75 Poss"],
          percentileScores["Roll Man Poss / 75 Poss"],
          playerGrades["Roll Man Poss / 75 Poss"]
        ],
        [
          3,
          "Team Roll Man Share_pct",
          currentPlayerPick[0]["Team Roll Man Share_pct"],
          percentileScores["Team Roll Man Share_pct"],
          playerGrades["Team Roll Man Share_pct"]
        ],
        [
          3,
          "Total Roll Man Impact / 75 Poss",
          currentPlayerPick[0]["Total Roll Man Impact / 75 Poss"],
          percentileScores["Total Roll Man Impact / 75 Poss"],
          playerGrades["Total Roll Man Impact / 75 Poss"]
        ],
        [
          3,
          "Roll Impact / 75 Poss",
          currentPlayerPick[0]["Roll Impact / 75 Poss"],
          percentileScores["Roll Impact / 75 Poss"],
          playerGrades["Roll Impact / 75 Poss"]
        ],
        [
          3,
          "Pop Impact / 75 Poss",
          currentPlayerPick[0]["Pop Impact / 75 Poss"],
          percentileScores["Pop Impact / 75 Poss"],
          playerGrades["Pop Impact / 75 Poss"]
        ],
        [
          3,
          "Slip Impact / 75 Poss",
          currentPlayerPick[0]["Slip Impact / 75 Poss"],
          percentileScores["Slip Impact / 75 Poss"],
          playerGrades["Slip Impact / 75 Poss"]
        ],
        [
          3,
          "Screen Assists / 75 Poss",
          currentPlayerPick[0]["Screen Assists / 75 Poss"],
          percentileScores["Screen Assists / 75 Poss"],
          playerGrades["Screen Assists / 75 Poss"]
        ],
      ],
    },
    {
      title: "Playmaking",
      vsaverage: false,
      stats: [
        [
          1,
          "Playmaking Talent",
          currentPlayerPick[0]["Playmaking Talent"],
          percentileScores["Playmaking Talent"],
          playerGrades["Playmaking Talent"]
        ],
        [
          2,
          "Assist Pts / 75 Poss",
          currentPlayerPick[0]["Assist Pts / 75 Poss"],
          percentileScores["Assist Pts / 75 Poss"],
          playerGrades["Assist Pts / 75 Poss"]
        ],
        [
          2,
          "Passing Creation Volume",
          currentPlayerPick[0]["Passing Creation Volume"],
          percentileScores["Passing Creation Volume"],
          playerGrades["Passing Creation Volume"]
        ],
        [
          2,
          "Passing Efficiency",
          currentPlayerPick[0]["Passing Efficiency"],
          percentileScores["Passing Efficiency"],
          playerGrades["Passing Efficiency"]
        ],
        [
          2,
          "Passing Versatility",
          currentPlayerPick[0]["Passing Versatility"],
          percentileScores["Passing Versatility"],
          playerGrades["Passing Versatility"]
        ],
        [
          2,
          "Passing Creation Quality",
          currentPlayerPick[0]["Passing Creation Quality"],
          percentileScores["Passing Creation Quality"],
          playerGrades["Passing Creation Quality"]
        ],
        [
          2,
          "On-Ball Gravity",
          currentPlayerPick[0]["On-Ball Gravity"],
          percentileScores["On-Ball Gravity"],
          playerGrades["On-Ball Gravity"]
        ],
        [
          2,
          "Overall Gravity",
          currentPlayerPick[0]["Overall Gravity"],
          percentileScores["Overall Gravity"],
          playerGrades["Overall Gravity"]
        ],
        [
          3,
          "RA Pot Ast / 100",
          currentPlayerPick[0]["RA Pot Ast / 100"],
          percentileScores["RA Pot Ast / 100"],
          playerGrades["RA Pot Ast / 100"]
        ],
        [
          3,
          "Pot. Ast. / 100 Passes",
          currentPlayerPick[0]["Pot. Ast. / 100 Passes"],
          percentileScores["Pot. Ast. / 100 Passes"],
          playerGrades["Pot. Ast. / 100 Passes"]
        ],
        [
          3,
          "HV Assists / 75 Poss",
          currentPlayerPick[0]["HV Assists / 75 Poss"],
          percentileScores["HV Assists / 75 Poss"],
          playerGrades["HV Assists / 75 Poss"]
        ],
        [
          3,
          "Box Creation",
          currentPlayerPick[0]["Box Creation"],
          percentileScores["Box Creation"],
          playerGrades["Box Creation"]
        ],
        [
          3,
          "Lob Passing Creation Rate",
          currentPlayerPick[0]["Lob Passing Creation Rate"],
          percentileScores["Lob Passing Creation Rate"],
          playerGrades["Lob Passing Creation Rate"]
        ],
        [
          3,
          "Stable Bad Pass Turnovers Per 75",
          currentPlayerPick[0]["Stable Bad Pass Turnovers Per 75"],
          percentileScores["Stable Bad Pass Turnovers Per 75"],
          playerGrades["Stable Bad Pass Turnovers Per 75"]
        ],
        [
          3,
          "Stable Bad Pass Out Of Bounds Turnovers Per 75",
          currentPlayerPick[0]["Stable Bad Pass Out Of Bounds Turnovers Per 75"],
          percentileScores["Stable Bad Pass Out Of Bounds Turnovers Per 75"],
          playerGrades["Stable Bad Pass Out Of Bounds Turnovers Per 75"]
        ],
        [
          3,
          "Stable Dead Ball Turnovers Per 75",
          currentPlayerPick[0]["Stable Dead Ball Turnovers Per 75"],
          percentileScores["Stable Dead Ball Turnovers Per 75"],
          playerGrades["Stable Dead Ball Turnovers Per 75"]
        ],
        [
          3,
          "Stable Live Ball Turnovers Per 75",
          currentPlayerPick[0]["Stable Live Ball Turnovers Per 75"],
          percentileScores["Stable Live Ball Turnovers Per 75"],
          playerGrades["Stable Live Ball Turnovers Per 75"]
        ],
        [
          3,
          "Stable Lost Ball Out Of Bounds Turnovers Per 75",
          currentPlayerPick[0]["Stable Lost Ball Out Of Bounds Turnovers Per 75"],
          percentileScores["Stable Lost Ball Out Of Bounds Turnovers Per 75"],
          playerGrades["Stable Lost Ball Out Of Bounds Turnovers Per 75"]
        ],
        [
          3,
          "Stable Lost Ball Turnovers Per 75",
          currentPlayerPick[0]["Stable Lost Ball Turnovers Per 75"],
          percentileScores["Stable Lost Ball Turnovers Per 75"],
          playerGrades["Stable Lost Ball Turnovers Per 75"]
        ],
        [
          3,
          "Stable Step Out Of Bounds Turnovers Per 75",
          currentPlayerPick[0]["Stable Step Out Of Bounds Turnovers Per 75"],
          percentileScores["Stable Step Out Of Bounds Turnovers Per 75"],
          playerGrades["Stable Step Out Of Bounds Turnovers Per 75"]
        ],
      ],
    },
    {
      title: "Post Play",
      vsaverage: false,
      stats: [
        [
          1,
          "Total Post frequency_pct",
          currentPlayerPick[0]["Total Post frequency_pct"],
          percentileScores["Total Post frequency_pct"],
          playerGrades["Total Post frequency_pct"]
        ],
        [
          1,
          "Stable Post Up PPP",
          currentPlayerPick[0]["Stable Post Up PPP"],
          percentileScores["Stable Post Up PPP"],
          playerGrades["Stable Post Up PPP"]
        ],
        [
          2,
          "Post Up Impact / 75 Poss",
          currentPlayerPick[0]["Post Up Impact / 75 Poss"],
          percentileScores["Post Up Impact / 75 Poss"],
          playerGrades["Post Up Impact / 75 Poss"]
        ],
        [
          2,
          "Pot. Assist / Post Poss_pct",
          currentPlayerPick[0]["Pot. Assist / Post Poss_pct"],
          percentileScores["Pot. Assist / Post Poss_pct"],
          playerGrades["Pot. Assist / Post Poss_pct"]
        ],
        [
          3,
          "Paint Touches / 75",
          currentPlayerPick[0]["Paint Touches / 75"],
          percentileScores["Paint Touches / 75"],
          playerGrades["Paint Touches / 75"]
        ],
        [
          3,
          "Post Up Draw Foul Rate_pct",
          currentPlayerPick[0]["Post Up Draw Foul Rate_pct"],
          percentileScores["Post Up Draw Foul Rate_pct"],
          playerGrades["Post Up Draw Foul Rate_pct"]
        ]
      ],
    },
    {
      title: "Defensive Rebounding",
      vsaverage: false,
      stats: [
        [
          2,
          "Defensive Reb / 75 Poss",
          currentPlayerPick[0]["Defensive Reb / 75 Poss"],
          percentileScores["Defensive Reb / 75 Poss"],
          playerGrades["Defensive Reb / 75 Poss"],
        ],
        [
          3,
          "DReb Per Game",
          currentPlayerPick[0]["DReb Per Game"],
          percentileScores["DReb Per Game"],
          playerGrades["DReb Per Game"],
        ],
        [
          3,
          "DReb Chance / 75 Poss",
          currentPlayerPick[0]["DReb Chance / 75 Poss"],
          percentileScores["DReb Chance / 75 Poss"],
          playerGrades["DReb Chance / 75 Poss"],
        ],
        [
          3,
          "Contested DReb_pct",
          currentPlayerPick[0]["Contested DReb_pct"],
          percentileScores["Contested DReb_pct"],
          playerGrades["Contested DReb_pct"],
        ],
        [
          3,
          "DReb Positioning",
          currentPlayerPick[0]["DReb Positioning"],
          percentileScores["DReb Positioning"],
          playerGrades["DReb Positioning"],
        ],
        [
          2,
          "Adj. Box Out Rate_pct",
          currentPlayerPick[0]["Adj. Box Out Rate_pct"],
          percentileScores["Adj. Box Out Rate_pct"],
          playerGrades["Adj. Box Out Rate_pct"],
        ],
        [
          3,
          "Adj. DReb Success Rate_pct",
          currentPlayerPick[0]["Adj. DReb Success Rate_pct"],
          percentileScores["Adj. DReb Success Rate_pct"],
          playerGrades["Adj. DReb Success Rate_pct"],
        ],
        [
          2,
          "Defensive Rebounding Conversion Skill",
          currentPlayerPick[0]["Defensive Rebounding Conversion Skill"],
          percentileScores["Defensive Rebounding Conversion Skill"],
          playerGrades["Defensive Rebounding Conversion Skill"],
        ],
        [
          2,
          "Defensive Rebounding Crashing Skill",
          currentPlayerPick[0]["Defensive Rebounding Crashing Skill"],
          percentileScores["Defensive Rebounding Crashing Skill"],
          playerGrades["Defensive Rebounding Crashing Skill"],
        ],
        [
          3,
          "Real Adjusted DReb Rate",
          currentPlayerPick[0]["Real Adjusted DReb Rate"],
          percentileScores["Real Adjusted DReb Rate"],
          playerGrades["Real Adjusted DReb Rate"],
        ],
        [
          1,
          "Defensive Rebounding Talent",
          currentPlayerPick[0]["Defensive Rebounding Talent"],
          percentileScores["Defensive Rebounding Talent"],
          playerGrades["Defensive Rebounding Talent"],
        ],
        [
          3,
          "Stable Defensive Three Point Rebounds Per 75",
          currentPlayerPick[0]["Stable Defensive Three Point Rebounds Per 75"],
          percentileScores["Stable Defensive Three Point Rebounds Per 75"],
          playerGrades["Stable Defensive Three Point Rebounds Per 75"],
        ],
        [
          3,
          "Stable Defensive Two Point Rebounds Per 75",
          currentPlayerPick[0]["Stable Defensive Two Point Rebounds Per 75"],
          percentileScores["Stable Defensive Two Point Rebounds Per 75"],
          playerGrades["Stable Defensive Two Point Rebounds Per 75"],
        ],
        [
          3,
          "Stable FT Defensive Rebounds Per 75",
          currentPlayerPick[0]["Stable FT Defensive Rebounds Per 75"],
          percentileScores["Stable FT Defensive Rebounds Per 75"],
          playerGrades["Stable FT Defensive Rebounds Per 75"],
        ],
        [
          3,
          "Defensive Rebounding Impact",
          currentPlayerPick[0]["Defensive Rebounding Impact"],
          percentileScores["Defensive Rebounding Impact"],
          playerGrades["Defensive Rebounding Impact"]
        ],
      ],
    },
    {
      title: "Offensive Rebounding",
      vsaverage: false,
      stats: [
        [
          1,
          "Offensive Rebounding Talent",
          currentPlayerPick[0]["Offensive Rebounding Talent"],
          percentileScores["Offensive Rebounding Talent"],
          playerGrades["Offensive Rebounding Talent"]
        ],
        [
          2,
          "Offensive Reb / 75 Poss",
          currentPlayerPick[0]["Offensive Reb / 75 Poss"],
          percentileScores["Offensive Reb / 75 Poss"],
          playerGrades["Offensive Reb / 75 Poss"]
        ],
        [
          2,
          "Putbacks / 75 Poss",
          currentPlayerPick[0]["Putbacks / 75 Poss"],
          percentileScores["Putbacks / 75 Poss"],
          playerGrades["Putbacks / 75 Poss"]
        ],
        [
          2,
          "Putback Impact / 75",
          currentPlayerPick[0]["Putback Impact / 75"],
          percentileScores["Putback Impact / 75"],
          playerGrades["Putback Impact / 75"]
        ],
        [
          2,
          "Offensive Rebounding Conversion Skill",
          currentPlayerPick[0]["Offensive Rebounding Conversion Skill"],
          percentileScores["Offensive Rebounding Conversion Skill"],
          playerGrades["Offensive Rebounding Conversion Skill"]
        ],
        [
          2,
          "Offensive Rebounding Crashing Skill",
          currentPlayerPick[0]["Offensive Rebounding Crashing Skill"],
          percentileScores["Offensive Rebounding Crashing Skill"],
          playerGrades["Offensive Rebounding Crashing Skill"]
        ],
        [
          2,
          "OReb Per Game",
          currentPlayerPick[0]["OReb Per Game"],
          percentileScores["OReb Per Game"],
          playerGrades["OReb Per Game"]
        ],
        [
          3,
          "OReb Chance / 75 Poss",
          currentPlayerPick[0]["OReb Chance / 75 Poss"],
          percentileScores["OReb Chance / 75 Poss"],
          playerGrades["OReb Chance / 75 Poss"]
        ],
        [
          3,
          "Contested OReb_pct",
          currentPlayerPick[0]["Contested OReb_pct"],
          percentileScores["Contested OReb_pct"],
          playerGrades["Contested OReb_pct"]
        ],
        [
          3,
          "OReb Positioning",
          currentPlayerPick[0]["OReb Positioning"],
          percentileScores["OReb Positioning"],
          playerGrades["OReb Positioning"]
        ],
        [
          3,
          "Putback per OReb_pct",
          currentPlayerPick[0]["Putback per OReb_pct"],
          percentileScores["Putback per OReb_pct"],
          playerGrades["Putback per OReb_pct"]
        ],
        [
          3,
          "Adj. OReb Success Rate_pct",
          currentPlayerPick[0]["Adj. OReb Success Rate_pct"],
          percentileScores["Adj. OReb Success Rate_pct"],
          playerGrades["Adj. OReb Success Rate_pct"]
        ],
        [
          3,
          "Stable FT Offensive Rebounds Per 75",
          currentPlayerPick[0]["Stable FT Offensive Rebounds Per 75"],
          percentileScores["Stable FT Offensive Rebounds Per 75"],
          playerGrades["Stable FT Offensive Rebounds Per 75"]
        ],
        [
          3,
          "Stable Self Offensive Rebounds Per 75",
          currentPlayerPick[0]["Stable Self Offensive Rebounds Per 75"],
          percentileScores["Stable Self Offensive Rebounds Per 75"],
          playerGrades["Stable Self Offensive Rebounds Per 75"]
        ],
        [
          3,
          "Stable Self OReb Percent of OR",
          currentPlayerPick[0]["Stable Self OReb Percent of OR"],
          percentileScores["Stable Self OReb Percent of OR"],
          playerGrades["Stable Self OReb Percent of OR"]
        ],
        [
          3,
          "Stable Self OReb Percent of FGA",
          currentPlayerPick[0]["Stable Self OReb Percent of FGA"],
          percentileScores["Stable Self OReb Percent of FGA"],
          playerGrades["Stable Self OReb Percent of FGA"]
        ],
        [
          2,
          "Offensive Rebounding Impact",
          currentPlayerPick[0]["Offensive Rebounding Impact"],
          percentileScores["Offensive Rebounding Impact"],
          playerGrades["Offensive Rebounding Impact"]
        ]
      ],
    },
    {
      title: "On-Ball Defense",
      vsaverage: false,
      stats: [
        [
          1,
          "On-Ball Defense",
          currentPlayerPick[0]["On-Ball Defense"],
          percentileScores["On-Ball Defense"],
          playerGrades["On-Ball Defense"],
        ],

        [
          2,
          "Pickpocket Rating",
          currentPlayerPick[0]["Pickpocket Rating"],
          percentileScores["Pickpocket Rating"],
          playerGrades["Pickpocket Rating"]
        ],
        [
          2,
          "Passing Lane Defense",
          currentPlayerPick[0]["Passing Lane Defense"],
          percentileScores["Passing Lane Defense"],
          playerGrades["Passing Lane Defense"]
        ],
        [
          2,
          "Ball Screen Navigation",
          currentPlayerPick[0]["Ball Screen Navigation"],
          percentileScores["Ball Screen Navigation"],
          playerGrades["Ball Screen Navigation"]
        ],
        [
          2,
          "Off-Ball Chaser Defense",
          currentPlayerPick[0]["Off-Ball Chaser Defense"],
          percentileScores["Off-Ball Chaser Defense"],
          playerGrades["Off-Ball Chaser Defense"]
        ],
        [
          3,
          "Loose Ball Rec Rate",
          currentPlayerPick[0]["Loose Ball Rec Rate"],
          percentileScores["Loose Ball Rec Rate"],
          playerGrades["Loose Ball Rec Rate"]
        ],
        [
          3,
          "3PT Contests / 75 Poss",
          currentPlayerPick[0]["3PT Contests / 75 Poss"],
          percentileScores["3PT Contests / 75 Poss"],
          playerGrades["3PT Contests / 75 Poss"]
        ],
        [
          3,
          "Steals / 75 Poss",
          currentPlayerPick[0]["Steals / 75 Poss"],
          percentileScores["Steals / 75 Poss"],
          playerGrades["Steals / 75 Poss"]
        ],
        [
          3,
          "Deflections / 75 Poss",
          currentPlayerPick[0]["Deflections / 75 Poss"],
          percentileScores["Deflections / 75 Poss"],
          playerGrades["Deflections / 75 Poss"]
        ],
        [
          3,
          "Defensive Miles / 75",
          currentPlayerPick[0]["Defensive Miles / 75"],
          percentileScores["Defensive Miles / 75"],
          playerGrades["Defensive Miles / 75"]
        ],
        [
          3,
          "Matchup Adj. D Feet/MP",
          currentPlayerPick[0]["Matchup Adj. D Feet/MP"],
          percentileScores["Matchup Adj. D Feet/MP"],
          playerGrades["Matchup Adj. D Feet/MP"]
        ]
      ],
    },
    {
      title: "Playing Style",
      vsaverage: false,
      stats: [
        [
          1,
          "Primary Ball Handler_pct",
          currentPlayerPick[0]["Primary Ball Handler_pct"],
          percentileScores["Primary Ball Handler_pct"],
          playerGrades["Primary Ball Handler_pct"],
        ],
        [
          2,
          "Secondary Ball Handlers_pct",
          currentPlayerPick[0]["Secondary Ball Handlers_pct"],
          percentileScores["Secondary Ball Handlers_pct"],
          playerGrades["Secondary Ball Handlers_pct"],
        ],
        [
          2,
          "Shot Creators_pct",
          currentPlayerPick[0]["Shot Creators_pct"],
          percentileScores["Shot Creators_pct"],
          playerGrades["Shot Creators_pct"],
        ],
        [
          3,
          "Slashers_pct",
          currentPlayerPick[0]["Slashers_pct"],
          percentileScores["Slashers_pct"],
          playerGrades["Slashers_pct"],
        ],
        [
          3,
          "Athletic Finisher_pct",
          currentPlayerPick[0]["Athletic Finisher_pct"],
          percentileScores["Athletic Finisher_pct"],
          playerGrades["Athletic Finisher_pct"],
        ],
        [
          3,
          "Off Screen Shooter_pct",
          currentPlayerPick[0]["Off Screen Shooter_pct"],
          percentileScores["Off Screen Shooter_pct"],
          playerGrades["Off Screen Shooter_pct"],
        ],
        [
          3,
          "Movement Shooter_pct",
          currentPlayerPick[0]["Movement Shooter_pct"],
          percentileScores["Movement Shooter_pct"],
          playerGrades["Movement Shooter_pct"],
        ],
        [
          3,
          "Stationary Shooters_pct",
          currentPlayerPick[0]["Stationary Shooters_pct"],
          percentileScores["Stationary Shooters_pct"],
          playerGrades["Stationary Shooters_pct"],
        ],
        [
          3,
          "Versatile Bigs_pct",
          currentPlayerPick[0]["Versatile Bigs_pct"],
          percentileScores["Versatile Bigs_pct"],
          playerGrades["Versatile Bigs_pct"],
        ],
        [
          3,
          "Post Scorer_pct",
          currentPlayerPick[0]["Post Scorer_pct"],
          percentileScores["Post Scorer_pct"],
          playerGrades["Post Scorer_pct"],
        ],
        [
          3,
          "Stretch Bigs_pct",
          currentPlayerPick[0]["Stretch Bigs_pct"],
          percentileScores["Stretch Bigs_pct"],
          playerGrades["Stretch Bigs_pct"],
        ],
        [
          3,
          "Roll & Cut Bigs_pct",
          currentPlayerPick[0]["Roll & Cut Bigs_pct"],
          percentileScores["Roll & Cut Bigs_pct"],
          playerGrades["Roll & Cut Bigs_pct"],
        ],
        [
          3,
          "Low Minute_pct",
          currentPlayerPick[0]["Low Minute_pct"],
          percentileScores["Low Minute_pct"],
          playerGrades["Low Minute_pct"],
        ],
      ],
    },
    {
      title: "Interior Defense",
      vsaverage: false,
      stats: [
        [
          2,
          "Screener Mobile Defense",
          currentPlayerPick[0]["Screener Mobile Defense"],
          percentileScores["Screener Mobile Defense"],
          playerGrades["Screener Mobile Defense"]
        ],
        [
          2,
          "Post Defense",
          currentPlayerPick[0]["Post Defense"],
          percentileScores["Post Defense"],
          playerGrades["Post Defense"]
        ],
        [
          1,
          "Rim Protection",
          currentPlayerPick[0]["Rim Protection"],
          percentileScores["Rim Protection"],
          playerGrades["Rim Protection"]
        ],
        [
          2,
          "Screener Rim Defense",
          currentPlayerPick[0]["Screener Rim Defense"],
          percentileScores["Screener Rim Defense"],
          playerGrades["Screener Rim Defense"]
        ],
        [
          2,
          "Help Defensive Activity",
          currentPlayerPick[0]["Help Defensive Activity"],
          percentileScores["Help Defensive Activity"],
          playerGrades["Help Defensive Activity"]
        ],
        [
          3,
          "Rim Deterrence_pct",
          currentPlayerPick[0]["Rim Deterrence_pct"],
          percentileScores["Rim Deterrence_pct"],
          playerGrades["Rim Deterrence_pct"]
        ],
        [
          3,
          "% Rim Shots Contested_pct",
          currentPlayerPick[0]["% Rim Shots Contested_pct"],
          percentileScores["% Rim Shots Contested_pct"],
          playerGrades["% Rim Shots Contested_pct"]
        ],
        [
          3,
          "Rim Contests / 75 Poss",
          currentPlayerPick[0]["Rim Contests / 75 Poss"],
          percentileScores["Rim Contests / 75 Poss"],
          playerGrades["Rim Contests / 75 Poss"]
        ],
        [
          3,
          "Blocks / 75 Poss",
          currentPlayerPick[0]["Blocks / 75 Poss"],
          percentileScores["Blocks / 75 Poss"],
          playerGrades["Blocks / 75 Poss"]
        ],
        [
          3,
          "Block Rate on Contests_pct",
          currentPlayerPick[0]["Block Rate on Contests_pct"],
          percentileScores["Block Rate on Contests_pct"],
          playerGrades["Block Rate on Contests_pct"]
        ],
        [
          3,
          "Rim dFG% vs Expected_pct",
          currentPlayerPick[0]["Rim dFG% vs Expected_pct"],
          percentileScores["Rim dFG% vs Expected_pct"],
          playerGrades["Rim dFG% vs Expected_pct"]
        ],
        [
          3,
          "Rim Points Saved / 75",
          currentPlayerPick[0]["Rim Points Saved / 75"],
          percentileScores["Rim Points Saved / 75"],
          playerGrades["Rim Points Saved / 75"]
        ],
        [
          3,
          "Stable Defensive Goaltends Per 75",
          currentPlayerPick[0]["Stable Defensive Goaltends Per 75"],
          percentileScores["Stable Defensive Goaltends Per 75"],
          playerGrades["Stable Defensive Goaltends Per 75"]
        ],
      ],
    },
    {
      title: "Defensive Matchups - Offensive Roles Defended",
      vsaverage: false,
      stats: [
        [
          2,
          "Primary Ball Handler_pct",
          currentPlayerPick[0]["Primary Ball Handler_pct"],
          percentileScores["Primary Ball Handler_pct"],
          playerGrades["Primary Ball Handler_pct"],
        ],
        [
          2,
          "Secondary Ball Handlers_pct",
          currentPlayerPick[0]["Secondary Ball Handlers_pct"],
          percentileScores["Secondary Ball Handlers_pct"],
          playerGrades["Secondary Ball Handlers_pct"],
        ],
        [
          2,
          "Shot Creators_pct",
          currentPlayerPick[0]["Shot Creators_pct"],
          percentileScores["Shot Creators_pct"],
          playerGrades["Shot Creators_pct"],
        ],
        [
          2,
          "Slashers_pct",
          currentPlayerPick[0]["Slashers_pct"],
          percentileScores["Slashers_pct"],
          playerGrades["Slashers_pct"],
        ],
        [
          2,
          "Athletic Finisher_pct",
          currentPlayerPick[0]["Athletic Finisher_pct"],
          percentileScores["Athletic Finisher_pct"],
          playerGrades["Athletic Finisher_pct"],
        ],
        [
          2,
          "Off Screen Shooter_pct",
          currentPlayerPick[0]["Off Screen Shooter_pct"],
          percentileScores["Off Screen Shooter_pct"],
          playerGrades["Off Screen Shooter_pct"],
        ],
        [
          2,
          "Movement Shooter_pct",
          currentPlayerPick[0]["Movement Shooter_pct"],
          percentileScores["Movement Shooter_pct"],
          playerGrades["Movement Shooter_pct"],
        ],
        [
          2,
          "Stationary Shooters_pct",
          currentPlayerPick[0]["Stationary Shooters_pct"],
          percentileScores["Stationary Shooters_pct"],
          playerGrades["Stationary Shooters_pct"],
        ],
        [
          2,
          "Versatile Bigs_pct",
          currentPlayerPick[0]["Versatile Bigs_pct"],
          percentileScores["Versatile Bigs_pct"],
          playerGrades["Versatile Bigs_pct"],
        ],
        [
          2,
          "Post Scorer_pct",
          currentPlayerPick[0]["Post Scorer_pct"],
          percentileScores["Post Scorer_pct"],
          playerGrades["Post Scorer_pct"],
        ],
        [
          2,
          "Stretch Bigs_pct",
          currentPlayerPick[0]["Stretch Bigs_pct"],
          percentileScores["Stretch Bigs_pct"],
          playerGrades["Stretch Bigs_pct"],
        ],
        [
          2,
          "Roll & Cut Bigs_pct",
          currentPlayerPick[0]["Roll & Cut Bigs_pct"],
          percentileScores["Roll & Cut Bigs_pct"],
          playerGrades["Roll & Cut Bigs_pct"],
        ],
        [
          2,
          "Low Minute_pct",
          currentPlayerPick[0]["Low Minute_pct"],
          percentileScores["Low Minute_pct"],
          playerGrades["Low Minute_pct"],
        ],
      ],
    },
    {
      title: "Time on Defense by Position",
      vsaverage: false,
      stats: [
        [
          2,
          "Time on Defense Guarding PG_pct",
          currentPlayerPick[0]["Time on Defense Guarding PG_pct"],
          percentileScores["Time on Defense Guarding PG_pct"],
          playerGrades["Time on Defense Guarding PG_pct"],
        ],
        [
          2,
          "Time on Defense Guarding SG_pct",
          currentPlayerPick[0]["Time on Defense Guarding SG_pct"],
          percentileScores["Time on Defense Guarding SG_pct"],
          playerGrades["Time on Defense Guarding SG_pct"],
        ],
        [
          2,
          "Time on Defense Guarding SF_pct",
          currentPlayerPick[0]["Time on Defense Guarding SF_pct"],
          percentileScores["Time on Defense Guarding SF_pct"],
          playerGrades["Time on Defense Guarding SF_pct"],
        ],
        [
          2,
          "Time on Defense Guarding PF_pct",
          currentPlayerPick[0]["Time on Defense Guarding PF_pct"],
          percentileScores["Time on Defense Guarding PF_pct"],
          playerGrades["Time on Defense Guarding PF_pct"],
        ],
        [
          2,
          "Time on Defense Guarding C_pct",
          currentPlayerPick[0]["Time on Defense Guarding C_pct"],
          percentileScores["Time on Defense Guarding C_pct"],
          playerGrades["Time on Defense Guarding C_pct"],
        ],
      ],
    },
    {
      title: "Usage by Tier",
      vsaverage: false,
      stats: [
        [
          3,
          "Usage Tier 1_pct",
          currentPlayerPick[0]["Usage Tier 1_pct"],
          percentileScores["Usage Tier 1_pct"],
          playerGrades["Usage Tier 1_pct"],
        ],
        [
          3,
          "Usage Tier 2_pct",
          currentPlayerPick[0]["Usage Tier 2_pct"],
          percentileScores["Usage Tier 2_pct"],
          playerGrades["Usage Tier 2_pct"],
        ],
        [
          3,
          "Usage Tier 3_pct",
          currentPlayerPick[0]["Usage Tier 3_pct"],
          percentileScores["Usage Tier 3_pct"],
          playerGrades["Usage Tier 3_pct"],
        ],
        [
          3,
          "Usage Tier 4_pct",
          currentPlayerPick[0]["Usage Tier 4_pct"],
          percentileScores["Usage Tier 4_pct"],
          playerGrades["Usage Tier 4_pct"],
        ],
        [
          3,
          "Usage Tier 5_pct",
          currentPlayerPick[0]["Usage Tier 5_pct"],
          percentileScores["Usage Tier 5_pct"],
          playerGrades["Usage Tier 5_pct"],
        ],
        [
          3,
          "Usage Tier 6_pct",
          currentPlayerPick[0]["Usage Tier 6_pct"],
          percentileScores["Usage Tier 6_pct"],
          playerGrades["Usage Tier 6_pct"],
        ],
      ],
    },
    {
      title: "Player Role",
      vsaverage: false,
      stats: [
        [
          1,
          "Core Player_pct",
          currentPlayerPick[0]["Core Player_pct"],
          percentileScores["Core Player_pct"],
          playerGrades["Core Player_pct"],
        ],
        [
          2,
          "Starter_pct",
          currentPlayerPick[0]["Starter_pct"],
          percentileScores["Starter_pct"],
          playerGrades["Starter_pct"],
        ],
        [
          3,
          "All Star Player_pct",
          currentPlayerPick[0]["All Star Player_pct"],
          percentileScores["All Star Player_pct"],
          playerGrades["All Star Player_pct"],
        ],
        [
          3,
          "All NBA Player_pct",
          currentPlayerPick[0]["All NBA Player_pct"],
          percentileScores["All NBA Player_pct"],
          playerGrades["All NBA Player_pct"],
        ],
      ],
    },
    {
      title: "Player Impact",
      vsaverage: false,
      stats: [
        [
          1,
          "LEBRON",
          currentPlayerPick[0]["LEBRON"],
          percentileScores["LEBRON"],
          playerGrades["LEBRON"],
        ],
        [
          2,
          "O-LEBRON",
          currentPlayerPick[0]["O-LEBRON"],
          percentileScores["O-LEBRON"],
          playerGrades["O-LEBRON"],
        ],
        [
          2,
          "D-LEBRON",
          currentPlayerPick[0]["D-LEBRON"],
          percentileScores["D-LEBRON"],
          playerGrades["D-LEBRON"],
        ],
        [
          2,
          "LEBRON WAR",
          currentPlayerPick[0]["LEBRON WAR"],
          percentileScores["LEBRON WAR"],
          playerGrades["LEBRON WAR"],
        ],
        [
          3,
          "Stable On/Off ORtg",
          currentPlayerPick[0]["Stable On/Off ORtg"],
          percentileScores["Stable On/Off ORtg"],
          playerGrades["Stable On/Off ORtg"]
        ],
        [
          3,
          "Stable On/Off DRtg",
          currentPlayerPick[0]["Stable On/Off DRtg"],
          percentileScores["Stable On/Off DRtg"],
          playerGrades["Stable On/Off DRtg"]
        ],
        [
          3,
          "Stable On/Off Net Rating",
          currentPlayerPick[0]["Stable On/Off Net Rating"],
          percentileScores["Stable On/Off Net Rating"],
          playerGrades["Stable On/Off Net Rating"]
        ],
        [
          3,
          "LA RAPM",
          currentPlayerPick[0]["LA RAPM"],
          percentileScores["LA RAPM"],
          playerGrades["LA RAPM"]
        ],
        [
          3,
          "LA-ORAPM",
          currentPlayerPick[0]["LA-ORAPM"],
          percentileScores["LA-ORAPM"],
          playerGrades["LA-ORAPM"]
        ],
        [
          3,
          "LA-DRAPM",
          currentPlayerPick[0]["LA-DRAPM"],
          percentileScores["LA-DRAPM"],
          playerGrades["LA-DRAPM"]
        ],
        [
          3,
          "LEBRON Box",
          currentPlayerPick[0]["LEBRON Box"],
          percentileScores["LEBRON Box"],
          playerGrades["LEBRON Box"]
        ],
        [
          3,
          "O-LEBRON Box",
          currentPlayerPick[0]["O-LEBRON Box"],
          percentileScores["O-LEBRON Box"],
          playerGrades["O-LEBRON Box"]
        ],
        [
          3,
          "D-LEBRON Box",
          currentPlayerPick[0]["D-LEBRON Box"],
          percentileScores["D-LEBRON Box"],
          playerGrades["D-LEBRON Box"]
        ],
        [
          3,
          "DPM",
          currentPlayerPick[0]["DPM"],
          percentileScores["DPM"],
          playerGrades["DPM"]
        ],
        [
          3,
          "O-DPM",
          currentPlayerPick[0]["O-DPM"],
          percentileScores["O-DPM"],
          playerGrades["O-DPM"]
        ],
        [
          3,
          "D-DPM",
          currentPlayerPick[0]["D-DPM"],
          percentileScores["D-DPM"],
          playerGrades["D-DPM"]
        ],
        [
          3,
          "LEBRON Offensive Points Added",
          currentPlayerPick[0]["LEBRON Offensive Points Added"],
          percentileScores["LEBRON Offensive Points Added"],
          playerGrades["LEBRON Offensive Points Added"]
        ],
        [
          3,
          "LEBRON Defensive Points Saved",
          currentPlayerPick[0]["LEBRON Defensive Points Saved"],
          percentileScores["LEBRON Defensive Points Saved"],
          playerGrades["LEBRON Defensive Points Saved"]
        ],
        [
          3,
          "O-DRIP",
          currentPlayerPick[0]["O-DRIP"],
          percentileScores["O-DRIP"],
          playerGrades["O-DRIP"]
        ],
        [
          3,
          "D-DRIP",
          currentPlayerPick[0]["D-DRIP"],
          percentileScores["D-DRIP"],
          playerGrades["D-DRIP"]
        ],
        [
          3,
          "DRIP",
          currentPlayerPick[0]["DRIP"],
          percentileScores["DRIP"],
          playerGrades["DRIP"]
        ],
        [
          3,
          "BPM LA-RAPM",
          currentPlayerPick[0]["BPM LA-RAPM"],
          percentileScores["BPM LA-RAPM"],
          playerGrades["BPM LA-RAPM"]
        ],
        [
          3,
          "O-BPM LA-RAPM",
          currentPlayerPick[0]["O-BPM LA-RAPM"],
          percentileScores["O-BPM LA-RAPM"],
          playerGrades["O-BPM LA-RAPM"]
        ],
        [
          3,
          "D-BPM LA-RAPM",
          currentPlayerPick[0]["D-BPM LA-RAPM"],
          percentileScores["D-BPM LA-RAPM"],
          playerGrades["D-BPM LA-RAPM"]
        ],
      ],
    },
    {
      title: "Productivity Per 75",
      vsaverage: false,
      stats: [
        [
          1,
          "DK Fantasy Points/75",
          currentPlayerPick[0]["DK Fantasy Points/75"],
          percentileScores["DK Fantasy Points/75"],
          playerGrades["DK Fantasy Points/75"]
        ],
        [
          3,
          "Points/75",
          currentPlayerPick[0]["Points/75"],
          percentileScores["Points/75"],
          playerGrades["Points/75"]
        ],
        [
          3,
          "3PM/75",
          currentPlayerPick[0]["3PM/75"],
          percentileScores["3PM/75"],
          playerGrades["3PM/75"]
        ],
        [
          3,
          "Reb/75",
          currentPlayerPick[0]["Reb/75"],
          percentileScores["Reb/75"],
          playerGrades["Reb/75"]
        ],
        [
          3,
          "Ast/75",
          currentPlayerPick[0]["Ast/75"],
          percentileScores["Ast/75"],
          playerGrades["Ast/75"]
        ],
        [
          3,
          "Stl/75",
          currentPlayerPick[0]["Stl/75"],
          percentileScores["Stl/75"],
          playerGrades["Stl/75"]
        ],
        [
          3,
          "Blk/75",
          currentPlayerPick[0]["Blk/75"],
          percentileScores["Blk/75"],
          playerGrades["Blk/75"]
        ],
        [
          3,
          "TOV/75",
          currentPlayerPick[0]["TOV/75"],
          percentileScores["TOV/75"],
          playerGrades["TOV/75"]
        ],
        [
          3,
          "PF/75",
          currentPlayerPick[0]["PF/75"],
          percentileScores["PF/75"],
          playerGrades["PF/75"]
        ],
        [
          3,
          "Stable Points Per 75",
          currentPlayerPick[0]["Stable Points Per 75"],
          percentileScores["Stable Points Per 75"],
          playerGrades["Stable Points Per 75"]
        ],
        [
          3,
          "Stable Assists Per 75",
          currentPlayerPick[0]["Stable Assists Per 75"],
          percentileScores["Stable Assists Per 75"],
          playerGrades["Stable Assists Per 75"]
        ],
        [
          3,
          "Stable Rebounds Per 75",
          currentPlayerPick[0]["Stable Rebounds Per 75"],
          percentileScores["Stable Rebounds Per 75"],
          playerGrades["Stable Rebounds Per 75"]
        ],
        [
          3,
          "Stable Offensive Rebounds Per 75",
          currentPlayerPick[0]["Stable Offensive Rebounds Per 75"],
          percentileScores["Stable Offensive Rebounds Per 75"],
          playerGrades["Stable Offensive Rebounds Per 75"]
        ],
        [
          3,
          "Stable Defensive Rebounds Per 75",
          currentPlayerPick[0]["Stable Defensive Rebounds Per 75"],
          percentileScores["Stable Defensive Rebounds Per 75"],
          playerGrades["Stable Defensive Rebounds Per 75"]
        ],
        [
          3,
          "Stable 3PTA Per 75",
          currentPlayerPick[0]["Stable 3PTA Per 75"],
          percentileScores["Stable 3PTA Per 75"],
          playerGrades["Stable 3PTA Per 75"]
        ],
        [
          3,
          "Stable 2PTA Per 75",
          currentPlayerPick[0]["Stable 2PTA Per 75"],
          percentileScores["Stable 2PTA Per 75"],
          playerGrades["Stable 2PTA Per 75"]
        ],
        [
          3,
          "Stable FGA Per 75",
          currentPlayerPick[0]["Stable FGA Per 75"],
          percentileScores["Stable FGA Per 75"],
          playerGrades["Stable FGA Per 75"]
        ],
        [
          3,
          "Stable Blocks Per 75",
          currentPlayerPick[0]["Stable Blocks Per 75"],
          percentileScores["Stable Blocks Per 75"],
          playerGrades["Stable Blocks Per 75"]
        ],
        [
          3,
          "Stable FTA Per 75",
          currentPlayerPick[0]["Stable FTA Per 75"],
          percentileScores["Stable FTA Per 75"],
          playerGrades["Stable FTA Per 75"]
        ],
        [
          3,
          "Stable Fouls Per 75",
          currentPlayerPick[0]["Stable Fouls Per 75"],
          percentileScores["Stable Fouls Per 75"],
          playerGrades["Stable Fouls Per 75"]
        ],
        [
          3,
          "Stable TOV Per 75",
          currentPlayerPick[0]["Stable TOV Per 75"],
          percentileScores["Stable TOV Per 75"],
          playerGrades["Stable TOV Per 75"]
        ],
        [
          3,
          "Stable Steals Per 75",
          currentPlayerPick[0]["Stable Steals Per 75"],
          percentileScores["Stable Steals Per 75"],
          playerGrades["Stable Steals Per 75"]
        ],
        [
          3,
          "Stable Plus Minus Per 75",
          currentPlayerPick[0]["Stable Plus Minus Per 75"],
          percentileScores["Stable Plus Minus Per 75"],
          playerGrades["Stable Plus Minus Per 75"]
        ],
        [
          3,
          "Stable And 1s Per 75",
          currentPlayerPick[0]["Stable And 1s Per 75"],
          percentileScores["Stable And 1s Per 75"],
          playerGrades["Stable And 1s Per 75"]
        ],
        [
          3,
          "Stable Charge Fouls Per 75",
          currentPlayerPick[0]["Stable Charge Fouls Per 75"],
          percentileScores["Stable Charge Fouls Per 75"],
          playerGrades["Stable Charge Fouls Per 75"]
        ],
        [
          3,
          "Stable Non Shooting Fouls Drawn Per 75",
          currentPlayerPick[0]["Stable Non Shooting Fouls Drawn Per 75"],
          percentileScores["Stable Non Shooting Fouls Drawn Per 75"],
          playerGrades["Stable Non Shooting Fouls Drawn Per 75"]
        ],
        [
          3,
          "Stable Non Shooting Penalty Non Take Fouls Drawn Per 75",
          currentPlayerPick[0]["Stable Non Shooting Penalty Non Take Fouls Drawn Per 75"],
          percentileScores["Stable Non Shooting Penalty Non Take Fouls Drawn Per 75"],
          playerGrades["Stable Non Shooting Penalty Non Take Fouls Drawn Per 75"]
        ],
          [        3,
            "Stable Offensive Goaltends Per 75",
            currentPlayerPick[0]["Stable Offensive Goaltends Per 75"],
            percentileScores["Stable Offensive Goaltends Per 75"],
            playerGrades["Stable Offensive Goaltends Per 75"]
          ],
        [
          3,
          "Stable Offensive Fouls Per 75",
          currentPlayerPick[0]["Stable Offensive Fouls Per 75"],
          percentileScores["Stable Offensive Fouls Per 75"],
          playerGrades["Stable Offensive Fouls Per 75"]
        ],
        [
          3,
          "Stable Putback Points Per 75",
          currentPlayerPick[0]["Stable Putback Points Per 75"],
          percentileScores["Stable Putback Points Per 75"],
          playerGrades["Stable Putback Points Per 75"]
        ],
        [
          3,
          "Stable Shooting Fouls Drawn Per 75",
          currentPlayerPick[0]["Stable Shooting Fouls Drawn Per 75"],
          percentileScores["Stable Shooting Fouls Drawn Per 75"],
          playerGrades["Stable Shooting Fouls Drawn Per 75"]
        ],
        [
          3,
          "Stable Travels Per 75",
          currentPlayerPick[0]["Stable Travels Per 75"],
          percentileScores["Stable Travels Per 75"],
          playerGrades["Stable Travels Per 75"]
        ],
        [
          3,
          "Stable 3-Second Violations Per 75",
          currentPlayerPick[0]["Stable 3-Second Violations Per 75"],
          percentileScores["Stable 3-Second Violations Per 75"],
          playerGrades["Stable 3-Second Violations Per 75"]
        ],
        [
          3,
          "Stable Bad Pass Steals Per 75",
          currentPlayerPick[0]["Stable Bad Pass Steals Per 75"],
          percentileScores["Stable Bad Pass Steals Per 75"],
          playerGrades["Stable Bad Pass Steals Per 75"]
        ],
        [
          3,
          "Stable Charge Fouls Drawn Per 75",
          currentPlayerPick[0]["Stable Charge Fouls Drawn Per 75"],
          percentileScores["Stable Charge Fouls Drawn Per 75"],
          playerGrades["Stable Charge Fouls Drawn Per 75"]
        ],
        [
          3,
          "Stable Defensive 3-Second Violations Per 75",
          currentPlayerPick[0]["Stable Defensive 3-Second Violations Per 75"],
          percentileScores["Stable Defensive 3-Second Violations Per 75"],
          playerGrades["Stable Defensive 3-Second Violations Per 75"]
        ],
        [
          3,
          "Stable Lost Ball Steals Per 75",
          currentPlayerPick[0]["Stable Lost Ball Steals Per 75"],
          percentileScores["Stable Lost Ball Steals Per 75"],
          playerGrades["Stable Lost Ball Steals Per 75"]
        ],
        [
          3,
          "Stable Non Shooting Penalty Non Take Fouls Per 75",
          currentPlayerPick[0]["Stable Non Shooting Penalty Non Take Fouls Per 75"],
          percentileScores["Stable Non Shooting Penalty Non Take Fouls Per 75"],
          playerGrades["Stable Non Shooting Penalty Non Take Fouls Per 75"]
        ],
        [
          3,
          "Stable Offensive Fouls Drawn Per 75",
          currentPlayerPick[0]["Stable Offensive Fouls Drawn Per 75"],
          percentileScores["Stable Offensive Fouls Drawn Per 75"],
          playerGrades["Stable Offensive Fouls Drawn Per 75"]
        ],
        [
          3,
          "Stable Recovered Blocks Per 75",
          currentPlayerPick[0]["Stable Recovered Blocks Per 75"],
          percentileScores["Stable Recovered Blocks Per 75"],
          playerGrades["Stable Recovered Blocks Per 75"]
        ],
        [
          3,
          "Stable Shooting Fouls Per 75",
          currentPlayerPick[0]["Stable Shooting Fouls Per 75"],
          percentileScores["Stable Shooting Fouls Per 75"],
          playerGrades["Stable Shooting Fouls Per 75"]
        ],
        [
          3,
          "Stable Fouls Drawn Per 75",
          currentPlayerPick[0]["Stable Fouls Drawn Per 75"],
          percentileScores["Stable Fouls Drawn Per 75"],
          playerGrades["Stable Fouls Drawn Per 75"]
        ],
        [
          3,
          "Stable Loose Ball Fouls Per 75",
          currentPlayerPick[0]["Stable Loose Ball Fouls Per 75"],
          percentileScores["Stable Loose Ball Fouls Per 75"],
          playerGrades["Stable Loose Ball Fouls Per 75"]
        ],
        [
          3,
          "Stable Loose Ball Fouls Drawn Per 75",
          currentPlayerPick[0]["Stable Loose Ball Fouls Drawn Per 75"],
          percentileScores["Stable Loose Ball Fouls Drawn Per 75"],
          playerGrades["Stable Loose Ball Fouls Drawn Per 75"]
        ],
        [
          3,
          "Stable Recovered Blocks_pct",
          currentPlayerPick[0]["Stable Recovered Blocks_pct"],
          percentileScores["Stable Recovered Blocks_pct"],
          playerGrades["Stable Recovered Blocks_pct"]
        ],
        ],
    },
    {
      title: "Productivity Per Game",
      vsaverage: false,
      stats: [
        [
          1,
          "DK Fantasy Points/GP",
          currentPlayerPick[0]["DK Fantasy Points/GP"],
          percentileScores["DK Fantasy Points/GP"],
          playerGrades["DK Fantasy Points/GP"]
        ],
        [
          3,
          "PPG",
          currentPlayerPick[0]["PPG"],
          percentileScores["PPG"],
          playerGrades["PPG"]
        ],
        [
          3,
          "3PM/GP",
          currentPlayerPick[0]["3PM/GP"],
          percentileScores["3PM/GP"],
          playerGrades["3PM/GP"]
        ],
        [
          3,
          "Reb/GP",
          currentPlayerPick[0]["Reb/GP"],
          percentileScores["Reb/GP"],
          playerGrades["Reb/GP"]
        ],
        [
          3,
          "Ast/GP",
          currentPlayerPick[0]["Ast/GP"],
          percentileScores["Ast/GP"],
          playerGrades["Ast/GP"]
        ],
        [
          3,
          "Stl/GP",
          currentPlayerPick[0]["Stl/GP"],
          percentileScores["Stl/GP"],
          playerGrades["Stl/GP"]
        ],
        [
          3,
          "Blk/GP",
          currentPlayerPick[0]["Blk/GP"],
          percentileScores["Blk/GP"],
          playerGrades["Blk/GP"]
        ],
        [
          3,
          "TOV/GP",
          currentPlayerPick[0]["TOV/GP"],
          percentileScores["TOV/GP"],
          playerGrades["TOV/GP"]
        ],
        [
          3,
          "PF/GP",
          currentPlayerPick[0]["PF/GP"],
          percentileScores["PF/GP"],
          playerGrades["PF/GP"]
        ],
      ],
    },
    {
      title: "Team 4-Factor Impact",
      vsaverage: false,
      stats: [
        [
          1,
          "Total eFG% Impact",
          currentPlayerPick[0]["Total eFG% Impact"],
          percentileScores["Total eFG% Impact"],
          playerGrades["Total eFG% Impact"]
        ],
        [
          1,
          "Total FT Rate Impact",
          currentPlayerPick[0]["Total FT Rate Impact"],
          percentileScores["Total FT Rate Impact"],
          playerGrades["Total FT Rate Impact"]
        ],
        [
          1,
          "Total Rebounding Impact",
          currentPlayerPick[0]["Total Rebounding Impact"],
          percentileScores["Total Rebounding Impact"],
          playerGrades["Total Rebounding Impact"]
        ],
        [
          1,
          "Total Turnover Impact",
          currentPlayerPick[0]["Total Turnover Impact"],
          percentileScores["Total Turnover Impact"],
          playerGrades["Total Turnover Impact"]
        ],
        [
          2,
          "Defensive eFG% Impact",
          currentPlayerPick[0]["Defensive eFG% Impact"],
          percentileScores["Defensive eFG% Impact"],
          playerGrades["Defensive eFG% Impact"]
        ],
        [
          2,
          "Offensive eFG% Impact",
          currentPlayerPick[0]["Offensive eFG% Impact"],
          percentileScores["Offensive eFG% Impact"],
          playerGrades["Offensive eFG% Impact"]
        ],
        [
          2,
          "Defensive FT Rate Impact",
          currentPlayerPick[0]["Defensive FT Rate Impact"],
          percentileScores["Defensive FT Rate Impact"],
          playerGrades["Defensive FT Rate Impact"]
        ],
        [
          2,
          "Offensive FT Rate Impact",
          currentPlayerPick[0]["Offensive FT Rate Impact"],
          percentileScores["Offensive FT Rate Impact"],
          playerGrades["Offensive FT Rate Impact"]
        ],
        [
          3,
          "Defensive Turnover Generation Impact",
          currentPlayerPick[0]["Defensive Turnover Generation Impact"],
          percentileScores["Defensive Turnover Generation Impact"],
          playerGrades["Defensive Turnover Generation Impact"]
        ],
        [
          3,
          "Offensive Turnover Generation Impact",
          currentPlayerPick[0]["Offensive Turnover Generation Impact"],
          percentileScores["Offensive Turnover Generation Impact"],
          playerGrades["Offensive Turnover Generation Impact"]
        ],
        [
          3,
          "Defensive Rebounding Impact",
          currentPlayerPick[0]["Defensive Rebounding Impact"],
          percentileScores["Defensive Rebounding Impact"],
          playerGrades["Defensive Rebounding Impact"]
        ],
        [
          3,
          "Offensive Rebounding Impact",
          currentPlayerPick[0]["Offensive Rebounding Impact"],
          percentileScores["Offensive Rebounding Impact"],
          playerGrades["Offensive Rebounding Impact"]
        ]
      ],
    },
    {
      title: "Scoring Effeciency",
      vsaverage: false,
      stats: [
        [
          1,
          "Shooting Talent",
          currentPlayerPick[0]["Shooting Talent"],
          percentileScores["Shooting Talent"],
          playerGrades["Shooting Talent"],
        ],
        [
          2,
          "Effective FG_pct",
          currentPlayerPick[0]["Effective FG_pct"],
          percentileScores["Effective FG_pct"],
          playerGrades["Effective FG_pct"],
        ],
        [
          2,
          "True Shooting_pct",
          currentPlayerPick[0]["True Shooting_pct"],
          percentileScores["True Shooting_pct"],
          playerGrades["True Shooting_pct"]
        ],
        [
          2,
          "Points/Possession (PPP)",
          currentPlayerPick[0]["Points/Possession (PPP)"],
          percentileScores["Points/Possession (PPP)"],
          playerGrades["Points/Possession (PPP)"]
        ],
        [
          2,
          "FT_pct",
          currentPlayerPick[0]["FT_pct"],
          percentileScores["FT_pct"],
          playerGrades["FT_pct"]
        ],
        [
          2,
          "Overall Shot Making",
          currentPlayerPick[0]["Overall Shot Making"],
          percentileScores["Overall Shot Making"],
          playerGrades["Overall Shot Making"]
        ],
        [
          2,
          "Overall Shot Quality",
          currentPlayerPick[0]["Overall Shot Quality"],
          percentileScores["Overall Shot Quality"],
          playerGrades["Overall Shot Quality"]
        ],
        [
          2,
          "Overall Shot Creation",
          currentPlayerPick[0]["Overall Shot Creation"],
          percentileScores["Overall Shot Creation"],
          playerGrades["Overall Shot Creation"]
        ],
        [
          2,
          "Pull-Up Shooting Talent",
          currentPlayerPick[0]["Pull-Up Shooting Talent"],
          percentileScores["Pull-Up Shooting Talent"],
          playerGrades["Pull-Up Shooting Talent"]
        ],
        [
          2,
          "Off-Ball Shot Making",
          currentPlayerPick[0]["Off-Ball Shot Making"],
          percentileScores["Off-Ball Shot Making"],
          playerGrades["Off-Ball Shot Making"]
        ],
        [
          2,
          "Self-Created Shot Making",
          currentPlayerPick[0]["Self-Created Shot Making"],
          percentileScores["Self-Created Shot Making"],
          playerGrades["Self-Created Shot Making"]
        ],
        [
          3,
          "Effective FG_pct",
          currentPlayerPick[0]["Effective FG_pct"],
          percentileScores["Effective FG_pct"],
          playerGrades["Effective FG_pct"]
        ],
        [
          3,
          "Points Per Shot",
          currentPlayerPick[0]["Points Per Shot"],
          percentileScores["Points Per Shot"],
          playerGrades["Points Per Shot"]
        ],
        [
          3,
          "Points Over Expectation",
          currentPlayerPick[0]["Points Over Expectation"],
          percentileScores["Points Over Expectation"],
          playerGrades["Points Over Expectation"]
        ],
        [
          3,
          "Stable Transition PPP",
          currentPlayerPick[0]["Stable Transition PPP"],
          percentileScores["Stable Transition PPP"],
          playerGrades["Stable Transition PPP"]
        ],
        [
          3,
          "Stable Spot Up PPP",
          currentPlayerPick[0]["Stable Spot Up PPP"],
          percentileScores["Stable Spot Up PPP"],
          playerGrades["Stable Spot Up PPP"]
        ],
        [
          3,
          "Stable P&R Ball Handler PPP",
          currentPlayerPick[0]["Stable P&R Ball Handler PPP"],
          percentileScores["Stable P&R Ball Handler PPP"],
          playerGrades["Stable P&R Ball Handler PPP"]
        ],
        [
          3,
          "Stable Putbacks PPP",
          currentPlayerPick[0]["Stable Putbacks PPP"],
          percentileScores["Stable Putbacks PPP"],
          playerGrades["Stable Putbacks PPP"]
        ],
        [
          3,
          "Handoff PPP",
          currentPlayerPick[0]["Handoff PPP"],
          percentileScores["Handoff PPP"],
          playerGrades["Handoff PPP"]
        ],
        [
          3,
          "Stable Dump Offs PPP",
          currentPlayerPick[0]["Stable Dump Offs PPP"],
          percentileScores["Stable Dump Offs PPP"],
          playerGrades["Stable Dump Offs PPP"]
        ],
        [
          3,
          "Transition Shot Quality",
          currentPlayerPick[0]["Transition Shot Quality"],
          percentileScores["Transition Shot Quality"],
          playerGrades["Transition Shot Quality"]
        ],
        [
          3,
          "Transition Shot Creation",
          currentPlayerPick[0]["Transition Shot Creation"],
          percentileScores["Transition Shot Creation"],
          playerGrades["Transition Shot Creation"]
        ],
        [
          3,
          "Transition Shot Making",
          currentPlayerPick[0]["Transition Shot Making"],
          percentileScores["Transition Shot Making"],
          playerGrades["Transition Shot Making"]
        ],
        [
          3,
          "Transition Shooting Talent",
          currentPlayerPick[0]["Transition Shooting Talent"],
          percentileScores["Transition Shooting Talent"],
          playerGrades["Transition Shooting Talent"]
        ],
        [
          3,
          "Half Court Shot Quality",
          currentPlayerPick[0]["Half Court Shot Quality"],
          percentileScores["Half Court Shot Quality"],
          playerGrades["Half Court Shot Quality"]
        ],
        [
          3,
          "Half Court Shot Creation",
          currentPlayerPick[0]["Half Court Shot Creation"],
          percentileScores["Half Court Shot Creation"],
          playerGrades["Half Court Shot Creation"]
        ],
        [
          3,
          "Half Court Shot Making",
          currentPlayerPick[0]["Half Court Shot Making"],
          percentileScores["Half Court Shot Making"],
          playerGrades["Half Court Shot Making"]
        ],
        [
          3,
          "Half Court Shooting Talent",
          currentPlayerPick[0]["Half Court Shooting Talent"],
          percentileScores["Half Court Shooting Talent"],
          playerGrades["Half Court Shooting Talent"]
        ],
        [
          3,
          "Off-Ball Shot Quality",
          currentPlayerPick[0]["Off-Ball Shot Quality"],
          percentileScores["Off-Ball Shot Quality"],
          playerGrades["Off-Ball Shot Quality"]
        ],
        [
          3,
          "Self-Created Shot Quality",
          currentPlayerPick[0]["Self-Created Shot Quality"],
          percentileScores["Self-Created Shot Quality"],
          playerGrades["Self-Created Shot Quality"]
        ],
        [
          3,
          "Stable FTA Per 75",
          currentPlayerPick[0]["Stable FTA Per 75"],
          percentileScores["Stable FTA Per 75"],
          playerGrades["Stable FTA Per 75"]
        ],
        [
          3,
          "Stable FT_pct",
          currentPlayerPick[0]["Stable FT_pct"],
          percentileScores["Stable FT_pct"],
          playerGrades["Stable FT_pct"]
        ],
        [
          3,
          "Stable FG3_pct",
          currentPlayerPick[0]["Stable FG3_pct"],
          percentileScores["Stable FG3_pct"],
          playerGrades["Stable FG3_pct"]
        ],
        [
          3,
          "Stable FG2_pct",
          currentPlayerPick[0]["Stable FG2_pct"],
          percentileScores["Stable FG2_pct"],
          playerGrades["Stable FG2_pct"]
        ],
          [
            3,
            "Stable Rim FG_pct",
            currentPlayerPick[0]["Stable Rim FG_pct"],
            percentileScores["Stable Rim FG_pct"],
            playerGrades["Stable Rim FG_pct"]
          ],
        [
          3,
          "Stable Short Midrange FG_pct",
          currentPlayerPick[0]["Stable Short Midrange FG_pct"],
          percentileScores["Stable Short Midrange FG_pct"],
          playerGrades["Stable Short Midrange FG_pct"]
        ],
        [
          3,
          "Stable Long Midrange FG_pct",
          currentPlayerPick[0]["Stable Long Midrange FG_pct"],
          percentileScores["Stable Long Midrange FG_pct"],
          playerGrades["Stable Long Midrange FG_pct"]
        ],
        [
          3,
          "Stable eFG_pct",
          currentPlayerPick[0]["Stable eFG_pct"],
          percentileScores["Stable eFG_pct"],
          playerGrades["Stable eFG_pct"]
        ],
        [
          3,
          "Stable Location Shot Quality Avg",
          currentPlayerPick[0]["Stable Location Shot Quality Avg"],
          percentileScores["Stable Location Shot Quality Avg"],
          playerGrades["Stable Location Shot Quality Avg"]
        ],
        [
          3,
          "Stable Location Shot Making",
          currentPlayerPick[0]["Stable Location Shot Making"],
          percentileScores["Stable Location Shot Making"],
          playerGrades["Stable Location Shot Making"]
        ],
        [
          3,
          "Stable TS_pct",
          currentPlayerPick[0]["Stable TS_pct"],
          percentileScores["Stable TS_pct"],
          playerGrades["Stable TS_pct"]
        ],
        [
          3,
          "Stable Cut PPP",
          currentPlayerPick[0]["Stable Cut PPP"],
          percentileScores["Stable Cut PPP"],
          playerGrades["Stable Cut PPP"]
        ],
        [
          3,
          "Stable Off Screen PPP",
          currentPlayerPick[0]["Stable Off Screen PPP"],
          percentileScores["Stable Off Screen PPP"],
          playerGrades["Stable Off Screen PPP"]
        ],
        [
          3,
          "Stable Isolation PPP",
          currentPlayerPick[0]["Stable Isolation PPP"],
          percentileScores["Stable Isolation PPP"],
          playerGrades["Stable Isolation PPP"]
        ],
        [
          3,
          "Stable Post Up PPP",
          currentPlayerPick[0]["Stable Post Up PPP"],
          percentileScores["Stable Post Up PPP"],
          playerGrades["Stable Post Up PPP"]
        ],
        [
          3,
          "Stable P&R Roll Man PPP",
          currentPlayerPick[0]["Stable P&R Roll Man PPP"],
          percentileScores["Stable P&R Roll Man PPP"],
          playerGrades["Stable P&R Roll Man PPP"]
        ],
      ],
    },
  ];
};

export default FullDataTable;

