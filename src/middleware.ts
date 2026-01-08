import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (e.g. images, fonts, etc.)
  // - Next.js internals
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

