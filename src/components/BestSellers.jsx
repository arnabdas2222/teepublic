import React from 'react'
import ProductCard from './ProductCard'

export default function BestSellers({ products, onAddToCart, onViewProduct }) {
  const displayProducts = products.slice(0, 12)

  return (
    <section id="bestsellers" className="py-16 bg-[#15171b] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/20">
              <svg className="w-3.5 h-3.5 fill-current text-amber-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>12 Most Popular Designs</span>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Best Sellers
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Top trending independent artist tees ranked by community orders.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
              Sale on for 6 days 03:03:40
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewProduct={onViewProduct}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
