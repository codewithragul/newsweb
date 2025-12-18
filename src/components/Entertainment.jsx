import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import "./DarkMode.css";


function Entertainment() {
const [articles, setArticles] = useState([]);

  useEffect(() => {
  fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_9ee8459079484cac8aea5830aa4da14d&q=Entertainment"
)
    .then(res => res.json())
    .then(data => setArticles(data.results || []))
    .catch(err => console.error("Error fetching sports news:", err));
}, []);


  return (
    <>
      <h1 className="text-8xl ml-35 font-bold text-blue-600 mt-30 mb-10 text-center">
        Entertainment News
      </h1>

      <div className="flex flex-wrap justify-center gap-8 ml-30 px-10">
        {articles.map((news, index) => (
          <div key={index} className="w-[30%] min-w-[320px]">
            <NewsCard news={{
                 title: news.title,
               description: news.description,
                source: { name: news.source_id },
                urlToImage: news.image_url,
                publishedAt: news.pubDate,
                url: news.link,
              }} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Entertainment;