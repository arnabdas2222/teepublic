import React from 'react'

export default function TrustpilotWidget() {
  const reviews = [
    {
      name: 'Sarah M.',
      verified: true,
      rating: 5,
      date: 'Yesterday',
      title: 'Obsessed with the print quality!',
      comment: 'Super soft combed cotton and the graphic colors pop even better than on screen. Fast shipping too!'
    },
    {
      name: 'David K.',
      verified: true,
      rating: 5,
      date: '2 days ago',
      title: 'Perfect gift for my brother',
      comment: 'Found the exact retro cafe racer design I was searching for. He loved the fit and breathable material.'
    },
    {
      name: 'Elena R.',
      verified: true,
      rating: 5,
      date: '3 days ago',
      title: 'Independent artists get real support',
      comment: 'Love knowing that real creators get royalties. 5th tee ordered from here and always top tier.'
    }
  ]

  return (
    <section id="reviews" className="bg-[#15171b] border-t border-zinc-800 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-zinc-800/80">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="flex items-center gap-1.5 bg-[#00B67A] text-white px-3.5 py-1.5 rounded-xl shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="font-extrabold text-sm tracking-wide">Trustpilot</span>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#00B67A]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="inline-block p-1 bg-[#00B67A] text-white rounded">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </span>
                ))}
                <span className="ml-2 font-black text-white text-lg">4.8</span>
                <span className="text-zinc-500 text-sm">/ 5</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1 font-medium">
                Rated <strong className="text-zinc-200">Excellent</strong> based on <span className="underline decoration-zinc-600">42,850+ verified customer reviews</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>100% Free Size Exchanges</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span>Artist Royalties Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Eco-Friendly Printing</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-[#1b1d23] p-5 rounded-2xl border border-zinc-800 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="p-0.5 bg-[#00B67A] text-white rounded-xs">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500">{rev.date}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{rev.title}</h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">"{rev.comment}"</p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-300">{rev.name}</span>
                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-300 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded-full font-medium">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Verified Buyer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
