"use client";

import { useTranslation } from "react-i18next";
import { NavbarButton } from "@/components/ui/resizable-navbar";

export default function LanguageBtn({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "id";

  return (
    <NavbarButton
      as="button"
      variant="secondary"
      onClick={() => i18n.changeLanguage(lang === "id" ? "en" : "id")}
      aria-label="Toggle language"
      className={`border border-zinc-700 px-2.5 py-1.5 text-xs font-semibold ${className}`}
    >
      {lang.toUpperCase()}
    </NavbarButton>
  );
}