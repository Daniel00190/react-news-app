import React from "react";
import LangComp from "./LangComp";
import useFetch from "../subComponents/myFetchHook";

export default function Arabic() {
   const { data } = useFetch("https://react-d-news.herokuapp.com/lang/arabic");

   return <LangComp news={data} />;
}
