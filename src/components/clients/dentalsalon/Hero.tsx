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
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center bg-white overflow-hidden">
      {/* Background Decor - Updated to #efc0b6 and White gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#efc0b6]/40 via-white to-white -z-10"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[800px] h-[800px] rounded-full bg-[#efc0b6]/20 blur-3xl opacity-70"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Tightened Copy & Visuals */}
          <div className="lg:col-span-7 flex flex-col space-y-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            
            {/* Social Badge (Trust Stack Part 1) at the top */}
            <div className="flex items-center justify-center lg:justify-start gap-2 animate-fade-in">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-900">
                4.9/5 <span className="text-slate-500 font-normal">csillagos értékelés több mint 500+ páciensünk alapján.</span>
              </p>
            </div>

            {/* Updated Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Tüntesd el a makacs nikotin- és kávéfoltokat maradéktalanul <span className="text-[#efc0b6] brightness-75 block sm:inline">mindössze 45 perc alatt</span>, és nézz tükörbe újra azzal a büszkeséggel, amit egy ragyogóan fehér mosoly ad!
            </h1>

            {/* Updated Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Fél a hagyományos fogkőleszedéssel járó karcoló érzéstől és fogfehérítés miatt kialakult fogérzékenységtől? Egyetlen kíméletes kezeléssel, <span className="font-bold text-slate-900">dörzsölés és zománckárosítás nélkül</span> adjuk vissza fogai természetes, selymes fehérségét.
            </p>

            {/* Trust Stack Part 2: Expert Quote */}
            <div className="hidden lg:block pt-8 mt-4 border-t border-slate-200">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#efc0b6]/20 shrink-0 overflow-hidden border-2 border-white shadow-sm">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Knapek Éva" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 font-medium italic mb-2">
                      „Létezik fájdalommentes fogtisztítás... Ezért ajánlom Henit!”
                    </p>
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Knapek Éva
                      <span className="text-slate-500 font-normal normal-case block">szakpszichológus</span>
                    </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: High-Intent Lead Capture Form (Template 2 Style) & Infographics */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto relative lg:mt-0">
            
            {/* Infographic Style Overlays */}
            <div className="absolute -left-10 top-12 z-20 hidden md:flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-lg ring-1 ring-slate-100 animate-[bounce_4s_ease-in-out_infinite]">
               <Flag className="w-4 h-4 text-red-600" fill="currentColor" />
               <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Eredeti svájci technológia</span>
            </div>

            <div className="absolute -right-6 top-1/3 z-20 hidden md:flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-lg ring-1 ring-slate-100 animate-[bounce_5s_ease-in-out_infinite]">
               <Heart className="w-4 h-4 text-[#efc0b6]" fill="currentColor" />
               <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Érintésmentes kényelem</span>
            </div>

            {/* Form Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-[#efc0b6]/20 ring-1 ring-slate-100 overflow-hidden flex flex-col z-10" id="booking">
              
              {/* Macro Image "Before & After" Concept Header */}
              <div className="h-40 relative bg-slate-900 overflow-hidden border-b-4 border-[#6fbaba]">
                 <div className="absolute inset-0 flex">
                   <div className="w-1/2 h-full relative">
                      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Fogtisztítás közben" className="w-full h-full object-cover opacity-60 grayscale" />
                      <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-bold tracking-widest uppercase">Előtte</div>
                   </div>
                   <div className="w-[2px] h-full bg-[#6fbaba] z-10"></div>
                   <div className="w-1/2 h-full relative">
                      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Tökéletes mosoly" className="w-full h-full object-cover brightness-110 contrast-125" />
                      <div className="absolute bottom-2 right-2 bg-[#6fbaba] px-2 py-0.5 rounded text-[10px] text-white font-bold tracking-widest uppercase shadow-md">Utána</div>
                   </div>
                 </div>
                 <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#6fbaba]" />
                    <span className="text-[9px] font-bold text-slate-800 uppercase tracking-wider">Zománc- és implantátumvédelem</span>
                 </div>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8 bg-white">
                <div className="text-center mb-6">
                   <h3 className="text-lg font-black text-slate-900 leading-tight">Foglald le az időpontodat a legmodernebb tisztításra!</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                   <div>
                     <label htmlFor="name" className="sr-only">Név</label>
                     <input
                       type="text"
                       id="name"
                       required
                       placeholder="Név"
                       className="block w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6fbaba] text-sm font-medium transition-colors"
                     />
                   </div>
                   <div>
                     <label htmlFor="email" className="sr-only">Email cím</label>
                     <input
                       type="email"
                       id="email"
                       required
                       placeholder="Email cím"
                       className="block w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6fbaba] text-sm font-medium transition-colors"
                     />
                   </div>
                   <div>
                     <label htmlFor="phone" className="sr-only">Telefonszám</label>
                     <input
                       type="tel"
                       id="phone"
                       required
                       placeholder="Telefonszám"
                       className="block w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#6fbaba] text-sm font-medium transition-colors"
                     />
                   </div>

                   {/* Updated Button Color to #6fbaba */}
                   <button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-xl shadow-[#6fbaba]/30 text-[15px] font-black text-white bg-[#6fbaba] hover:bg-[#5da9a9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6fbaba] transition-all hover:-translate-y-0.5 mt-2 active:scale-95"
                   >
                     {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                     ) : (
                        <>KÉREM A FÁJDALOMMENTES KEZELÉST! <ArrowRight className="w-5 h-5" /></>
                     )}
                   </button>
                </form>

                {/* Highlighted Guarantees */}
                <div className="mt-8 p-4 bg-[#6fbaba]/5 rounded-2xl border border-[#6fbaba]/20 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[13px] text-slate-700 font-bold">
                    <div className="bg-green-500 rounded-full p-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span>Nincs rejtett költség</span>
                  </div>
                  <div className="flex items-center gap-3 text-[13px] text-slate-700 font-bold">
                    <div className="bg-green-500 rounded-full p-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span>100% kíméletességi garancia</span>
                  </div>
                  <div className="flex items-center gap-3 text-[13px] text-slate-700 font-bold">
                    <div className="bg-green-500 rounded-full p-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span>Gyors visszahívás 24 órán belül</span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Mobile Trust Stack */}
            <div className="lg:hidden pt-8 mt-4 text-center">
              <p className="text-sm text-slate-700 font-medium italic mb-2">
                „Létezik fájdalommentes fogtisztítás... Ezért ajánlom Henit!”
              </p>
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Knapek Éva - szakpszichológus
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
