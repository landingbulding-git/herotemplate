import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">
            VaultSecure
          </span>
        </div>

        {/* Stripped Navigation: Only CTA */}
        <div>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
          >
            Get Live Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
