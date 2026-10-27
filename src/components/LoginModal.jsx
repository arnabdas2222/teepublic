import React, { useState } from 'react'

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) return
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      onClose()
      setEmail('')
      setPassword('')
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-md bg-[#191b22] border border-zinc-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden text-zinc-100">
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Sign In to TeePublic
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Access saved designs, followed artists, and order status
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close login modal"
            className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {isSuccess ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Welcome Back!</h3>
            <p className="text-xs text-zinc-400">You are now signed in to TeePublic.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full bg-[#121417] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs text-teal-400 hover:underline font-semibold"
                >
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#121417] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>

            <div className="flex items-center">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-teal-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-xs text-zinc-400 font-medium">Keep me signed in</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md shadow-teal-600/30 active:scale-[0.98]"
            >
              Sign In
            </button>

            <div className="text-center pt-2">
              <p className="text-xs text-zinc-400">
                New to TeePublic?{' '}
                <button
                  type="button"
                  onClick={() => {}}
                  className="text-teal-400 hover:underline font-bold"
                >
                  Create an account
                </button>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
