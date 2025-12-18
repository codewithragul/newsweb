import React, { useState, useEffect } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("business");

  const API_KEY = "pub_9ee8459079484cac8aea5830aa4da14d";

  const fetchNews = async (selectedCategory) => {
    try {
      const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${selectedCategory}`;
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.results || []);
      setCategory(selectedCategory);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
        {category.toUpperCase()} NEWS
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        {["business", "world", "headlines", "entertainment", "sports"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => fetchNews(cat)}
              className={`px-4 py-2 rounded-lg text-white ${
                category === cat ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-600"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((news, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-xl border border-gray-200"
          >
            <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
            <p className="text-gray-600 mb-2">{news.description}</p>
            {news.link && (
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read More →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
