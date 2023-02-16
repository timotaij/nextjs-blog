import {
  Autocomplete,
  Button,
  ButtonGroup,
  Grid,
  TextField,
} from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Head from "next/head";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import FullData from "../components/FullData";
import FullDataTable from "../components/FullDataTable";
import QuickView from "../components/QuickView";
import Summary from "../components/Summary";
const useStyles = makeStyles({
  root: {
    background: "rgba(0, 0, 0, 0.10)",
    color: "rgba(0, 0, 0, 0.87)",
  },
  btn: {
    "& .MuiButton-root": {
      border: "1px solid #B5BABE",
    },
    "& .MuiButton-root:not(:last-child)": {
      borderRight: "none",
    },
  },
});

export default function Home() {
  const classes = useStyles();
  const [selectedSummary, setSelectedSummary] = useState(false);
  const [selectedQuickView, setSelectedQuickView] = useState(false);
  const [selectedFullData, setSelectedFullData] = useState(false);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState();
  const [combinedData, setCombinedData] = useState({});
  const [offensePositions] = useState(["PG", "SG", "SF", "PF", "C"]);
  const [offensiveArchetypes] = useState([
    { title: "Shot Creator", category: "On-Ball Guards/Wings" },
    { title: "Slasher", category: "On-Ball Guards/Wings" },
    { title: "Primary Ball Handler", category: "On-Ball Guards/Wings" },
    { title: "Secondary Ball Handler", category: "On-Ball Guards/Wings" },
    { title: "Off Screen Shooter", category: "Off-Ball Guards/Wings" },
    { title: "Movement Shooter", category: "Off-Ball Guards/Wings" },
    { title: "Stationary Shooter", category: "Off-Ball Guards/Wings" },
    { title: "Athletic Finisher", category: "Off-Ball Guards/Wings" },
    { title: "Versatile Big, Post Scorer, Stretch Big", category: "Bigs" },
    { title: "Post Scorer", category: "Bigs" },
    { title: "Stretch Big", category: "Bigs" },
    { title: "Roll + Cut Big", category: "Bigs" },
  ]);
  const [selectedOptions, setSelectedOptions] = useState({
    offensePositions: [],
    advancedPositions: [],
    offensiveArchetypes: [],
  });
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [cardData, setCardData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/players1.csv");
      const result = await data.text();
      const parsed = await Papa.parse(result, {
        header: true,
        dynamicTyping: true,
      });

      setPlayers(
        await parsed.data.reduce((acc, player) => {
          const currentKey = player["Player ID"];
          acc[currentKey] = (({ "Player ID": _, ...o }) => o)(player);
          return acc;
        }, {})
      );

      setCombinedData(
        await parsed.data.reduce((acc, player) => {
          const currentKey = `${player["Player"]} ${player["Team(s)"]}`;
          acc[currentKey] = player["Player ID"];
          return acc;
        }, {})
      );
    };

    fetchData();
  }, []);

  const handleRun = async () => {
    setFilteredPlayers(
      await Object.entries(players)
        .filter((player) => {
          return (
            (!selectedOptions.offensePositions.length ||
              selectedOptions.offensePositions.includes(
                player[1]["Offense Position"]
              )) &&
            (!selectedOptions.advancedPositions.length ||
              selectedOptions.advancedPositions.includes(
                player[1]["Advanced Position"]
              )) &&
            (!selectedOptions.offensiveArchetypes.length ||
              selectedOptions.offensiveArchetypes.find((archetype) =>
                archetype.title.includes(player[1]["Offensive Archetype"])
              ))
          );
        })
        .map(([_, second]) => second)
    );
  };

  useEffect(() => {
    if (!currentPlayer || !filteredPlayers?.length || !filteredPlayers) return;

    const percentileScores = [];
    Object.keys(currentPlayer.stats).forEach((column) => {
      let value = currentPlayer.stats[column];

      if (typeof value === "string" && value.endsWith("%")) {
        value = parseFloat(value.slice(0, -1));
        currentPlayer.stats[column] = value;
      }
      if (!isNaN(value)) {
        const columnValues = filteredPlayers
          .map((row) => row[column])
          .filter((val) => val !== "");
        for (let i = 0; i < columnValues.length; i++) {
          let val = columnValues[i];
          if (typeof val === "string" && val.endsWith("%")) {
            val = parseFloat(val.slice(0, -1));
            filteredPlayers[i][column] = val;
          }
        }
        columnValues.sort((a, b) => a - b);
        let index =
          ((columnValues.length - 1) * (value - columnValues[0])) /
          (columnValues[columnValues.length - 1] - columnValues[0]);
        index = Math.max(0, Math.min(index, columnValues.length - 1));
        percentileScores[column] = (100 * index) / (columnValues.length - 1);
      } else {
        percentileScores[column] = value === "" ? null : value;
      }
    });

    const gradesArray = [];
    Object.keys(percentileScores).forEach((column) => {
      if (!isNaN(percentileScores[column])) {
        switch (true) {
          case percentileScores[column] >= 95:
            gradesArray[column] = "A+";
            break;
          case percentileScores[column] >= 90:
            gradesArray[column] = "A";
            break;
          case percentileScores[column] >= 80:
            gradesArray[column] = "A-";
            break;
          case percentileScores[column] >= 74:
            gradesArray[column] = "B+";
            break;
          case percentileScores[column] >= 66:
            gradesArray[column] = "B";
            break;
          case percentileScores[column] >= 60:
            gradesArray[column] = "B-";
            break;
          case percentileScores[column] >= 54:
            gradesArray[column] = "C+";
            break;
          case percentileScores[column] >= 46:
            gradesArray[column] = "C";
            break;
          case percentileScores[column] >= 40:
            gradesArray[column] = "C-";
            break;
          case percentileScores[column] >= 34:
            gradesArray[column] = "D+";
            break;
          case percentileScores[column] >= 26:
            gradesArray[column] = "D";
            break;
          case percentileScores[column] >= 20:
            gradesArray[column] = "D-";
            break;
          default:
            gradesArray[column] = "F";
            break;
        }
      } else {
        gradesArray[column] = percentileScores[column];
      }
    });

    setCardData(
      FullDataTable(currentPlayer.stats, percentileScores, gradesArray)
    );
  }, [currentPlayer, filteredPlayers]);

  return (
    <>
      <Head>
        <title>Player Profiles</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Grid
            container
            justifyContent={"space-between"}
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Autocomplete
                id="offense-position-filter"
                options={offensePositions}
                getOptionLabel={(option) => option}
                onChange={(event, selection) => {
                  setSelectedOptions({
                    ...selectedOptions,
                    offensePositions: selection,
                  });
                }}
                multiple
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Offense Position Filter"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                id="offensive-archetype-filter"
                options={offensiveArchetypes.map((option) => option)}
                groupBy={(option) => option.category}
                getOptionLabel={(option) => option.title}
                onChange={(event, selection) => {
                  setSelectedOptions({
                    ...selectedOptions,
                    offensiveArchetypes: selection,
                  });
                }}
                multiple
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Offensive Archetypes Filter"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                id="player-search"
                options={Object.keys(combinedData)}
                getOptionLabel={(option) => option}
                onChange={(event, value) => {
                  setCurrentPlayer({
                    playerId: combinedData[value],
                    stats: players[combinedData[value]],
                  });
                }}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Player"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Button
              onClick={handleRun}
              disabled={
                currentPlayer?.playerId && currentPlayer?.stats ? false : true
              }
            >
              Run
            </Button>
          </Grid>
        </Container>
        {cardData && (
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <div className="mt-4 text-black/[.54]">
              <Grid container justifyContent="center">
                <ButtonGroup
                  size="small"
                  variant="outline"
                  className={classes.btn}
                >
                  <Button
                    className={selectedSummary ? classes.root : ""}
                    onClick={() => {
                      setSelectedSummary(true);
                      setSelectedQuickView(false);
                      setSelectedFullData(false);
                    }}
                  >
                    Summary
                  </Button>
                  <Button
                    className={selectedQuickView ? classes.root : ""}
                    onClick={() => {
                      setSelectedSummary(false);
                      setSelectedQuickView(true);
                      setSelectedFullData(false);
                    }}
                    sx={{ borderRadius: 0 }}
                  >
                    Quick View
                  </Button>
                  <Button
                    className={selectedFullData ? classes.root : ""}
                    onClick={() => {
                      setSelectedSummary(false);
                      setSelectedQuickView(false);
                      setSelectedFullData(true);
                    }}
                  >
                    Full Data
                  </Button>
                </ButtonGroup>
              </Grid>
            </div>
          </Container>
        )}
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          {selectedSummary && <Summary cardData={cardData} />}
          {selectedQuickView && <QuickView cardData={cardData} />}
          {selectedFullData && <FullData cardData={cardData} />}
        </Container>
      </main>
    </>
  );
}
