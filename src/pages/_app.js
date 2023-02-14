import "@/styles/globals.css";
import { Button, ButtonGroup, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { StyledEngineProvider } from '@mui/material/styles';


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

export default function App({ Component, pageProps }) {
    let [selectedSummary, setSelectedSummary] = useState(false);
    let [selectedQuickView, setSelectedQuickView] = useState(false);
    let [selectedFullData, setSelectedFullData] = useState(false);
    const classes = useStyles();

    return (
        <StyledEngineProvider injectFirst >
            <div>
                <div className="mt-4 text-black/[.54]">
                    <Grid container justifyContent="center">
                        <ButtonGroup size="small" variant="outline" className={classes.btn}>
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
                <Component
                    selectedSummary={selectedSummary}
                    selectedQuickView={selectedQuickView}
                    selectedFullData={selectedFullData}
                    {...pageProps}
                />
            </div>
        </StyledEngineProvider>
    );
}