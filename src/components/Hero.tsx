import { PlayCircle, ShieldCheck, CheckCircle, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-zinc-950 pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden selection:bg-emerald-500/30">
      {/* Dark mode background for Authority feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-80"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* The Formulaic Headline (H1) & Strategy Sub-headline (H2) */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Scale Your Agency to $100k/mo <span className="text-emerald-400">in 90 Days</span> While Working Half The Hours.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Stuck trading time for money? Our <span className="text-zinc-200 font-semibold">Client Acquisition System</span> completely automates lead generation so you can focus on fulfillment.
          </p>
        </div>

        {/* The Authority VSL (Video Sales Letter) */}
        <div 
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-emerald-900/20 group cursor-pointer bg-zinc-900 aspect-video mb-10" 
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              {/* "After State" Thumbnail */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Happy agency owner looking at growing revenue" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-10 h-10 text-zinc-950 ml-1 fill-current" />
                </div>
                <p className="mt-4 text-white font-bold tracking-wide">CLICK TO PLAY FREE TRAINING</p>
                <p className="text-zinc-400 text-sm mt-1">(12 Mins)</p>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center text-zinc-500">
               {/* Placeholder for actual iframe */}
               <p>Video Player Iframe Goes Here</p>
            </div>
          )}
        </div>

        {/* Action Area (CTA + FUD) */}
        <div className="max-w-2xl mx-auto flex flex-col items-center space-y-4" id="apply">
          <a
            href="#apply-form"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 rounded-full bg-emerald-500 px-10 py-5 text-xl font-black text-zinc-950 shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-all hover:-translate-y-1"
          >
            Apply For Your Growth Session
            <ArrowRight className="w-6 h-6" />
          </a>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-zinc-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>100% Free Strategy Call</span>
            </div>
            <span className="hidden sm:block text-zinc-700">&bull;</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>No Obligation To Buy</span>
            </div>
          </div>
        </div>

      </div>

      {/* Social Proof (Wall of Love Preview - Vertical Stacking) */}
      <div className="max-w-5xl mx-auto px-4 mt-20 relative z-10 border-t border-zinc-800 pt-16">
        <p className="text-center text-sm font-bold text-zinc-500 tracking-widest uppercase mb-10">Trusted By 500+ Agency Owners</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
             <div key={i} className="bg-zinc-900/50 rounded-2xl p-6 ring-1 ring-white/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                  "This system completely changed how we operate. We added $40k in MRR in just 2 months without hiring more sales reps."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="User Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="text-white text-sm font-bold">Sarah Jenkins</p>
                    <p className="text-zinc-500 text-xs">CEO, GrowthX Media</p>
                  </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
