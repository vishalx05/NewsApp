import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useNewsContext } from "../context/NewsContext";

const News = ({ className }) => {
  const { news, setNews, fetchNews, loading } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data?.articles || []);
    })();
  }, []);

  return (
    <Wrapper>
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
        📰 Latest News
      </h1>

      <div
        className={`grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        ${className}`}
      >
        {loading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <NewsSkeleton key={idx} />
            ))
          : news.map((item, idx) => (
              <NewsCard details={item} key={idx} />
            ))}
      </div>
    </Wrapper>
  );
};

const NewsCard = ({ details }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure className="relative">
        <img
          className="aspect-video w-full object-cover"
          src={
            details?.urlToImage ||
            "https://via.placeholder.com/400x200?text=No+Image"
          }
          alt={details?.title}
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-base line-clamp-2">
          {details?.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-3">
          {details?.description || "No description available."}
        </p>

        <div className="card-actions justify-end mt-3">
          <button
            onClick={() => window.open(details?.url, "_blank")}
            className="btn btn-sm btn-primary"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

/* Skeleton Loader Card */
const NewsSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="skeleton h-40 w-full"></div>
      <div className="card-body space-y-3">
        <div className="skeleton h-4 w-3/4"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-1/2"></div>
      </div>
    </div>
  );
};

export default News;
