// pages/_app.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
if (!GA_MEASUREMENT_ID) {
  throw new Error("NEXT_PUBLIC_GA_MEASUREMENT_ID is not defined");
}

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Thêm script Google Analytics vào head
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
    `;
    document.head.appendChild(script2);

    // Hàm track mỗi lần chuyển route
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
