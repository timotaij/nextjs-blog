import { Grid } from "@mui/material";
import Card from "./Card";
import * as React from "react";
import Button from "@mui/material/Button";



const summaryTable = ({ playerRow, percentileScores, Grades }) => { return [
    {
        title: "Opportunity & Usage",
        vsaverage: true,
        stats: [["Minutes/Game", "33.7", "93%", "24%"]],
    },
    {
        title: "Contextual Data",
        vsaverage: false,
        stats: [["Lineup Finishing", "56.50%", "60%", "B-"]],
    },
    {
        title: "Perimeter Shooting",
        vsaverage: false,
        stats: [["3PT%", "36.2%", "67%", "B"]],
    },
    {
        title: "One on One",
        vsaverage: false,
        stats: [["Total Isolations / 75", "2.5", "74%", "B+"]],
    },
    {
        title: "Off-Ball Movement",
        vsaverage: false,
        stats: [["Movement Attack Rate", "7%", "21%", "D-"]],
    },
    {
        title: "Finishing",
        vsaverage: false,
        stats: [["Adjusted Drives / 75 Poss", "17.9", "98%", "A+"]],
    },
];
};

export default summaryTable;