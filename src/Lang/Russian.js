import React from "react";
import useFetch from "../subComponents/myFetchHook";
import LangComp from "./LangComp";

export default function Russian() {
   const { data, isLoading } = useFetch(
      "https://react-d-news.herokuapp.com/lang/russian"
   );
   return <LangComp news={data} />;
}
