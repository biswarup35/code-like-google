import { Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import Byline from "../src/common/byline";
import Thumbnail from "../src/common/thumbnail";
import Markdown from "../src/markdown/markdown";
interface BlogProps {
  title: string;
  image: {
    alt: string;
    src: string;
  };
  content: string;
}

const Blog: React.FunctionComponent<BlogProps> = ({
  title = "7 Best Earbuds you can get under 1000",
  image = {
    alt: "Product alt",
    src: "/product.png",
  },
  content = `
  <p> Hello, this first paragraph </p>
  

  <Earbud />
  <p> This is another paragraph</p>
  

  <Earbud />
  `,
}) => {
  return (
    <Container maxWidth="lg" component="main">
      {/* Title */}
      <header>
        <Typography component="h1" variant="h4" gutterBottom>
          {title}
        </Typography>
      </header>
      <Grid container spacing={2}>
        {/* Main */}
        <Grid item xs={12} md={7}>
          {/* Byline */}
          <Byline />
          {/* Thumbnail */}
          <Thumbnail src={image.src} alt={image.alt} />
          {/* Markdown content */}
          <Markdown>{content}</Markdown>
        </Grid>
        <Grid item xs={12} md={5}>
          {/* Right sidebar */}
          <Typography align="right">Hello, from right sidebar</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
