"use client";

import { useState, useEffect } from "react";

interface KanjiLesson {
  id: number;
  title: string;
  isActive: boolean;
}

interface KanjiSidebarProps {
  currentLesson: number;
  onLessonClick?: (lessonId: number) => void;
}

export default function KanjiSidebar({
  currentLesson,
  onLessonClick,
}: KanjiSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Danh sách các bài học Kanji
  const lessons: KanjiLesson[] = [
    { id: 4, title: "Bài 4", isActive: currentLesson === 4 },
    { id: 5, title: "Bài 5", isActive: currentLesson === 5 },
    { id: 6, title: "Bài 6", isActive: currentLesson === 6 },
    { id: 7, title: "Bài 7", isActive: currentLesson === 7 },
  ];

  // Lock body scroll when overlay menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle lesson selection
  const handleLessonClick = (lessonId: number) => {
    if (onLessonClick) {
      onLessonClick(lessonId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* SIDEBAR FOR DESKTOP */}
      <aside className="kanji-sidebar d-none d-md-block">
        <h1 className="text-center mb-4">Kanji Lessons</h1>
        <nav>
          <ul className="kanji-nav">
            {lessons.map((lesson) => (
              <li key={lesson.id} className="kanji-nav-item">
                <button
                  type="button"
                  onClick={() => handleLessonClick(lesson.id)}
                  className={`kanji-nav-link w-100 text-start border-0 bg-transparent ${
                    lesson.isActive ? "active" : ""
                  }`}
                >
                  <div className="kanji-nav-lesson-title">{lesson.title}</div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* MOBILE TOGGLE BUTTON */}
      <div
        className="kanji-toggle d-md-none"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <span>MỤC LỤC</span>
        <i className="bi bi-list ms-2" />
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isMobileMenuOpen && (
        <div className="kanji-mobile-overlay">
          <div className="kanji-mobile-content">
            <div className="kanji-mobile-header">
              <span>Kanji Lessons</span>
              <button
                className="kanji-mobile-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Đóng danh sách bài học"
              >
                &times;
              </button>
            </div>
            <nav>
              <ul className="kanji-nav">
                {lessons.map((lesson) => (
                  <li key={lesson.id} className="kanji-nav-item">
                    <button
                      type="button"
                      onClick={() => handleLessonClick(lesson.id)}
                      className={`kanji-nav-link w-100 text-start border-0 bg-transparent ${
                        lesson.isActive ? "active" : ""
                      }`}
                    >
                      <div className="kanji-nav-lesson-title">
                        {lesson.title}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
