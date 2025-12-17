import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = ({ className }) => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const { setNews, fetchNews } = useNewsContext();
  const [active, setActive] = useState("general");
  const [loading, setLoading] = useState(false);

  const handleClick = async (category) => {
    setActive(category);
    setLoading(true);

    try {
      const data = await fetchNews(
        `/top-headlines?country=us&category=${category}`
      );
      setNews(data?.articles || []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <div
        className={`flex gap-3 px-4 py-3 overflow-x-auto scrollbar-hide justify-start md:justify-center ${className}`}
      >
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            disabled={loading && active === item}
            className={`btn btn-sm md:btn-md capitalize transition-all
              ${
                active === item
                  ? "btn-primary"
                  : "btn-outline btn-primary"
              }`}
          >
            {loading && active === item ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              item
            )}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export default Category;
