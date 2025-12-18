import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "./DarkMode.css";

function Home() {
  const [articles, setArticles] = useState([]);

  const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/top-headlines?lang=en&max=12&token=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error("Home news error:", err));
  }, [API_KEY]);

  return (
    <>
      <h1 className="text-8xl ml-35 font-bold text-blue-600 mt-30 mb-10 text-center">
        Headlines News
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

export default Home;
