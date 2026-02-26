import { useState } from "react";
import { Star, CheckCircle2, ArrowRight, ShieldCheck, Heart, Flag } from "lucide-react";

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Időpontfoglalás elküldve!");
    }, 800);
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center bg-[linear-gradient(135deg,_#efc0b6_0%,_#ffffff_40%,_#ffffff_100%)] overflow-hidden selection:bg-[#efc0b6]/30">
      
      {/* Additional subtle decor blob */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-[#efc0b6]/30 blur-[120px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 sm:pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Copy & Trust Stack */}
          <div className="lg:col-span-7 flex flex-col space-y-4 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            
            {/* Social Badge at the top */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1 animate-fade-in">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                4.9/5 <span className="text-slate-500 font-medium tracking-normal">csillagos értékelés több mint 500+ páciensünk alapján.</span>
              </p>
            </div>

            {/* Headline - "Lowered" visually but kept tight for ATF */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.15]">
              Tüntesd el a makacs nikotin- és kávéfoltokat maradéktalanul <span className="text-[#efc0b6] drop-shadow-sm brightness-75">mindössze 45 perc alatt</span>, és nézz tükörbe újra azzal a büszkeséggel!
            </h1>

            {/* Sub-headline - Compact for fold tightness */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Fél a hagyományos fogkőleszedéssel járó karcoló érzéstől? Egyetlen kíméletes kezeléssel, <span className="font-bold text-slate-900">dörzsölés és zománckárosítás nélkül</span> adjuk vissza fogai természetes fehérségét.
            </p>

            {/* Trust Stack: Expert Quote - Compact version */}
            <div className="hidden lg:flex items-start gap-3 pt-5 mt-2 border-t border-slate-300/40">
               <div className="w-10 h-10 rounded-full bg-white shrink-0 overflow-hidden ring-2 ring-white shadow-sm">
                 <img src="https://i.pravatar.cc/150?img=32" alt="Knapek Éva" className="w-full h-full object-cover" />
               </div>
               <div>
                 <p className="text-xs sm:text-sm text-slate-800 font-semibold italic">
                   „Létezik fájdalommentes fogtisztítás... Ezért ajánlom Henit!”
                 </p>
                 <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mt-1">Knapek Éva <span className="text-slate-500 font-normal ml-1">szakpszichológus</span></p>
               </div>
            </div>
          </div>

          {/* Right Side: High-Intent Lead Capture Form (Template 2 Style) */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto relative lg:mt-0">
            
            {/* Infographic Badges */}
            <div className="absolute -left-6 top-8 z-20 hidden md:flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-xl ring-1 ring-slate-100 animate-[bounce_4s_ease-in-out_infinite]">
               <Flag className="w-3.5 h-3.5 text-red-600" fill="currentColor" />
               <span className="text-[9px] font-bold text-slate-800 uppercase tracking-widest">Svájci GBT technológia</span>
            </div>

            {/* Form Container - Height optimized for ATF */}
            <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-[#efc0b6]/50 ring-1 ring-white/50 overflow-hidden flex flex-col z-10" id="booking">
              
              {/* Macro Image Concept - Scaled down for fold tightness */}
              <div className="h-32 relative bg-slate-900 overflow-hidden border-b-[3px] border-[#6fbaba]">
                 <div className="absolute inset-0 flex">
                   <div className="w-1/2 h-full relative">
                      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Előtte" className="w-full h-full object-cover opacity-50 grayscale" />
                      <div className="absolute bottom-1.5 left-2 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded text-[8px] text-white font-black uppercase tracking-widest">Előtte</div>
                   </div>
                   <div className="w-[1.5px] h-full bg-[#6fbaba] z-10"></div>
                   <div className="w-1/2 h-full relative">
                      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Utána" className="w-full h-full object-cover brightness-110 contrast-125" />
                      <div className="absolute bottom-1.5 right-2 bg-[#6fbaba] px-1.5 py-0.5 rounded text-[8px] text-white font-black uppercase tracking-widest shadow-md">Utána</div>
                   </div>
                 </div>
              </div>

              {/* Form Body - Tighter padding */}
              <div className="px-6 py-6 sm:px-8 sm:py-7 bg-white">
                <div className="text-center mb-5">
                   <h3 className="text-[17px] font-black text-slate-900 leading-tight tracking-tight uppercase">Időpontfoglalás most</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                   <input type="text" required placeholder="Név" className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6fbaba] text-sm font-medium transition-all" />
                   <input type="email" required placeholder="Email cím" className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6fbaba] text-sm font-medium transition-all" />
                   <input type="tel" required placeholder="Telefonszám" className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6fbaba] text-sm font-medium transition-all" />

                   <button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl shadow-xl shadow-[#6fbaba]/30 text-[14px] font-black text-white bg-[#6fbaba] hover:bg-[#5da9a9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6fbaba] transition-all hover:-translate-y-0.5 active:scale-95 uppercase tracking-wide mt-2"
                   >
                     {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                     ) : (
                        <>Kérem a fájdalommentes kezelést! <ArrowRight className="w-4 h-4" /></>
                     )}
                   </button>
                </form>

                {/* Highlighted Guarantees - More prominent */}
                <div className="mt-5 flex flex-col gap-2 bg-[#6fbaba]/5 p-3 rounded-xl border border-[#6fbaba]/20">
                  {[
                    "Nincs rejtett költség",
                    "100% kíméletességi garancia",
                    "Gyors visszahívás 24 órán belül"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[11px] sm:text-[12px] text-slate-800 font-bold uppercase tracking-tight">
                      <CheckCircle2 className="w-4 h-4 text-[#6fbaba]" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
