import * as React from "react";
import { Box } from "@mui/material";
import Image, { ImageProps } from "next/image";

interface ThumbnailProps extends ImageProps {}
const Thumbnail: React.FunctionComponent<ThumbnailProps> = ({ src, alt }) => {
  return (
    <Box sx={{ my: 3 }}>
      <Image
        src={src}
        alt={alt}
        height={315}
        width={600}
        layout="responsive"
        objectFit="cover"
        priority
      />
    </Box>
  );
};

export default Thumbnail;
