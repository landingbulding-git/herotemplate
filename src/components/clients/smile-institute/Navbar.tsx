import { Phone, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Bar (Contact Info) - Hidden on smallest mobile screens for tightness */}
        <div className="hidden lg:flex justify-between items-center pb-2 mb-2 border-b border-gray-100 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> Páciens bejelentkezés: +36 20 932 8426
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> 1044 Budapest, Megyeri út 53. 1.em.
            </span>
          </div>
          <div className="flex items-center gap-4">
             <a href="#login" className="hover:text-[#154a52] transition-colors">Bejelentkezés / Regisztráció</a>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
             <img 
               src="https://smileinstitute.hu/wp-content/uploads/2023/05/SI-logo_v1-full-wh.webp" 
               alt="Smile Institute Logo" 
               className="h-10 sm:h-12 w-auto invert opacity-90" // Simple hack to make white logo visible on white bg for demo purposes
             />
          </div>

          {/* Navigation Links (Stripped down based on CRO rules, keeping only essential if any) */}
          <div className="hidden md:flex items-center space-x-8">
             <a href="#szolgaltatasok" className="text-sm font-semibold text-slate-700 hover:text-[#154a52] uppercase tracking-wide">Szolgáltatásaink</a>
             <a href="#arak" className="text-sm font-semibold text-slate-700 hover:text-[#154a52] uppercase tracking-wide">Árak</a>
             <a href="#kapcsolat" className="text-sm font-semibold text-slate-700 hover:text-[#154a52] uppercase tracking-wide">Kapcsolat</a>
          </div>

          {/* CTA */}
          <div>
            <a
              href="#kalkulator"
              className="inline-flex items-center justify-center rounded-sm bg-[#154a52] px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#0f363c] transition-all uppercase tracking-wide"
            >
              Konzultáció
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
