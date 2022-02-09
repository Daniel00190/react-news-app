import React from "react";
import ComPage from "../subRoutes/comPage";

import useFetch from "../subComponents/myFetchHook";

export default function BbcNews() {
   const { data } = useFetch("/sources/bbc");

   return <ComPage news={data} />;
}
