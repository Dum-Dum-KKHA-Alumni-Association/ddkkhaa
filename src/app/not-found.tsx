import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold tracking-tight text-foreground">404</h1>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight">Page Not Found</h2>
      <p className="mt-2 max-w-md text-muted-foreground text-sm">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

