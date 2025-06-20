// /app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f6f6ff",
        color: "#333",
      }}
    >
      <h1>404 - Không tìm thấy trang</h1>
      <p>Trang bạn yêu cầu không tồn tại hoặc đã bị xoá.</p>
      <Link href="/" style={{ marginTop: 16, color: "#007bff" }}>
        Về trang chủ
      </Link>
    </div>
  );
}
