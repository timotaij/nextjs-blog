import {Grid, TableContainer, Tooltip} from "@mui/material";
import Card from "./Card";
import * as React from "react";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import fullDataTable from './FullDataTable'
import Papa from 'papaparse';
import PlayerHeadshot from './PlayerHeadshot';
import TeamSpons from './TeamName';
import {GradeOutlined} from "@mui/icons-material";
import IndexLogo from "./BballIndexLogo";
import Paper from "@mui/material/Paper";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";



const Details = ({ currentPlayerPick, playerGrades, currentPlayer}) => {
    return (
        <div css={css`display:flex; flex-direction:column;`} style={{ background: '#1A1A1A' }}>
                <>
                    <div style={{ display: 'flex', marginLeft: '100px',marginTop: '15px', paddingLeft: '20px', backgroundColor: '#1A1A1A', color: 'white' }}>
                        <PlayerHeadshot playerID={currentPlayer.playerId}/>
                        <div style={{ marginLeft: '10px', borderRight: '1px dashed black', paddingLeft: '5px', paddingRight: '20px', marginTop:'10px', textAlign: 'center' }}>
                            {currentPlayerPick.length > 0 && (
                                <>
                                    <div css={css`font-size: 22px; padding-bottom: 10px;`}>
                                        {currentPlayerPick[0]["Player"].split(' ').slice(0,1).map((name, index) => (
                                            <div key={index}>{name}</div>
                                        ))}
                                        {currentPlayerPick[0]["Player"].split(' ').slice(1).map((name, index) => (
                                            <span key={index}> {name}</span>
                                        ))}
                                    </div>
                                    <div css={css`padding-bottom: 10px;`}>
                                        Team: { currentPlayerPick[0]["Team(s)"]}
                                    </div>
                                    <div>
                                        Position: { currentPlayerPick[0]["Offense Position"]}
                                    </div>
                                </>
                            )}
                        </div>
                        <div style={{ marginLeft: '10px', paddingLeft: '5px', paddingRight: '20px', marginTop:'13px' }}>
                            {currentPlayerPick.length > 0 && (
                                <>
                                    <div css={css`font-size: 12px; line-height: 2; text-align: center;`}>
                                        Height: {currentPlayerPick[0]["Height"]}
                                        <br />
                                        Weight: {currentPlayerPick[0]["Weight"]}
                                        <br />
                                        Age: {currentPlayerPick[0]["Age"]}
                                    </div>
                                </>
                            )}
                        </div>
                        <div style={{ marginLeft: '-15px', paddingLeft: '-5px', paddingRight: '40px', marginBottom:'-40px', marginTop:'-40px', paddingTop:'45px' }}>
                            {currentPlayerPick.length > 0 && (
                                <>
                                    <div css={css`font-size: 12px; line-height: 2; text-align: center;`}>
                                        <TeamSpons teamName={currentPlayerPick[0]['Team(s)'].slice(-3)} />
                                        <br />
                                    </div>
                                </>
                            )}
                        </div>
                        <div style={{ marginLeft: '-10px', paddingLeft: '0px', paddingRight: '10px', marginBottom:'0px', marginTop:'0px', paddingTop:'5px' }}>
                            {currentPlayerPick.length > 0 && (
                                <>
                                    <div css={css`font-size: 10px; line-height: 1.5; text-align: center;`}>
                                        <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '20px', textAlign: 'center', paddingTop: '5px' }}>
                                            Finishing
                                            <br />
                                            Talent:
                                            <div css={css`font-size: 20px;`}>
                                                {playerGrades["Finishing Talent"]}
                                            </div>
                                        </div>
                                        <br />
                                        <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '15px', textAlign: 'center', paddingTop: '5px'}}>
                                            3PT
                                            <br />
                                            Talent:
                                            <div css={css`font-size: 20px;`}>
                                                {playerGrades["3PT Shooting Talent"]}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div style={{ marginLeft: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom:'0px', marginTop:'0px', paddingTop:'5px' }}>
                            {currentPlayerPick.length > 0 && (
                                <>
                                    <div css={css`font-size: 10px; line-height: 1.5; text-align: center;`}>
                                        <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '20px', textAlign: 'center', paddingTop: '5px' }}>
                                            One on One
                                            <br />
                                            Talent:
                                            <div css={css`font-size: 20px;`}>
                                                {playerGrades["One on One Talent"]}
                                            </div>
                                        </div>
                                        <br />
                                        <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '15px', textAlign: 'center', paddingTop: '5px' }}>
                                            Playmaking
                                            <br />
                                            Talent:
                                            <div css={css`font-size: 20px;`}>
                                                {playerGrades["Playmaking Talent"]}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div style={{ marginLeft: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom:'0px', marginTop:'0px', paddingTop:'5px' }}>
                            {currentPlayerPick.length > 0 && (
                                <>
                                    <div css={css`font-size: 10px; line-height: 1.5; text-align: center;`}>
                                        <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '20px', textAlign: 'center', paddingTop: '5px' }}>
                                            Off Reb
                                            <br />
                                            Talent:
                                            <div css={css`font-size: 20px;`}>
                                                {playerGrades["Offensive Rebounding Talent"]}
                                            </div>
                                        </div>
                                        <br />
                                        <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '15px', textAlign: 'center', paddingTop: '5px' }}>
                                            Def Reb
                                            <br />
                                            Talent:
                                            <div css={css`font-size: 20px;`}>
                                                {playerGrades["Defensive Rebounding Talent"]}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div style={{ marginLeft: '10px', paddingLeft: '10px', paddingRight: '10px', marginBottom:'0px', marginTop:'0px', paddingTop:'5px' }}>
                                <>
                                    <div css={css`font-size: 10px; line-height: 1.5; text-align: center;`}>
                                        <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '20px', textAlign: 'center', paddingTop: '5px' }}>
                                            Rim
                                            <br />
                                            Protection:
                                            <div css={css`font-size: 20px;`}>
                                                {playerGrades["Rim Protection"]}
                                            </div>
                                        </div>
                                        <br />
                                        <div style={{ width: '60px', height: '60px', backgroundColor: '#D3D3D3', borderRadius: '15px', textAlign: 'center', paddingTop: '5px' }}>
                                            On-Ball
                                            <br />
                                            Defense:
                                            <div css={css`font-size: 20px;`}>
                                                {playerGrades["On-Ball Defense"]}
                                            </div>
                                        </div>
                                    </div>
                                </>
                        </div>
                        <div style={{ marginLeft: '20px'}}>
                            <IndexLogo />
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: '15px', marginBottom: '20px', borderTop: '1px solid gray', borderBottom: '1px solid gray' }}>
                        <div style={{ width: '25.00%', marginLeft: '0px', paddingLeft: '0px', paddingRight: '0px', marginTop: '13px', marginBottom: '13px' }}>
                                <>
                                    <div css={css`font-size: 10px; line-height: 2; text-align: center;`}>
                                        Advanced Position
                                        <br />
                                        <div css={css`font-size: 16px;`}>
                                            {currentPlayerPick[0]["Advanced Position"]}
                                        </div>
                                    </div>
                                </>
                        </div>
                        <div style={{ width: '33.33%', marginLeft: '10px', paddingLeft: '150px', paddingRight: '20px', marginTop: '13px', marginBottom: '13px'}}>
                                <>
                                    <div css={css`font-size: 10px; line-height: 2; text-align: center;`}>
                                        Offensive Archetype
                                        <br />
                                        <div css={css`font-size: 16px;`}>
                                            {currentPlayerPick[0]["Offensive Archetype"]}
                                        </div>
                                    </div>
                                </>
                        </div>
                        <div style={{ width: '33.33%', marginLeft: '10px', paddingLeft: '150px', paddingRight: '20px', marginTop: '13px', marginBottom: '13px' }}>
                                <>
                                    <div css={css`font-size: 10px; line-height: 2; text-align: center;`}>
                                        Defensive Role
                                        <br />
                                        <div css={css`font-size: 16px;`}>
                                            {currentPlayerPick[0]["Defensive Role"]}
                                        </div>
                                    </div>
                                </>
                        </div>
                    </div>
                </>
        </div>
    );
};

export default Details;
