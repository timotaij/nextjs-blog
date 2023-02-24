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
import Details from "../components/Details";

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
  const [showCards, setShowCards] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSummary, setSelectedSummary] = useState(false);
  const [selectedQuickView, setSelectedQuickView] = useState(false);
  const [selectedFullData, setSelectedFullData] = useState(false);
  const [players, setPlayers] = useState([]);
  const [Seasons] = useState(['2022-23', '2021-22', '2020-21', '2019-20', '2018-19', '2017-18', '2016-17', '2015-16', '2014-15', '2013-14']);
  const [currentPlayer, setCurrentPlayer] = useState();
  const [currentPlayerPick, setCurrentPlayerPick] = useState();
  const [combinedData, setCombinedData] = useState({});
  const [playerGradesArray, setPlayerGradesArray] = useState({});
  const [offensePositions] = useState(['PG',"SG", "SF", "PF", "C"]);
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
    Seasons:[],
  });
  const [currentSeason, setCurrentSeason] = useState();
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [cardData, setCardData] = useState();
    const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/players2.csv");
      const result = await data.text();
      const parsed = await Papa.parse(result, {
        header: true,
        dynamicTyping: true,
      });

      setPlayers(
          await parsed.data.reduce((acc, player) => {
            const currentKey = `${player["Season"]} ${player["Player ID"]}`;
            acc[currentKey] = (({ "Player ID": _, ...o }) => o)(player);
            return acc;
          }, {})
      );

      setCombinedData(
          await parsed.data.reduce((acc, player) => {
            const currentKey = `${player["Player"]} ${player["Player ID"]}`;
            const playerData = (({ "Player ID": _, ...o }) => {
              Object.entries(o).forEach(([key, value]) => {
                if (value === null) {
                  o[key] = "N/A!";
                }
              });
              return o;
            })(player);
            if (acc[currentKey]) {
              acc[currentKey].push(playerData);
            } else {
              acc[currentKey] = [playerData];
            }
            return acc;
          }, {})
      );
    };
    fetchData();
  }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);

  const handleRun = async () => {
    if (currentPlayerPick) {
      const filteredStats = currentPlayer.stats.filter(
          (data) => data.Season === currentSeason );
      setCurrentPlayerPick({
        playerId: currentPlayer.playerId,
        stats: filteredStats, })};
    console.log("players array",players);
    console.log("CombinedDataArray", combinedData);
    console.log("CurrentPlayers", currentPlayer);
    console.log("CurrentPlayerPick", currentPlayerPick);
    console.log("this is the currentseason", currentSeason);
    setShowFilters(true);
    setShowCards(true);
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
                  &&
                  (!selectedOptions.Seasons.length ||
                      selectedOptions.Seasons.includes(
                          player[1]["Season"]
                      ))
              );
            })
            .map(([_, second]) => second)
    );
    console.log("this is the currentfilteredplayers", filteredPlayers);
  };


  useEffect(() => {
    if (!currentPlayerPick || !filteredPlayers?.length || !filteredPlayers) return;

    const filteredStats = currentPlayerPick.stats.filter(
        (data) => data.Season === currentSeason
    );
    if (!filteredStats?.length) {
      setShowCards(false)
      return;
    }


    setFilteredPlayers(
        Object.entries(players)
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
                  &&
                  (!selectedOptions.Seasons.length ||
                      selectedOptions.Seasons.includes(
                          player[1]["Season"]
                      ))
              );
            })
            .map(([_, second]) => second)
    );


    const percentileScores = {};
    Object.keys(currentPlayerPick.stats[0]).forEach((column) => {
      let value = currentPlayerPick.stats[0][column];
      if (typeof value === "string" && value.endsWith("%")) {
        value = parseFloat(value.slice(0, -1));
        currentPlayerPick.stats[0][column] = value;
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
        percentileScores[column] = ((100 * index) / (columnValues.length - 1)).toFixed(2);
      } else {
        percentileScores[column] = isNaN(value) ? 'N/A!' : value === "" ? 'N/A!' : value;
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
    setPlayerGradesArray(gradesArray)
    setCardData(
        FullDataTable(currentPlayerPick.stats, percentileScores, gradesArray)
    );
  }, [currentPlayerPick, filteredPlayers]);

  useEffect(() => {
    setShowCards(false);
  }, [currentPlayer]);

  return (
      <>
          {isLoading ? (
              <p>Loading...</p>
          ) : (
              <>
        <Head>
          <title>Player Profiles</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main>
          <div
              style={{
                backgroundColor: "#4D5B6A",
                paddingTop: "1rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
          >
          <Container
              maxWidth="lg"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
                backgroundColor: "#4D5B6A",
              }}
          >
            <Grid
                container
                justifyContent={"space-between"}
                alignItems="center"
                spacing={1}
            >
              <div style={{ display: 'fixed', marginLeft: '10px',marginTop: '15px', paddingLeft: '20px', paddingBottom: '5px'}}>
                <Grid item sx={{ marginBottom: '25px' }}>
                  <Autocomplete
                      id="player-search"
                      options={Object.keys(combinedData)}
                      getOptionLabel={(option) => option}
                      onChange={
                        (event, value) => {
                          setShowCards(false);
                          setCurrentPlayer({
                            playerId: value,
                            stats: combinedData[value],
                          });
                          if (currentPlayerPick) {
                            const filteredStats = currentPlayer.stats.filter(
                                (data) => data.Season === currentSeason );
                            setCurrentPlayerPick({
                              playerId: currentPlayer.playerId,
                              stats: filteredStats, })};
                        }}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                          <TextField
                              {...params}
                              label="Search Player"
                              variant="outlined"
                              sx={{
                                bgcolor: "grey.200",
                                borderRadius: "5px",
                                fontWeight: "bold",
                                fontSize: params.inputProps.value ? "1rem" : "1.5rem",
                                transform: params.inputProps.value ? "translateY(0)" : "translateY(2px)",
                                transition: "transform 0.2s ease-in-out",}}
                          />
                      )}
                  />
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item>
                  <Autocomplete
                      id="season-filter"
                      options={Seasons}
                      getOptionLabel={(option) => option}
                      onChange={(event, selection) => {
                        setSelectedOptions({
                          ...selectedOptions,
                          Seasons: selection,
                        });
                        const filteredStats = currentPlayer.stats.filter(
                            (data) => data.Season === selection );
                        setCurrentPlayerPick({
                          playerId: currentPlayer.playerId,
                          stats: filteredStats, });
                        setCurrentSeason(selection)
                      }}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                          <TextField
                              {...params}
                              label="Seasons Filter"
                              variant="outlined"
                              sx={{ bgcolor: 'grey.200',borderRadius: "5px",fontWeight: 'bold',
                                fontSize: params.inputProps.value ? "1rem" : "1.5rem"}}
                          />
                      )}
                      disabled={!currentPlayer}
                  />
                </Grid>
              </div>
              {showFilters && (
                  <>
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
                                  sx={{ bgcolor: 'grey.200',borderRadius: "5px",fontWeight: 'bold' }}
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
                                  sx={{ bgcolor: 'grey.200',borderRadius: "5px",fontWeight: 'bold'  }}

                              />
                          )}
                      />
                    </Grid>
                  </>
              )}
              {currentPlayer && (
                  <>
                    <Grid item>
                      <Button
                          variant="contained"
                          onClick={() => {
                            handleRun();
                          }}
                          disabled={!currentPlayerPick}
                      >
                        Run
                      </Button>
                    </Grid>
                  </>
              )}
            </Grid>
          </Container>
            </div>
          {cardData && showCards && (
              <>
                <Grid item xs={12} style={{background: '#1A1A1A', color: 'white'}}>
            <Details
                currentPlayerPick={currentPlayerPick.stats}
                playerGrades={playerGradesArray}
                currentPlayer={currentPlayer}
            />
          </Grid>
              </>
          )}
          {cardData && showCards && (
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
          {showCards && (
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
          )}
        </main>
              </>
          )}
      </>
  );}
