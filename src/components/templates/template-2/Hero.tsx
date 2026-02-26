import { useState } from "react";
import { ShieldCheck, MapPin, Phone, ArrowRight, Star, Clock, CheckCircle2, Lock } from "lucide-react";

export default function Hero() {
  const [formStep, setFormStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call for checking zip code / service availability
    setTimeout(() => {
      setIsLoading(false);
      setFormStep(2);
    }, 600);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-indigo-100 to-indigo-50/50 blur-3xl opacity-70"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-100 to-cyan-50 blur-3xl opacity-50"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Tightened Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Social Badge at the top */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-900">
                4.9/5 <span className="text-slate-500 font-normal underline decoration-indigo-500/30">Average Rating from 500+ Local Reviews</span>
              </p>
            </div>

            {/* The Formulaic Headline (H1): End Result + Time Period + Emotional Payoff */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Fix Your Plumbing Emergency <span className="text-indigo-600">in Under 60 Minutes</span> and Prevent Costly Water Damage.
            </h1>

            {/* The Strategy Sub-headline (H2): Pain + Mechanism */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Standing water destroying your home? Our <span className="font-semibold text-slate-900">Rapid Dispatch Network</span> locates the closest certified professional to your door immediately.
            </p>

            {/* Benefit Bullets (instead of buttons, leading eye to form) */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-500" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-500" />
                <span>Fully Licensed & Insured</span>
              </div>
            </div>

            {/* Trust Stack (Logos with Context) - Moved below copy to fill space */}
            <div className="hidden lg:block pt-10 mt-6 border-t border-slate-200">
              <p className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-6">Verified by Top Platforms</p>
              <div className="flex flex-wrap items-center gap-10">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2 text-xl font-black text-slate-800 tracking-tighter">
                    <Star className="w-5 h-5 fill-green-500 text-green-500" /> Trustpilot
                  </div>
                  <p className="text-sm text-slate-600 font-medium italic max-w-[220px] border-l-2 border-indigo-500 pl-3">
                    "Arrived in 20 minutes and saved my flooded basement."
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2 text-xl font-black text-slate-800">
                    <span className="text-blue-600">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-600">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium italic max-w-[220px] border-l-2 border-indigo-500 pl-3">
                    "4.9/5 Average rating across 500+ local verified reviews."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: High-Intent Lead Capture Form (Progressive Disclosure) */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto relative lg:mt-0">
            {/* Form decorative background */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-indigo-500 to-indigo-600 opacity-20 blur-lg"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-indigo-900/10 ring-1 ring-slate-100 overflow-hidden" id="signup">
              
              {/* Form Header */}
              <div className="bg-indigo-600 px-6 py-6 text-center">
                <h3 className="text-xl font-bold text-white mb-1">Get Immediate Help</h3>
                <p className="text-indigo-100 text-sm">A technician is available near you.</p>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8">
                <form onSubmit={formStep === 1 ? handleNextStep : (e) => e.preventDefault()}>
                  
                  {/* Step 1: Low-friction ask (Zip code + Issue) */}
                  <div className={`transition-all duration-300 transform ${formStep === 1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 hidden'}`}>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="zip" className="block text-sm font-semibold text-slate-700 mb-2">
                          What is your Zip Code?
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPin className="h-5 w-5 text-slate-400" />
                          </div>
                          <input
                            type="text"
                            id="zip"
                            className="block w-full pl-10 pr-3 py-3.5 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                            placeholder="e.g. 90210"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          What needs fixing?
                        </label>
                        <select className="block w-full pl-3 pr-10 py-3.5 text-base border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-xl transition-colors border">
                          <option>Burst Pipe / Flooding</option>
                          <option>Clogged Drain</option>
                          <option>Water Heater Issue</option>
                          <option>Toilet Repair</option>
                          <option>Other Emergency</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all hover:-translate-y-0.5"
                      >
                        {isLoading ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Find Available Techs <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Step 2: High-friction ask (Contact Info) - Sunk Cost kicks in here */}
                  <div className={`transition-all duration-300 transform ${formStep === 2 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 hidden'}`}>
                    <div className="space-y-5">
                      <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium mb-2 border border-green-100">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        We found 2 technicians near you!
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="block w-full px-3 py-3.5 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number (For dispatch)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-slate-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            className="block w-full pl-10 pr-3 py-3.5 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                            placeholder="(555) 000-0000"
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => alert("Dispatch triggered!")}
                        className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-green-600/20 text-lg font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all hover:-translate-y-0.5"
                      >
                        Dispatch Technician Now
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="w-full text-center text-sm font-medium text-slate-500 hover:text-slate-700"
                      >
                        &larr; Back to previous step
                      </button>
                    </div>
                  </div>

                </form>

                {/* The FUD Test (Reassurance Badges) */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <Lock className="w-4 h-4 text-slate-400" />
                    <span>Your information is 100% secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                    <span>No obligation quote provided upfront</span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Mobile Trust Stack (visible only on small screens) */}
            <div className="lg:hidden pt-8 mt-4">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center gap-2 text-xl font-black text-slate-800">
                  <span className="text-blue-600">G</span><span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-600">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span>
                </div>
                <p className="text-sm text-slate-600 text-center font-medium italic max-w-[280px]">
                  "4.9/5 Average rating across 500+ local verified reviews."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
