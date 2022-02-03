import React, { useState, useEffect } from "react";
import ComPage from "../subRoutes/comPage";

import useFetch from "../subComponents/myFetchHook";

export default function Time() {
   const { data } = useFetch("/sources/time");

   return <ComPage news={data} />;
}
