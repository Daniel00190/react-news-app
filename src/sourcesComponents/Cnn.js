import React, { useState, useEffect } from "react";
import ComPage from "../subRoutes/comPage";

import useFetch from "../subComponents/myFetchHook";

export default function Cnn() {
   const { data } = useFetch("/sources/cnn");

   return <ComPage news={data} />;
}
