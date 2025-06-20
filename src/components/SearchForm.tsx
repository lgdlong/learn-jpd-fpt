"use client";

import { useState } from "react";
import type { SearchFilters, SearchType } from "../types";

interface SearchFormProps {
  filters: SearchFilters;
  onSearch: (filters: Partial<SearchFilters>) => void;
  onClear: () => void;
}

export default function SearchForm({
  filters,
  onSearch,
  onClear,
}: SearchFormProps) {
  const [query, setQuery] = useState(filters.query || "");
  const [searchType, setSearchType] = useState<SearchType>(
    filters.searchType || "romaji"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      query,
      searchType,
    });
  };

  const handleSearchTypeChange = (type: SearchType) => {
    setSearchType(type);
  };

  const handleClear = () => {
    setQuery("");
    setSearchType("romaji");
    onClear();
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch({
      query: newQuery,
      searchType: searchType, // Ensure search type is preserved
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="search-query" className="form-label">
          Search Japanese Vocabulary
        </label>
        <input
          type="text"
          className="form-control"
          id="search-query"
          placeholder={`Search by ${searchType}...`}
          value={query}
          onChange={handleQueryChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label d-block border-0">Search Type</label>
        <div className="btn-group w-100" role="group">
          <input
            type="radio"
            className="btn-check"
            name="searchType"
            id="romaji"
            autoComplete="off"
            checked={searchType === "romaji"}
            onChange={() => handleSearchTypeChange("romaji")}
          />
          <label className="btn btn-outline-primary" htmlFor="romaji">
            Romaji
          </label>

          <input
            type="radio"
            className="btn-check"
            name="searchType"
            id="hiragana"
            autoComplete="off"
            checked={searchType === "hiragana"}
            onChange={() => handleSearchTypeChange("hiragana")}
          />
          <label className="btn btn-outline-primary" htmlFor="hiragana">
            Hiragana
          </label>

          <input
            type="radio"
            className="btn-check"
            name="searchType"
            id="vietnamese"
            autoComplete="off"
            checked={searchType === "vietnamese"}
            onChange={() => handleSearchTypeChange("vietnamese")}
          />
          <label className="btn btn-outline-primary" htmlFor="vietnamese">
            Vietnamese
          </label>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
