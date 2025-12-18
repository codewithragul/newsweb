import React from "react";
import { Home, Globe, Bookmark, Settings, LogOut, Clapperboard, Dumbbell, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import "./DarkMode.css";

function AsideBar() {
    return (
        <aside className="h-screen w-64 bg-white shadow-lg fixed left-0 top-0 flex flex-col">
            <div className="h-16 flex items-center justify-center border-b border-gray-200">
                {/* <h1 className="text-2xl font-bold text-blue-600 mtracking-wide">
                    NewsX
                </h1> */}
            </div>

            <nav className="flex-1 p-4 space-y-2 mt-10">
                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
                >
                    <Home className="w-5 h-5" />
                    Home
                </Link>
                <Link
                    to="/world"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
                >
                    <Globe className="w-5 h-5" />
                    World
                </Link>
                <Link
                    to="/business"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
                >
                    <Briefcase className="w-5 h-5" />
                    Business
                </Link>

                <Link
                    to="/sports"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
                >
                    <Dumbbell className="w-5 h-5" />
                    Sports
                </Link>

                <Link
                    to="/entertainment"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
                >
                    <Clapperboard className="w-5 h-5" />
                    Entertainment
                </Link>

              
            </nav>

            <div className="border-t border-gray-200 p-4">
                <button className="flex items-center gap-3 text-gray-600 hover:text-red-600 font-medium w-full">
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
}

export default AsideBar;
