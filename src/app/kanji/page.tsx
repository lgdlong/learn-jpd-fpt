"use client";

import React, { useState, useEffect } from "react";
import { KanjiEntity, KanjiLessonData } from "@/types/kanji";
import { getKanjiLesson6 } from "@/services/kanjiService";
import KanjiCard from "@/components/KanjiCard";
import KanjiDetailModal from "@/components/KanjiDetailModal";
import KanjiSidebar from "@/components/KanjiSidebar";
import "@/styles/kanji.css";

export default function KanjiPage() {
  const [kanjis, setKanjis] = useState<KanjiLessonData>([]);
  const [selectedKanji, setSelectedKanji] = useState<KanjiEntity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load kanji data on component mount
  useEffect(() => {
    async function loadKanjis() {
      try {
        setLoading(true);
        const data = await getKanjiLesson6();
        setKanjis(data);
      } catch (error) {
        console.error("Failed to load kanji data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadKanjis();
  }, []);

  // Handle kanji card click
  const handleKanjiClick = (kanji: KanjiEntity) => {
    setSelectedKanji(kanji);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedKanji(null);
  };

  // Handle lesson selection from sidebar
  const handleLessonClick = (lessonId: number) => {
    // TODO: Implement navigation to other lessons when available
    console.log(`Navigate to lesson ${lessonId}`);
  };

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center min-vh-50">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Đang tải...</span>
            </div>
            <div className="mt-3">Đang tải dữ liệu Kanji...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="kanji-layout">
        {/* Sidebar */}
        <KanjiSidebar currentLesson={6} onLessonClick={handleLessonClick} />

        {/* Main content */}
        <main className="kanji-main">
          {/* Kanji grid */}
          <div className="kanji-grid">
            {kanjis.map((kanji, index) => (
              <KanjiCard key={index} kanji={kanji} onClick={handleKanjiClick} />
            ))}
          </div>
        </main>
      </div>

      {/* Detail Modal */}
      <KanjiDetailModal
        kanji={selectedKanji}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
