import React, { useState } from 'react'

export default function ProductCard({ product, onAddToCart, onViewProduct }) {
  const [selectedSize, setSelectedSize] = useState('M')
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const sizes = ['S', 'M', 'L', 'XL']

  const handleAdd = (e) => {
    e.stopPropagation()
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      artist: product.artist
    })
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
    }, 1200)
  }

  return (
    <div className="group bg-[#1a1c22] rounded-2xl border border-zinc-800/90 hover:border-teal-500/60 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-black/60">
      <div 
        onClick={() => onViewProduct(product)}
        className="relative aspect-square w-full bg-[#121418] overflow-hidden cursor-pointer flex items-center justify-center p-4 transition-colors"
      >
        {product.tag && (
          <span className="absolute top-3 left-3 z-10 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-teal-600 text-white shadow-sm">
            {product.tag}
          </span>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setIsFavorite(!isFavorite)
          }}
          aria-label="Add to favorites"
          className="absolute top-3 right-3 z-10 p-2 rounded-xl bg-black/60 hover:bg-black/90 text-zinc-300 transition-colors backdrop-blur-sm border border-zinc-700/60"
        >
          <svg className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-zinc-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        <div className="absolute bottom-2 inset-x-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-block bg-zinc-900/90 border border-zinc-700 text-zinc-200 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold shadow-md">
            Click to View Details
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-zinc-400 font-medium truncate max-w-[140px]">by {product.artist}</span>
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 
            onClick={() => onViewProduct(product)}
            className="text-sm font-bold text-zinc-100 tracking-tight hover:text-teal-400 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="text-lg font-extrabold text-teal-400">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-zinc-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950/70 border border-rose-800/60 px-1.5 py-0.5 rounded">
              Sale
            </span>
          </div>
        </div>

        <div className="space-y-2.5 pt-1 border-t border-zinc-800">
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            <span>Size:</span>
            <span className="font-bold text-zinc-200">{selectedSize}</span>
          </div>

          <div className="grid grid-cols-4 gap-1">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`py-1 text-xs font-semibold rounded-lg border transition-all ${
                  selectedSize === size
                    ? 'bg-teal-600 text-white border-teal-500 shadow-sm'
                    : 'bg-[#121417] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`w-full py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-zinc-800 hover:bg-teal-600 text-zinc-100 hover:text-white border border-zinc-700 active:scale-[0.98]'
            }`}
          >
            {isAdded ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
