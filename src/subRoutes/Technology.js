import React from "react";
import useFetch from "../subComponents/myFetchHook";
import ComPage from "./comPage";

export default function Technology() {
   const { data, isLoading } = useFetch(
      "https://react-d-news.herokuapp.com/topics/technology"
   );

   return <ComPage news={data} />;
}
