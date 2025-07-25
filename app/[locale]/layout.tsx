import "../globals.scss";
import NavbarWrapper from "@/components/navbar/navbarWrapper";
import FooterWrapper from "@/components/footer/footerWrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Gajraj_One, Bebas_Neue } from "next/font/google";
import { locales, Locale } from "@/lib/i18n";
import { generateDefaultMetadata } from "@/lib/generateMetadata";

// Importation des polices avec variables CSS personnalisées
const gajrajOne = Gajraj_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gajraj",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return generateDefaultMetadata(params.locale);
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale}>
      <body className={`layout ${gajrajOne.variable} ${bebasNeue.variable}`}>
        <NavbarWrapper />
        <main className="content">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
