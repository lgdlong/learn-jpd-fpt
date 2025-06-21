"use client";

import { useEffect, useState } from "react";

export default function GrammarSidebar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Observe all sections
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
      try {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      } catch (error) {
        // Fallback to instant scroll if smooth scrolling fails
        console.error(
          "Smooth scroll failed, falling back to instant scroll:",
          error
        );
        element.scrollIntoView();
        setActiveSection(id);
      }
      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Sidebar with table of contents */}
      <aside className="grammar-sidebar">
        <h1 className="text-center">JPD123</h1>
        <div className={`sidebar-content ${isMobileMenuOpen ? "open" : ""}`}>
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
        {/* Mobile menu toggle */}
        <div
          className="sidebar-toggle d-md-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>Mục lục</span>
          <i
            className={`fas ${
              isMobileMenuOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          >
            {isMobileMenuOpen ? "▲" : "▼"}
          </i>
        </div>
      </aside>
    </>
  );
}
