// /app/not-found.tsx
import Link from "next/link";
import "@/styles/not-found.css"; // Import your custom styles for the not-found page

export default function NotFound() {
  return (
    <div id="not-found-page" className="text-center my-5">
      <h1>404 - Không tìm thấy trang</h1>
      <p>Trang bạn yêu cầu không tồn tại hoặc đã bị xoá.</p>
      <Link href="/" style={{ marginTop: 16, color: "#007bff" }}>
        Về trang chủ
      </Link>
    </div>
  );
}
