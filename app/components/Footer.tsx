export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center text-sm text-white/50 font-sans">
        © {new Date().getFullYear()} Alfred Du
      </div>
    </footer>
  );
}
