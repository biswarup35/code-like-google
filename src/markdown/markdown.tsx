import * as React from "react";
import MarkdownJsx, { MarkdownToJSX } from "markdown-to-jsx";
import { Typography } from "@mui/material";
import Paragraph from "./paragraph";
import Links from "./links";
import Images from "./images";
import Hello from "./hello";

interface MarkdownOptions extends MarkdownToJSX.Options {
  CustomComponent?: React.ReactNode;
}

const options: MarkdownOptions = {
  overrides: {
    h1: {
      component: Typography,
      props: { gutterBottom: true, variant: "h5" },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: "h6" } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "caption", paragraph: true },
    },
    li: {
      component: Typography,
      props: { component: "li", gutterBottom: true },
    },
    p: { component: Paragraph },
    a: { component: Links },
    img: { component: Images },
    CustomComponent: { component: Hello },
  },
};
const Markdown = (props: any) => {
  return <MarkdownJsx options={options} {...props} />;
};

export default Markdown;
