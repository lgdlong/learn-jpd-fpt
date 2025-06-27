"use client";

import { useState } from "react";
import type { SearchFilters, SearchType } from "../types";
import "@/styles/search-box.css";

interface SearchBoxProps {
  searchFilters?: SearchFilters;
  onSearch?: (filters: Partial<SearchFilters>) => void;
  onClear?: () => void;
}

export default function SearchBox({
  searchFilters = { query: "", searchType: "romaji" },
  onSearch,
  onClear,
}: SearchBoxProps) {
  const [query, setQuery] = useState(searchFilters.query || "");
  const [searchType, setSearchType] = useState<SearchType>(
    searchFilters.searchType || "romaji"
  );

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (onSearch) onSearch({ query: newQuery });
  };

  const handleSearchTypeChange = (type: SearchType) => {
    setSearchType(type);
    if (onSearch) onSearch({ searchType: type });
  };

  const handleClear = () => {
    setQuery("");
    setSearchType("romaji");
    if (onClear) onClear();
  };

  return (
    <div className="input-group search-box w-100">
      <div className="input-group-text bg-white border-0">
        <i className="bi bi-search"></i>
      </div>
      <input
        type="text"
        className="form-control border-0"
        placeholder={`Tìm kiếm bằng ${searchType}...`}
        value={query}
        onChange={handleQueryChange}
      />
      <button
        id="search-type-btn"
        className="btn dropdown-toggle border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {searchType}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleSearchTypeChange("romaji")}
          >
            Romaji
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleSearchTypeChange("hiragana")}
          >
            Hiragana
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleSearchTypeChange("vietnamese")}
          >
            Vietnamese
          </button>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="dropdown-item" onClick={handleClear}>
            Clear
          </button>
        </li>
      </ul>
    </div>
  );
}
