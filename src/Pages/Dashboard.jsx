import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import axios from 'axios';

function Dashboard() {
 const [articles, setArticles] = useState([]);

  useEffect(() => {
  fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_9ee8459079484cac8aea5830aa4da14d&q=headlines"
)
    .then(res => res.json())
    .then(data => setArticles(data.results || []))
    .catch(err => console.error("Error fetching sports news:", err));
}, []);

  return (
    <>
      <div className="mt-10 ml-20 mb-10">
        <h1 className="text-4xl font-bold text-blue-600 ml-105 mt-20 text-8xl">Headlines News </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8 ml-20 mb-10 mt-25">
        {newsData.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
            <NewsCard news={item} />
          </div>
        ))}
      </div>

   
        </>
    )
}

export default Dashboard