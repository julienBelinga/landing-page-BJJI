import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Detect language from Accept-Language header
    const acceptLanguage = request.headers.get("accept-language");
    let detectedLocale = defaultLocale;

    if (acceptLanguage) {
      // Extract the primary language code
      const languages = acceptLanguage.split(",").map((lang) => {
        const [code] = lang.trim().split("-");
        return code;
      });

      // Find the first supported locale
      const supportedLocale = languages.find((lang) =>
        locales.includes(lang as any)
      );

      if (supportedLocale) {
        detectedLocale = supportedLocale as typeof defaultLocale;
      }
    }

    return NextResponse.redirect(
      new URL(
        `/${detectedLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, static files
  matcher: ["/((?!_next|api|favicon.ico|assets|locales).*)"],
};
