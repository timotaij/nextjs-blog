import { Grid } from "@mui/material";
import Card from "./Card";
import * as React from "react";
import Button from "@mui/material/Button";



const summaryTable = ({ playerRow, percentileScores, Grades }) => { return [
    {
        title: "Opportunity & Usage",
        vsaverage: true,
        stats: [
            ["Minutes/Game", playerRow[0]['Minutes/Game'], percentileScores['Minutes/Game'], Grades['Minutes/Game']],
        ],
    },
    {
        title: "Contextual Data",
        vsaverage: false,
        stats: [
            ["Lineup Finishing", playerRow[0]['Lineup Finishing_pct'], percentileScores['Lineup Finishing_pct'], Grades['Lineup Finishing_pct']],
],
    },
    {
        title: "Perimeter Shooting",
        vsaverage: false,
        stats: [
            ["3PT%", playerRow[0]['3PT_pct'], percentileScores['3PT_pct'], Grades['3PT_pct']],
],
    },
    {
        title: "One on One",
        vsaverage: false,
        stats: [
            ["Total Isolations / 75", playerRow[0]['Total Isolations / 75'], percentileScores['Total Isolations / 75'], Grades['Total Isolations / 75']],
],
    },
    {
        title: "Off Ball Movement",
        vsaverage: false,
        stats: [
            ["Movement Attack Rate_pct", playerRow[0]['Movement Attack Rate_pct'], percentileScores['Movement Attack Rate_pct'], Grades['Movement Attack Rate_pct']],
],
    },
    {
        title: "Finishing",
        vsaverage: false,
        stats: [
            ["Drives / 75", playerRow[0]['Drives / 75'], percentileScores['Drives / 75'], Grades['Drives / 75']],
],
    },
    {
        title: "Roll Gravity",
        vsaverage: false,
        stats: [
            ["Roll Man Poss / 75 Poss", playerRow[0]['Roll Man Poss / 75 Poss'], percentileScores['Roll Man Poss / 75 Poss'], Grades['Roll Man Poss / 75 Poss']],
 ],
    },
    {
        title: "Playmaking",
        vsaverage: false,
        stats: [
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
],
    },
    {
        title: "Offensive Rebounding",
        vsaverage: false,
        stats: [
            ["Offensive Reb / 75 Poss", playerRow[0]['Offensive Reb / 75 Poss'], percentileScores['Offensive Reb / 75 Poss'], Grades['Offensive Reb / 75 Poss']],
],
    },
    {
        title: "On-Ball Defense",
        vsaverage: false,
        stats: [
            ["On-Ball Defense", playerRow[0]['On-Ball Defense'], percentileScores['On-Ball Defense'], Grades['On-Ball Defense']],
],
    },
    {
        title: "Playing Style",
        vsaverage: false,
        stats: [
            ["Primary Ball Handler_pct", playerRow[0]['Primary Ball Handler_pct'], percentileScores['Primary Ball Handler_pct'], Grades['Primary Ball Handler_pct']],
      ],
    },
    {
        title: "Rim Protection",
        vsaverage: false,
        stats: [
            ["Rim Deterrence_pct", playerRow[0]['Rim Deterrence_pct'], percentileScores['Rim Deterrence_pct'], Grades['Rim Deterrence_pct']],
            ],
    },
    {
        title: "Time on Defense by Position",
        vsaverage: false,
        stats: [
            ["Time on Defense Guarding PG_pct", playerRow[0]['Time on Defense Guarding PG_pct'], percentileScores['Time on Defense Guarding PG_pct'], Grades['Time on Defense Guarding PG_pct']],
           ],
    },
    {
        title: "Usage by Tier",
        vsaverage: false,
        stats: [
            ["Usage Tier 1_pct", playerRow[0]['Usage Tier 1_pct'], percentileScores['Usage Tier 1_pct'], Grades['Usage Tier 1_pct']],
          ],
    },
    {
        title: "Player Role",
        vsaverage: false,
        stats: [
            ["Core Player_pct", playerRow[0]['Core Player_pct'], percentileScores['Core Player_pct'], Grades['Core Player_pct']],
          ],
    },
    {
        title: "Advanced Metrics",
        vsaverage: false,
        stats: [
            ["LEBRON", playerRow[0]['LEBRON'], percentileScores['LEBRON'], Grades['LEBRON']],
       ],
    },
    {
        title: "DK Fantasy Stats",
        vsaverage: false,
        stats: [
            ["DK Fantasy Points/75", playerRow[0]['DK Fantasy Points/75'], percentileScores['DK Fantasy Points/75'], Grades['DK Fantasy Points/75']],
          ],
    },
    {
        title: "DK Fantasy Stats",
        vsaverage: false,
        stats: [
            ["Effective FG_pct", playerRow[0]['Effective FG_pct'], percentileScores['Effective FG_pct'], Grades['Effective FG_pct']],
          ],
    },
];
};

export default summaryTable;