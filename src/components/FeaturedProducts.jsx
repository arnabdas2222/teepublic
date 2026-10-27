import React, { useState } from 'react'

export default function FeaturedProducts({ product, onAddToCart, onViewProduct }) {
  const [selectedSize, setSelectedSize] = useState('L')
  const [isAdded, setIsAdded] = useState(false)

  const sizes = product.sizes || ['S', 'M', 'L', 'XL', '2XL']

  const handleAdd = () => {
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
    }, 1500)
  }

  return (
    <section id="featured" className="py-20 bg-[#131518] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            <span>Single Masterpiece Drop</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Featured Product
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Curated by our senior editors — 1 picture, 1 story, and unapologetic craft.
          </p>
        </div>

        <div className="bg-[#1a1c22] rounded-3xl border border-zinc-800 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 flex flex-col items-center">
              <div 
                onClick={() => onViewProduct(product)}
                className="relative aspect-square w-full max-w-md bg-[#111316] rounded-2xl border border-zinc-800/80 p-6 flex items-center justify-center cursor-pointer group overflow-hidden"
              >
                <span className="absolute top-4 left-4 z-10 text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-lg bg-teal-600 text-white shadow-md">
                  {product.tag}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs font-bold shadow-lg">
                    Click to Open Detailed Page
                  </span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-3 text-center">
                Click image to view high-res print details and full specs
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider bg-teal-950/60 border border-teal-800/60 px-3 py-1 rounded-full">
                    By {product.artist}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>{product.rating}</span>
                    <span className="text-zinc-500 font-normal">({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                <h3 
                  onClick={() => onViewProduct(product)}
                  className="text-2xl sm:text-3xl font-extrabold text-white mt-3 hover:text-teal-400 transition-colors cursor-pointer"
                >
                  {product.name}
                </h3>

                <div className="flex items-baseline gap-3 mt-3">
                  <span className="text-3xl font-black text-teal-400">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-base text-zinc-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/80 border border-rose-800/60 px-2 py-0.5 rounded-md">
                    Limited Sale
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Artwork Story & Description
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {product.description}
                  </p>
                  <p className="text-xs text-zinc-400 bg-[#121417] p-3 rounded-xl border border-zinc-800 leading-relaxed">
                    {product.fullStory}
                  </p>
                  <p className="text-xs text-zinc-400">
                    <strong className="text-zinc-200">Fabric Spec:</strong> {product.fitDetails}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-zinc-200">Select Size:</span>
                    <span className="text-teal-400 font-semibold">{selectedSize}</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                          selectedSize === size
                            ? 'bg-teal-600 text-white border-teal-500 shadow-md shadow-teal-600/20'
                            : 'bg-[#121417] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className={`w-full py-4 rounded-xl text-xs uppercase tracking-wider font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-teal-600 hover:bg-teal-500 text-white shadow-teal-600/20 active:scale-95'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <span>Add Featured Drop to Bag • ${product.price.toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
