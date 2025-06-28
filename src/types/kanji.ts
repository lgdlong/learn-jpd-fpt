// KanjiExample: Một ví dụ minh họa cho từ hoặc từ ghép Kanji
export interface KanjiExample {
  jp: string; // Câu tiếng Nhật (Kanji/hiragana)
  hiragana: string; // Phiên âm Hiragana
  romaji: string; // Phiên âm Romaji
  vn: string; // Nghĩa tiếng Việt
}

// KanjiWord: Một từ ghép hoặc cụm từ liên quan đến Kanji
export interface KanjiWord {
  word: string; // Từ ghép
  hiragana: string; // Hiragana của từ ghép
  romaji: string; // Romaji của từ ghép
  vietnamese: string; // Nghĩa tiếng Việt của từ ghép
  example: KanjiExample; // Một ví dụ minh họa
}

// KanjiEntity: Một Kanji kèm thông tin và các từ ghép/ví dụ
export interface KanjiEntity {
  kanji: string; // Chữ Kanji
  hiragana: string; // Hiragana cơ bản
  romaji: string; // Romaji cơ bản
  vietnamese: string; // Nghĩa tiếng Việt
  words: KanjiWord[]; // Danh sách từ ghép và ví dụ
}

// Toàn bộ file JSON sẽ là một mảng KanjiEntity
export type KanjiLessonData = KanjiEntity[];
