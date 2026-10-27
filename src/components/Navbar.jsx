import React, { useState } from 'react'

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenLogin,
  activeSection,
  onNavigate,
  searchQuery,
  onSearchChange
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'BEST SELLERS', href: '#bestsellers' },
    { label: 'FIND A GIFT', href: '#gift-guide' },
    { label: 'ARTIST SPOTLIGHT', href: '#artist-spotlight' },
    { label: 'FEATURED', href: '#featured' },
    { label: 'TRUSTPILOT REVIEWS', href: '#reviews' },
  ]

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate(href)
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-[#16181d] border-b border-zinc-800 shadow-md">
      <div className="bg-[#00796B] text-white text-center py-2 px-4 text-xs font-bold tracking-wide flex items-center justify-center gap-2">
        <span className="bg-white/20 px-2.5 py-0.5 rounded text-[10px] uppercase font-black tracking-wider">
          SITE WIDE SALE
        </span>
        <span className="font-semibold">
          Classic Tees Starting at $16 • Free Shipping on Orders $80+
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
          className="flex items-center gap-2.5 group flex-shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-600 text-white font-black flex items-center justify-center text-xl tracking-tighter shadow-md shadow-teal-600/30 group-hover:scale-105 transition-transform">
            TP
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-tight text-xl uppercase text-white group-hover:text-teal-400 transition-colors">
              TEE<span className="text-teal-400">PUBLIC</span>
            </span>
            <span className="text-[10px] tracking-widest text-zinc-400 uppercase -mt-1 font-semibold">
              ARTIST COLLECTIVE
            </span>
          </div>
        </a>

        <div className="hidden lg:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search designs, styles, artists (e.g. vintage, bauhaus)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#20232a] border border-zinc-700/80 rounded-full text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-teal-500 focus:bg-[#252830] transition-all shadow-inner"
            />
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className={`text-xs font-black tracking-wider transition-colors hover:text-teal-400 ${
                activeSection === link.href.replace('#', '') ? 'text-teal-400' : 'text-zinc-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLogin}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-zinc-200 hover:text-white hover:bg-zinc-800 rounded-xl transition-all border border-zinc-700/80"
          >
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Log In</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="Open Shopping Cart"
            className="relative p-2.5 rounded-xl bg-teal-600 text-white hover:bg-teal-500 transition-all flex items-center justify-center shadow-md shadow-teal-600/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1.5 rounded-full bg-rose-500 text-white text-[11px] font-black flex items-center justify-center shadow-lg animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:hidden px-4 pb-3">
        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search designs and styles..."
            className="w-full pl-9 pr-4 py-2 bg-[#20232a] border border-zinc-700/80 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-teal-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-zinc-800 bg-[#16181d] px-4 pt-3 pb-5 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className="block px-3 py-2 rounded-lg text-xs font-bold text-zinc-300 hover:text-white hover:bg-zinc-800"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase text-white bg-zinc-800 rounded-xl hover:bg-zinc-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>User Sign In</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
