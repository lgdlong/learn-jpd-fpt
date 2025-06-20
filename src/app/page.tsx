// app/page.tsx
"use client";

import "@/styles/app.css";
import { useVocabularySearch } from "../hooks/useVocabularySearch";
import VocabularyList from "@/components/VocabularyList";
import SearchBox from "@/components/SearchBox";

export default function HomePage() {
  const {
    searchFilters,
    searchResults,
    isLoading,
    handleSearch,
    clearFilters,
  } = useVocabularySearch();

  return (
    <>
      <div className="search-container mb-4">
        <div className="card shadow-sm rounded-3 border">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="total-count mb-2 mb-md-0">
                  <span className="fw-bold">
                    <i className="bi bi-card-list me-1"></i> Total words:{" "}
                  </span>
                  <span className="badge bg-primary">
                    {searchResults.length}
                  </span>
                </div>
              </div>
              <div className="col-md-8">
                <SearchBox
                  searchFilters={searchFilters}
                  onSearch={handleSearch}
                  onClear={clearFilters}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <VocabularyList vocabularies={searchResults} isLoading={isLoading} />
    </>
  );
}
