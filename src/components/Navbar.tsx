import { Wrench, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md">
            <Wrench className="w-5 h-5" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-slate-900">
            FixNow
          </span>
        </div>

        {/* Action Button - Replaced phone number with CTA */}
        <div>
          <a
            href="#signup"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            Call Dispatch Now
          </a>
        </div>
      </div>
    </nav>
  );
}
