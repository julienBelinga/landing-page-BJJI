"use client";

import { useTranslation } from "@/lib/useTranslation";
import Navbar from "./navbar";

export default function NavbarWrapper() {
  const { t, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <nav className="navbar_navbar__SBC9f">
        <div>Chargement...</div>
      </nav>
    );
  }

  const translations = {
    title: t("navbar.title"),
    download: t("navbar.download"),
  };

  return <Navbar translations={translations} />;
}
