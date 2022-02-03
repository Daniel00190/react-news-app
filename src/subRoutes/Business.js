import React from "react";
import ComPage from "./comPage";
import useFetch from "../subComponents/myFetchHook";

export default function Business() {
   const { data, isLoading } = useFetch("/topics/business");

   return <ComPage news={data} />;
}
