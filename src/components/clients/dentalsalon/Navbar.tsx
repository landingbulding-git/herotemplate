import { Phone, MapPin, AlignRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/theme_dental_salon/img/logo_v2.webp" 
            alt="Dental Salon Logo" 
            className="h-10 sm:h-12 w-auto"
            onError={(e) => {
              // Fallback if local asset isn't available in dev
              e.currentTarget.src = "https://dentalsalon.hu/theme_dental_salon/img/logo_v2.webp";
            }}
          />
        </div>

        {/* Stripped Navigation (CRO Rule: Visual Economy) */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#arak" className="text-sm font-semibold text-slate-700 hover:text-pink-600 uppercase tracking-wide transition-colors">Árak</a>
          <a href="#kapcsolat" className="text-sm font-semibold text-slate-700 hover:text-pink-600 uppercase tracking-wide transition-colors">Kapcsolat</a>
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right mr-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Időpontfoglalás</p>
            <a href="tel:+36307588344" className="text-sm font-black text-slate-900 hover:text-pink-600 transition-colors">
              +36 30 75 88 344
            </a>
          </div>

          {/* Mobile Hamburger (To hide links and reduce cognitive load) */}
          <button className="md:hidden p-2 text-slate-600 hover:text-pink-600 transition-colors">
            <AlignRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
