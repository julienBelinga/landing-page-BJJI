"use client";

import { useTranslation } from "@/lib/useTranslation";
import Footer from "./footer";

export default function FooterWrapper() {
  const { t, isLoading } = useTranslation();

  if (isLoading) {
    return (
      <footer className="footer_footer__3kcQj">
        <div>{t("common.loading")}</div>
      </footer>
    );
  }

  const translations = {
    title: t("footer.title"),
    description: t("footer.description"),
    download: t("footer.download"),
    ios: t("footer.ios"),
    android: t("footer.android"),
    legal: t("footer.legal"),
    privacyPolicy: t("footer.privacyPolicy"),
    termsOfService: t("footer.termsOfService"),
    refundPolicy: t("footer.refundPolicy"),
    deleteData: t("footer.deleteData"),
    support: t("footer.support"),
  };

  return <Footer translations={translations} />;
}
