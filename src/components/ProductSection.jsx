import React, { useState } from 'react'
import ProductCard from './ProductCard'
import tshirt1 from '../assets/images/tshirt1.jpg'
import tshirt2 from '../assets/images/tshirt2.jpg'
import tshirt3 from '../assets/images/tshirt3.jpg'
import tshirt4 from '../assets/images/tshirt4.jpg'
import tshirt5 from '../assets/images/tshirt5.jpg'

const initialProducts = [
  {
    id: 1,
    name: 'Minimalist Typography Backprint Tee',
    price: 44.0,
    category: 'Minimalist',
    image: tshirt1,
    tag: 'Best Seller',
    description: 'Crisp heavyweight cotton with back typographic signature placement.',
  },
  {
    id: 2,
    name: 'Sandstone Pique Tailored Polo',
    price: 58.0,
    category: 'Polo',
    image: tshirt2,
    tag: 'Premium',
    description: 'Refined knit collar polo constructed for effortless leisure styling.',
  },
  {
    id: 3,
    name: 'Bauhaus Expressionist Colorblock Tee',
    price: 48.0,
    category: 'Graphic',
    image: tshirt3,
    tag: 'New Drop',
    description: 'Vibrant geometric block pattern printed with archival pigment dye.',
  },
  {
    id: 4,
    name: 'Eat Sleep Design Repeat Dark Tee',
    price: 42.0,
    category: 'Minimalist',
    image: tshirt4,
    tag: 'Essential',
    description: 'Jet black deep combed cotton with circular minimalist typography.',
  },
  {
    id: 5,
    name: 'Vintage Ochre Sunburst Heavyweight',
    price: 46.0,
    category: 'Heavyweight',
    image: tshirt5,
    tag: 'Limited',
    description: 'Warm mustard yellow vintage wash 260 GSM drop-shoulder crewneck.',
  },
  {
    id: 6,
    name: 'Studio Blueprint Back-Stamp Tee',
    price: 45.0,
    category: 'Graphic',
    image: tshirt1,
    tag: 'Curated',
    description: 'Contemporary back-facing artisan imprint on optic white cotton.',
  },
  {
    id: 7,
    name: 'Heritage Sandstone Casual Polo',
    price: 54.0,
    category: 'Polo',
    image: tshirt2,
    tag: null,
    description: 'Breathable honeycomb pique fabric with ribbed cuff detailing.',
  },
  {
    id: 8,
    name: 'Prism Modernist All-Over Graphic Tee',
    price: 52.0,
    category: 'Graphic',
    image: tshirt3,
    tag: 'Trending',
    description: 'Abstract cubist arrangement inspired by mid-century artistic forms.',
  },
  {
    id: 9,
    name: 'Monochrome Designer Crewneck',
    price: 39.0,
    category: 'Minimalist',
    image: tshirt4,
    tag: 'Staff Pick',
    description: 'Tonal dark aesthetics with reinforced collar seam construction.',
  },
  {
    id: 10,
    name: 'Golden Hour Oversized Boxy Tee',
    price: 49.0,
    category: 'Heavyweight',
    image: tshirt5,
    tag: 'Popular',
    description: 'Sun-drenched yellow garment dyed with relaxed dropped shoulders.',
  },
  {
    id: 11,
    name: 'Archival Monochrome Creative Tee',
    price: 43.0,
    category: 'Minimalist',
    image: tshirt4,
    tag: null,
    description: 'Signature designer circular badge graphic with matte finish ink.',
  },
  {
    id: 12,
    name: 'Retro Spectrum Geometric Tee',
    price: 47.0,
    category: 'Graphic',
    image: tshirt3,
    tag: 'Edition 02',
    description: 'Multi-hue modernist layout printed on ultra-soft organic jersey.',
  },
]

export default function ProductSection({ onAddToCart }) {
  const [products] = useState(initialProducts)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['All', 'Minimalist', 'Graphic', 'Polo', 'Heavyweight']

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === 'All') return true
      return product.category === selectedCategory
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      return a.id - b.id
    })

  return (
    <section id="shop" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-900">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-bold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Curated Wardrobe
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              The T-Shirt Collection
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Explore 12 signature cuts engineered with combed cotton, precision stitching, and modern artistic accents.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-xl bg-neutral-900 p-1 border border-neutral-800 overflow-x-auto no-scrollbar max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-white text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold py-2.5 pl-3.5 pr-8 rounded-xl focus:outline-none focus:border-neutral-600 transition-colors cursor-pointer"
              >
                <option value="featured">Featured Order</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-neutral-500">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center text-neutral-500">
              <p className="text-lg">No products found in this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-4 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider"
              >
                View All Tees
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
