import { useState } from "react";
import { Star, CheckCircle2, ShieldCheck, Calculator, ArrowRight, Micropscope, Activity } from "lucide-react";

export default function Hero() {
  const [formStep, setFormStep] = useState(1);

  return (
    <section className="relative min-h-[90vh] pt-8 pb-16 lg:pt-20 lg:pb-24 flex items-center bg-[#f9fafb] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#154a52]/10 to-transparent blur-3xl opacity-60"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side: Copy & Trust Stack */}
          <div className="lg:col-span-7 flex flex-col space-y-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            
            {/* Social Proof Stacking (The "Two-Form" Rule) - Part 1: Ratings */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-800">
                4.9/5 <span className="text-slate-500 font-normal">csillagos értékelés több mint 250 elégedett pácienstől</span>
              </p>
            </div>

            {/* The Formulaic Headline (H1): End Result + Time Period + Emotional Payoff */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Tökéletes rágófunkció és természetes mosoly <span className="text-[#154a52]">akár 8 hét alatt</span>, hogy újra önfeledten, takargatás nélkül nevethessen.
            </h1>

            {/* The Strategy Sub-headline (H2): Pain vs. Solution */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Eleged van a foghiány okozta bizonytalanságból vagy a „művi” hatású pótlásoktól? A <span className="font-bold text-slate-900">Smile Institute</span> digitálisan navigált implantológiája és mikroszkópos precizitása garantálja a fájdalommentes gyógyulást és az archoz illeszkedő, élethű eredményt.
            </p>

            {/* Social Proof - Part 2: Quote Snippet & Logos */}
            <div className="pt-6 mt-4 border-t border-slate-200">
               <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Quote */}
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-slate-700 font-medium italic border-l-2 border-[#154a52] pl-4 text-left">
                      "Végre merek mosolyogni a fotókon is, és minden falat ételt élvezek."
                      <span className="block mt-2 text-xs font-bold not-italic text-slate-500">— Judit (38)</span>
                    </p>
                  </div>
                  
                  {/* Accreditation */}
                  <div className="flex flex-col gap-2 items-center sm:items-end text-right">
                     <div className="flex items-center gap-2">
                       <ShieldCheck className="w-5 h-5 text-[#154a52]" />
                       <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Hivatalos Provider</span>
                     </div>
                     <p className="text-xs text-slate-500 font-medium max-w-[200px]">
                        Invisalign® és a MedCity Egészségközpont kiemelt partnere.
                     </p>
                  </div>
               </div>
            </div>

          </div>

          {/* Right Side: Visuals (Infographic) + Lead Capture Form */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto relative lg:mt-0" id="kalkulator">
            
            {/* The Infographic Visual Overlays (Positioned behind/around the form area to create depth) */}
            <div className="absolute -top-12 -right-4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-20 animate-[bounce_4s_ease-in-out_infinite]">
              <div className="bg-[#154a52]/10 p-2 rounded-lg text-[#154a52]">
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">CBCT Diagnosztika</p>
                <p className="text-xs font-bold text-slate-900">Precíz 3D tervezés</p>
              </div>
            </div>

            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-20">
              <div className="bg-[#154a52]/10 p-2 rounded-lg text-[#154a52]">
                <span className="text-lg font-bold">25x</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Mikroszkópos technológia</p>
                <p className="text-xs font-bold text-slate-900">A fogmegmentésért</p>
              </div>
            </div>

            {/* Primary Background Image inside the form card container */}
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-[#154a52]/10 ring-1 ring-slate-200 overflow-hidden z-10 flex flex-col">
              
              {/* Top Image Area */}
              <div className="h-48 relative overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Boldog, magabiztos páciens mosolya" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-5">
                   <div className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-bold">Fájdalommentes kezelés modern érzéstelenítéssel</span>
                   </div>
                </div>
              </div>

              {/* Form Body (High-Intent Lead Capture) */}
              <div className="p-6 sm:p-8 bg-white">
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center justify-center gap-2">
                    <Calculator className="w-5 h-5 text-[#154a52]" />
                    Implantátum Árkalkulátor
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">Ingyenes konzultáció igénylése.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setFormStep(2); }}>
                  
                  {/* Progressive Disclosure Step 1 */}
                  <div className={`transition-all duration-300 ${formStep === 1 ? 'block' : 'hidden'}`}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Milyen problémára keres megoldást?
                        </label>
                        <select className="block w-full px-4 py-3 text-sm border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#154a52] rounded-xl transition-colors">
                          <option>Egy fog pótlása</option>
                          <option>Több fog pótlása</option>
                          <option>Teljes fogsor pótlása (All-on-4)</option>
                          <option>Még nem tudom pontosan</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-md text-sm sm:text-base font-bold text-white bg-[#154a52] hover:bg-[#0f363c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#154a52] transition-all hover:-translate-y-0.5 mt-2"
                      >
                        KÉREM A SZEMÉLYRE SZABOTT KALKULÁCIÓT <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Progressive Disclosure Step 2 (Mockup) */}
                  <div className={`transition-all duration-300 ${formStep === 2 ? 'block' : 'hidden'}`}>
                     <div className="space-y-4">
                        <input type="text" placeholder="Név" className="block w-full px-4 py-3 text-sm border border-slate-200 bg-slate-50 rounded-xl" required />
                        <input type="email" placeholder="Email cím" className="block w-full px-4 py-3 text-sm border border-slate-200 bg-slate-50 rounded-xl" required />
                        <input type="tel" placeholder="Telefonszám" className="block w-full px-4 py-3 text-sm border border-slate-200 bg-slate-50 rounded-xl" required />
                        <button type="button" onClick={() => alert("Kalkuláció elküldve!")} className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-[#154a52] hover:bg-[#0f363c] transition-all">
                          Eredmény Küldése
                        </button>
                     </div>
                  </div>

                </form>

                {/* FUD Reducers (Under Button) */}
                <div className="mt-6 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>100% transzparens árazás</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Nincs rejtett költség</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Fájdalommentes garancia</span>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
