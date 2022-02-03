import React from "react";
import useFetch from "../subComponents/myFetchHook";
import ComPage from "./comPage";

export default function Technology() {
   const { data, isLoading } = useFetch("/topics/technology");

   return <ComPage news={data} />;
}
