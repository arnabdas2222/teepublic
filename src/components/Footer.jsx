import React, { useState } from 'react'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 2500)
  }

  return (
    <footer className="bg-[#0e1012] text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white font-black flex items-center justify-center text-lg shadow-md shadow-teal-600/20">
                TP
              </div>
              <span className="font-black tracking-tight text-xl uppercase text-white">
                Tee<span className="text-teal-400">Public</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              TeePublic is the world's premier marketplace for independent creators to sell apparel, wall art, and home goods. Every single order directly supports an independent artist.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-zinc-400">
              <div className="flex text-[#00B67A]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="p-0.5 bg-[#00B67A] text-white rounded-xs mr-0.5">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </span>
                ))}
              </div>
              <span className="font-semibold text-zinc-200">4.8 on Trustpilot</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore & Shop
            </h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="hover:text-white transition-colors cursor-pointer">Best Sellers (12 Items)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Need to Find a Gift (4 Items)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Artist Spotlight: Hillary White Rabbit</li>
              <li className="hover:text-white transition-colors cursor-pointer">Single Masterpiece Drop</li>
              <li className="hover:text-white transition-colors cursor-pointer">Digital Gift Certificates</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Artists & Community
            </h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="hover:text-white transition-colors cursor-pointer">Open an Artist Store</li>
              <li className="hover:text-white transition-colors cursor-pointer">Artist Royalties & Payouts</li>
              <li className="hover:text-white transition-colors cursor-pointer">Design Upload Guidelines</li>
              <li className="hover:text-white transition-colors cursor-pointer">Creator FAQ & Community</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get $5 Off Your First Order
            </h3>
            <p className="text-xs text-zinc-400 mb-3">
              Subscribe to unlock private drops, flash discounts, and artist interviews.
            </p>
            {subscribed ? (
              <p className="text-xs text-emerald-400 font-bold bg-emerald-950/60 p-3 rounded-xl border border-emerald-800">
                You're in! Use coupon TEE10 at checkout.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="w-full px-3.5 py-2.5 bg-[#171a1f] border border-zinc-700/80 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-teal-400"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-teal-600/20"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 TeePublic Marketplace. All artist designs belong to their respective creators.</p>
          <div className="flex gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#ip" onClick={(e) => e.preventDefault()} className="hover:text-zinc-300 transition-colors">IP / Copyright Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
