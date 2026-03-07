export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-accent">c0de</span>man. All rights reserved.
        </p>
        <a
          href="mailto:hello@c0deman.com"
          className="text-sm text-gray-500 transition-colors hover:text-accent"
        >
          hello@c0deman.com
        </a>
      </div>
    </footer>
  );
}
