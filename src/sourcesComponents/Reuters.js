import React, { useState, useEffect } from "react";
import ComPage from "../subRoutes/comPage";

import useFetch from "../subComponents/myFetchHook";

export default function Reuters() {
   const { data } = useFetch("/sources/reuters");

   return <ComPage news={data} />;
}
