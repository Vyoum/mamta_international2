"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/Button"
import type { CartItem } from "@/lib/cart"
import { readCart, removeFromCart, updateQuantity } from "@/lib/cart"

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    setItems(readCart())
  }, [])

  const subtotal = useMemo(() => {
    return items.reduce((sum, i) => sum + (i.price || 0) * (i.quantity || 0), 0)
  }, [items])

  return (
    <div className="bg-surface min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-4xl text-on-surface mb-2">Your Shopping Bag</h1>
        <p className="text-secondary text-sm mb-16">
          {items.length > 0
            ? `${items.length} item${items.length === 1 ? "" : "s"} in your cart`
            : "Your cart is empty"}
        </p>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Cart Items */}
          <div className="w-full lg:w-2/3 flex flex-col gap-12">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.productId} className="flex gap-8 group">
                  <Link
                    href={`/products/${item.slug}`}
                    className="w-32 md:w-48 aspect-3/4 bg-surface-container-low shrink-0 relative overflow-hidden block"
                  >
                    {item.image ? (
                      // Keeping <img> here to avoid Next image config changes.
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-on-surface/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                    )}
                  </Link>
                  <div className="flex-1 flex flex-col pt-2">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <Link href={`/products/${item.slug}`} className="hover:underline">
                        <h3 className="font-serif text-xl text-on-surface">{item.name}</h3>
                      </Link>
                      <p className="font-medium text-on-surface-variant shrink-0">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-outline mb-6">
                      ${item.price.toLocaleString()} each
                    </p>

                    <div className="flex items-center gap-6 text-sm text-on-surface-variant mb-auto">
                      <div className="flex items-center gap-3">
                        <span className="text-xs uppercase tracking-[0.12em] text-outline">
                          Qty
                        </span>
                        <button
                          type="button"
                          className="w-9 h-9 border border-outline-variant/60 hover:border-on-surface text-on-surface transition-colors"
                          onClick={() => setItems(updateQuantity(item.productId, item.quantity - 1))}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="min-w-6 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          className="w-9 h-9 border border-outline-variant/60 hover:border-on-surface text-on-surface transition-colors"
                          onClick={() => setItems(updateQuantity(item.productId, item.quantity + 1))}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-6 mt-6">
                      <Button
                        variant="tertiary"
                        className="text-xs tracking-widest! gap-2"
                        onClick={() => setItems(removeFromCart(item.productId))}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                        REMOVE
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-10 text-center">
                <p className="text-sm text-on-surface/70 mb-6">
                  Your bag is empty. Explore the collection and add your favorites.
                </p>
                <Link
                  href="/products"
                  className="inline-block bg-on-surface text-surface-container-lowest py-3 px-8 text-sm uppercase tracking-wide hover:bg-on-surface/90 transition-colors"
                >
                  Browse products
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-surface-container-low p-10 sticky top-32">
              <h2 className="font-serif text-2xl italic text-on-surface mb-8">Summary</h2>
              
              <div className="space-y-4 text-sm mb-10">
                <div className="flex justify-between text-secondary">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Complimentary Shipping</span>
                  <span className="italic text-on-surface-variant">Standard Duty-Free</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Taxes</span>
                  <span className="italic text-on-surface-variant">Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-body border-outline-variant/30 pt-6 mb-10">
                <span className="font-serif text-xl">Total</span>
                <span className="font-serif text-2xl text-on-surface">
                  ${subtotal.toLocaleString()}
                </span>
              </div>

              <Button variant="primary" className="w-full mb-4" disabled={items.length === 0}>
                Secure Checkout
              </Button>
                <p className="text-[10px] text-center uppercase tracking-widest text-outline mb-10">Includes personalized fitting consultation</p>

              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">Gift Message or Promo Code</p>
                <div className="flex border border-outline-variant/50 bg-transparent">
                  <input type="text" placeholder="ENTER CODE" className="bg-transparent flex-1 px-4 py-3 outline-none text-sm placeholder:text-outline/50" />
                  <button className="text-[10px] uppercase font-bold tracking-widest px-4 text-on-surface hover:text-primary transition-colors">Apply</button>
                </div>
              </div>

              <ul className="space-y-4 text-xs text-on-surface-variant font-medium">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Authenticity Guaranteed
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Encrypted Checkout & Privacy
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Complete the Silhouette */}
      <section className="py-32 mt-16 bg-surface-container-lowest text-center">
        <h2 className="font-serif text-3xl mb-16 text-on-surface">Complete the Silhouette</h2>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 h-[350px] md:h-[450px]">
             {/* Left larger image */}
             <div className="w-full md:w-1/2 h-full relative group overflow-hidden bg-black flex flex-col justify-end p-8 text-left">
                <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800" alt="Shoes" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="relative z-10 text-white">
                   <p className="text-[10px] tracking-[0.2em] uppercase mb-2">Accessories</p>
                   <h3 className="font-serif text-2xl italic">Silk Wrapped Pumps</h3>
                </div>
             </div>
             
             {/* Right two stacked or side by side images */}
             <div className="w-full md:w-1/4 h-full relative group overflow-hidden bg-black hidden md:flex flex-col justify-end p-6 text-left">
                <img src="https://images.unsplash.com/photo-1599643478524-fb66f7f6f1f4?auto=format&fit=crop&q=80&w=600" alt="Jewelry" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="relative z-10 text-white">
                   <h3 className="font-serif text-lg italic">Ethereal Choker</h3>
                </div>
             </div>
             
             <div className="w-full md:w-1/4 h-full relative group overflow-hidden bg-black hidden md:flex flex-col justify-end p-6 text-left">
                <img src="https://images.unsplash.com/photo-1566958769312-82cef41d19ef?auto=format&fit=crop&q=80&w=600" alt="Clutch" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="relative z-10 text-white">
                   <h3 className="font-serif text-lg italic">Pearl Minaudière</h3>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
