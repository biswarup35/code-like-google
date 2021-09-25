import * as React from "react";
import Image from "next/image";
interface CradImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

const CradImage: React.FunctionComponent<CradImageProps> = ({
  src,
  alt,
  width = 600,
  height = 315,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit="cover"
      layout="responsive"
      loading="lazy"
    />
  );
};

export default CradImage;
