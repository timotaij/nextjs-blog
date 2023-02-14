import { Grid } from "@mui/material";
import Card from "./Card";
import * as React from "react";
import Button from "@mui/material/Button";



const quickViewTable = ({ playerRow, percentileScores, Grades }) => { return [
    {
        title: "Opportunity & Usage",
        vsaverage: true,
        stats: [
            ["Minutes/Game", playerRow[0]['Minutes/Game'], percentileScores['Minutes/Game'], Grades['Minutes/Game']],
            ["Percent of Games Started", playerRow[0]['Games Started_pct'], percentileScores['Games Started_pct'], Grades['Games Started_pct']],
            ["Touches/Game", playerRow[0]['Touches/Game'], percentileScores['Touches/Game'], Grades['Touches/Game']],
        ],
    },
    {
        title: "Contextual Data",
        vsaverage: false,
        stats: [
            ["Lineup Finishing", playerRow[0]['Lineup Finishing_pct'], percentileScores['Lineup Finishing_pct'], Grades['Lineup Finishing_pct']],
            ["Lineup Playmaking", playerRow[0]['Lineup Playmaking_pct'], percentileScores['Lineup Playmaking_pct'], Grades['Lineup Playmaking_pct']],
            ["Lineup Spacing", playerRow[0]['Lineup Spacing_pct'], percentileScores['Lineup Spacing_pct'], Grades['Lineup Spacing_pct']],
        ],
    },
    {
        title: "Perimeter Shooting",
        vsaverage: false,
        stats: [
            ["3PT%", playerRow[0]['3PT_pct'], percentileScores['3PT_pct'], Grades['3PT_pct']],
            ["Pull Up 3PT%", playerRow[0]['Pull Up 3PT_pct'], percentileScores['Pull Up 3PT_pct'], Grades['Pull Up 3PT_pct']],
            ["C&S 3PT%", playerRow[0]['C&S 3PT_pct'], percentileScores['C&S 3PT_pct'], Grades['C&S 3PT_pct']],
        ],
    },
    {
        title: "One on One",
        vsaverage: false,
        stats: [
            ["Total Isolations / 75", playerRow[0]['Total Isolations / 75'], percentileScores['Total Isolations / 75'], Grades['Total Isolations / 75']],
            ["Total Iso Impact / 75", playerRow[0]['Total Iso Impact / 75'], percentileScores['Total Iso Impact / 75'], Grades['Total Iso Impact / 75']],
            ["Total Isolation eFG%", playerRow[0]['Total Isolation eFG_pct'], percentileScores['Total Isolation eFG_pct'], Grades['Total Isolation eFG_pct']],
        ],
    },
    {
        title: "Off Ball Movement",
        vsaverage: false,
        stats: [
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
            ["Movement Dist. Rating", playerRow[0]['Movement Dist. Rating'], percentileScores['Movement Dist. Rating'], Grades['Movement Dist. Rating']],
            ["Movement Speed Rating", playerRow[0]['Movement Speed Rating'], percentileScores['Movement Speed Rating'], Grades['Movement Speed Rating']],
        ],
    },
    {
        title: "Finishing",
        vsaverage: false,
        stats: [
            ["Drives / 75", playerRow[0]['Drives / 75'], percentileScores['Drives / 75'], Grades['Drives / 75']],
            ["Total Shots at Rim / 75", playerRow[0]['Total Shots at Rim / 75'], percentileScores['Total Shots at Rim / 75'], Grades['Total Shots at Rim / 75']],
            ["Unassisted Rim FGA / 75", playerRow[0]['Unassisted Rim FGA / 75'], percentileScores['Unassisted Rim FGA / 75'], Grades['Unassisted Rim FGA / 75']],
        ],
    },
    {
        title: "Roll Gravity",
        vsaverage: false,
        stats: [
            ["Roll Man Poss / 75 Poss", playerRow[0]['Roll Man Poss / 75 Poss'], percentileScores['Roll Man Poss / 75 Poss'], Grades['Roll Man Poss / 75 Poss']],
            ["Team Roll Man Share_pct", playerRow[0]['Team Roll Man Share_pct'], percentileScores['Team Roll Man Share_pct'], Grades['Team Roll Man Share_pct']],
            ["Total Roll Man Impact / 75 Poss", playerRow[0]['Total Roll Man Impact / 75 Poss'], percentileScores['Total Roll Man Impact / 75 Poss'], Grades['Total Roll Man Impact / 75 Poss']],
        ],
    },
    {
        title: "Playmaking",
        vsaverage: false,
        stats: [
            ["Assist Pts / 75 Poss", playerRow[0]['Assist Pts / 75 Poss'], percentileScores['Assist Pts / 75 Poss'], Grades['Assist Pts / 75 Poss']],
            ["RA Pot Ast / 100", playerRow[0]['RA Pot Ast / 100'], percentileScores['RA Pot Ast / 100'], Grades['RA Pot Ast / 100']],
            ["Pot. Ast. / 100 Passes", playerRow[0]['Pot. Ast. / 100 Passes'], percentileScores['Pot. Ast. / 100 Passes'], Grades['Pot. Ast. / 100 Passes']],
        ],
    },
    {
        title: "Post Play",
        vsaverage: false,
        stats: [
            ["Total Post frequency_pct", playerRow[0]['Total Post frequency_pct'], percentileScores['Total Post frequency_pct'], Grades['Total Post frequency_pct']],
            ["Paint Touches / 75", playerRow[0]['Paint Touches / 75'], percentileScores['Paint Touches / 75'], Grades['Paint Touches / 75']],
            ["Jumper : To Rim : Hook : Up & Under", playerRow[0]['Jumper : To Rim : Hook : Up & Under'], percentileScores['Jumper : To Rim : Hook : Up & Under'], Grades['Jumper : To Rim : Hook : Up & Under']],
            ],
    },
    { title: "Defensive Rebounding",
        vsaverage: false,
        stats: [
            ["Defensive Reb / 75 Poss", playerRow[0]['Defensive Reb / 75 Poss'], percentileScores['Defensive Reb / 75 Poss'], Grades['Defensive Reb / 75 Poss']],
            ["DReb Per Game", playerRow[0]['DReb Per Game'], percentileScores['DReb Per Game'], Grades['DReb Per Game']],
            ["DReb Chance / 75 Poss", playerRow[0]['DReb Chance / 75 Poss'], percentileScores['DReb Chance / 75 Poss'], Grades['DReb Chance / 75 Poss']],
          ],
    },
    {
        title: "Offensive Rebounding",
        vsaverage: false,
        stats: [
            ["Offensive Reb / 75 Poss", playerRow[0]['Offensive Reb / 75 Poss'], percentileScores['Offensive Reb / 75 Poss'], Grades['Offensive Reb / 75 Poss']],
            ["OReb Per Game", playerRow[0]['OReb Per Game'], percentileScores['OReb Per Game'], Grades['OReb Per Game']],
            ["OReb Chance / 75 Poss", playerRow[0]['OReb Chance / 75 Poss'], percentileScores['OReb Chance / 75 Poss'], Grades['OReb Chance / 75 Poss']],
          ],
    },
    {
        title: "On-Ball Defense",
        vsaverage: false,
        stats: [
            ["On-Ball Defense", playerRow[0]['On-Ball Defense'], percentileScores['On-Ball Defense'], Grades['On-Ball Defense']],
            ["Ball Screen Navigation", playerRow[0]['Ball Screen Navigation'], percentileScores['Ball Screen Navigation'], Grades['Ball Screen Navigation']],
            ["Screener Mobile Defense", playerRow[0]['Screener Mobile Defense'], percentileScores['Screener Mobile Defense'], Grades['Screener Mobile Defense']],
           ],
    },
    {
        title: "Playing Style",
        vsaverage: false,
        stats: [
            ["Primary Ball Handler_pct", playerRow[0]['Primary Ball Handler_pct'], percentileScores['Primary Ball Handler_pct'], Grades['Primary Ball Handler_pct']],
            ["Secondary Ball Handlers_pct", playerRow[0]['Secondary Ball Handlers_pct'], percentileScores['Secondary Ball Handlers_pct'], Grades['Secondary Ball Handlers_pct']],
            ["Shot Creators_pct", playerRow[0]['Shot Creators_pct'], percentileScores['Shot Creators_pct'], Grades['Shot Creators_pct']],
          ],
    },
    {
        title: "Rim Protection",
        vsaverage: false,
        stats: [
            ["Rim Deterrence_pct", playerRow[0]['Rim Deterrence_pct'], percentileScores['Rim Deterrence_pct'], Grades['Rim Deterrence_pct']],
            ["% Rim Shots Contested_pct", playerRow[0]['% Rim Shots Contested_pct'], percentileScores['% Rim Shots Contested_pct'], Grades['% Rim Shots Contested_pct']],
            ["Rim Contests / 75 Poss", playerRow[0]['Rim Contests / 75 Poss'], percentileScores['Rim Contests / 75 Poss'], Grades['Rim Contests / 75 Poss']],
           ],
    },
    {
        title: "Time on Defense by Position",
        vsaverage: false,
        stats: [
            ["Time on Defense Guarding PG_pct", playerRow[0]['Time on Defense Guarding PG_pct'], percentileScores['Time on Defense Guarding PG_pct'], Grades['Time on Defense Guarding PG_pct']],
            ["Time on Defense Guarding SG_pct", playerRow[0]['Time on Defense Guarding SG_pct'], percentileScores['Time on Defense Guarding SG_pct'], Grades['Time on Defense Guarding SG_pct']],
            ["Time on Defense Guarding SF_pct", playerRow[0]['Time on Defense Guarding SF_pct'], percentileScores['Time on Defense Guarding SF_pct'], Grades['Time on Defense Guarding SF_pct']],
           ],
    },
    {
        title: "Usage by Tier",
        vsaverage: false,
        stats: [
            ["Usage Tier 1_pct", playerRow[0]['Usage Tier 1_pct'], percentileScores['Usage Tier 1_pct'], Grades['Usage Tier 1_pct']],
            ["Usage Tier 2_pct", playerRow[0]['Usage Tier 2_pct'], percentileScores['Usage Tier 2_pct'], Grades['Usage Tier 2_pct']],
            ["Usage Tier 3_pct", playerRow[0]['Usage Tier 3_pct'], percentileScores['Usage Tier 3_pct'], Grades['Usage Tier 3_pct']],
          ],
    },
    {
        title: "Player Role",
        vsaverage: false,
        stats: [
            ["Core Player_pct", playerRow[0]['Core Player_pct'], percentileScores['Core Player_pct'], Grades['Core Player_pct']],
            ["Starter_pct", playerRow[0]['Starter_pct'], percentileScores['Starter_pct'], Grades['Starter_pct']],
            ["All Star Player_pct", playerRow[0]['All Star Player_pct'], percentileScores['All Star Player_pct'], Grades['All Star Player_pct']],
         ],
    },
    {
        title: "Advanced Metrics",
        vsaverage: false,
        stats: [
            ["LEBRON", playerRow[0]['LEBRON'], percentileScores['LEBRON'], Grades['LEBRON']],
            ["O-LEBRON", playerRow[0]['O-LEBRON'], percentileScores['O-LEBRON'], Grades['O-LEBRON']],
            ["D-LEBRON", playerRow[0]['D-LEBRON'], percentileScores['D-LEBRON'], Grades['D-LEBRON']],
           ],
    },
    {
        title: "DK Fantasy Stats",
        vsaverage: false,
        stats: [
            ["DK Fantasy Points/75", playerRow[0]['DK Fantasy Points/75'], percentileScores['DK Fantasy Points/75'], Grades['DK Fantasy Points/75']],
            ["Points/75", playerRow[0]['Points/75'], percentileScores['Points/75'], Grades['Points/75']],
            ["3PM/75", playerRow[0]['3PM/75'], percentileScores['3PM/75'], Grades['3PM/75']],
           ],
    },
    {
        title: "DK Fantasy Stats",
        vsaverage: false,
        stats: [
            ["Effective FG_pct", playerRow[0]['Effective FG_pct'], percentileScores['Effective FG_pct'], Grades['Effective FG_pct']],
            ["True Shooting_pct", playerRow[0]['True Shooting_pct'], percentileScores['True Shooting_pct'], Grades['True Shooting_pct']],
            ["Points Per Shot", playerRow[0]['Points Per Shot'], percentileScores['Points Per Shot'], Grades['Points Per Shot']],
           ],
    },
];
};

export default quickViewTable;