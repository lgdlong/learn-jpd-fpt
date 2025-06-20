export interface JapaneseVocabulary {
  id?: string;
  kanji: string;
  hiragana: string;
  romaji: string;
  vietnamese: string;
  dateAdded?: string;
}

export interface SearchFilters {
  query: string;
  searchType: "romaji" | "vietnamese" | "hiragana";
}

export type SearchType = "romaji" | "vietnamese" | "hiragana";
