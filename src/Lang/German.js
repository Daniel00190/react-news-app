import React from "react";
import useFetch from "../subComponents/myFetchHook";
import LangComp from "./LangComp";

export default function German() {
   const { data, isLoading } = useFetch(
      "https://react-d-news.herokuapp.com/lang/german"
   );
   return <LangComp news={data} />;
}
