"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 sticky-top w-100">
      <div className="container-fluid justify-content-between">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <i className="bi bi-book me-2"></i>
          Japanese Vocabulary
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav flex-column align-items-center">
            <li className="nav-item d-lg-none">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/grammar" ? "active" : ""
                }`}
                href="/grammar"
              >
                Grammar
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/dev" ? "active" : ""}`}
                href="/dev"
              >
                <i className="bi bi-gear me-1"></i>
                Dev Page
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
