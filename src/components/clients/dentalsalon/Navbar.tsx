import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo - Fixed with absolute URL */}
        <div className="flex items-center">
          <img 
            src="https://dentalsalon.hu/theme_dental_salon/img/logo_v2.webp" 
            alt="Dental Salon Logo" 
            className="h-10 sm:h-12 w-auto"
          />
        </div>

        {/* Stripped Navigation: Only 1 CTA Button */}
        <div>
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6fbaba] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#6fbaba]/20 hover:bg-[#5da9a9] transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            Időpontfoglalás
          </a>
        </div>
      </div>
    </nav>
  );
}
