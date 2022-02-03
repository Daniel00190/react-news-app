import React from "react";

import useFetch from "../subComponents/myFetchHook";
import ComPage from "./comPage";

export default function Sports() {
   const { data, isLoading } = useFetch("/topics/sports");

   return <ComPage news={data} />;
}
