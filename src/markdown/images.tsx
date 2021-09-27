import * as React from "react";
import Image, { ImageProps } from "next/image";
import { Box } from "@mui/material";
interface ImagesProps extends ImageProps {}

const Images: React.FunctionComponent<ImagesProps> = ({
  alt,
  src,
  height = 315,
  width = 600,
}) => {
  return (
    <Box sx={{ m: 0, p: 0 }} component="figure">
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        layout="responsive"
        objectFit="cover"
        loading="lazy"
      />
    </Box>
  );
};

export default Images;
