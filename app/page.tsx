import Link from "next/link";
import { contact } from "@/lib/config";

const contactLinks = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "Instagram",
    value: `@${contact.instagram}`,
    href: `https://instagram.com/${contact.instagram}`,
  },
  {
    label: "WhatsApp",
    value: contact.whatsapp,
    href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "").replace(/^0/, "880")}`,
  },
];

const technologies = [
  "Next.js",
  "React",
  "Python",
  "Node.js",
  "Express",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
];

export default function Home() {
  return (
    <main className="flex-1 bg-stone-50 text-gray-900">
      <section>
        <div className="mx-auto flex min-h-[480px] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8 lg:min-h-[560px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-orange-600">
              Omitrix Tech
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Websites and software for your business.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
              We build business websites and custom software, from the first
              conversation through launch.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gray-900 px-6 font-medium text-white transition hover:bg-gray-700"
              >
                Get in touch
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 px-6 font-medium text-gray-800 transition hover:border-gray-400 hover:bg-white"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Technologies we use"
        className="overflow-hidden border-y border-gray-200 bg-white py-5"
      >
        <div className="mx-auto mb-4 max-w-6xl px-5 text-xs font-medium uppercase tracking-[0.16em] text-gray-400 sm:px-8">
          Technologies we use
        </div>
        <div className="technology-marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0 items-center"
            >
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="flex items-center whitespace-nowrap px-6 text-lg font-medium text-gray-500 sm:px-10 sm:text-xl"
                >
                  {technology}
                  <span
                    aria-hidden="true"
                    className="ml-12 size-1.5 rounded-full bg-orange-400 sm:ml-20"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-orange-600">
              About Omitrix Tech
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A small team helping businesses get online.
            </h2>
          </div>
          <p className="text-base leading-7 text-gray-500">
            We make websites and software to fit your needs. Tell us what
            you&apos;re working on, and we&apos;ll help you plan the next step.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="mb-9 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-orange-600">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 leading-7 text-gray-500">
              Contact us by email, Instagram, or WhatsApp.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {contactLinks.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:border-orange-300 hover:shadow-sm"
              >
                <span className="text-sm text-gray-500">{label}</span>
                <span className="mt-2 block break-all font-medium text-gray-900 group-hover:text-orange-700">
                  {value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
