export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <p className="font-mono text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-accent">c0de</span>man. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
