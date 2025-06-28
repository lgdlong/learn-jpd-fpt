"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { KanjiEntity, KanjiLessonData } from "@/types/kanji";
import { getKanjiLesson } from "@/services/kanjiService";
import KanjiCard from "@/components/KanjiCard";
import KanjiDetailModal from "@/components/KanjiDetailModal";
import KanjiSidebar from "@/components/KanjiSidebar";
import "@/styles/kanji.css";

export default function LessonPage() {
  const params = useParams();
  const [currentLesson, setCurrentLesson] = useState<number>(6);
  const [kanjis, setKanjis] = useState<KanjiLessonData>([]);
  const [selectedKanji, setSelectedKanji] = useState<KanjiEntity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Get lesson from URL params
  useEffect(() => {
    if (params.lesson) {
      const lessonNumber = parseInt(params.lesson as string, 10);
      if (lessonNumber >= 4 && lessonNumber <= 7) {
        setCurrentLesson(lessonNumber);
      }
    }
  }, [params.lesson]);

  // Load kanji data when lesson changes
  useEffect(() => {
    async function loadKanjis() {
      try {
        setLoading(true);
        const data = await getKanjiLesson(currentLesson);
        setKanjis(data);
      } catch (error) {
        console.error(
          `Failed to load kanji lesson ${currentLesson} data:`,
          error
        );
        setKanjis([]);
      } finally {
        setLoading(false);
      }
    }

    loadKanjis();
  }, [currentLesson]);

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

  // Handle lesson change from sidebar
  const handleLessonChange = (lessonId: number) => {
    // Navigate to the lesson page
    window.location.href = `/kanji/${lessonId}`;
  };

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center min-vh-50">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Đang tải...</span>
            </div>
            <div className="mt-3">
              Đang tải dữ liệu Kanji bài {currentLesson}...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="kanji-layout">
        {/* Sidebar */}
        <KanjiSidebar
          currentLesson={currentLesson}
          onLessonClick={handleLessonChange}
        />

        {/* Main content */}
        <main className="kanji-main">
          {/* Lesson title */}
          <div className="mb-4">
            <h1 className="text-center">Kanji Bài {currentLesson}</h1>
          </div>

          {/* Kanji grid */}
          {kanjis.length > 0 ? (
            <div className="kanji-grid">
              {kanjis.map((kanji, index) => (
                <KanjiCard
                  key={index}
                  kanji={kanji}
                  onClick={handleKanjiClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <div className="text-muted">
                <i className="bi bi-search display-1 mb-3"></i>
                <h4>Không có dữ liệu Kanji cho bài {currentLesson}</h4>
                <p>Vui lòng chọn bài học khác.</p>
              </div>
            </div>
          )}
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
