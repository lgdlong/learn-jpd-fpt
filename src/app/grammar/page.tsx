// src/app/grammar/page.tsx
"use client";

import GrammarContent from "@/components/GrammarContent";
import GrammarSidebar from "@/components/GrammarSidebar";
import "@/styles/grammar.css";
export default function GrammarPage() {
  return (
    <div className="grammar-layout">
      <GrammarSidebar />
      <main className="grammar-main">
        <GrammarContent />
      </main>
    </div>
  );
}
