import { Zap, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 text-zinc-950 p-1.5 rounded-lg shadow-md shadow-emerald-500/20">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            ScaleForce
          </span>
        </div>

        {/* Sticky CTA - Keeps conversion trigger visible as user watches video */}
        <div>
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Book Call
          </a>
        </div>
      </div>
    </nav>
  );
}
