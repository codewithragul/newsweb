  import { CalendarDays, ExternalLink } from "lucide-react";
  import React from "react";
  import "./DarkMode.css";


  function NewsCard({ news }) {
    const {
      title,
      description,
      source,
      urlToImage,
      publishedAt,
      url
    } = news;

    return (
      <>
      
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm mt-5 w-90 ml-30">
        <div className="relative">
          <img
            src={
                    urlToImage ||
              "https://via.placeholder.com/400x200?text=No+Image+Available"
            }
            alt={title}
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {source?.name || "Unknown Source"}
          </span>
        </div>

        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description || "No description available for this article."}
          </p>

          <div className="flex items-center text-gray-500 text-sm mb-4">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>
              {new Date(publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Read Full Article
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
  </>

    );
  }

  export default NewsCard;
