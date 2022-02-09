import React, { useState, useEffect } from "react";
import ComPage from "../subRoutes/comPage";

import useFetch from "../subComponents/myFetchHook";

export default function Espn() {
   const { data } = useFetch("/sources/espn");

   return <ComPage news={data} />;
}
