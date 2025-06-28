"use client";

import { KanjiEntity } from "@/types/kanji";

interface KanjiCardProps {
  kanji: KanjiEntity;
  onClick: (kanji: KanjiEntity) => void;
}

export default function KanjiCard({ kanji, onClick }: KanjiCardProps) {
  return (
    <div
      className="card h-100 kanji-card shadow-sm"
      role="button"
      tabIndex={0}
      onClick={() => onClick(kanji)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(kanji);
        }
      }}
    >
      <div className="card-body d-flex flex-column align-items-center text-center p-4">
        {/* Kanji chính */}
        <div className="kanji-main mb-3">{kanji.kanji}</div>

        {/* Hiragana */}
        <div className="kanji-hiragana mb-2">{kanji.hiragana}</div>

        {/* Romaji */}
        <div className="kanji-romaji mb-2">{kanji.romaji}</div>

        {/* Nghĩa tiếng Việt */}
        <div className="kanji-vietnamese">{kanji.vietnamese}</div>
      </div>

      {/* Hover effect indicator */}
      <div className="card-footer bg-transparent border-0 text-center kanji-card-footer">
        <i className="bi bi-hand-index me-1"></i>
        Click để xem chi tiết
      </div>
    </div>
  );
}
