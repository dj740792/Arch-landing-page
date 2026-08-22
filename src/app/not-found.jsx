import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="space-y-6 max-w-md">
        <p className="text-sm font-semibold tracking-widest uppercase opacity-60">
          404 — Error
        </p>
        
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Page not found
        </h1>
        
        <p className="text-base md:text-lg opacity-70 leading-relaxed">
          The space or project you are looking for doesn't exist or has been moved.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-[#361e13] text-[#f8eee9] font-medium text-sm lg:text-base tracking-wide transition-colors hover:bg-[#25140d]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}