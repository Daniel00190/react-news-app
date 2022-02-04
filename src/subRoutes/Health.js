import React from "react";

import useFetch from "../subComponents/myFetchHook";
import ComPage from "./comPage";

export default function Health() {
   const { data } = useFetch(
      "https://react-d-news.herokuapp.com/topics/health"
   );

   return <ComPage news={data} />;
}
