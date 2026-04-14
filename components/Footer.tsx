import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low pt-24 pb-8">
      {/* Desktop Footer */}
      <div className="hidden md:block container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <div className="flex flex-col items-center justify-center leading-none mb-6 mt-2">
            <span className="font-bodoni text-[32px] tracking-normal text-on-surface uppercase" style={{ transform: "scaleY(1.1)", transformOrigin: "bottom" }}>MAMTA</span>
            <span className="font-sans text-[11px] tracking-[0.22em] text-on-surface uppercase mt-1 font-medium">International</span>
          </div>
          <p className="text-sm text-secondary mb-8">
            Receive exclusive updates, heritage stories, and premier access to our seasonal collections.
          </p>
          <form className="w-full relative flex gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-transparent border-b border-outline pb-2 text-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-on-surface transition-colors"
            />
            <button type="submit" className="bg-primary text-surface-container-lowest px-10 py-3 text-sm tracking-[0.05em] font-medium hover:bg-on-surface transition-colors uppercase">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 text-sm text-secondary">
          <Link href="#" className="hover:text-on-surface transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-on-surface transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-on-surface transition-colors">Shipping & Returns</Link>
          <Link href="#" className="hover:text-on-surface transition-colors">Sustainability</Link>
          <Link href="#" className="hover:text-on-surface transition-colors">Store Locator</Link>
        </div>

        <div className="text-center font-serif italic text-primary-container mb-6">
          Crafting beauty since 1984.
        </div>

        <div className="text-center text-xs text-outline">
          &copy; {new Date().getFullYear()} Mamta International. All Rights Reserved.
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden container mx-auto px-6">
        <div className="flex flex-col items-center text-center mx-auto mb-16 px-6">
          <div className="flex flex-col items-center justify-center leading-none mb-8 mt-2">
            <span className="font-bodoni text-[24px] tracking-normal text-on-surface uppercase" style={{ transform: "scaleY(1.1)", transformOrigin: "bottom" }}>MAMTA</span>
            <span className="font-sans text-[8px] tracking-[0.2em] text-outline uppercase mt-1 font-medium">International</span>
          </div>

          <div className="flex justify-center items-center gap-6 mb-8 text-[8px] tracking-[0.2em] uppercase text-outline">
            <Link href="#" className="hover:text-on-surface transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-on-surface transition-colors">Terms</Link>
            <Link href="#" className="hover:text-on-surface transition-colors">Shipping</Link>
          </div>

          <div className="text-[7px] tracking-[0.2em] uppercase text-outline">
            &copy; {new Date().getFullYear()} Mamta International
          </div>
        </div>
      </div>
    </footer>
  );
}
