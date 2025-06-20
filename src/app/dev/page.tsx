"use client";

import { useState, useEffect, useCallback } from "react";
import Kuroshiro from "kuroshiro";
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
import type { JapaneseVocabulary } from "../../types";

interface DevPageProps {
  vocabularies: JapaneseVocabulary[];
  onAdd: (vocabulary: JapaneseVocabulary) => void;
  onUpdate: (index: number, vocabulary: JapaneseVocabulary) => void;
  onRemove: (index: number) => void;
}

export default function DevPage({
  vocabularies = [],
  onAdd,
  onUpdate,
  onRemove,
}: DevPageProps) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<JapaneseVocabulary>({
    kanji: "",
    hiragana: "",
    romaji: "",
    vietnamese: "",
  });
  const [kuroshiro, setKuroshiro] = useState<Kuroshiro | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);

  // Initialize Kuroshiro
  useEffect(() => {
    const initializeKuroshiro = async () => {
      try {
        setIsInitializing(true);
        const kuroshiroInstance = new Kuroshiro();
        await kuroshiroInstance.init(
          new KuromojiAnalyzer("/dict") // dict phải đặt trong /public/dict
        );
        setKuroshiro(kuroshiroInstance);
      } catch (error) {
        console.error("Failed to initialize Kuroshiro:", error);
      } finally {
        setIsInitializing(false);
      }
    };

    initializeKuroshiro();

    return () => {
      setKuroshiro(null);
    };
  }, []);

  // Convert with Kuroshiro
  const convertWithKuroshiro = useCallback(
    async (text: string, to: "hiragana" | "romaji") => {
      if (!kuroshiro) return text;
      try {
        return await kuroshiro.convert(text, { to });
      } catch (error) {
        console.error(`Conversion to ${to} failed:`, error);
        return text;
      }
    },
    [kuroshiro]
  );

  // Handle form input
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (!kuroshiro || !value) return;

    if (name === "hiragana" && updated.romaji === "") {
      const romaji = await convertWithKuroshiro(value, "romaji");
      setFormData((prev) => ({ ...prev, romaji }));
    } else if (name === "romaji" && updated.hiragana === "") {
      const hiragana = await convertWithKuroshiro(value, "hiragana");
      setFormData((prev) => ({ ...prev, hiragana }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      onUpdate(editIndex, formData);
      setEditIndex(null);
    } else {
      onAdd(formData);
    }
    setFormData({ kanji: "", hiragana: "", romaji: "", vietnamese: "" });
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setFormData(vocabularies[index]);
  };

  const handleCancel = () => {
    setEditIndex(null);
    setFormData({ kanji: "", hiragana: "", romaji: "", vietnamese: "" });
  };

  return (
    <div className="vocabulary-table-container">
      {isInitializing && (
        <div className="alert alert-info mb-3">
          <i className="bi bi-info-circle me-2"></i>
          Đang khởi tạo công cụ xử lý tiếng Nhật...
        </div>
      )}

      <h2 className="mb-4">
        <i
          className={`bi ${
            editIndex !== null ? "bi-pencil-square" : "bi-plus-square"
          } me-2`}
        ></i>
        {editIndex !== null ? "Edit" : "Add"} Vocabulary
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mb-5 p-4 shadow-sm rounded bg-white"
      >
        <div className="row g-3">
          {["kanji", "hiragana", "romaji", "vietnamese"].map((field) => (
            <div className="col-md-6" key={field}>
              <label htmlFor={field} className="form-label text-capitalize">
                {field}
              </label>
              <input
                type="text"
                className="form-control"
                id={field}
                name={field}
                value={formData[field as keyof JapaneseVocabulary]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}
          <div className="col-12 d-flex gap-2 justify-content-end">
            {editIndex !== null && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleCancel}
              >
                <i className="bi bi-x-circle me-1"></i> Cancel
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              <i
                className={`bi ${
                  editIndex !== null ? "bi-save" : "bi-plus-circle"
                } me-1`}
              ></i>
              {editIndex !== null ? "Update" : "Add"} Vocabulary
            </button>
          </div>
        </div>
      </form>

      <h2 className="mb-3">
        <i className="bi bi-list-ul me-2"></i> Vocabulary List
      </h2>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th>Kanji</th>
              <th>Hiragana</th>
              <th>Romaji</th>
              <th>Vietnamese</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vocabularies.map((vocab, index) => (
              <tr key={index}>
                <td>{vocab.kanji}</td>
                <td>{vocab.hiragana}</td>
                <td>{vocab.romaji}</td>
                <td>{vocab.vietnamese}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleEdit(index)}
                    >
                      <i className="bi bi-pencil me-1"></i> Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => onRemove(index)}
                    >
                      <i className="bi bi-trash me-1"></i> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
