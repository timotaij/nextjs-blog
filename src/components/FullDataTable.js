import { Grid } from "@mui/material";
import Card from "./Card";
import * as React from "react";
import Button from "@mui/material/Button";



const fullDataTable = ({ playerRow, percentileScores, Grades }) => { return [
    {
        title: "Opportunity & Usage",
        vsaverage: true,
        stats: [
            ["Minutes/Game", playerRow[0]['Minutes/Game'], percentileScores['Minutes/Game'], Grades['Minutes/Game']],
            ["Percent of Games Started", playerRow[0]['Games Started_pct'], percentileScores['Games Started_pct'], Grades['Games Started_pct']],
            ["Touches/Game", playerRow[0]['Touches/Game'], percentileScores['Touches/Game'], Grades['Touches/Game']],
            ["Scoring Possessions / 75", playerRow[0]['Scoring Possessions / 75'], percentileScores['Scoring Possessions / 75'], Grades['Scoring Possessions / 75']],
            ["Ball Dominance", playerRow[0]['Ball Dominance_pct'], percentileScores['Ball Dominance_pct'], Grades['Ball Dominance_pct']],
            ["Usage Rate", playerRow[0]['Usage Rate_pct'], percentileScores['Usage Rate_pct'], Grades['Usage Rate_pct']],
            ["True Usage", playerRow[0]['True Usage_pct'], percentileScores['True Usage_pct'], Grades['True Usage_pct']],
            ["Total Offensive Load", playerRow[0]['Total Offensive Load_pct'], percentileScores['Total Offensive Load_pct'], Grades['Total Offensive Load_pct']],
        ],
    },
    {
        title: "Contextual Data",
        vsaverage: false,
        stats: [
            ["Lineup Finishing", playerRow[0]['Lineup Finishing_pct'], percentileScores['Lineup Finishing_pct'], Grades['Lineup Finishing_pct']],
            ["Lineup Playmaking", playerRow[0]['Lineup Playmaking_pct'], percentileScores['Lineup Playmaking_pct'], Grades['Lineup Playmaking_pct']],
            ["Lineup Spacing", playerRow[0]['Lineup Spacing_pct'], percentileScores['Lineup Spacing_pct'], Grades['Lineup Spacing_pct']],
            ["Matchup Difficulty", playerRow[0]['Matchup Difficulty'], percentileScores['Matchup Difficulty'], Grades['Matchup Difficulty']],
            ["D Position Versatility", playerRow[0]['Defensive Positional Versatility'], percentileScores['Defensive Positional Versatility'], Grades['Defensive Positional Versatility']],
            ["D Role Versatility", playerRow[0]['Defensive Role Versatility'], percentileScores['Defensive Role Versatility'], Grades['Defensive Role Versatility']],
            ["Foul Trouble Percentage", playerRow[0]['Foul Trouble_pct'], percentileScores['Foul Trouble_pct'], Grades['Foul Trouble_pct']],
        ],
    },
    {
        title: "Perimeter Shooting",
        vsaverage: false,
        stats: [
            ["3PT%", playerRow[0]['3PT_pct'], percentileScores['3PT_pct'], Grades['3PT_pct']],
            ["Pull Up 3PT%", playerRow[0]['Pull Up 3PT_pct'], percentileScores['Pull Up 3PT_pct'], Grades['Pull Up 3PT_pct']],
            ["C&S 3PT%", playerRow[0]['C&S 3PT_pct'], percentileScores['C&S 3PT_pct'], Grades['C&S 3PT_pct']],
            ["ATB 3PT%", playerRow[0]['ATB 3PT_pct'], percentileScores['ATB 3PT_pct'], Grades['ATB 3PT_pct']],
            ["Corner 3PT%", playerRow[0]['Corner 3PT_pct'], percentileScores['Corner 3PT_pct'], Grades['Corner 3PT_pct']],
            ["Openness Rating", playerRow[0]['3PT Openness Rating'], percentileScores['3PT Openness Rating'], Grades['3PT Openness Rating']],
            ["Percent of 3PTA Open", playerRow[0]['3PTA Open_pct'], percentileScores['3PTA Open_pct'], Grades['3PTA Open_pct']],
            ["Avg. 3PT Shot Distance", playerRow[0]['Avg. 3PT Shot Distance'], percentileScores['Avg. 3PT Shot Distance'], Grades['Avg. 3PT Shot Distance']],
            ["C&S : Pull Up Ratio", playerRow[0]['C&S : Pull Up Ratio'], "", ""],
            ["Corner 3: ATB Ratio", playerRow[0]['Corner 3 : ATB Ratio'], "", ""],
            ["3PT Shot Quality", playerRow[0]['3PT Shot Quality'], percentileScores['3PT Shot Quality'], Grades['3PT Shot Quality']],
            ["3PT Foul Rate", playerRow[0]['3PT Foul Rate_pct'], percentileScores['3PT Foul Rate_pct'], Grades['3PT Foul Rate_pct']],
            ["3PTA Rate", playerRow[0]['3PTA Rate_pct'], percentileScores['3PTA Rate_pct'], Grades['3PTA Rate_pct']],
            ["3PT Shot Making", playerRow[0]['3PT Shot Making'], percentileScores['3PT Shot Making'], Grades['3PT Shot Making']],
            ["3PT Shot Creation", playerRow[0]['3PT Shot Creation'], percentileScores['3PT Shot Creation'], Grades['3PT Shot Creation']],
            ["Perimeter Shooting", playerRow[0]['3PT Shooting Talent'], percentileScores['3PT Shooting Talent'], Grades['3PT Shooting Talent']],
        ],
    },
    {
        title: "One on One",
        vsaverage: false,
        stats: [
            ["Total Isolations / 75", playerRow[0]['Total Isolations / 75'], percentileScores['Total Isolations / 75'], Grades['Total Isolations / 75']],
            ["Total Iso Impact / 75", playerRow[0]['Total Iso Impact / 75'], percentileScores['Total Iso Impact / 75'], Grades['Total Iso Impact / 75']],
            ["Total Isolation eFG%", playerRow[0]['Total Isolation eFG_pct'], percentileScores['Total Isolation eFG_pct'], Grades['Total Isolation eFG_pct']],
            ["Iso Foul Drawn Rate", playerRow[0]['Iso Foul Drawn Rate_pct'], percentileScores['Iso Foul Drawn Rate_pct'], Grades['Iso Foul Drawn Rate_pct']],
            ["Isolation Turnover Rate", playerRow[0]['Iso TO Rate_pct'], percentileScores['Iso TO Rate_pct'], Grades['Iso TO Rate_pct']],
            ["Perimeter Iso : Post Iso Ratio", "", "98% Outside", "2% Post"],
            ["Left Side : Right Side Isolation Ration", "", "41% Left", "59% Right"],
        ],
    },
    {
        title: "Off Ball Movement",
        vsaverage: false,
        stats: [
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Dist. Rating", playerRow[0]['Movement Dist. Rating'], percentileScores['Movement Dist. Rating'], Grades['Movement Dist. Rating']],
            ["Movement Speed Rating", playerRow[0]['Movement Speed Rating'], percentileScores['Movement Speed Rating'], Grades['Movement Speed Rating']],
            ["Movement Pts. / 75 Poss", playerRow[0]['Movement Pts. / 75 Poss'], percentileScores['Movement Pts. / 75 Poss'], Grades['Movement Pts. / 75 Poss']],
            ["Movement Impact / 75", playerRow[0]['Movement Impact / 75'], percentileScores['Movement Impact / 75'], Grades['Movement Impact / 75']],
            ["Off Screen Poss/ 75 Poss", playerRow[0]['Off Screen Poss/ 75 Poss'], percentileScores['Off Screen Poss/ 75 Poss'], Grades['Off Screen Poss/ 75 Poss']],
            ["Off Screen Share_pct", playerRow[0]['Off Screen Share_pct'], percentileScores['Off Screen Share_pct'], Grades['Off Screen Share_pct']],
            ["Off Screen eFG_pct", playerRow[0]['Off Screen eFG_pct'], percentileScores['Off Screen eFG_pct'], Grades['Off Screen eFG_pct']],
            ["Straight : Fade : Flare : Curl Ratio", playerRow[0]['Straight : Fade : Flare : Curl Ratio'], "", ""],
            ["Cuts/75", playerRow[0]['Cuts/75'], percentileScores['Cuts/75'], Grades['Cuts/75']],
            ["Cut Share_pct", playerRow[0]['Cut Share_pct'], percentileScores['Cut Share_pct'], Grades['Cut Share_pct']],
            ["Cut FG_pct", playerRow[0]['Cut FG_pct'], percentileScores['Cut FG_pct'], Grades['Cut FG_pct']],
            ["Flash : Screen Cut Ratio", playerRow[0]['Flash : Screen Cut Ratio'], "", ""],
        ],
    },
    {
        title: "Off Ball Movement",
        vsaverage: false,
        stats: [
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
        ],
    },
    {
        title: "Finishing",
        vsaverage: false,
        stats: [
            ["Drives / 75", playerRow[0]['Drives / 75'], percentileScores['Drives / 75'], Grades['Drives / 75']],
            ["Total Shots at Rim / 75", playerRow[0]['Total Shots at Rim / 75'], percentileScores['Total Shots at Rim / 75'], Grades['Total Shots at Rim / 75']],
            ["Unassisted Rim FGA / 75", playerRow[0]['Unassisted Rim FGA / 75'], percentileScores['Unassisted Rim FGA / 75'], Grades['Unassisted Rim FGA / 75']],
            ["% of Rim Unassisted_pct", playerRow[0]['% of Rim Unassisted_pct'], percentileScores['% of Rim Unassisted_pct'], Grades['% of Rim Unassisted_pct']],
            ["Rim Shot Creation", playerRow[0]['Rim Shot Creation'], percentileScores['Rim Shot Creation'], Grades['Rim Shot Creation']],
            ["Drive Passout Rate_pct", playerRow[0]['Drive Passout Rate_pct'], percentileScores['Drive Passout Rate_pct'], Grades['Drive Passout Rate_pct']],
            ["Drive Assist Rate_pct", playerRow[0]['Drive Assist Rate_pct'], percentileScores['Drive Assist Rate_pct'], Grades['Drive Assist Rate_pct']],
            ["Drive Assist/Pass_pct", playerRow[0]['Drive Assist/Pass_pct'], percentileScores['Drive Assist/Pass_pct'], Grades['Drive Assist/Pass_pct']],
            ["Drive Foul Drawn Rate_pct", playerRow[0]['Drive Foul Drawn Rate_pct'], percentileScores['Drive Foul Drawn Rate_pct'], Grades['Drive Foul Drawn Rate_pct']],
            ["Contact Finish Rate_pct", playerRow[0]['Contact Finish Rate_pct'], percentileScores['Contact Finish Rate_pct'], Grades['Contact Finish Rate_pct']],
            ["Rim FG_pct", playerRow[0]['Rim FG_pct'], percentileScores['Rim FG_pct'], Grades['Rim FG_pct']],
            ["Rim Shot Quality", playerRow[0]['Rim Shot Quality'], percentileScores['Rim Shot Quality'], Grades['Rim Shot Quality']],
            ["Rim Shot Making", playerRow[0]['Rim Shot Making'], percentileScores['Rim Shot Making'], Grades['Rim Shot Making']],
            ["Finishing Talent", playerRow[0]['Finishing Talent'], percentileScores['Finishing Talent'], Grades['Finishing Talent']]
        ],
    },
    {
        title: "Roll Gravity",
        vsaverage: false,
        stats: [
            ["Roll Man Poss / 75 Poss", playerRow[0]['Roll Man Poss / 75 Poss'], percentileScores['Roll Man Poss / 75 Poss'], Grades['Roll Man Poss / 75 Poss']],
            ["Team Roll Man Share_pct", playerRow[0]['Team Roll Man Share_pct'], percentileScores['Team Roll Man Share_pct'], Grades['Team Roll Man Share_pct']],
            ["Total Roll Man Impact / 75 Poss", playerRow[0]['Total Roll Man Impact / 75 Poss'], percentileScores['Total Roll Man Impact / 75 Poss'], Grades['Total Roll Man Impact / 75 Poss']],
            ["Roll Impact / 75 Poss", playerRow[0]['Roll Impact / 75 Poss'], percentileScores['Roll Impact / 75 Poss'], Grades['Roll Impact / 75 Poss']],
            ["Pop Impact / 75 Poss", playerRow[0]['Pop Impact / 75 Poss'], percentileScores['Pop Impact / 75 Poss'], Grades['Pop Impact / 75 Poss']],
            ["Slip Impact / 75 Poss", playerRow[0]['Slip Impact / 75 Poss'], percentileScores['Slip Impact / 75 Poss'], Grades['Slip Impact / 75 Poss']],
            ["Roll : Pop : Slip Ratio", playerRow[0]['Roll : Pop : Slip Ratio'], percentileScores['Roll : Pop : Slip Ratio'], Grades['Roll : Pop : Slip Ratio']],
            ["Screen Assists / 75 Poss", playerRow[0]['Screen Assists / 75 Poss'], percentileScores['Screen Assists / 75 Poss'], Grades['Screen Assists / 75 Poss']],
            ["Screening Talent", playerRow[0]['Screening Talent'], percentileScores['Screening Talent'], Grades['Screening Talent']]
        ],
    },
    {
        title: "Playmaking",
        vsaverage: false,
        stats: [
            ["Assist Pts / 75 Poss", playerRow[0]['Assist Pts / 75 Poss'], percentileScores['Assist Pts / 75 Poss'], Grades['Assist Pts / 75 Poss']],
            ["RA Pot Ast / 100", playerRow[0]['RA Pot Ast / 100'], percentileScores['RA Pot Ast / 100'], Grades['RA Pot Ast / 100']],
            ["Pot. Ast. / 100 Passes", playerRow[0]['Pot. Ast. / 100 Passes'], percentileScores['Pot. Ast. / 100 Passes'], Grades['Pot. Ast. / 100 Passes']],
            ["Passing Creation Volume", playerRow[0]['Passing Creation Volume'], percentileScores['Passing Creation Volume'], Grades['Passing Creation Volume']],
            ["Passing Efficiency", playerRow[0]['Passing Efficiency'], percentileScores['Passing Efficiency'], Grades['Passing Efficiency']],
            ["Passing Versatility", playerRow[0]['Passing Versatility'], percentileScores['Passing Versatility'], Grades['Passing Versatility']],
            ["HV Assists / 75 Poss", playerRow[0]['HV Assists / 75 Poss'], percentileScores['HV Assists / 75 Poss'], Grades['HV Assists / 75 Poss']],
            ["Passing Creation Quality", playerRow[0]['Passing Creation Quality'], percentileScores['Passing Creation Quality'], Grades['Passing Creation Quality']],
            ["Box Creation", playerRow[0]['Box Creation'], percentileScores['Box Creation'], Grades['Box Creation']],
            ["Scoring Gravity", playerRow[0]['Scoring Gravity'], percentileScores['Scoring Gravity'], Grades['Scoring Gravity']],
            ["Playmaking Talent", playerRow[0]['Playmaking Talent'], percentileScores['Playmaking Talent'], Grades['Playmaking Talent']],
        ],
    },
    {
        title: "Post Play",
        vsaverage: false,
        stats: [
            ["Total Post frequency_pct", playerRow[0]['Total Post frequency_pct'], percentileScores['Total Post frequency_pct'], Grades['Total Post frequency_pct']],
            ["Paint Touches / 75", playerRow[0]['Paint Touches / 75'], percentileScores['Paint Touches / 75'], Grades['Paint Touches / 75']],
            ["Jumper : To Rim : Hook : Up & Under", playerRow[0]['Jumper : To Rim : Hook : Up & Under'], percentileScores['Jumper : To Rim : Hook : Up & Under'], Grades['Jumper : To Rim : Hook : Up & Under']],
            ["Baseline : Face Up : Middle Ratio", playerRow[0]['Baseline : Face Up : Middle Ratio'], percentileScores['Baseline : Face Up : Middle Ratio'], Grades['Baseline : Face Up : Middle Ratio']],
            ["Left : Middle : Right Block Ratio", playerRow[0]['Left : Middle : Right Block Ratio'], percentileScores['Left : Middle : Right Block Ratio'], Grades['Left : Middle : Right Block Ratio']],
            ["Post Pin Frequency", playerRow[0]['Post Pin Frequency'], percentileScores['Post Pin Frequency'], Grades['Post Pin Frequency']],
            ["Post Style Rating", playerRow[0]['Post Style Rating'], percentileScores['Post Style Rating'], Grades['Post Style Rating']],
            ["Post Up Draw Foul Rate_pct", playerRow[0]['Post Up Draw Foul Rate_pct'], percentileScores['Post Up Draw Foul Rate_pct'], Grades['Post Up Draw Foul Rate_pct']],
            ["Post Up Impact / 75 Poss", playerRow[0]['Post Up Impact / 75 Poss'], percentileScores['Post Up Impact / 75 Poss'], Grades['Post Up Impact / 75 Poss']],
            ["Pot. Assist / Post Poss_pct", playerRow[0]['Pot. Assist / Post Poss_pct'], percentileScores['Pot. Assist / Post Poss_pct'], Grades['Pot. Assist / Post Poss_pct']]
        ],
    },
    { title: "Defensive Rebounding",
        vsaverage: false,
        stats: [
        ["Defensive Reb / 75 Poss", playerRow[0]['Defensive Reb / 75 Poss'], percentileScores['Defensive Reb / 75 Poss'], Grades['Defensive Reb / 75 Poss']],
        ["DReb Per Game", playerRow[0]['DReb Per Game'], percentileScores['DReb Per Game'], Grades['DReb Per Game']],
        ["DReb Chance / 75 Poss", playerRow[0]['DReb Chance / 75 Poss'], percentileScores['DReb Chance / 75 Poss'], Grades['DReb Chance / 75 Poss']],
        ["Contested DReb_pct", playerRow[0]['Contested DReb_pct'], percentileScores['Contested DReb_pct'], Grades['Contested DReb_pct']],
        ["DReb Positioning", playerRow[0]['DReb Positioning'], percentileScores['DReb Positioning'], Grades['DReb Positioning']],
        ["Adj. Box Out Rate_pct", playerRow[0]['Adj. Box Out Rate_pct'], percentileScores['Adj. Box Out Rate_pct'], Grades['Adj. Box Out Rate_pct']],
        ["Adj. DReb Success Rate_pct", playerRow[0]['Adj. DReb Success Rate_pct'], percentileScores['Adj. DReb Success Rate_pct'], Grades['Adj. DReb Success Rate_pct']],
        ["Defensive Rebounding Conversion Skill", playerRow[0]['Defensive Rebounding Conversion Skill'], percentileScores['Defensive Rebounding Conversion Skill'], Grades['Defensive Rebounding Conversion Skill']],
        ["Real Adjusted DReb Rate", playerRow[0]['Real Adjusted DReb Rate'], percentileScores['Real Adjusted DReb Rate'], Grades['Real Adjusted DReb Rate']],
        ["Defensive Rebounding Talent", playerRow[0]['Defensive Rebounding Talent'], percentileScores['Defensive Rebounding Talent'], Grades['Defensive Rebounding Talent']],
    ],
    },
    {
        title: "Offensive Rebounding",
        vsaverage: false,
        stats: [
            ["Offensive Reb / 75 Poss", playerRow[0]['Offensive Reb / 75 Poss'], percentileScores['Offensive Reb / 75 Poss'], Grades['Offensive Reb / 75 Poss']],
            ["OReb Per Game", playerRow[0]['OReb Per Game'], percentileScores['OReb Per Game'], Grades['OReb Per Game']],
            ["OReb Chance / 75 Poss", playerRow[0]['OReb Chance / 75 Poss'], percentileScores['OReb Chance / 75 Poss'], Grades['OReb Chance / 75 Poss']],
            ["Contested OReb_pct", playerRow[0]['Contested OReb_pct'], percentileScores['Contested OReb_pct'], Grades['Contested OReb_pct']],
            ["OReb Positioning", playerRow[0]['OReb Positioning'], percentileScores['OReb Positioning'], Grades['OReb Positioning']],
            ["Putbacks / 75 Poss", playerRow[0]['Putbacks / 75 Poss'], percentileScores['Putbacks / 75 Poss'], Grades['Putbacks / 75 Poss']],
            ["Putback per OReb_pct", playerRow[0]['Putback per OReb_pct'], percentileScores['Putback per OReb_pct'], Grades['Putback per OReb_pct']],
            ["Putback Impact / 75", playerRow[0]['Putback Impact / 75'], percentileScores['Putback Impact / 75'], Grades['Putback Impact / 75']],
            ["Adj. OReb Success Rate_pct", playerRow[0]['Adj. OReb Success Rate_pct'], percentileScores['Adj. OReb Success Rate_pct'], Grades['Adj. OReb Success Rate_pct']],
            ["Offensive Rebounding Conversion Skill", playerRow[0]['Offensive Rebounding Conversion Skill'], percentileScores['Offensive Rebounding Conversion Skill'], Grades['Offensive Rebounding Conversion Skill']],
            ["Real Adjusted OReb Rate", playerRow[0]['Real Adjusted OReb Rate'], percentileScores['Real Adjusted OReb Rate'], Grades['Real Adjusted OReb Rate']],
            ["Offensive Rebounding Talent", playerRow[0]['Offensive Rebounding Talent'], percentileScores['Offensive Rebounding Talent'], Grades['Offensive Rebounding Talent']],
        ],
    },
    {
        title: "On-Ball Defense",
        vsaverage: false,
        stats: [
            ["On-Ball Defense", playerRow[0]['On-Ball Defense'], percentileScores['On-Ball Defense'], Grades['On-Ball Defense']],
            ["Ball Screen Navigation", playerRow[0]['Ball Screen Navigation'], percentileScores['Ball Screen Navigation'], Grades['Ball Screen Navigation']],
            ["Screener Mobile Defense", playerRow[0]['Screener Mobile Defense'], percentileScores['Screener Mobile Defense'], Grades['Screener Mobile Defense']],
            ["Off-Ball Chaser Defense", playerRow[0]['Off-Ball Chaser Defense'], percentileScores['Off-Ball Chaser Defense'], Grades['Off-Ball Chaser Defense']],
            ["Real Adjusted TOV Rate", playerRow[0]['Real Adjusted TOV Rate'], percentileScores['Real Adjusted TOV Rate'], Grades['Real Adjusted TOV Rate']],
            ["Loose Ball Rec Rate", playerRow[0]['Loose Ball Rec Rate'], percentileScores['Loose Ball Rec Rate'], Grades['Loose Ball Rec Rate']],
            ["Pickpocket Rating", playerRow[0]['Pickpocket Rating'], percentileScores['Pickpocket Rating'], Grades['Pickpocket Rating']],
            ["Passing Lane Defense", playerRow[0]['Passing Lane Defense'], percentileScores['Passing Lane Defense'], Grades['Passing Lane Defense']],
            ["3PT Contests / 75 Poss", playerRow[0]['3PT Contests / 75 Poss'], percentileScores['3PT Contests / 75 Poss'], Grades['3PT Contests / 75 Poss']],
            ["Steals / 75 Poss", playerRow[0]['Steals / 75 Poss'], percentileScores['Steals / 75 Poss'], Grades['Steals / 75 Poss']],
            ["Deflections / 75 Poss", playerRow[0]['Deflections / 75 Poss'], percentileScores['Deflections / 75 Poss'], Grades['Deflections / 75 Poss']],
            ["Defensive Miles / 75", playerRow[0]['Defensive Miles / 75'], percentileScores['Defensive Miles / 75'], Grades['Defensive Miles / 75']],
            ["Matchup Adj. D Feet/MP", playerRow[0]['Matchup Adj. D Feet/MP'], percentileScores['Matchup Adj. D Feet/MP'], Grades['Matchup Adj. D Feet/MP']]
        ],
    },
    {
        title: "Playing Style",
        vsaverage: false,
        stats: [
            ["Primary Ball Handler_pct", playerRow[0]['Primary Ball Handler_pct'], percentileScores['Primary Ball Handler_pct'], Grades['Primary Ball Handler_pct']],
            ["Secondary Ball Handlers_pct", playerRow[0]['Secondary Ball Handlers_pct'], percentileScores['Secondary Ball Handlers_pct'], Grades['Secondary Ball Handlers_pct']],
            ["Shot Creators_pct", playerRow[0]['Shot Creators_pct'], percentileScores['Shot Creators_pct'], Grades['Shot Creators_pct']],
            ["Slashers_pct", playerRow[0]['Slashers_pct'], percentileScores['Slashers_pct'], Grades['Slashers_pct']],
            ["Athletic Finisher_pct", playerRow[0]['Athletic Finisher_pct'], percentileScores['Athletic Finisher_pct'], Grades['Athletic Finisher_pct']],
            ["Off Screen Shooter_pct", playerRow[0]['Off Screen Shooter_pct'], percentileScores['Off Screen Shooter_pct'], Grades['Off Screen Shooter_pct']],
            ["Movement Shooter_pct", playerRow[0]['Movement Shooter_pct'], percentileScores['Movement Shooter_pct'], Grades['Movement Shooter_pct']],
            ["Stationary Shooters_pct", playerRow[0]['Stationary Shooters_pct'], percentileScores['Stationary Shooters_pct'], Grades['Stationary Shooters_pct']],
            ["Versatile Bigs_pct", playerRow[0]['Versatile Bigs_pct'], percentileScores['Versatile Bigs_pct'], Grades['Versatile Bigs_pct']],
            ["Post Scorer_pct", playerRow[0]['Post Scorer_pct'], percentileScores['Post Scorer_pct'], Grades['Post Scorer_pct']],
            ["Stretch Bigs_pct", playerRow[0]['Stretch Bigs_pct'], percentileScores['Stretch Bigs_pct'], Grades['Stretch Bigs_pct']],
            ["Roll & Cut Bigs_pct", playerRow[0]['Roll & Cut Bigs_pct'], percentileScores['Roll & Cut Bigs_pct'], Grades['Roll & Cut Bigs_pct']],
            ["Low Minute_pct", playerRow[0]['Low Minute_pct'], percentileScores['Low Minute_pct'], Grades['Low Minute_pct']]
        ],
    },
    {
        title: "Rim Protection",
        vsaverage: false,
        stats: [
            ["Rim Deterrence_pct", playerRow[0]['Rim Deterrence_pct'], percentileScores['Rim Deterrence_pct'], Grades['Rim Deterrence_pct']],
            ["% Rim Shots Contested_pct", playerRow[0]['% Rim Shots Contested_pct'], percentileScores['% Rim Shots Contested_pct'], Grades['% Rim Shots Contested_pct']],
            ["Rim Contests / 75 Poss", playerRow[0]['Rim Contests / 75 Poss'], percentileScores['Rim Contests / 75 Poss'], Grades['Rim Contests / 75 Poss']],
            ["Blocks / 75 Poss", playerRow[0]['Blocks / 75 Poss'], percentileScores['Blocks / 75 Poss'], Grades['Blocks / 75 Poss']],
            ["Block Rate on Contests_pct", playerRow[0]['Block Rate on Contests_pct'], percentileScores['Block Rate on Contests_pct'], Grades['Block Rate on Contests_pct']],
            ["Rim dFG% vs Expected_pct", playerRow[0]['Rim dFG% vs Expected_pct'], percentileScores['Rim dFG% vs Expected_pct'], Grades['Rim dFG% vs Expected_pct']],
            ["Rim Points Saved / 75 Post Defense", playerRow[0]['Rim Points Saved / 75 Post Defense'], percentileScores['Rim Points Saved / 75 Post Defense'], Grades['Rim Points Saved / 75 Post Defense']],
            ["Screener Rim Defense", playerRow[0]['Screener Rim Defense'], percentileScores['Screener Rim Defense'], Grades['Screener Rim Defense']],
            ["Rim Protection", playerRow[0]['Rim Protection'], percentileScores['Rim Protection'], Grades['Rim Protection']]
        ],
    },
    {
        title: "Time on Defense by Position",
        vsaverage: false,
        stats: [
            ["Time on Defense Guarding PG_pct", playerRow[0]['Time on Defense Guarding PG_pct'], percentileScores['Time on Defense Guarding PG_pct'], Grades['Time on Defense Guarding PG_pct']],
            ["Time on Defense Guarding SG_pct", playerRow[0]['Time on Defense Guarding SG_pct'], percentileScores['Time on Defense Guarding SG_pct'], Grades['Time on Defense Guarding SG_pct']],
            ["Time on Defense Guarding SF_pct", playerRow[0]['Time on Defense Guarding SF_pct'], percentileScores['Time on Defense Guarding SF_pct'], Grades['Time on Defense Guarding SF_pct']],
            ["Time on Defense Guarding PF_pct", playerRow[0]['Time on Defense Guarding PF_pct'], percentileScores['Time on Defense Guarding PF_pct'], Grades['Time on Defense Guarding PF_pct']],
            ["Time on Defense Guarding C_pct", playerRow[0]['Time on Defense Guarding C_pct'], percentileScores['Time on Defense Guarding C_pct'], Grades['Time on Defense Guarding C_pct']]
        ],
    },
    {
        title: "Usage by Tier",
        vsaverage: false,
        stats: [
            ["Usage Tier 1_pct", playerRow[0]['Usage Tier 1_pct'], percentileScores['Usage Tier 1_pct'], Grades['Usage Tier 1_pct']],
            ["Usage Tier 2_pct", playerRow[0]['Usage Tier 2_pct'], percentileScores['Usage Tier 2_pct'], Grades['Usage Tier 2_pct']],
            ["Usage Tier 3_pct", playerRow[0]['Usage Tier 3_pct'], percentileScores['Usage Tier 3_pct'], Grades['Usage Tier 3_pct']],
            ["Usage Tier 4_pct", playerRow[0]['Usage Tier 4_pct'], percentileScores['Usage Tier 4_pct'], Grades['Usage Tier 4_pct']],
            ["Usage Tier 5_pct", playerRow[0]['Usage Tier 5_pct'], percentileScores['Usage Tier 5_pct'], Grades['Usage Tier 5_pct']],
            ["Usage Tier 6_pct", playerRow[0]['Usage Tier 6_pct'], percentileScores['Usage Tier 6_pct'], Grades['Usage Tier 6_pct']]
        ],
    },
    {
        title: "Player Role",
        vsaverage: false,
        stats: [
            ["Core Player_pct", playerRow[0]['Core Player_pct'], percentileScores['Core Player_pct'], Grades['Core Player_pct']],
            ["Starter_pct", playerRow[0]['Starter_pct'], percentileScores['Starter_pct'], Grades['Starter_pct']],
            ["All Star Player_pct", playerRow[0]['All Star Player_pct'], percentileScores['All Star Player_pct'], Grades['All Star Player_pct']],
            ["All NBA Player_pct", playerRow[0]['All NBA Player_pct'], percentileScores['All NBA Player_pct'], Grades['All NBA Player_pct']]
        ],
    },
    {
        title: "Advanced Metrics",
        vsaverage: false,
        stats: [
            ["LEBRON", playerRow[0]['LEBRON'], percentileScores['LEBRON'], Grades['LEBRON']],
            ["O-LEBRON", playerRow[0]['O-LEBRON'], percentileScores['O-LEBRON'], Grades['O-LEBRON']],
            ["D-LEBRON", playerRow[0]['D-LEBRON'], percentileScores['D-LEBRON'], Grades['D-LEBRON']],
            ["LEBRON WAR", playerRow[0]['LEBRON WAR'], percentileScores['LEBRON WAR'], Grades['LEBRON WAR']],
            ["Real Plus Minus (RPM)", playerRow[0]['Real Plus Minus (RPM)'], percentileScores['Real Plus Minus (RPM)'], Grades['Real Plus Minus (RPM)']],
            ["Offensive RPM", playerRow[0]['Offensive RPM'], percentileScores['Offensive RPM'], Grades['Offensive RPM']],
            ["Defensive RPM", playerRow[0]['Defensive RPM'], percentileScores['Defensive RPM'], Grades['Defensive RPM']],
            ["RPM WAR", playerRow[0]['RPM WAR'], percentileScores['RPM WAR'], Grades['RPM WAR']],
            ["RAPTOR", playerRow[0]['RAPTOR'], percentileScores['RAPTOR'], Grades['RAPTOR']],
            ["Offensive RAPTOR", playerRow[0]['Offensive RAPTOR'], percentileScores['Offensive RAPTOR'], Grades['Offensive RAPTOR']],
            ["Defensive RAPTOR", playerRow[0]['Defensive RAPTOR'], percentileScores['Defensive RAPTOR'], Grades['Defensive RAPTOR']],
            ["RAPTOR WAR", playerRow[0]['RAPTOR WAR'], percentileScores['RAPTOR WAR'], Grades['RAPTOR WAR']],
            ["LA RAPM", playerRow[0]['LA RAPM'], percentileScores['LA RAPM'], Grades['LA RAPM']],
            ["LA-ORAPM", playerRow[0]['LA-ORAPM'], percentileScores['LA-ORAPM'], Grades['LA-ORAPM']],
            ["LA-DRAPM", playerRow[0]['LA-DRAPM'], percentileScores['LA-DRAPM'], Grades['LA-DRAPM']],
            ["LEBRON Box", playerRow[0]['LEBRON Box'], percentileScores['LEBRON Box'], Grades['LEBRON Box']],
            ["O-LEBRON Box", playerRow[0]['O-LEBRON Box'], percentileScores['O-LEBRON Box'], Grades['O-LEBRON Box']],
            ["D-LEBRON Box", playerRow[0]['D-LEBRON Box'], percentileScores['D-LEBRON Box'], Grades['D-LEBRON Box']],
            ["Box Plus Minus 2.0 (BPM)", playerRow[0]['Box Plus Minus 2.0 (BPM)'], percentileScores['Box Plus Minus 2.0 (BPM)'], Grades['Box Plus Minus 2.0 (BPM)']],
        ],
    },
    {
        title: "DK Fantasy Stats",
        vsaverage: false,
        stats: [
            ["DK Fantasy Points/75", playerRow[0]['DK Fantasy Points/75'], percentileScores['DK Fantasy Points/75'], Grades['DK Fantasy Points/75']],
            ["Points/75", playerRow[0]['Points/75'], percentileScores['Points/75'], Grades['Points/75']],
            ["3PM/75", playerRow[0]['3PM/75'], percentileScores['3PM/75'], Grades['3PM/75']],
            ["Reb/75", playerRow[0]['Reb/75'], percentileScores['Reb/75'], Grades['Reb/75']],
            ["Ast/75", playerRow[0]['Ast/75'], percentileScores['Ast/75'], Grades['Ast/75']],
            ["Stl/75", playerRow[0]['Stl/75'], percentileScores['Stl/75'], Grades['Stl/75']],
            ["Blk/75", playerRow[0]['Blk/75'], percentileScores['Blk/75'], Grades['Blk/75']],
            ["TOV/75", playerRow[0]['TOV/75'], percentileScores['TOV/75'], Grades['TOV/75']],
            ["PF/75", playerRow[0]['PF/75'], percentileScores['PF/75'], Grades['PF/75']]
        ],
    },
    {
        title: "DK Fantasy Stats",
        vsaverage: false,
        stats: [
    ["Effective FG_pct", playerRow[0]['Effective FG_pct'], percentileScores['Effective FG_pct'], Grades['Effective FG_pct']],
    ["True Shooting_pct", playerRow[0]['True Shooting_pct'], percentileScores['True Shooting_pct'], Grades['True Shooting_pct']],
    ["Points Per Shot", playerRow[0]['Points Per Shot'], percentileScores['Points Per Shot'], Grades['Points Per Shot']],
    ["Points/Possession (PPP)", playerRow[0]['Points/Possession (PPP)'], percentileScores['Points/Possession (PPP)'], Grades['Points/Possession (PPP)']],
    ["Points Over Expectation", playerRow[0]['Points Over Expectation'], percentileScores['Points Over Expectation'], Grades['Points Over Expectation']],
    ["Stable Transition PPP", playerRow[0]['Stable Transition PPP'], percentileScores['Stable Transition PPP'], Grades['Stable Transition PPP']],
    ["Stable P&R Ball Handler PPP", playerRow[0]['Stable P&R Ball Handler PPP'], percentileScores['Stable P&R Ball Handler PPP'], Grades['Stable P&R Ball Handler PPP']],
    ["Stable Spot Up PPP", playerRow[0]['Stable Spot Up PPP'], percentileScores['Stable Spot Up PPP'], Grades['Stable Spot Up PPP']],
    ["Stable P&R Roll Man PPP", playerRow[0]['Stable P&R Roll Man PPP'], percentileScores['Stable P&R Roll Man PPP'], Grades['Stable P&R Roll Man PPP']],
    ["Stable Post Up PPP", playerRow[0]['Stable Post Up PPP'], percentileScores['Stable Post Up PPP'], Grades['Stable Post Up PPP']],
    ["Stable Isolation PPP", playerRow[0]['Stable Isolation PPP'], percentileScores['Stable Isolation PPP'], Grades['Stable Isolation PPP']],
    ["Stable Cut PPP", playerRow[0]['Stable Cut PPP'], percentileScores['Stable Cut PPP'], Grades['Stable Cut PPP']],
    ["Stable Dump Offs PPP", playerRow[0]['Stable Dump Offs PPP'], percentileScores['Stable Dump Offs PPP'], Grades['Stable Dump Offs PPP']],
    ["Stable Putbacks PPP", playerRow[0]['Stable Putbacks PPP'], percentileScores['Stable Putbacks PPP'], Grades['Stable Putbacks PPP']],
    ["Handoff PPP", playerRow[0]['Handoff PPP'], percentileScores['Handoff PPP'], Grades['Handoff PPP']],
    ["Stable Off Screen PPP", playerRow[0]['Stable Off Screen PPP'], percentileScores['Stable Off Screen PPP'], Grades['Stable Off Screen PPP']],
],
    },
];
};

export default fullDataTable;