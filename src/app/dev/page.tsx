"use client";
import DevPage from "@/components/DevPage";
import { useVocabularySearch } from "@/hooks/useVocabularySearch";
import {
  getVocabularies,
  addVocabulary,
  updateVocabulary,
  removeVocabulary,
} from "@/services/vocabularyService";
import type { JapaneseVocabulary } from "@/types";
import { useState, useEffect } from "react";

export default function DevPageContainer() {
  const { allVocabularies } = useVocabularySearch();
  const [vocabularies, setVocabularies] =
    useState<JapaneseVocabulary[]>(allVocabularies);

  // Sync vocabularies state with hook
  useEffect(() => {
    setVocabularies(allVocabularies);
  }, [allVocabularies]);

  // Handler
  const handleAdd = (vocab: JapaneseVocabulary) => {
    addVocabulary(vocab);
    setVocabularies([...getVocabularies()]); // hoặc [...vocabularies, vocab] nếu chắc chắn add ok
  };
  const handleUpdate = (index: number, vocab: JapaneseVocabulary) => {
    updateVocabulary(index, vocab);
    setVocabularies([...getVocabularies()]);
  };
  const handleRemove = (index: number) => {
    removeVocabulary(index);
    setVocabularies([...getVocabularies()]);
  };

  return (
    <DevPage
      vocabularies={vocabularies}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onRemove={handleRemove}
    />
  );
}
