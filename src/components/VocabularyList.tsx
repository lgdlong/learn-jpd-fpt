"use client";

import type { JapaneseVocabulary } from "../types";

interface VocabularyListProps {
  vocabularies: JapaneseVocabulary[];
  isLoading: boolean;
}

export default function VocabularyList({
  vocabularies,
  isLoading,
}: VocabularyListProps) {
  if (isLoading) {
    return (
      <div className="vocabulary-table-container">
        <div className="d-flex justify-content-center align-items-center my-5 py-5">
          <div className="spinner-border text-primary me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span className="fs-5">Loading vocabulary...</span>
        </div>
      </div>
    );
  }
  if (vocabularies.length === 0) {
    return (
      <div className="vocabulary-table-container">
        <div className="alert alert-info text-center py-4" role="alert">
          <i className="bi bi-search me-2"></i>
          Không tìm thấy từ vựng phù hợp với tiêu chí tìm kiếm của bạn.
        </div>
      </div>
    );
  }
  return (
    <div className="vocabulary-table-container">
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover mb-0 w-100">
          <thead>
            <tr>
              <th>Kanji</th>
              <th>Hiragana</th>
              <th>Romaji</th>
              <th>Tiếng Việt</th>
            </tr>
          </thead>
          <tbody>
            {vocabularies.map((vocab, index) => (
              <tr key={index} className="vocab-row">
                <td className="kanji-text">{vocab.kanji}</td>
                <td className="hiragana-text">{vocab.hiragana}</td>
                <td>{vocab.romaji}</td>
                <td>{vocab.vietnamese}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// No helper functions needed for this simplified component
