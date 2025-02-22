import { Container, Grid } from "@mui/material";
import * as React from "react";
import ProductCard, { ProductCardProps } from "../src/earbud/productCard";
interface EarbudsProps {}
/**
 * Earbud Product Page - List all the Earbud products
 * including some blog post links related to Earbuds
 *
 * @return {JSX.Element}
 */
const Earbuds: React.FunctionComponent<EarbudsProps> = () => {
  const product: ProductCardProps = {
    title: "Product name",
    image: {
      alt: "product alt",
      src: "/product.png",
    },
    specs: {
      batteryLife: 20,
      range: 10,
      bluetoothVersion: 5.0,
      mic: false,
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
              <ProductCard
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

export default Earbuds;
