import * as React from "react";
import { Typography } from "@mui/material";

interface ParagraphProps {
  children: React.ReactNode | React.ReactNodeArray | any;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = (props) => {
  return props?.children?.some((child: any) => typeof child === "string") ? (
    <Typography sx={{ lineHeight: 2 }} paragraph {...props} />
  ) : (
    <div {...props} />
  );
};

export default Paragraph;
