import { useState, useEffect } from "react";

const useFetch = (url) => {
   const [data, setData] = useState();

   useEffect(() => {
      const fetchData = () => {
         fetch(url)
            .then((res) => res.json())
            .then((result) => {
               setData(result.articles);
               console.log(result);
            });
      };
      fetchData();
   }, []);

   return { data };
};
export default useFetch;
