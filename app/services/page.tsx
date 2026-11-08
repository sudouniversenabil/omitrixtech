import Link from "next/link";

const services = [
  {
    title: "Full-Stack Software Development",
    description: "Web applications built from the first idea through launch.",
  },
  {
    title: "Custom Business Website",
    description: "Fast, responsive websites made for your business.",
  },
  {
    title: "Frontend Development",
    description: "React and Next.js interfaces for desktop and mobile.",
  },
  {
    title: "Backend Development",
    description: "Servers and databases built with Node.js, Express, MongoDB, or PostgreSQL.",
  },
  {
    title: "API Development & Integration",
    description: "REST APIs and payment, email, or third-party integrations.",
  },
  {
    title: "Deployment & Hosting",
    description: "Deployment to Vercel, VPS, or cloud, with domain and SSL setup.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-5 py-16 text-gray-900 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-orange-600">
            What We Do
          </p>
          <h1 className="mt-3 text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-500 sm:text-lg">
            Websites and software for your business.
          </p>
        </header>

        <section
          aria-label="Our services"
          className="flex flex-wrap justify-center gap-6"
        >
          {services.map(({ title, description }) => (
            <article
              key={title}
              className="w-full rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md hover:shadow-gray-200/70 md:w-[45%] lg:w-[30%]"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {title}
              </h2>
              <p className="mt-3 leading-6 text-gray-500">{description}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 flex flex-col items-center justify-center gap-5 text-center sm:mt-20">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Ready to start your project?
          </h2>
          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gray-900 px-7 font-medium text-white transition hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
          >
            Order Now
          </Link>
        </section>
      </div>
    </main>
  );
}
