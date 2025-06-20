// GrammarExample: Một ví dụ cho ngữ pháp
export interface GrammarExample {
  jp: string; // Câu tiếng Nhật (có thể cả Kanji/hiragana)
  vn: string; // Dịch tiếng Việt
  romaji?: string; // Romaji (không bắt buộc)
  type?: string; // Loại ví dụ (khẳng định/phủ định/mẫu câu ứng dụng...)
}

// GrammarPoint: Một điểm ngữ pháp nhỏ trong bài
export interface GrammarPoint {
  id: string; // Định danh duy nhất cho mỗi điểm ngữ pháp
  title: string; // Tên điểm ngữ pháp (vd: Chia tính từ い và な)
  structure?: string[]; // Danh sách cấu trúc, có thể là các câu pattern
  notes?: string[]; // Lưu ý
  tags?: string[]; // Tag tìm kiếm, phân loại (optional)
  examples?: GrammarExample[];
}

// GrammarLesson: Một bài (bài 4, bài 5, ...)
export interface GrammarLesson {
  id: string; // Ví dụ: "bai4"
  title: string; // "Bài 4: Chia tính từ い và な"
  description?: string; // Mô tả bài học
  lastUpdate?: string; // ISO date string
  grammars: GrammarPoint[]; // Các điểm ngữ pháp chính của bài này
}

// Toàn bộ file JSON sẽ là một mảng các bài
export type GrammarLessonData = GrammarLesson[];
