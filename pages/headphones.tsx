import { Container, Grid } from "@mui/material";
import * as React from "react";
import Headphone, { HeadphoneProps } from "../src/headphone/headphone";

interface HeadphonesProps {}
/**
 * Headphone Product Page - List all the Headphone products
 * including some blog post links related to Headphones
 *
 * @return {JSX.Element}
 */
const Headphones: React.FunctionComponent<HeadphonesProps> = () => {
  const product: HeadphoneProps = {
    title: "Product name",
    image: {
      alt: "product alt",
      src: "/product.png",
    },
    specs: {
      bass: "deep",
      playbackTime: 4,
      sound: "Dynamic",
      bluetoothVersion: 5.1,
      mic: true,
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
              <Headphone
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

export default Headphones;
