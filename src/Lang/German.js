import React from "react";
import useFetch from "../subComponents/myFetchHook";
import LangComp from "./LangComp";

export default function German() {
   const { data, isLoading } = useFetch("/lang/german");
   return <LangComp news={data} />;
}
