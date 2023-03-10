
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Card from "./Card";

const FullData = ({ cardData, titleRowColor1, topRowColor1 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 650);
  }, []);

  return isLoading ? (
      <BeatLoader color={"#6F263D"} />
  ) : (
      <Grid container spacing={3}>
        {cardData.map((data, index) => (
            <Grid item xs={12} md={6} key={data.title + index}>
              <Card data={data} depth={3} titleRowColor={titleRowColor1} topRowColor={topRowColor1} />
            </Grid>
        ))}
      </Grid>
  );
};

export default FullData;
