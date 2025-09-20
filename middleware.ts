import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { locales, defaultLocale } from "./i18n/locales"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // If path already has a locale, continue
  const hasLocale = locales.some((l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`)
  if (hasLocale) return

  // Read preferred locale from cookie
  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value
  const locale = locales.includes(cookieLocale as any) ? (cookieLocale as any) : defaultLocale

  // Redirect /... to /{locale}/...
  const url = req.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Run on all paths except Next internals and assets
    "/((?!_next|.*\\..*).*)"
  ],
}
