import { Grid } from "@mui/material";
import Card from "./Card";
import * as React from "react";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import quickViewTable from './QuickViewTable'
import Papa from 'papaparse';
import PlayerHeadshot from './PlayerHeadshot';
import TeamSpons from './TeamName';
import {GradeOutlined} from "@mui/icons-material";
import IndexLogo from "./BballIndexLogo";




const QuickView = () => {
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
    if (playerArray[0]) {
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

  const data = playerRow.length != 0 && percentileScores.length != 0 && Grades.length != 0 ? quickViewTable({ playerRow, percentileScores, Grades }): []
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
            <>
              <div style={{ display: 'flex', marginTop: '15px', paddingLeft: '20px', backgroundColor: 'gray' }}>
                <PlayerHeadshot playerID={playerId} />
                <div style={{ marginLeft: '10px', borderRight: '1px dashed black', paddingLeft: '5px', paddingRight: '20px', marginTop:'10px', textAlign: 'center' }}>
                  {playerRow.length > 0 && (
                      <>
                        <div css={css`font-size: 22px; padding-bottom: 10px;`}>
                          {playerRow[0]["Player"].split(' ').slice(0,1).map((name, index) => (
                              <div key={index}>{name}</div>
                          ))}
                          {playerRow[0]["Player"].split(' ').slice(1).map((name, index) => (
                              <span key={index}> {name}</span>
                          ))}
                        </div>
                        <div css={css`padding-bottom: 10px;`}>
                          Team: { playerRow[0]["Team(s)"]}
                        </div>
                        <div>
                          Position: { playerRow[0]["Offense Position"]}
                        </div>
                      </>
                  )}
                </div>
                <div style={{ marginLeft: '10px', paddingLeft: '5px', paddingRight: '20px', marginTop:'13px' }}>
                  {playerRow.length > 0 && (
                      <>
                        <div css={css`font-size: 12px; line-height: 2; text-align: center;`}>
                          Height: {playerRow[0]["Height"]}
                          <br />
                          Weight: {playerRow[0]["Weight"]}
                          <br />
                          Age: {playerRow[0]["Age"]}
                        </div>
                      </>
                  )}
                </div>
                <div style={{ marginLeft: '-15px', paddingLeft: '-5px', paddingRight: '40px', marginBottom:'-40px', marginTop:'-40px', paddingTop:'45px' }}>
                  {playerRow.length > 0 && (
                      <>
                        <div css={css`font-size: 12px; line-height: 2; text-align: center;`}>
                            <TeamSpons teamName={playerRow[0]['Team(s)'].slice(-3)} />
                          <br />
                        </div>
                      </>
                  )}
                </div>
                <div style={{ marginLeft: '-10px', paddingLeft: '0px', paddingRight: '10px', marginBottom:'0px', marginTop:'0px', paddingTop:'5px' }}>
                  {playerRow.length > 0 && (
                      <>
                        <div css={css`font-size: 10px; line-height: 1.5; text-align: center;`}>
                          <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '20px', textAlign: 'center', paddingTop: '5px' }}>
                            Finishing
                            <br />
                            Talent:
                            <div css={css`font-size: 20px;`}>
                            {Grades["Finishing Talent"]}
                            </div>
                          </div>
                          <br />
                          <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '15px', textAlign: 'center', paddingTop: '5px'}}>
                            3PT
                            <br />
                            Talent:
                            <div css={css`font-size: 20px;`}>
                              {Grades["3PT Shooting Talent"]}
                            </div>
                          </div>
                        </div>
                      </>
                  )}
                </div>
                <div style={{ marginLeft: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom:'0px', marginTop:'0px', paddingTop:'5px' }}>
                  {playerRow.length > 0 && (
                      <>
                        <div css={css`font-size: 10px; line-height: 1.5; text-align: center;`}>
                          <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '20px', textAlign: 'center', paddingTop: '5px' }}>
                            One on One
                            <br />
                            Talent:
                            <div css={css`font-size: 20px;`}>
                              {Grades["One on One Talent"]}
                            </div>
                          </div>
                          <br />
                          <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '15px', textAlign: 'center', paddingTop: '5px' }}>
                            Playmaking
                            <br />
                            Talent:
                            <div css={css`font-size: 20px;`}>
                              {Grades["Playmaking Talent"]}
                            </div>
                          </div>
                        </div>
                      </>
                  )}
                </div>
                <div style={{ marginLeft: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom:'0px', marginTop:'0px', paddingTop:'5px' }}>
                  {playerRow.length > 0 && (
                      <>
                        <div css={css`font-size: 10px; line-height: 1.5; text-align: center;`}>
                          <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '20px', textAlign: 'center', paddingTop: '5px' }}>
                            Off Reb
                            <br />
                            Talent:
                            <div css={css`font-size: 20px;`}>
                              {Grades["Offensive Rebounding Talent"]}
                            </div>
                          </div>
                          <br />
                          <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '15px', textAlign: 'center', paddingTop: '5px' }}>
                            Def Reb
                            <br />
                            Talent:
                            <div css={css`font-size: 20px;`}>
                              {Grades["Defensive Rebounding Talent"]}
                            </div>
                          </div>
                        </div>
                      </>
                  )}
                </div>
                <div style={{ marginLeft: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom:'0px', marginTop:'0px', paddingTop:'5px' }}>
                  {playerRow.length > 0 && (
                      <>
                        <div css={css`font-size: 10px; line-height: 1.5; text-align: center;`}>
                          <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '20px', textAlign: 'center', paddingTop: '5px' }}>
                            Rim
                            <br />
                            Protection:
                            <div css={css`font-size: 20px;`}>
                              {Grades["Rim Protection"]}
                            </div>
                          </div>
                          <br />
                          <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '15px', textAlign: 'center', paddingTop: '5px' }}>
                            On-Ball
                            <br />
                            Defense:
                            <div css={css`font-size: 20px;`}>
                              {Grades["On-Ball Defense"]}
                            </div>
                          </div>
                        </div>
                      </>
                  )}
                </div>
                <div style={{ marginLeft: '20px'}}>
                  <IndexLogo />
                </div>
            </div>
              <div style={{ display: 'flex', marginTop: '15px', marginBottom: '20px', borderTop: '1px solid gray', borderBottom: '1px solid gray' }}>
                <div style={{ width: '25.00%', marginLeft: '0px', paddingLeft: '0px', paddingRight: '0px', marginTop: '13px', marginBottom: '13px' }}>
                  {playerRow.length > 0 && (
                      <>
                        <div css={css`font-size: 10px; line-height: 2; text-align: center;`}>
                          Advanced Position
                          <br />
                          <div css={css`font-size: 16px;`}>
                            {playerRow[0]["Advanced Position"]}
                          </div>
                        </div>
                      </>
                  )}
                </div>
                <div style={{ width: '33.33%', marginLeft: '10px', paddingLeft: '150px', paddingRight: '20px', marginTop: '13px', marginBottom: '13px'}}>
                  {playerRow.length > 0 && (
                      <>
                        <div css={css`font-size: 10px; line-height: 2; text-align: center;`}>
                          Offensive Archetype
                          <br />
                          <div css={css`font-size: 16px;`}>
                          {playerRow[0]["Offensive Archetype"]}
                          </div>
                        </div>
                      </>
                  )}
                </div>
                <div style={{ width: '33.33%', marginLeft: '10px', paddingLeft: '150px', paddingRight: '20px', marginTop: '13px', marginBottom: '13px' }}>
                  {playerRow.length > 0 && (
                      <>
                        <div css={css`font-size: 10px; line-height: 2; text-align: center;`}>
                          Defensive Role
                          <br />
                          <div css={css`font-size: 16px;`}>
                          {playerRow[0]["Defensive Role"]}
                          </div>
                        </div>
                      </>
                  )}
                </div>
              </div>
              <Grid container spacing={3}>
                {quickViewTable({ playerRow, percentileScores, Grades }).map((data, index) => (
                    <Grid item xs={12} md={6} key={data.title + index}>
                      <Card data={data} />
                    </Grid>
                ))}
              </Grid>
            </>
        )}
      </div>
  );
};

export default QuickView;






