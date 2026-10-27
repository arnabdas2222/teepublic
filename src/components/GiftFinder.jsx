import React from 'react'

export default function GiftFinder({ products, onAddToCart, onViewProduct }) {
  const displayGifts = products.slice(0, 4)

  return (
    <section id="gift-guide" className="py-16 bg-[#131518] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-950/80 via-zinc-900 to-emerald-950/70 border border-teal-800/40 rounded-3xl p-8 sm:p-10 mb-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <span>🎁</span>
              <span>Curated 4-Pack Gift Edit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Need to Find a Gift?
            </h2>
            <p className="mt-2 text-sm text-zinc-300 leading-relaxed font-normal">
              Hand-picked gift-ready favorites for birthdays, milestone celebrations, riders, coders, and art enthusiasts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayGifts.map((product) => (
            <div key={product.id} className="group bg-[#1a1c22] rounded-2xl border border-zinc-800/90 hover:border-teal-500/60 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl">
              <div 
                onClick={() => onViewProduct(product)}
                className="relative aspect-square w-full bg-[#121418] overflow-hidden cursor-pointer flex items-center justify-center p-4 transition-colors"
              >
                <span className="absolute top-3 left-3 z-10 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-teal-600 text-white shadow-sm">
                  {product.tag}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                <div className="absolute bottom-2 inset-x-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-block bg-zinc-900/90 border border-zinc-700 text-zinc-200 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold">
                    Click to View Details
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <div className="text-[11px] font-bold text-teal-400 mb-1 flex items-center gap-1">
                    <span>✨</span>
                    <span>{product.giftFor}</span>
                  </div>
                  <h3 
                    onClick={() => onViewProduct(product)}
                    className="text-sm font-bold text-zinc-100 hover:text-teal-400 transition-colors cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-lg font-extrabold text-teal-400">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-zinc-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950/70 border border-rose-800/60 px-1.5 py-0.5 rounded">
                      Sale
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onAddToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    size: 'M',
                    artist: product.artist
                  })}
                  className="w-full py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 bg-zinc-800 hover:bg-teal-600 text-zinc-100 hover:text-white border border-zinc-700 cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Quick Add to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
