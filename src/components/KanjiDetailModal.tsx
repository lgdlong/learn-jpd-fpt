"use client";

import { useEffect } from "react";
import { KanjiEntity } from "@/types/kanji";

interface KanjiDetailModalProps {
  kanji: KanjiEntity | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function KanjiDetailModal({
  kanji,
  isOpen,
  onClose,
}: KanjiDetailModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!kanji || !isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Modal Backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      {/* Modal */}
      <div
        className="modal fade show d-block kanji-detail-modal"
        tabIndex={-1}
        aria-labelledby="kanjiDetailModalLabel"
        aria-hidden="false"
        onClick={handleBackdropClick}
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="kanjiDetailModalLabel">
                Chi tiết Kanji: {kanji.kanji}
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {/* Kanji chính và thông tin cơ bản */}
              <div className="kanji-detail-info">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center">
                    <div className="kanji-detail-main">{kanji.kanji}</div>
                  </div>
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label className="form-label fw-bold text-muted">
                        Hiragana:
                      </label>
                      <div className="kanji-detail-hiragana">
                        {kanji.hiragana}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold text-muted">
                        Romaji:
                      </label>
                      <div className="kanji-detail-romaji">{kanji.romaji}</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold text-muted">
                        Nghĩa tiếng Việt:
                      </label>
                      <div className="kanji-detail-vietnamese">
                        {kanji.vietnamese}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Danh sách từ ghép */}
              <div className="kanji-words-section">
                <h4 className="mb-4">
                  <i className="bi bi-collection me-2"></i>
                  Từ ghép và ví dụ ({kanji.words.length} từ)
                </h4>

                {kanji.words.map((word, index) => (
                  <div key={index} className="kanji-word-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-2">
                          <span className="kanji-word-main">{word.word}</span>
                        </div>
                        <div className="mb-1">
                          <small className="text-muted">Hiragana:</small>
                          <div className="kanji-word-hiragana">
                            {word.hiragana}
                          </div>
                        </div>
                        <div className="mb-1">
                          <small className="text-muted">Romaji:</small>
                          <div className="kanji-word-romaji">{word.romaji}</div>
                        </div>
                        <div className="mb-3">
                          <small className="text-muted">Nghĩa:</small>
                          <div className="kanji-word-vietnamese">
                            {word.vietnamese}
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="kanji-example-section">
                          <h6 className="mb-3">
                            <i className="bi bi-chat-quote me-1"></i>
                            Ví dụ:
                          </h6>
                          <div className="kanji-example-jp">
                            {word.example.jp}
                          </div>
                          <div className="kanji-example-hiragana">
                            {word.example.hiragana}
                          </div>
                          <div className="kanji-example-romaji">
                            {word.example.romaji}
                          </div>
                          <div className="kanji-example-vietnamese">
                            <i className="bi bi-translate me-1"></i>
                            {word.example.vn}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                <i className="bi bi-x-circle me-1"></i>
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
