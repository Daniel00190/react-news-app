import React, { useState, useEffect } from "react";
import ComPage from "./comPage";

export default function Business() {
   const [data, setData] = useState();

   useEffect(() => {
      fetch(`/topics/business`)
         .then((res) => res.json())
         .then((result) => {
            setData(result.articles);
         });
   }, []);

   return <ComPage news={data} />;
}
