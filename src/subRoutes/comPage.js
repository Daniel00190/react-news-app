import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import useFetch from "../subComponents/myFetchHook";
import LinearDeterminate from "../subComponents/LinearDeterminate";

const useStyles = makeStyles({
   root: {
      borderRadius: 20,
      maxWidth: 405,
      margin: 20,
   },
   media: {
      width: "auto",
      height: 190,
   },
});

export default function ComPage(props) {
   const data = props.news;
   return (
      <div className="card_container">
         {data ? (
            data
               .filter((art) => !!art.urlToImage && !!art.url)
               .slice(0, 20)
               .map((article) => (
                  <a href={article.url}>
                     <div className="card_image">
                        <img src={article.urlToImage} alt="" srcset="" />
                     </div>
                     <div className="bottom_part">
                        <h3>{article.title}</h3>
                     </div>
                  </a>
                  // <Card className={classes.root}>
                  //    <CardActionArea href={article.url} target="_blank">
                  //       <CardMedia
                  //          className={classes.media}
                  //          image={article.urlToImage}
                  //       />
                  //       <CardContent>
                  //          <Typography gutterBottom variant="h6" component="h2">
                  //             {article.title}
                  //          </Typography>
                  //          <Typography
                  //             variant="body2"
                  //             color="textSecondary"
                  //             component="p"
                  //          >
                  //             {article.description}
                  //          </Typography>
                  //       </CardContent>
                  //    </CardActionArea>
                  // </Card>
               ))
         ) : (
            <LinearDeterminate />
         )}
      </div>
   );
}
