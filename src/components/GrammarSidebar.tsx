"use client";

import { useEffect, useState } from "react";
import "@/styles/sidebar.css";

export default function GrammarSidebar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MOBILE_OFFSET = 120; // px, khoảng cách trên mobile
  const PC_OFFSET = 0; // px, không cần offset trên desktop
  const MOBILE_BREAKPOINT = 768; // px, breakpoint cho mobile

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

  // Intersection Observer to track visible sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Handle smooth scrolling for anchor links
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      const offset = isMobile ? MOBILE_OFFSET : PC_OFFSET;

      if (isMobile) {
        // Mobile: scroll with offset
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset + rect.top - offset;
        window.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      } else {
        // Desktop: normal scrollIntoView
        try {
          element.scrollIntoView({ behavior: "smooth" });
        } catch {
          element.scrollIntoView();
        }
      }
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* SIDEBAR FOR DESKTOP */}
      <aside className="grammar-sidebar d-none d-md-block">
        <h1 className="text-center">Ngữ pháp</h1>
        <div className="sidebar-content open">
          <nav>
            <ul className="sidebar-nav">
              <li className="sidebar-nav-item">
                <a
                  href="#bai4"
                  onClick={(e) => scrollToSection(e, "bai4")}
                  className={`sidebar-nav-link ${
                    activeSection === "bai4" ? "active" : ""
                  }`}
                >
                  Bài 4: Chia tính từ い và な
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a
                  href="#bai5"
                  onClick={(e) => scrollToSection(e, "bai5")}
                  className={`sidebar-nav-link ${
                    activeSection === "bai5" ? "active" : ""
                  }`}
                >
                  Bài 5: Mong muốn và Mục đích
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a
                  href="#bai6"
                  onClick={(e) => scrollToSection(e, "bai6")}
                  className={`sidebar-nav-link ${
                    activeSection === "bai6" ? "active" : ""
                  }`}
                >
                  Bài 6: So sánh
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a
                  href="#bai7"
                  onClick={(e) => scrollToSection(e, "bai7")}
                  className={`sidebar-nav-link ${
                    activeSection === "bai7" ? "active" : ""
                  }`}
                >
                  Bài 7: Động từ thể て
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* MOBILE TOGGLE BUTTON */}
      <div
        className="sidebar-toggle d-md-none"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <span>MỤC LỤC</span>
        <i className="bi bi-list ms-2" />
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isMobileMenuOpen && (
        <div className="sidebar-mobile-overlay">
          <div className="sidebar-mobile-content">
            <div className="sidebar-mobile-header">
              <span>Mục lục</span>
              <button
                className="sidebar-mobile-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Đóng mục lục"
              >
                &times;
              </button>
            </div>
            <nav>
              <ul className="sidebar-nav">
                <li className="sidebar-nav-item">
                  <a
                    href="#bai4"
                    onClick={(e) => {
                      scrollToSection(e, "bai4");
                    }}
                    className={`sidebar-nav-link ${
                      activeSection === "bai4" ? "active" : ""
                    }`}
                  >
                    Bài 4: Chia tính từ い và な
                  </a>
                </li>
                <li className="sidebar-nav-item">
                  <a
                    href="#bai5"
                    onClick={(e) => {
                      scrollToSection(e, "bai5");
                    }}
                    className={`sidebar-nav-link ${
                      activeSection === "bai5" ? "active" : ""
                    }`}
                  >
                    Bài 5: Mong muốn và Mục đích
                  </a>
                </li>
                <li className="sidebar-nav-item">
                  <a
                    href="#bai6"
                    onClick={(e) => {
                      scrollToSection(e, "bai6");
                    }}
                    className={`sidebar-nav-link ${
                      activeSection === "bai6" ? "active" : ""
                    }`}
                  >
                    Bài 6: So sánh
                  </a>
                </li>
                <li className="sidebar-nav-item">
                  <a
                    href="#bai7"
                    onClick={(e) => {
                      scrollToSection(e, "bai7");
                    }}
                    className={`sidebar-nav-link ${
                      activeSection === "bai7" ? "active" : ""
                    }`}
                  >
                    Bài 7: Động từ thể て
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
