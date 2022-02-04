import React from "react";
import useFetch from "../subComponents/myFetchHook";
import LangComp from "./LangComp";

export default function Italian() {
   const { data, isLoading } = useFetch(
      "https://react-d-news.herokuapp.com/lang/italian"
   );
   return <LangComp news={data} />;
}
