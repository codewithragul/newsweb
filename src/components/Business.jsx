import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "./DarkMode.css";

function Business() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
            "https://newsapi.org/v2/everything?q=bitcoin&apiKey=d075182b25e64c5dbc996b9d284543cf"

    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []));
  }, []);

  return (
    <>
      <h1 className="text-8xl ml-35 font-bold text-blue-600 mt-30 mb-10 text-center">
        Business News
      </h1>

      <div className="flex flex-wrap justify-center gap-8 ml-30 px-10">
        {articles.map((news, index) => (
          <div key={index} className="w-[30%] min-w-[320px]">
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Business;

