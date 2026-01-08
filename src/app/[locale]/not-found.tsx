import Link from "next/link";

/**
 * 404 Not Found Page
 * Displayed when a route doesn't exist under the current locale
 */
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}

