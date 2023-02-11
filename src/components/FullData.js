import { Grid } from "@mui/material";
import Card from "./Card";
import * as React from "react";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import fullDataTable from './FullDataTable'
import Papa from 'papaparse';
import { makeStyles } from "@mui/styles";




const FullData = () => {
  const [combinedData, setCombinedData] = React.useState({});
  const [players, setPlayers] = React.useState([]);
  const [playerId, setPlayerId] = React.useState('');
  const [playerRow, setPlayerRow] = React.useState([]);
  const [filteredPlayers, setFilteredPlayers] = React.useState([]);
  const [showTable, setShowTable] = React.useState(false);
  const [Grades, setGrades] = React.useState([])
  const [percentileScores, setPercentileScores] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState({
    offensePositions: [],
    advancedPositions: [],
    offensiveArchetypes: [],
  });

  React.useEffect(() => {
    fetch('/players1.csv')
        .then((response) => response.text())
        .then((text) => {
          const results = Papa.parse(text, {
            header: true,
            dynamicTyping: true,
          });
          setCombinedData(
              results.data.reduce((acc, player) => {
                const currentKey = `${player['Player']} ${player['Team(s)']}`;
                acc[currentKey] = player['Player ID'];
                return acc;
              }, {})
          );
          setPlayers(results.data);
        });
  }, []);

  React.useEffect(() => {
    const newFilteredPlayers = players.filter((player) => {
      return (
          (!selectedOptions.offensePositions.length || selectedOptions.offensePositions.includes(player['Offense Position'])) &&
          (!selectedOptions.advancedPositions.length || selectedOptions.advancedPositions.includes(player['Advanced Position'])) &&
          (!selectedOptions.offensiveArchetypes.length || selectedOptions.offensiveArchetypes.includes(player['Offensive Archetype']))
      );
    });
    setFilteredPlayers(newFilteredPlayers);
  }, [players, selectedOptions]);


  React.useEffect(() => {
    if (playerRow.length === 0) return;
    const percentileArray = [];
    for (const column of Object.keys(playerRow[0])) {
      if (!isNaN(playerRow[0][column])) {
        const columnValues = filteredPlayers.map((row) => row[column]);
        columnValues.sort((a, b) => a - b);
        let index = Math.round((columnValues.length - 1) * (playerRow[0][column] - columnValues[0]) / (columnValues[columnValues.length - 1] - columnValues[0]));
        index = Math.max(0, Math.min(index, columnValues.length - 1));
        percentileArray[column] = 100 * index / (columnValues.length - 1);
      } else {
        percentileArray[column] = playerRow[0][column] === "" ? "blank" : playerRow[0][column];
      }
    }
    setPercentileScores(percentileArray);
    const gradesArray = [];
    for (const column of Object.keys(percentileArray)) {
      if (!isNaN(percentileArray[column])) {
        let grade;
        if (percentileArray[column] >= 90) {
          grade = "A";
        } else if (percentileArray[column] >= 80) {
          grade = "B";
        } else if (percentileArray[column] >= 70) {
          grade = "C";
        } else if (percentileArray[column] >= 60) {
          grade = "D";
        } else {
          grade = "F";
        }
        gradesArray[column] = grade;
      } else {
        gradesArray[column] = percentileArray[column];
      }
    }
    setGrades(gradesArray);
  }, [playerRow,filteredPlayers]);






  const handleoffensePositionFilterChange = (event, newValue) => {
    setSelectedOptions((prevState) => {
      return { ...prevState, offensePositions: newValue };
    });
  };

  const handleAdvancedPositionFilterChange = (event, newValue) => {
    setSelectedOptions((prevState) => {
      return { ...prevState, advancedPositions: newValue };
    });
  };

  const handleOffensiveArchetypeFilterChange = (event, newValue) => {
    setSelectedOptions((prevState) => {
      return { ...prevState, offensiveArchetypes: newValue };
    });
  };

  const handleRunClick = () => {
    if (playerId) {
      setShowTable(true);
      setPlayerRow(playerRow);
      console.log("hellohellodonaello",playerRow)
    }
    const newFilteredPlayers = players.filter((player) => {
      return (
          (!selectedOptions.offensePositions.length || selectedOptions.offensePositions.includes(player['Offense Position'])) &&
          (!selectedOptions.advancedPositions.length || selectedOptions.advancedPositions.includes(player['Advanced Position'])) &&
          (!selectedOptions.offensiveArchetypes.length || selectedOptions.offensiveArchetypes.includes(player['Offensive Archetype']))
      );
    });
    setFilteredPlayers(newFilteredPlayers);
    console.log("helof",filteredPlayers)
    const allPlayersArray = newFilteredPlayers;
    const playerArray = playerRow;
    const percentileArray = [];
    for (const column of Object.keys(playerArray[0])) {
      if (!isNaN(playerArray[0][column])) {
        const columnValues = allPlayersArray.map((row) => row[column]);
        columnValues.sort((a, b) => a - b);
        let index = Math.round((columnValues.length - 1) * (playerArray[0][column] - columnValues[0]) / (columnValues[columnValues.length - 1] - columnValues[0]));
        index = Math.max(index, 0);
        index = Math.min(index, columnValues.length - 1);
        percentileArray[column] = Math.round(100 * index / (columnValues.length - 1));
      } else {
        percentileArray[column] = playerArray[0][column] === "" ? "blank" : playerArray[0][column];
      }
    }

    const gradesArray = [];
    for (const column of Object.keys(percentileArray)) {
      if (!isNaN(percentileArray[column])) {
        let grade;
        if (percentileArray[column] >= 0.9) {
          grade = 'A';
        } else if (percentileArray[column] >= 0.8) {
          grade = 'B';
        } else if (percentileArray[column] >= 0.7) {
          grade = 'C';
        } else if (percentileArray[column] >= 0.6) {
          grade = 'D';
        } else {
          grade = 'F';
        }
        gradesArray[column] = grade;
      } else {
        gradesArray[column] = percentileArray[column];
      }
    }
    setGrades(gradesArray);
    setPercentileScores(percentileArray);
    console.log("oFFPos",selectedOptions.offensePositions)
    console.log("AdvPos",selectedOptions.advancedPositions)
    console.log("OffArche",selectedOptions.offensiveArchetypes)
    console.log("player",playerRow)
    console.log("FilterCorrect",newFilteredPlayers)
    console.log("FilterTest", filteredPlayers)
    console.log("GradedCorrect", gradesArray)
    console.log("GradeTest",Grades)
    console.log("PercentileCorrect",percentileArray)
    console.log("PercentileTest:", percentileScores)
    console.log("PercentileFinale",percentileScores['Minutes'])
    console.log("PercentileCorrect",percentileArray);
    console.log("GradesFinale:", percentileScores);};

  const handleChange = (event, newValue) => {
    setPlayerId(combinedData[newValue]);
  };

  React.useEffect(() => {
    if (playerId) {
      fetch('/players1.csv')
          .then((response) => response.text())
          .then((text) => {
            const results = Papa.parse(text, {
              header: true,
              dynamicTyping: true,
            });
            const playerRow = results.data.filter(
                (player) => player['Player ID'] === parseFloat(playerId)
            );
            setPlayerRow(playerRow);
          });
    }
  }, [playerId]);

  const data = playerRow.length != 0 && percentileScores.length != 0 && Grades.length != 0 ? fullDataTable({ playerRow, percentileScores, Grades }): []
  const half = Math.ceil(data.length/2);

  return (
      <div css={css`display:flex; flex-direction:column;`}>
        <>
          <Autocomplete
              id="offense-position-filter"
              options={Array.from(new Set(players.map(row => row['Offense Position'])))}
              getOptionLabel={(option) => option}
              onChange={handleoffensePositionFilterChange}
              multiple
              renderInput={(params) => (
                  <TextField {...params} label="Offense Position Filter" variant="outlined" />
              )}
          />
          <Autocomplete
              id="advanced-position-filter"
              options={Array.from(new Set(players.map(row => row['Advanced Position'])))}
              getOptionLabel={(option) => option}
              onChange={handleAdvancedPositionFilterChange}
              multiple
              renderInput={(params) => (
                  <TextField {...params} label="Advanced Position Filter" variant="outlined" />
              )}
          />
        </>
        <>
          <Autocomplete
              id="offensive-archetype-filter"
              options={Array.from(new Set(players.map(row => row['Offensive Archetype'])))}
              getOptionLabel={(option) => option}
              onChange={handleOffensiveArchetypeFilterChange}
              multiple
              renderInput={(params) => (
                  <TextField {...params} label="Offensive Archetype Filter" variant="outlined" />
              )}
          />
          <Autocomplete
              id="player-search"
              options={Object.keys(combinedData)}
              getOptionLabel={(option) => option}
              onChange={handleChange}
              renderInput={(params) => (
                  <TextField {...params} label="Search Player" variant="outlined" />
              )}
          />
        </>
        <Button onClick={handleRunClick}>Run</Button>
        {showTable && (
            <Grid container spacing={3}>
              {fullDataTable({ playerRow, percentileScores, Grades }).map((data, index) => (
                  <Grid item xs={12} md={6} key={data.title + index}>
                    <Card data={data} />
                  </Grid>
              ))}
            </Grid>
        )}
      </div>
  );
};

export default FullData;
