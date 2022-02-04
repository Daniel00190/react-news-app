import React, { useState, useEffect } from "react";
import ComPage from "../subRoutes/comPage";

import useFetch from "../subComponents/myFetchHook";

export default function Espn() {
   const { data } = useFetch("https://react-d-news.herokuapp.com/sources/espn");

   return <ComPage news={data} />;
}
