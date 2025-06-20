import { useState, useEffect } from "react";
import type { JapaneseVocabulary, SearchFilters, SearchType } from "../types";
import {
  getVocabularies,
  exportVocabulariesAsJSON,
  fixDataStructure,
} from "../services/vocabularyService";

export const useVocabularySearch = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    query: "",
    searchType: "romaji",
  });

  const [searchResults, setSearchResults] = useState<JapaneseVocabulary[]>([]);
  const [allVocabularies, setAllVocabularies] = useState<JapaneseVocabulary[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false); // Load all vocabularies on first render
  useEffect(() => {
    const vocabularies = getVocabularies();
    setAllVocabularies(vocabularies);
    setSearchResults(vocabularies);
  }, []);

  // Update search results whenever filters change
  useEffect(() => {
    setIsLoading(true);

    // Slight delay for better UX when typing
    const timeoutId = setTimeout(() => {
      // Perform search locally since the service no longer has searchVocabulary
      const { query, searchType } = searchFilters;
      let results = getVocabularies();

      if (query.trim()) {
        results = results.filter((vocab) => {
          switch (searchType) {
            case "romaji":
              return vocab.romaji.toLowerCase().includes(query.toLowerCase());
            case "vietnamese":
              return vocab.vietnamese
                .toLowerCase()
                .includes(query.toLowerCase());
            case "hiragana":
              return vocab.hiragana.includes(query.trim());
            default:
              return false;
          }
        });
      }

      setSearchResults(results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchFilters]);

  const handleSearch = (newFilters: Partial<SearchFilters>) => {
    setSearchFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const setSearchType = (type: SearchType) => {
    setSearchFilters((prev) => ({ ...prev, searchType: type }));
  };

  const clearFilters = () => {
    setSearchFilters({ query: "", searchType: "romaji" });
  };
  // Export vocabularies
  const exportVocabularies = () => {
    exportVocabulariesAsJSON();
  };
  // Fix data structure without losing data
  const handleFixDataStructure = () => {
    // Fix the data structure
    fixDataStructure();

    // Refresh the view with the fixed data
    const updatedVocabularies = getVocabularies();
    setAllVocabularies([...updatedVocabularies]);
    setSearchResults([...updatedVocabularies]);
  };
  return {
    searchFilters,
    searchResults,
    allVocabularies,
    isLoading,
    handleSearch,
    setSearchType,
    clearFilters,
    exportVocabularies,
    handleFixDataStructure,
  };
};
