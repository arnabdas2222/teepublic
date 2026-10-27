import React from 'react'

export default function Hero({ onShopBestSellers, onFindGift }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#131518] py-16 lg:py-24 border-b border-zinc-800/80">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-950/20 via-zinc-950/40 to-black/60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-teal-300 text-xs uppercase tracking-wider font-extrabold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span>Over 1.2M Independent Artist Creations</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Wear Your Passion. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400">
              Support Real Artists.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Discover thousands of hand-crafted designs on ultra-comfortable ringspun tees, hoodies, and gifts. Every order puts money directly into creators' pockets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
            <button
              onClick={onShopBestSellers}
              className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-teal-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Shop Best Sellers ($16)</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button
              onClick={onFindGift}
              className="w-full sm:w-auto px-8 py-4 bg-[#1b1e24] hover:bg-[#232730] text-zinc-100 font-extrabold text-xs uppercase tracking-wider rounded-xl border border-zinc-700 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>🎁 Need to Find a Gift?</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-10 border-t border-zinc-800/80 max-w-lg mx-auto text-center">
            <div className="bg-[#191b20] p-3 rounded-2xl border border-zinc-800 shadow-sm">
              <p className="text-xl sm:text-2xl font-black text-white">100%</p>
              <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">Ringspun Cotton</p>
            </div>
            <div className="bg-[#191b20] p-3 rounded-2xl border border-zinc-800 shadow-sm">
              <p className="text-xl sm:text-2xl font-black text-white">4.8 / 5</p>
              <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">Trustpilot Score</p>
            </div>
            <div className="bg-[#191b20] p-3 rounded-2xl border border-zinc-800 shadow-sm">
              <p className="text-xl sm:text-2xl font-black text-white">Free</p>
              <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">Size Exchanges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
