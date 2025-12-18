import React, { useEffect, useState } from "react";
import { Bell, Settings, User } from "lucide-react";
import "./DarkMode.css";

function Header() {
   const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 h-20 w-full z-50 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrin-0 text-2xl font-bold text-blue-600">
            Explore News
          </div>

          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              Features
            </a>
            <a href="#" className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4 mt-20 ">
            <button className="text-gray-600 hover:text-blue-600">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <Settings className="w-5 h-5" />
            </button>
            <button className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700">
              <User className="w-5 h-5" />
            </button>
       
          </div>
        </div>
      </div>
             <div className="container">
      <button onClick={() => setDarkMode(!darkMode)}>
        🌙 | ☀️ 
      </button>
    </div>
    </header>
  
  );
}

export default Header;
