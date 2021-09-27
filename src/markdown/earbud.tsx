import * as React from "react";
import { Box } from "@mui/material";
import ProductCard, { ProductCardProps } from "../earbud/productCard";
interface EarbudProps extends ProductCardProps {
  productID: string | number;
}

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
/**
 * Earphone component for blog to display a single post.
 * @todo make a call backend and fetch the product using this ID
 * @param {EarbudProps} productId - Search product by this ID
 * @return {JSX.Element}
 */
const Earbud: React.FunctionComponent<EarbudProps> = ({ productID }) => {
  return (
    <Box sx={{ my: 2, maxWidth: 400, mx: "auto" }}>
      <ProductCard
        title={product.title}
        image={product.image}
        specs={product.specs}
        affliateLinks={product.affliateLinks}
        pros={product.pros}
        cons={product.cons}
      />
    </Box>
  );
};

export default Earbud;
