import React from "react";
import ComPage from "../subRoutes/comPage";

import useFetch from "../subComponents/myFetchHook";

export default function Time() {
   const { data } = useFetch("https://react-d-news.herokuapp.com/sources/time");

   return <ComPage news={data} />;
}
