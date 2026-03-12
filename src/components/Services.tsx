import { services } from "@/lib/data";
import FadeIn from "./FadeIn";

const icons: Record<string, React.ReactNode> = {
  code: (
    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
  store: (
    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
    </svg>
  ),
  strategy: (
    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-14">
      <FadeIn>
        <h2 className="mb-4 text-center font-mono text-3xl font-bold md:text-4xl">
          <span className="text-accent">Services</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-400">
          End-to-end Shopify development, from custom apps to store optimization.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <FadeIn key={service.title} delay={i * 100}>
            <div className="h-full rounded-xl border border-card-border bg-card-bg p-8 transition-all duration-300 hover:scale-[1.02] hover:border-accent/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.12)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                {icons[service.icon]}
              </div>
              <h3 className="mb-3 font-mono text-lg font-bold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
