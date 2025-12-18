import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import axios from 'axios';

function Dashboard() {
    const [newsData, setNewsData] = useState([]);
    
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const generalResponse = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d075182b25e64c5dbc996b9d284543cf"
      );
      setNewsData(generalResponse.data.articles);
// https://newsapi.org/v2/top-headlines?country=us&apiKey=d075182b25e64c5dbc996b9d284543cf
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

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