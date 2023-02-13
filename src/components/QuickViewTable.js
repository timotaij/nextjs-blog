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
];
};

export default quickViewTable;