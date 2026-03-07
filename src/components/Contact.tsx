import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl p-px">
          {/* Animated gradient border */}
          <div
            className="absolute inset-0 rounded-2xl opacity-60"
            style={{
              background:
                "linear-gradient(135deg, #f97316 0%, transparent 40%, transparent 60%, #f97316 100%)",
              backgroundSize: "200% 200%",
              animation: "gradient-sweep 6s ease-in-out infinite",
            }}
          />
          <div className="relative rounded-2xl bg-card-bg px-8 py-12 text-center md:px-16">
            <h2 className="mb-5 font-mono text-3xl font-bold md:text-4xl">
              Let&apos;s <span className="text-accent">Work Together</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-gray-400">
              Have an idea for a Shopify app or need help with your store? Reach
              out and let&apos;s build something great.
            </p>
            <ContactForm />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
