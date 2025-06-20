import originalVocabularies from "../data/vocabularies.json";
import type { JapaneseVocabulary } from "../types";

// Get vocabularies from localStorage or fallback
const getStoredVocabularies = (): JapaneseVocabulary[] => {
  if (typeof window === "undefined") return [...originalVocabularies]; // SSR safe

  const storedData = localStorage.getItem("vocabularies");
  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (e) {
      console.error("Failed to parse stored vocabularies:", e);
    }
  }
  return [...originalVocabularies];
};

// Get all vocabularies
export const getVocabularies = (): JapaneseVocabulary[] => {
  return getStoredVocabularies();
};

// Add vocabulary
export const addVocabulary = (vocabulary: JapaneseVocabulary): void => {
  const vocabs = getStoredVocabularies();
  const updated = [...vocabs, vocabulary];
  localStorage.setItem("vocabularies", JSON.stringify(updated));
};

// Update vocabulary
export const updateVocabulary = (
  index: number,
  vocabulary: JapaneseVocabulary
): void => {
  const vocabs = getStoredVocabularies();
  vocabs[index] = vocabulary;
  localStorage.setItem("vocabularies", JSON.stringify(vocabs));
};

// Remove vocabulary
export const removeVocabulary = (index: number): void => {
  const vocabs = getStoredVocabularies();
  const updated = vocabs.filter((_, i) => i !== index);
  localStorage.setItem("vocabularies", JSON.stringify(updated));
};

// Export vocabularies as JSON file
export const exportVocabulariesAsJSON = (): void => {
  const vocabs = getStoredVocabularies();
  const dataStr = JSON.stringify(vocabs, null, 2);
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  const exportFileDefaultName = "vocabularies.json";

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
};

// Fix data structure
export const fixDataStructure = (): void => {
  const vocabs = getStoredVocabularies();
  const fixedVocabs = vocabs.map((vocab) => ({
    kanji: vocab.kanji || "",
    hiragana: vocab.hiragana || "",
    romaji: vocab.romaji || "",
    vietnamese: vocab.vietnamese || "",
  }));

  localStorage.setItem("vocabularies", JSON.stringify(fixedVocabs));
};
