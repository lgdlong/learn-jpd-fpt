import { KanjiLessonData } from "@/types/kanji";

export async function getKanjiLesson(
  lessonNumber: number
): Promise<KanjiLessonData> {
  try {
    // Import the JSON data statically based on lesson number
    const kanjiData = await import(`@/data/kanji/${lessonNumber}.json`);
    return kanjiData.default as KanjiLessonData;
  } catch (error) {
    console.error(`Error loading kanji lesson ${lessonNumber} data:`, error);
    return [];
  }
}

// Keep backward compatibility
export async function getKanjiLesson6(): Promise<KanjiLessonData> {
  return getKanjiLesson(6);
}

export function searchKanji(
  kanjis: KanjiLessonData,
  searchTerm: string
): KanjiLessonData {
  if (!searchTerm.trim()) {
    return kanjis;
  }

  const term = searchTerm.toLowerCase().trim();

  return kanjis.filter(
    (kanji) =>
      kanji.kanji.includes(term) ||
      kanji.hiragana.toLowerCase().includes(term) ||
      kanji.romaji.toLowerCase().includes(term) ||
      kanji.vietnamese.toLowerCase().includes(term) ||
      kanji.words.some(
        (word) =>
          word.word.includes(term) ||
          word.hiragana.toLowerCase().includes(term) ||
          word.romaji.toLowerCase().includes(term) ||
          word.vietnamese.toLowerCase().includes(term)
      )
  );
}
