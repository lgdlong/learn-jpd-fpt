"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-7GPK06F5P5", { page_path: pathname });
    }
  }, [pathname]);

  return null;
}
