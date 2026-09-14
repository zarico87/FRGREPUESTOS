import { useEffect } from "react";

export default function Seo({ title, description, path = "" }) {
  useEffect(() => {
    document.title = `${title} | FRGREPUESTOS`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `${window.location.origin}${path}`);
  }, [title, description, path]);

  return null;
}