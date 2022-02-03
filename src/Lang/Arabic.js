import React, { useState, useEffect } from "react";
import LangComp from "./LangComp";
import useFetch from "../subComponents/myFetchHook";

export default function Arabic() {
   const { data } = useFetch("/lang/arabic");

   return <LangComp news={data} />;
}
