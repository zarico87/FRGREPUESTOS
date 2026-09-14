import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

function ThemeProvider() {
  const [dark, setDark] = useState(() => localStorage.getItem("frg-theme") === "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("frg-theme", dark ? "dark" : "light");
  }, [dark]);

  return <App dark={dark} onToggleTheme={() => setDark((value) => !value)} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider />
    </BrowserRouter>
  </React.StrictMode>
);