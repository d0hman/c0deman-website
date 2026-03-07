import type { App } from "@/lib/data";

export default function AppCard({ app }: { app: App }) {
  return (
    <div className="group rounded-xl border border-card-border bg-card-bg transition-all duration-300 hover:scale-[1.02] hover:border-accent/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.12)]">
      {/* Placeholder visual */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-t-xl bg-[#0e0e0e]">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <span className="relative z-10 font-mono text-3xl font-bold text-white/10 transition-colors group-hover:text-accent/20">
          {app.name}
        </span>
      </div>

      <div className="p-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-mono text-xl font-bold">{app.name}</h3>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              app.status === "live"
                ? "bg-accent/20 text-accent"
                : "bg-gray-700 text-gray-400"
            }`}
          >
            {app.status === "live" ? "Live" : "Coming Soon"}
          </span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-gray-400">
          {app.description}
        </p>
        <ul className="space-y-2">
          {app.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
