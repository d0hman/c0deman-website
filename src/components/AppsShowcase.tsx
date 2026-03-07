import { apps } from "@/lib/data";
import AppCard from "./AppCard";
import FadeIn from "./FadeIn";

export default function AppsShowcase() {
  return (
    <section id="apps" className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn>
        <h2 className="mb-4 text-center font-mono text-3xl font-bold md:text-4xl">
          Our <span className="text-accent">Apps</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-400">
          Shopify apps built to streamline your operations and help you scale.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {apps.map((app, i) => (
          <FadeIn key={app.slug} delay={i * 150}>
            <AppCard app={app} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
