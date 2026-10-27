import React, { useState } from 'react'

export default function ProductDetailModal({ product, isOpen, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Original')
  const [selectedFit, setSelectedFit] = useState('Classic')
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  if (!isOpen || !product) return null

  const sizes = ['S', 'M', 'L', 'XL', '2XL']
  const fits = ['Classic', 'Tri-Blend', 'Heavyweight']

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        artist: product.artist,
        color: selectedColor,
        fit: selectedFit
      })
    }
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
    }, 1500)
  }

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative w-full max-w-4xl bg-[#181a1f] rounded-3xl shadow-2xl border border-zinc-700/80 overflow-hidden z-10 text-zinc-100">
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#14161a]">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="font-semibold text-teal-400 cursor-pointer hover:underline" onClick={onClose}>
                Catalog
              </span>
              <span>/</span>
              <span>{product.artist}</span>
              <span>/</span>
              <span className="text-zinc-200 font-medium truncate max-w-[200px]">{product.name}</span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close product detail"
              className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="aspect-square bg-[#111316] rounded-2xl border border-zinc-800 p-6 flex items-center justify-center relative overflow-hidden group">
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-lg bg-teal-600 text-white shadow-sm">
                    {product.tag}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="absolute top-4 right-4 z-10 text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-lg bg-rose-600 text-white shadow-sm">
                    {discountPercent}% OFF
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="bg-[#131518] rounded-2xl p-4 border border-zinc-800 text-xs text-zinc-400 space-y-2">
                <div className="flex items-center gap-2 font-bold text-zinc-200">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% Combed Ringspun Cotton & Artist Royalties</span>
                </div>
                <p className="pl-6 text-zinc-400">
                  Every order puts money directly in the hands of independent creators. Printed with sustainable vegan water-based inks.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300">
                    Art by {product.artist}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-zinc-200">{product.rating}</span>
                    <span className="text-zinc-500 font-normal">({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-baseline gap-3 pt-1">
                  <span className="text-3xl font-black text-teal-400">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-zinc-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="text-xs font-bold text-rose-300 bg-rose-950/80 border border-rose-800/60 px-2 py-0.5 rounded-md">
                      Save ${(product.originalPrice - product.price).toFixed(2)} ({discountPercent}% off)
                    </span>
                  )}
                </div>

                <div className="pt-2 border-t border-zinc-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Product Description
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {product.description}
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 bg-[#121417] p-2.5 rounded-xl border border-zinc-800">
                    <strong className="text-zinc-200">Fabric & Spec:</strong> {product.fitDetails}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-zinc-200">T-Shirt Cut:</span>
                    <span className="text-teal-400 font-semibold">{selectedFit} Fit</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {fits.map((fit) => (
                      <button
                        key={fit}
                        type="button"
                        onClick={() => setSelectedFit(fit)}
                        className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                          selectedFit === fit
                            ? 'bg-teal-950/80 border-teal-500 text-teal-300 shadow-sm'
                            : 'bg-[#121417] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                      >
                        {fit}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-zinc-200">Size (Unisex):</span>
                    <span className="text-zinc-400 font-medium underline cursor-pointer">Size Chart</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-2.5 text-xs font-bold rounded-xl border transition-all ${
                          selectedSize === size
                            ? 'bg-teal-600 text-white border-teal-500 shadow-md shadow-teal-600/30'
                            : 'bg-[#121417] border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {product.colors && (
                  <div>
                    <span className="block text-xs font-bold text-zinc-200 mb-1.5">
                      Colorway: <span className="text-teal-400 font-medium">{selectedColor}</span>
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          className={`px-3 py-1 text-xs rounded-lg border font-medium transition-all ${
                            selectedColor === color
                              ? 'bg-teal-600 text-white border-teal-500'
                              : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center border border-zinc-800 rounded-xl bg-[#121417] p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm font-bold text-white">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAdd}
                    className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-teal-600 hover:bg-teal-500 text-white shadow-teal-600/30 active:scale-[0.98]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span>Add {quantity > 1 ? `(${quantity})` : ''} to Cart • ${(product.price * quantity).toFixed(2)}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
