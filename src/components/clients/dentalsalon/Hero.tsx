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
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-pink-100 to-pink-50/50 blur-3xl opacity-70"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-100 to-cyan-50 blur-3xl opacity-50"></div>
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

            {/* The Formulaic Headline (H1): End Result + Time Period + Emotional Payoff */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              100%-os plakkmentesség és selymesen csillogó fogak <span className="text-pink-600 block sm:inline">mindössze 45 perc alatt</span> – nyerd vissza mosolyod magabiztosságát garantáltan fájdalom nélkül!
            </h1>

            {/* The Strategy Sub-headline (H2): Pain + Mechanism */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Elég volt a kellemetlen, karcoló és fájdalmas hagyományos fogkőeltávolításból? A svájci <span className="font-bold text-slate-900">Guided Biofilm Therapy® (GBT)</span> az Airflow Max technológiával érintésmentesen és kíméletesen tisztítja meg fogaidat, implantátumaidat vagy fogszabályzód.
            </p>

            {/* Trust Stack Part 2: Expert Quote */}
            <div className="hidden lg:block pt-8 mt-4 border-t border-slate-200">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 shrink-0 overflow-hidden border-2 border-white shadow-sm">
                    {/* Placeholder for Knapek Éva avatar */}
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
            
            {/* Infographic Style Overlays (Z-pattern guidance) */}
            <div className="absolute -left-10 top-12 z-20 hidden md:flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-lg ring-1 ring-slate-100 animate-[bounce_4s_ease-in-out_infinite]">
               <Flag className="w-4 h-4 text-red-600" fill="currentColor" />
               <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Eredeti svájci technológia</span>
            </div>

            <div className="absolute -right-6 top-1/3 z-20 hidden md:flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-lg ring-1 ring-slate-100 animate-[bounce_5s_ease-in-out_infinite]">
               <Heart className="w-4 h-4 text-pink-500" fill="currentColor" />
               <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Érintésmentes kényelem</span>
            </div>

            {/* Form Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-pink-900/10 ring-1 ring-slate-100 overflow-hidden flex flex-col z-10" id="booking">
              
              {/* Macro Image "Before & After" Concept Header */}
              <div className="h-40 relative bg-slate-900 overflow-hidden border-b-4 border-pink-500">
                 {/* Split image effect simulation using unsplash */}
                 <div className="absolute inset-0 flex">
                   <div className="w-1/2 h-full relative">
                      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Fogtisztítás közben" className="w-full h-full object-cover opacity-60 grayscale" />
                      <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-bold tracking-widest uppercase">Előtte</div>
                   </div>
                   <div className="w-[2px] h-full bg-pink-500 z-10"></div>
                   <div className="w-1/2 h-full relative">
                      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Tökéletes mosoly" className="w-full h-full object-cover brightness-110 contrast-125" />
                      <div className="absolute bottom-2 right-2 bg-pink-600 px-2 py-0.5 rounded text-[10px] text-white font-bold tracking-widest uppercase shadow-md">Utána</div>
                   </div>
                 </div>
                 {/* Infographic Badge 3 inside image */}
                 <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#154a52]" />
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
                       className="block w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm font-medium transition-colors"
                     />
                   </div>
                   <div>
                     <label htmlFor="email" className="sr-only">Email cím</label>
                     <input
                       type="email"
                       id="email"
                       required
                       placeholder="Email cím"
                       className="block w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm font-medium transition-colors"
                     />
                   </div>
                   <div>
                     <label htmlFor="phone" className="sr-only">Telefonszám</label>
                     <input
                       type="tel"
                       id="phone"
                       required
                       placeholder="Telefonszám"
                       className="block w-full px-4 py-3.5 border border-slate-200 rounded-xl bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm font-medium transition-colors"
                     />
                   </div>

                   <button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-pink-600/20 text-[15px] font-black text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all hover:-translate-y-0.5 mt-2"
                   >
                     {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                     ) : (
                        <>KÉREM A FÁJDALOMMENTES KEZELÉST! <ArrowRight className="w-5 h-5" /></>
                     )}
                   </button>
                </form>

                {/* The FUD Test (Reassurance Badges) */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Nincs rejtett költség</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>100% kíméletességi garancia</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Gyors visszahívás 24 órán belül</span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Mobile Trust Stack (visible only on small screens) */}
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
