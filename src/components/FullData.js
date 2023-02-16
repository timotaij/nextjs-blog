import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Card from "./Card";
const FullData = ({ cardData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  }, []);

  return isLoading ? (
    <BeatLoader color={"#6F263D"} />
  ) : (
    <Grid container spacing={3}>
      {cardData.map((data, index) => (
        <Grid item xs={12} md={6} key={data.title + index}>
          <Card data={data} depth={3} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FullData;
