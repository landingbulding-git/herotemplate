import { PlayCircle, ShieldCheck, CheckCircle, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-zinc-950 pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden selection:bg-emerald-500/30 min-h-screen flex flex-col justify-center">
      {/* Dark mode background for Authority feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-80"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Social Badge at the top */}
        <div className="flex items-center gap-3 mb-6 animate-fade-in">
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
            ))}
          </div>
          <p className="text-xs sm:text-sm font-bold text-zinc-300 tracking-wide uppercase">
            Rated 4.9/5 by 500+ Agency Owners
          </p>
        </div>

        {/* The Formulaic Headline (H1) & Strategy Sub-headline (H2) - Compact for fold tightness */}
        <div className="max-w-4xl mx-auto space-y-4 mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Scale Your Agency to $100k/mo <span className="text-emerald-400">in 90 Days</span> While Working Half The Hours.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-medium max-w-xl mx-auto leading-relaxed">
            Stuck trading time for money? Our <span className="text-zinc-200 font-semibold">Client Acquisition System</span> completely automates lead generation.
          </p>
        </div>

        {/* The Authority VSL (Video Sales Letter) - Height optimized for viewports */}
        <div 
          className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-emerald-900/40 group cursor-pointer bg-zinc-900 aspect-video mb-8" 
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300 border-4 border-zinc-950/20">
                  <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-950 ml-1 fill-current" />
                </div>
                <p className="mt-4 text-white text-xs sm:text-sm font-black tracking-widest uppercase">Watch Free Training (12:04)</p>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center text-zinc-500">
               <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="VSL Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
               ></iframe>
            </div>
          )}
        </div>

        {/* Action Area (CTA + FUD) - Tightened */}
        <div className="max-w-2xl mx-auto flex flex-col items-center space-y-3" id="apply">
          <a
            href="#apply-form"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-black text-zinc-950 shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-all hover:-translate-y-1"
          >
            Apply For Growth Session
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <div className="flex items-center justify-center gap-4 text-[10px] sm:text-xs text-zinc-500 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-500" />
              <span>Free Strategy Call</span>
            </div>
            <span className="text-zinc-800">&bull;</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span>No Obligation</span>
            </div>
          </div>
        </div>

      </div>

      {/* Social Proof (Hidden or Pushed further down to ensure ATF tightness) */}
      <div className="max-w-5xl mx-auto px-4 mt-24 relative z-10 border-t border-zinc-800 pt-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
        <p className="text-center text-[10px] font-black text-zinc-600 tracking-[0.3em] uppercase mb-10">Success Stories</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
             <div key={i} className="bg-zinc-900/30 rounded-2xl p-6 ring-1 ring-white/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-emerald-500/50 text-emerald-500/50" />
                  ))}
                </div>
                <p className="text-zinc-400 text-xs mb-6 leading-relaxed italic">
                  "Added $40k in MRR in just 2 months without hiring more reps."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="text-zinc-300 text-[10px] font-bold uppercase">Sarah J.</p>
                  </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
