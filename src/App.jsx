import React, { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import GiftFinder from './components/GiftFinder'
import ArtistSpotlight from './components/ArtistSpotlight'
import FeaturedProducts from './components/FeaturedProducts'
import TrustpilotWidget from './components/TrustpilotWidget'
import Footer from './components/Footer'
import ProductDetailModal from './components/ProductDetailModal'
import LoginModal from './components/LoginModal'
import CartDrawer from './components/CartDrawer'
import {
  bestSellersProducts,
  giftProducts,
  spotlightArtist,
  singleFeaturedProduct,
} from './data/products'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('home')

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const filteredBestSellers = useMemo(() => {
    if (!searchQuery.trim()) return bestSellersProducts
    const q = searchQuery.toLowerCase()
    return bestSellersProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.artist.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    )
  }, [searchQuery])

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.size === product.size
      )

      if (existingIndex > -1) {
        const updated = [...prevItems]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        }
        return updated
      }

      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id, size)
      return
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      )
    )
  }

  const handleRemoveItem = (id, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.size === size))
    )
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  const scrollToSection = (hash) => {
    const id = hash.replace('#', '')
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#121417] text-zinc-100 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        <Hero
          onShopBestSellers={() => scrollToSection('#bestsellers')}
          onFindGift={() => scrollToSection('#gift-guide')}
        />

        <BestSellers
          products={filteredBestSellers}
          onAddToCart={handleAddToCart}
          onViewProduct={setSelectedProduct}
        />

        <GiftFinder
          products={giftProducts}
          onAddToCart={handleAddToCart}
          onViewProduct={setSelectedProduct}
        />

        <ArtistSpotlight
          artist={spotlightArtist}
          onAddToCart={handleAddToCart}
          onViewProduct={setSelectedProduct}
        />

        <FeaturedProducts
          product={singleFeaturedProduct}
          onAddToCart={handleAddToCart}
          onViewProduct={setSelectedProduct}
        />

        <TrustpilotWidget />
      </main>

      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  )
}
