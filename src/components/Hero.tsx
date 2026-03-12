export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            animation: "grid-move 8s linear infinite",
          }}
        />
      </div>

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.12)_0%,_transparent_60%)]" />

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <h1 className="relative z-10 max-w-4xl font-mono text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
        We Build{" "}
        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Shopify Apps
        </span>
      </h1>
      <p className="relative z-10 mt-6 max-w-2xl text-xl leading-relaxed text-gray-400 md:text-2xl">
        Custom applications that solve real problems for Shopify merchants.
        From inventory management to product assembly, we ship apps that work.
      </p>
      <div className="relative z-10 mt-8 flex gap-5">
        <a
          href="#apps"
          className="rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-black transition-all hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
        >
          View Our Apps
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
