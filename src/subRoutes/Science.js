import React from "react";

import useFetch from "../subComponents/myFetchHook";
import ComPage from "./comPage";

export default function Science() {
   const { data, isLoading } = useFetch("/topics/science");

   return <ComPage news={data} />;
}
