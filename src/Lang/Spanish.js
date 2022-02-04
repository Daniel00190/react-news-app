import React from "react";
import useFetch from "../subComponents/myFetchHook";
import LangComp from "./LangComp";

function Spanish() {
   const { data, isLoading } = useFetch(
      "https://react-d-news.herokuapp.com/lang/spanish"
   );
   console.log(data);
   return <LangComp news={data} />;
}

export default Spanish;
