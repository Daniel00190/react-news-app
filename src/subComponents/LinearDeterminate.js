import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "15rem",
      width: "100%",
      "& > * + *": {
         marginLeft: theme.spacing(2),
      },
   },
}));

export default function CircularIndeterminate() {
   const classes = useStyles();

   return <div className={classes.root}>LOADING....</div>;
}
