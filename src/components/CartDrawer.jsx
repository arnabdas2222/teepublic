import React, { useState } from 'react'

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  if (!isOpen) return null

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shippingThreshold = 80
  const shipping = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 6.95
  const total = subtotal + shipping
  const progressPercent = Math.min(100, Math.round((subtotal / shippingThreshold) * 100))

  const handleCheckout = () => {
    setIsCheckingOut(true)
    setTimeout(() => {
      setIsCheckingOut(false)
      setCheckoutComplete(true)
      setTimeout(() => {
        setCheckoutComplete(false)
        onClearCart()
        onClose()
      }, 2000)
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#16181d] border-l border-zinc-800 text-zinc-100 flex flex-col shadow-2xl relative">
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-[#131518]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-teal-600 text-white rounded-xl shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">Your Cart</h2>
                <p className="text-xs text-zinc-400">
                  {items.length === 0 ? 'Empty bag' : `${items.reduce((sum, i) => sum + i.quantity, 0)} items in your cart`}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart drawer"
              className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4 bg-teal-950/40 border-b border-teal-900/40 text-xs text-teal-200 space-y-1.5">
            <div className="flex justify-between font-semibold">
              <span>{subtotal >= shippingThreshold ? 'You unlocked FREE Shipping!' : `Add $${(shippingThreshold - subtotal).toFixed(2)} for FREE Shipping`}</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-teal-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {checkoutComplete ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 flex items-center justify-center animate-bounce">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Order Confirmed!</h3>
              <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
                Thank you for supporting independent creators. We are printing your custom T-shirts now.
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white">Your bag is empty</h3>
              <p className="text-xs text-zinc-400 max-w-xs">
                Explore our 12 Best Sellers, Gift picks, and Artist Spotlight tees to get started.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 p-4 rounded-2xl bg-[#1d2026] border border-zinc-800 items-center justify-between shadow-sm"
                  >
                    <div className="h-16 w-16 rounded-xl bg-[#121417] border border-zinc-800 overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0 pr-2">
                      <h4 className="text-xs font-bold text-white truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-medium truncate">
                        By {item.artist || 'Independent Artist'}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                          Size {item.size}
                        </span>
                        <span className="text-xs font-extrabold text-teal-400">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-[#121417] border border-zinc-800 rounded-lg">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                          className="px-2 py-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-l-lg transition-colors text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                          className="px-2 py-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-r-lg transition-colors text-xs font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id, item.size)}
                        aria-label="Remove item"
                        className="p-1.5 text-zinc-500 hover:text-rose-400 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-zinc-800 bg-[#131518] space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Standard Shipping</span>
                    <span className="text-white font-bold">
                      {shipping === 0 ? <strong className="text-emerald-400">FREE</strong> : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-zinc-800 flex justify-between text-base font-black text-white">
                    <span>Total</span>
                    <span className="text-teal-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg shadow-teal-600/30 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing Payment...</span>
                    </>
                  ) : (
                    <>
                      <span>Checkout • ${(total).toFixed(2)}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
