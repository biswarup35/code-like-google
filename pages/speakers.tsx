import { Container, Grid } from "@mui/material";
import * as React from "react";
import Speaker, { SpeakerProps } from "../src/speaker/speaker";

interface SpeakersProps {}
/**
 * Speaker Product Page - List all the Speaker products
 * including some blog post links related to Speakers
 *
 * @return {JSX.Element}
 */
const Speakers: React.FunctionComponent<SpeakersProps> = () => {
  const product: SpeakerProps = {
    title: "Product name",
    image: {
      alt: "product alt",
      src: "/product.png",
    },
    specs: {
      bluetoothVersion: 4.1,
      configuration: "Stereo",
      playBackTime: 12,
      power: 12,
      sound: "High-res",
    },
    affliateLinks: {
      amazon: "#amazon",
      flipkart: "#flipkart",
    },
    pros: [
      {
        id: 1,
        pro: "Good Bass",
      },
      {
        id: 2,
        pro: "Good battry backup",
      },
    ],
    cons: [
      {
        id: 2,
        con: "Feels uncomfortable",
      },
    ],
  };
  return (
    <React.Fragment>
      <Container maxWidth="lg" component="section" sx={{ my: 4 }}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
              <Speaker
                title={product.title}
                image={product.image}
                specs={product.specs}
                affliateLinks={product.affliateLinks}
                pros={product.pros}
                cons={product.cons}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Speakers;
