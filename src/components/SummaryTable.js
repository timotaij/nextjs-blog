import { Grid } from "@mui/material";
import Card from "./Card";
import * as React from "react";
import Button from "@mui/material/Button";



const summaryTable = ({ playerRow, percentileScores, Grades }) => { return [
    {
        title: "Opportunity & Usage",
        vsaverage: true,
        stats: [["Minutes/Game", playerRow[0]['Minutes/Game'], percentileScores['Minutes/Game'], Grades['Minutes/Game']]],
    },
    {
        title: "Contextual Data",
        vsaverage: false,
        stats:  [["Lineup Finishing", playerRow[0]['Lineup Finishing_pct'], percentileScores['Lineup Finishing_pct'], Grades['Lineup Finishing_pct']]],
    },
    {
        title: "Perimeter Shooting",
        vsaverage: false,
        stats:  [["3PT%", playerRow[0]['3PT_pct'], percentileScores['3PT_pct'], Grades['3PT_pct']]],
    },
    {
        title: "One on One",
        vsaverage: false,
        stats: [["Total Isolations / 75", playerRow[0]['Total Isolations / 75'], percentileScores['Total Isolations / 75'], Grades['Total Isolations / 75']]],
    },
    {
        title: "Off-Ball Movement",
        vsaverage: false,
        stats: [["Movement Attack Rate", playerRow[0]["Movement Attack Rate_pct"], percentileScores["Movement Attack Rate_pct"], Grades["Movement Attack Rate_pct"]]],
    },
    {
        title: "Finishing",
        vsaverage: false,
        stats: [["Adjusted Drives / 75 Poss", playerRow[0]["Drives / 75"], percentileScores["Drives / 75"], Grades["Drives / 75"]]],
    },
];
};

export default summaryTable;