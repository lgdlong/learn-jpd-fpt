"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff6f6",
        color: "#bb2124",
      }}
    >
      <h1>Đã có lỗi xảy ra!</h1>
      <p>
        {error?.message || "Xin lỗi, hệ thống đã gặp sự cố không xác định."}
      </p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: 16,
          padding: "8px 20px",
          background: "#bb2124",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Thử lại
      </button>
      <Link href="/" style={{ marginTop: 16, color: "#555" }}>
        Về trang chủ
      </Link>
    </div>
  );
}
