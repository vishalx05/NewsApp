import React, { useEffect, useRef, useState } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Navbar = ({ className }) => {
  const { fetchNews, setNews } = useNewsContext();
  const [headline, setHeadline] = useState([]);
  const debounceRef = useRef(null);

  /* 🔍 Debounced Search */
  const searchNews = (e) => {
    const value = e.target.value.trim();

    clearTimeout(debounceRef.current);

    if (!value) return;

    debounceRef.current = setTimeout(async () => {
      const data = await fetchNews(`/everything?q=${value}`);
      setNews(data?.articles || []);
    }, 700);
  };

  /* 📰 Fetch top headlines for drawer */
  useEffect(() => {
    (async () => {
      const data = await fetchNews(`top-headlines?country=us`);
      setHeadline(data?.articles || []);
    })();
  }, []);

  return (
    <div className={`bg-gray-900 sticky top-0 z-50 ${className}`}>
      <Wrapper>
        <div className="navbar px-0 text-white">
          {/* Logo */}
          <div className="flex-1">
            <h1 className="text-xl font-bold tracking-wide cursor-pointer">
              LKM News
            </h1>
          </div>

          {/* Search + Drawer */}
          <div className="flex gap-2 items-center">
            <input
              type="text"
              onChange={searchNews}
              placeholder="Search news..."
              className="input input-bordered input-sm md:input-md text-black w-36 md:w-64"
            />

            <label
              htmlFor="news-drawer"
              className="btn btn-ghost btn-circle text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1"
                />
              </svg>
            </label>
          </div>
        </div>
      </Wrapper>

      {/* Drawer */}
      <div className="drawer drawer-end">
        <input id="news-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label htmlFor="news-drawer" className="drawer-overlay"></label>

          <ul className="menu bg-base-200 w-80 min-h-full p-4 space-y-1">
            <h2 className="font-bold text-lg mb-2">Top Headlines</h2>

            {headline.map((item, idx) => (
              <li
                key={idx}
                className="border-b border-gray-300"
                onClick={() => {
                  window.open(item.url, "_blank", "noopener,noreferrer");
                  document.getElementById("news-drawer").checked = false;
                }}
              >
                <a className="text-sm line-clamp-2">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
