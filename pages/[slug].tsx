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
  <CustomComponent />
  `,
}) => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        {/* Main */}
        <Grid item xs={12} md={6} sx={{ border: `1px solid green` }}>
          {/* Title */}
          <Typography component="h1" variant="h4" gutterBottom>
            {title}
          </Typography>
          {/* Byline */}
          <Byline />
          {/* Thumbnail */}
          <Thumbnail src={image.src} alt={image.alt} />
          {/* Markdown content */}
          <Markdown>{content}</Markdown>
        </Grid>
        <Grid item xs={12} md={3} sx={{ border: `1px solid red` }}>
          {/* Right sidebar */}
          <Typography>Hello, from right sidebar</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
