import React, { useState, useEffect } from "react";
import useFetch from "../subComponents/myFetchHook";
import LangComp from "./LangComp";

export default function German() {
   const [data, setData] = useState();

   useEffect(() => {
      fetch(`https://react-d-news.herokuapp.com/lang/german`)
         .then((res) => res.json())
         .then((result) => {
            setData(result.articles);
         });
   }, []);
   return <LangComp news={data} />;
}
