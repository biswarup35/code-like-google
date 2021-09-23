import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  test: {
    fontSize: "5rem",
  },
}));

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
export default function Home(): JSX.Element {
  const classes = useStyles();
  return (
    <div>
      <Typography component="h1" variant="h5" className={classes.test}>
        Hello, World!
      </Typography>
    </div>
  );
}
