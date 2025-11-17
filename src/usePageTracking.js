import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("config", "G-V8B44TEN2V", {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location]);
}
