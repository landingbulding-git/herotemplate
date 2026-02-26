import { Wrench } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md">
            <Wrench className="w-5 h-5" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-slate-900">
            FixNow
          </span>
        </div>

        {/* Call Now button - visible mainly on mobile or desktop right side */}
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-slate-500 mb-1">24/7 Emergency Service</p>
          <a
            href="tel:+15551234567"
            className="text-xl font-black text-indigo-700 hover:text-indigo-800 transition-colors"
          >
            (555) 123-4567
          </a>
        </div>
      </div>
    </nav>
  );
}
