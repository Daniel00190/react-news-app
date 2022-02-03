import React from "react";
import HeadlineWithImg from "../subComponents/HeadlineWithImg";
import useFetch from "../subComponents/myFetchHook";
import LinearDeterminate from "../subComponents/LinearDeterminate";

function RigthSection() {
   const url = "home/tech";
   const { data, isLoading, hasError, errorMessage, updateUrl } = useFetch(url);

   return (
      <div className="right-section-news ">
         {data ? (
            data
               .filter((art) => !!art.urlToImage && !!art.title && !!art.url)
               .slice(0, 6)
               .map((article) => (
                  <HeadlineWithImg
                     imgurl={article.urlToImage}
                     headline={article.title}
                     url={article.url}
                  />
               ))
         ) : (
            <LinearDeterminate />
         )}
      </div>
   );
}

export default RigthSection;
