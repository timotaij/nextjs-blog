import { Grid } from "@mui/material";
import Card from "./Card";
import * as React from "react";
import Button from "@mui/material/Button";



const quickViewTable = ({ playerRow, percentileScores, Grades }) => { return [
    {
        title: "Opportunity & Usage",
        vsaverage: true,
        stats: [
            ["Minutes/Game", "33.7", "93%", "24%"],
            ["Percent of Games Started", "100.0", "82%", "169%"],
            ["Touches/Game", "61.8", "89%", "85%"],
        ],
    },
    {
        title: "Contextual Data",
        vsaverage: false,
        stats: [
            ["Lineup Finishing", "56.50%", "60%", "B-"],
            ["Lineup Playmaking", "68.20%", "79%", "B+"],
            ["Lineup Spacing", "+0.10", "18%", "F"],
        ],
    },
    {
        title: "Perimeter Shooting",
        vsaverage: false,
        stats: [
            ["3PT%", "36.2%", "67%", "B"],
            ["Pull Up 3PT%", "33.2%", "62%", "B-"],
            ["C&S 3PT%", "40.4%", "79%", "B+"],
        ],
    },
    {
        title: "One on One",
        vsaverage: false,
        stats: [
            ["Total Isolations / 75", "2.5", "74%", "B+"],
            ["Total Iso Impact / 75", "-0.1", "39%", "D+"],
            ["Total Isolation eFG%", "41.7%", "49%", "C"],
        ],
    },
];
};

export default quickViewTable;