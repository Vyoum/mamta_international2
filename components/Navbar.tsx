"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "SALE", href: "/sale", highlight: true },
  { label: "ALL PRODUCTS", href: "/collections", hasDropdown: true },
  { label: "BESTSELLERS", href: "/bestsellers", hasDropdown: true },
  { label: "NEW IN", href: "/new", hasDropdown: true },
  { label: "DRESSES", href: "/dresses", hasDropdown: true },
  { label: "ACCESSORIES", href: "/accessories", hasDropdown: true },
  { label: "MARQUEE", href: "/marquee", badge: "LIMITED", badgeColor: "text-red-500", labelColor: "text-red-500", hasDropdown: true },
  { label: "ESSENTIALS", href: "/essentials", hasDropdown: true },
  { label: "CURVE", href: "/curve", hasDropdown: true },
  { label: "EXCLUSIVE", href: "/exclusive", hasDropdown: true },
  { label: "KIDS", href: "/kids", badge: "NEW", badgeColor: "text-red-500", hasDropdown: true },
  { label: "TRACK ORDER", href: "/track-order" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("[v0] Navbar rendered, isMenuOpen:", isMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-[20px] transition-all border-b border-surface-container-low/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
          
          {/* Mobile Hamburger (Left Side) */}
          <div className="flex-1 lg:hidden">
            <button 
              className="text-on-surface hover:opacity-70 transition-opacity flex items-center" 
              aria-label="Menu"
              type="button"
              onClick={() => {
                console.log("[v0] Hamburger clicked, setting menu open to true");
                setIsMenuOpen(true);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>

          {/* Brand */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0 lg:flex-none flex items-center justify-center">
            <Link href="/" className="flex flex-col items-center justify-center leading-none group hover:opacity-80 transition-opacity mt-2">
               <span className="font-bodoni text-[20px] lg:text-[32px] tracking-normal text-on-surface uppercase" style={{ transform: "scaleY(1.1)", transformOrigin: "bottom" }}>MAMTA</span>
               <span className="font-sans text-[7px] lg:text-[11px] tracking-[0.22em] text-on-surface uppercase mt-1 font-medium italic">International</span>
            </Link>
          </div>
          
          {/* Navigation Desktop */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
            <Link href="/collections" className="text-xs font-semibold tracking-[0.1em] text-on-surface-variant hover:text-on-surface transition-colors uppercase">
              Collections
            </Link>
            <Link href="#" className="text-xs font-semibold tracking-[0.1em] text-on-surface-variant hover:text-on-surface transition-colors uppercase">
              Couture
            </Link>
            <Link href="/collections" className="text-xs font-semibold tracking-[0.1em] text-outline hover:text-on-surface transition-colors uppercase">
              Heritage
            </Link>
            <Link href="#" className="text-xs font-semibold tracking-[0.1em] text-outline hover:text-on-surface transition-colors uppercase">
              The Atelier
            </Link>
            <Link href="#" className="text-xs font-semibold tracking-[0.1em] text-outline hover:text-on-surface transition-colors uppercase">
              Contact
            </Link>
          </nav>

          {/* Icons (Right Side) */}
          <div className="flex-1 lg:flex-none flex items-center justify-end gap-6">
            <button className="hidden lg:block text-on-surface hover:opacity-70 transition-opacity" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <Link href="/cart" className="text-on-surface hover:opacity-70 transition-opacity relative" aria-label="Shopping Bag">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1 -right-1 bg-primary text-surface-container-lowest text-[10px] w-3 h-3 flex items-center justify-center">1</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[65%] max-w-[320px] bg-white z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-on-surface hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col px-6 overflow-y-auto h-[calc(100%-140px)]">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center justify-between py-4 border-b border-gray-200 ${item.highlight || item.labelColor ? item.labelColor || 'text-red-500' : 'text-on-surface'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-sm font-semibold tracking-wide flex items-center gap-1">
                {item.label}
                {item.badge && (
                  <span className={`text-[10px] font-semibold ${item.badgeColor || 'text-red-500'}`}>
                    {item.badge}
                  </span>
                )}
              </span>
              {item.hasDropdown && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              )}
            </Link>
          ))}
        </nav>

        {/* Login at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
          <Link 
            href="/login" 
            className="flex items-center gap-3 text-on-surface hover:opacity-70 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="text-sm font-medium tracking-wide">LOGIN</span>
          </Link>
        </div>
      </div>
    </>
  );
}
