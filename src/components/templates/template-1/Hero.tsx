import { ShieldCheck, Zap, Lock, Star, PlayCircle, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-20 lg:pt-24 pb-16">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Copy & Conversion */}
          <div className="flex flex-col space-y-8 relative z-10">
            {/* Social Badge (Ratings) moved to the top */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-900">
                4.9/5 <span className="text-gray-500 font-normal">from 2,400+ IT Directors on G2</span>
              </p>
            </div>

            {/* The Formulaic Headline (H1): End Result + Time Period + Emotional Payoff */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              Stop Data Breaches <span className="text-blue-600 block sm:inline">in 24 Hours</span> and Finally Sleep in Peace.
            </h1>

            {/* The Strategy Sub-headline (H2): Pain + Mechanism */}
            <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
              Tired of complex security protocols that slow down your team? Our automated <span className="font-semibold text-gray-900">Guardian Engine™</span> deploys instantly to lock down your infrastructure.
            </p>

            {/* The High-Contrast CTA & FUD Reduction - Single CTA Only */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href="#signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-600/20 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:-translate-y-0.5"
              >
                <Lock className="w-5 h-5" />
                Secure My Infrastructure Now
              </a>
            </div>
            
            {/* FUD Reducer Text underneath CTA */}
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
              <span className="text-gray-300">&bull;</span>
              <span>14-day free trial</span>
            </div>

            {/* Social Proof Stacking (Logos with Context) */}
            <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col gap-5">
              {/* Form 2: Logos with Context (Quote Snippets) - Highlighted */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <div className="flex flex-col space-y-1">
                  <div className="text-xl font-black text-gray-900">TECHCRUNCH</div>
                  <p className="text-sm text-gray-700 font-medium italic max-w-[200px] border-l-2 border-blue-600 pl-3">
                    "The new standard for automated cloud security."
                  </p>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="text-xl font-black text-gray-900 tracking-tighter">WIRED</div>
                  <p className="text-sm text-gray-700 font-medium italic max-w-[200px] border-l-2 border-blue-600 pl-3">
                    "Eliminates hours of manual configuration."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The 3-Dimensional Visual (Infographic Style) */}
          <div className="relative mt-8 lg:mt-0 lg:ml-8 w-full">
            {/* Decorative background blur */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-100 to-indigo-50 blur-2xl opacity-50 -z-10"></div>
            
            {/* Main Product/Dashboard Mockup */}
            <div className="relative rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5 overflow-hidden">
              {/* Mockup Header */}
              <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto rounded-md bg-white px-24 py-1.5 shadow-sm ring-1 ring-gray-900/5"></div>
              </div>
              
              {/* Mockup Body (Abstracted UI) */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Security Posture</h3>
                    <p className="text-sm text-gray-500">Real-time threat analysis</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    <ShieldCheck className="w-4 h-4" />
                    Protected
                  </div>
                </div>

                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                        {i === 0 ? <Lock className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className={`h-2.5 rounded-full ${i === 0 ? 'w-3/4 bg-blue-600' : 'w-1/2 bg-gray-200'}`}></div>
                        <div className={`h-2 rounded-full ${i === 0 ? 'w-1/2 bg-blue-200' : 'w-1/4 bg-gray-100'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Infographic Overlays (The 3 Dimensions) */}
            
            {/* 1. Functional: What it does */}
            <div className="absolute -left-6 top-16 sm:-left-12 sm:top-24 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-900/5 animate-[bounce_3s_ease-in-out_infinite]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-indigo-600">FUNCTIONAL</p>
                  <p className="text-sm font-bold text-gray-900">Scans 10M+ Threats/sec</p>
                </div>
              </div>
            </div>

            {/* 2. Emotional: How they feel */}
            <div className="absolute -right-4 top-1/2 sm:-right-8 sm:top-1/2 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-900/5 transform -translate-y-1/2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-white">
                  <span className="text-lg">😌</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-600">EMOTIONAL</p>
                  <p className="text-sm font-bold text-gray-900">Zero Stress Operations</p>
                </div>
              </div>
            </div>

            {/* 3. Social: How they look */}
            <div className="absolute left-8 -bottom-6 sm:left-12 sm:-bottom-8 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-900/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600">SOCIAL</p>
                  <p className="text-sm font-bold text-gray-900">Board-Ready Compliance</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
