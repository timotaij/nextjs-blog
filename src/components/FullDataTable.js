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
];
};

export default fullDataTable;