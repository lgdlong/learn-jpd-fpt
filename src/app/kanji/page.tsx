"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function KanjiPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to lesson 4 by default
    router.replace("/kanji/4");
  }, [router]);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center min-vh-50">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Đang chuyển hướng...</span>
          </div>
          <div className="mt-3">Đang chuyển hướng đến bài 4...</div>
        </div>
      </div>
    </div>
  );
}
