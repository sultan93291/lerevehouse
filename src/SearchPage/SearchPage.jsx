import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useGlobalSearchQuery } from "@/Redux/features/api/apiSlice";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debug multiple renders (temporary)
  useEffect(() => {
    console.log("SearchPage rendered");
  }, []);

  // Debounce search term to reduce API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Fetch data using RTK Query only when debouncedSearchTerm is non-empty
  const { data, error, isLoading } = useGlobalSearchQuery(debouncedSearchTerm, {
    skip: !debouncedSearchTerm,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  // Update filtered results when data changes
  useEffect(() => {
    if (data?.success) {
      const results = data.data.data;
      const filtered = results.filter(
        item =>
          item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          item.title
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          item.type.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredResults(filtered);
    } else if (!debouncedSearchTerm) {
      setFilteredResults([]);
    }
  }, [data, debouncedSearchTerm]);

  // Handle search input change
  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  // Clear search input
  const clearSearch = () => {
    setSearchTerm("");
  };

  const imgBaseurl = import.meta.env.VITE_SERVER_URL;

  return (
    <div className="container my-12 xl:my-48 mx-auto px-4 sm:px-6 lg:px-8  min-h-screen box-border search-page-container">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-editorsNoteNormal font-bold mb-6 text-center text-primary">
        Search Results
      </h1>

      {/* Search Input - Single, Prominent with Search Icon and Clear Button */}
      <div className="mb-8 sticky top-0">
        <div className="relative max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name, title, or type..."
            className="w-full p-3 sm:p-4 pl-10 sm:pl-12 pr-10 sm:pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base bg-gray-50 shadow-md transition-all duration-300 font-interTight"
          />
          <svg
            className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Loading State with Spinner */}
      {isLoading && (
        <div className="flex justify-center items-center py-10 sm:py-12">
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {error && (
        <p className="text-center text-destructive font-medium text-base sm:text-lg animate-pulse py-10 sm:py-12 font-interTight">
          Error fetching results: {error.message}. Try another search.
        </p>
      )}

      {/* Results List - Search Engine Style */}
      <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        {filteredResults.length > 0
          ? filteredResults.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200 overflow-hidden rounded-md"
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <img
                    src={`${imgBaseurl}/${item.image}`}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md border border-gray-200"
                    onError={e => {
                      e.target.src = "https://via.placeholder.com/80";
                    }}
                  />
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <a
                      href={item.redirect_link.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 hover:underline font-editorsNoteNormal truncate"
                    >
                      {item.name}
                    </a>
                    <span className="text-xs text-gray-500 uppercase font-medium font-inter bg-gray-100 px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-green-700 truncate font-interTight mb-1">
                    {item.redirect_link}
                  </p>
                  <p
                    className="text-xs sm:text-sm text-text-gray line-clamp-2 font-interTight leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        item.title.slice(0, 150) + "..."
                      ),
                    }}
                  />
                </div>
              </div>
            ))
          : !isLoading && (
              <p className="text-center text-text-gray font-medium text-base sm:text-lg animate-fade-in py-10 sm:py-12 font-interTight">
                {debouncedSearchTerm
                  ? "No results found. Try another search."
                  : "Enter a search term to see results."}
              </p>
            )}
      </div>

      {/* Inline CSS for Animations and Style Isolation */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .search-page-container
          input:not(.search-page-container input[type="text"]) {
          display: none !important;
        }
        .search-page-container
          [class*="search"]:not(.search-page-container input[type="text"]) {
          display: none !important;
        }
        .search-page-container .react-tabs__tab-list,
        .search-page-container .react-tabs__tab {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default SearchPage;
