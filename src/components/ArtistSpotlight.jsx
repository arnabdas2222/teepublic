import React, { useState } from 'react'

export default function ArtistSpotlight({ artist, onViewProduct, onAddToCart }) {
  const [favorites, setFavorites] = useState({})

  const toggleFavorite = (id, e) => {
    e.stopPropagation()
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="artist-spotlight" className="py-16 bg-[#16181d] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 tracking-tight">
            Artist Spotlight
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Take a look at this show-stopping artist shining in the spotlight!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 bg-[#1b1e25] rounded-3xl border border-zinc-700/80 shadow-2xl overflow-hidden flex flex-col text-center">
            <div className="relative h-32 bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-500 flex items-center justify-center p-4">
              <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/20">
                <span className="text-lg font-black tracking-widest text-white uppercase drop-shadow-md">
                  WELCOME
                </span>
                <span className="block text-[11px] font-bold text-amber-200 uppercase tracking-widest">
                  Hillary White Rabbit
                </span>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 -mt-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-zinc-950 border-4 border-[#1b1e25] text-white flex items-center justify-center text-xl font-black shadow-xl">
                🐇
              </div>

              <h3 className="text-lg font-extrabold text-white mt-3">
                {artist.name}
              </h3>
              <p className="text-xs text-teal-400 font-semibold">{artist.handle}</p>

              <p className="text-xs text-zinc-300 mt-3 leading-relaxed px-2">
                {artist.bio}
              </p>

              <div className="flex items-center gap-4 text-[11px] text-zinc-400 mt-4 py-2 px-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <span>📅 {artist.joined}</span>
                <span>•</span>
                <span className="font-semibold text-zinc-200">{artist.designsCount}</span>
              </div>

              <p className="text-xs text-amber-400 font-bold mt-4">
                {artist.saleNotice}
              </p>

              <button
                type="button"
                onClick={() => {}}
                className="w-full mt-5 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-indigo-600/30 cursor-pointer active:scale-95"
              >
                View Artist Storefront
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {artist.products.map((item) => (
                <div
                  key={item.id}
                  className="group bg-[#1b1e25] rounded-2xl border border-zinc-800/80 hover:border-teal-500/60 p-4 transition-all duration-300 shadow-md flex flex-col justify-between"
                >
                  <div
                    onClick={() => onViewProduct(item)}
                    className="relative aspect-square w-full bg-[#121418] rounded-xl overflow-hidden cursor-pointer flex items-center justify-center p-3 mb-3 group-hover:bg-[#101215] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(item.id, e)}
                      aria-label="Save to wishlist"
                      className="absolute top-2.5 right-2.5 z-10 p-2 rounded-xl bg-black/60 hover:bg-black/90 text-zinc-300 transition-colors backdrop-blur-sm border border-zinc-700/60"
                    >
                      <svg
                        className={`w-4 h-4 ${favorites[item.id] ? 'fill-rose-500 text-rose-500' : 'text-zinc-300'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    <div className="absolute bottom-2 inset-x-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-block bg-zinc-900/90 border border-zinc-700 text-zinc-200 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                        Quick View
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <h4
                      onClick={() => onViewProduct(item)}
                      className="text-sm font-bold text-zinc-100 hover:text-teal-400 transition-colors cursor-pointer truncate"
                    >
                      {item.name}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">by {item.artist}</p>
                    <div className="flex items-center justify-center gap-2 mt-1.5">
                      <span className="text-sm font-extrabold text-teal-400">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-zinc-500 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-[10px] text-amber-400 font-bold mt-1">
                      for 6 days 03:03:40
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
