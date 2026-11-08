import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({
  title,
  description,
  badge,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-muted/30 py-12 md:py-16">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-2 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronRight className="size-3.5" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {crumb.title}
                    </Link>
                  ) : (
                    <span className="font-medium text-foreground">
                      {crumb.title}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {badge && (
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            {badge}
          </span>
        )}

        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-3 max-w-3xl text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
