import { Grid } from "@mui/material";
import Card from "./Card";
import * as React from "react";
import Button from "@mui/material/Button";



const fullDataTable = ({ playerRow, percentileScores, Grades }) => { return [
    {
        title: "Opportunity & Usage",
        vsaverage: true,
        stats: [
            ["Minutes/Game", playerRow[0]['Minutes'], percentileScores['Minutes'], "24%"],
            ["Percent of Games Started", playerRow[0]['Games Started_pct'], percentileScores['Games Started_pct'], "169%"],
            ["Touches/Game", "61.8", "89%", "85%"],
            ["Scoring Possessions / 75", "28.8", "98%", "77%"],
            ["Ball Dominance", "28.8", "83%", "82%"],
            ["Usage Rate", "36.1%", "98%", "70%"],
            ["True Usage", "19.5%", "97%", "247%"],
            ["Total Offensive Load", "47.4%", "97%", "80%"],
        ],
    },
    {
        title: "Contextual Data",
        vsaverage: false,
        stats: [
            ["Lineup Finishing", "56.50%", "60%", "B-"],
            ["Lineup Playmaking", "68.20%", "79%", "B+"],
            ["Lineup Spacing", "+0.10", "18%", "F"],
            ["Matchup Difficulty", "+0.43", "47%", "C"],
            ["D Position Versatility", "+62.80", "59%", "C+"],
            ["D Role Versatility", "60.7", "80%", "A-"],
            ["Foul Trouble Percentage", "5.1%", "19%", "F"],
        ],
    },
    {
        title: "Perimeter Shooting",
        vsaverage: false,
        stats: [
            ["3PT%", "36.2%", "67%", "B"],
            ["Pull Up 3PT%", "33.2%", "62%", "B-"],
            ["C&S 3PT%", "40.4%", "79%", "B+"],
            ["ATB 3PT%", "36.0%", "71%", "B"],
            ["Corner 3PT%", "38.6%", "58%", "C+"],
            ["Openness Rating", "-1.3", "11%", "F"],
            ["Percent of 3PTA Open", "18.1%", "41%", "C-"],
            ["Avg. 3PT Shot Distance", "25.97", "81%", "A-"],
            ["C&S : Pull Up Ratio", "1.8", "", ""],
            ["Corner 3: ATB Ratio", "0.2", "", ""],
            ["3PT Shot Quality", "-1.17", "8%", "F"],
            ["3PT Foul Rate", "1.9%", "84%", "A-"],
            ["3PTA Rate", "34%", "48%", "C"],
            ["3PT Shot Making", "+0.81", "92%", "A"],
            ["3PT Shot Creation", "+2.20", "98%", "A+"],
            ["Perimeter Shooting", "+1.38", "96%", "A+"],
        ],
    },
    {
        title: "One on One",
        vsaverage: false,
        stats: [
            ["Total Isolations / 75", "2.5", "74%", "B+"],
            ["Total Iso Impact / 75", "-0.1", "39%", "D+"],
            ["Total Isolation eFG%", "41.7%", "49%", "C"],
            ["Iso Foul Drawn Rate", "10%", "48%", "C"],
            ["Isolation Turnover Rate", "10%", "54%", "C"],
            ["Perimeter Iso : Post Iso Ratio", "", "98% Outside", "2% Post"],
            ["Left Side : Right Side Isolation Ration", "", "41% Left", "59% Right"],
        ],
    },
];
};

export default fullDataTable;