import React from "react";

export function LangSwitcher({ lang, setLang }) {
  const other = lang === "en" ? "ar" : "en";
  return (
    <button
      onClick={() => setLang(other)}
      className="px-4 py-2 bg-black text-white rounded-md"
    >
      Switch to {other.toUpperCase()}
    </button>
  );
}
