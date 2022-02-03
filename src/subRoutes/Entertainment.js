import React from "react";

import useFetch from "../subComponents/myFetchHook";

import ComPage from "./comPage";

export default function Entertainment() {
   const { data, isLoading } = useFetch("/topics/entertainment");

   return <ComPage news={data} />;
}
