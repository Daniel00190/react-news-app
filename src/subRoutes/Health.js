import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import useFetch from "../subComponents/myFetchHook";
import LinearDeterminate from "../subComponents/LinearDeterminate";
import ComPage from "./comPage";

export default function Health() {
   const { data } = useFetch("/topics/health");

   return <ComPage news={data} />;
}
