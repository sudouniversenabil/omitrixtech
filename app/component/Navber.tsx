"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { fiverr_url } from "@/lib/config";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/#contact" },

] as const;

export default function Navber() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-stone-50/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-6xl flex-col items-start gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      >
        <Link href="/" className="text-lg font-bold text-gray-900">
          <span>Omtrix</span>
          <span className="text-orange-600">Tech</span>
        </Link>

        <ul className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 sm:w-auto sm:gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                href={to}
                aria-current={isActive(to) ? "page" : undefined}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  isActive(to)
                    ? "text-orange-700"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center rounded-lg bg-gray-900 px-4 text-sm font-medium text-white transition hover:bg-gray-700"
              href={fiverr_url}
            >
              Hire on Fiverr
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}