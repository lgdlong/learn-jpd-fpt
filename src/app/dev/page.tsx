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
  // Chặn truy cập nếu không phải admin
  const isAdmin = false; // Đổi true để truy cập, false để block

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

  if (!isAdmin) {
    // Chặn, chuyển hướng về trang chủ (client-side)
    router.replace("/");
    return <h1>Bạn không có quyền truy cập trang này.</h1>;
  }

  return (
    <DevPage
      vocabularies={vocabularies}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onRemove={handleRemove}
    />
  );
}
