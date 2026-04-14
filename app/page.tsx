import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] md:h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful Model in a Gown" 
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:hidden"></div>
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
          <div className="hidden md:block absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-end md:justify-center text-center text-surface-container-lowest px-6 pb-16 md:pb-0 max-w-3xl">
          <h1 className="font-serif text-[40px] md:text-7xl font-normal tracking-normal md:tracking-[-0.02em] mb-4 md:mb-6 drop-shadow-xl md:drop-shadow-lg leading-tight">
            Poetry in Silk
          </h1>
          
          {/* Mobile Text */}
          <p className="md:hidden text-xs font-medium mb-8 drop-shadow-md text-surface-container-low max-w-xl mx-auto leading-relaxed px-4 tracking-[0.02em]">
            Each thread woven with intention, each silhouette a masterpiece of the atelier.
          </p>
          
          {/* Desktop Text */}
          <p className="hidden md:block text-lg md:text-xl font-medium mb-12 drop-shadow-md text-surface-container-low max-w-xl leading-relaxed">
            Discover the Spring/Summer '24 collection: where our heritage merges with contemporary silhouettes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center mt-4 md:mt-0 md:gap-6 w-full">
            {/* Desktop Buttons */}
            <Button variant="primary" className="hidden md:flex flex-1 justify-center bg-primary/90 backdrop-blur-sm border border-primary-container text-surface-container-lowest hover:bg-primary uppercase min-w-[240px]">
              Explore Collection
            </Button>
            <Button variant="tertiary" className="hidden md:flex flex-1 justify-center text-surface-container-lowest border-surface-container-lowest hover:text-outline-variant min-w-[240px]">
              The Journal
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 md:py-24 bg-surface container mx-auto px-6">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-end mb-16 border-b border-outline-variant/30 pb-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl mb-4 text-on-surface">New Arrivals</h2>
            <p className="text-secondary text-sm leading-relaxed">
              Our latest creations hand-crafted in the atelier. Each piece is hand-finished and uniquely numbered, representing the pinnacle of sartorial excellence.
            </p>
          </div>
          <Button variant="tertiary">View All Arrivals</Button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 items-start">
          <div className="lg:-mt-12">
            <ProductCard title="The Aurelia Gown" collection="Ivory Collection" price="$12,400" imageUrl="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800" href="/product/aurelia-silk-gown" showHeart />
          </div>
          <div className="lg:mt-24">
            <ProductCard title="The Seraphina Slip" collection="Heritage Collection" price="$3,800" imageUrl="https://images.unsplash.com/photo-1572804013309-82a89b47afc2?auto=format&fit=crop&q=80&w=800" href="/product/seraphina-slip" showHeart />
          </div>
          <div className="lg:mt-8">
            <ProductCard title="The Nightfall Velvet" collection="Midnight Atelier" price="$5,100" imageUrl="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800" href="/product/nightfall-velvet" showHeart />
          </div>
        </div>

        {/* Mobile Header & Layout */}
        <div className="md:hidden flex flex-col mb-12">
          <div className="max-w-xl text-left border-b border-outline-variant/30 pb-4">
            <span className="text-[9px] uppercase tracking-[0.2em] text-outline block mb-2">MODERN HERITAGE</span>
            <h2 className="font-serif text-4xl mb-2 text-on-surface">New Arrivals</h2>
          </div>
        </div>

        <div className="flex flex-col gap-12 max-w-sm mx-auto md:hidden">
          {/* Card 1 */}
          <div className="w-full pb-4">
             <div className="bg-surface-container-low p-6 mb-4 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600" alt="The Aurelia Gown" className="w-full h-auto object-contain max-h-[400px] shadow-sm mix-blend-multiply" />
             </div>
             <div className="flex justify-between items-end border-b border-outline-variant/30 pb-3">
               <div className="flex flex-col gap-1">
                 <h3 className="font-serif text-lg text-on-surface">The Aurelia Gown</h3>
                 <p className="text-[10px] text-outline font-medium tracking-wide">Hand-pleated Tulle</p>
               </div>
               <span className="text-[8px] uppercase tracking-[0.2em] text-primary cursor-pointer hover:opacity-70">DETAILS</span>
             </div>
          </div>
          {/* Card 2 */}
          <div className="w-full pb-4">
             <div className="bg-surface-container-low p-10 mb-4 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600" alt="The Seraphina Slip" className="w-full h-auto object-contain max-h-[300px] shadow-sm mix-blend-multiply" />
             </div>
             <div className="flex justify-between items-end border-b border-outline-variant/30 pb-3">
               <div className="flex flex-col gap-1">
                 <h3 className="font-serif text-lg text-on-surface">The Seraphina Slip</h3>
                 <p className="text-[10px] text-outline font-medium tracking-wide">100% Mulberry Silk</p>
               </div>
               <span className="text-[8px] uppercase tracking-[0.2em] text-primary cursor-pointer hover:opacity-70">DETAILS</span>
             </div>
          </div>
        </div>
      </section>

      {/* The Atelier: Art of the Hand */}
      <section className="py-24 relative overflow-hidden bg-surface flex flex-col mb-10">
        {/* Desktop Layout */}
        <div className="hidden md:flex container mx-auto px-6 relative z-10 flex-col lg:flex-row items-center border border-outline-variant/20 p-0 shadow-[0_20px_40px_rgba(0,0,0,0.05)] bg-surface-container-low">
          <div className="w-full lg:w-3/5 h-[600px] relative">
             <img src="https://images.unsplash.com/photo-1617325247661-675ab03407b3?auto=format&fit=crop&q=80&w=1200" alt="Artisan hands embroidering silk" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-2/5 lg:-ml-24 bg-surface-container-lowest/90 backdrop-blur-[20px] p-12 lg:p-16 shadow-lg border border-outline-variant/20 z-20 mt-[-50px] lg:mt-0">
            <span className="text-xs uppercase tracking-[0.2em] text-outline mb-4 block">The Atelier</span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-on-surface leading-snug">The Atelier: Art of the Hand</h2>
            <p className="text-secondary text-sm leading-loose mb-10">Behind every gown lies hundreds of hours of painstaking hand embroidery and precision tailoring. Our master artisans in Milan, Paris, and London use techniques passed down for generations to construct forms of extraordinary drape and movement. We believe luxury is found in the hidden details.</p>
            <Button variant="tertiary">Discover The Process</Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex-col items-center bg-surface-container-lowest py-20 pb-0 w-full text-center">
          <span className="text-[9px] uppercase tracking-[0.2em] text-outline mb-4 block relative z-10">MASTERY OF FORM</span>
          <h2 className="font-serif text-4xl mb-6 text-on-surface relative inline-block z-10 w-full text-center">
            The Atelier
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] text-[240px] font-serif text-surface-container-low -z-10 leading-none pointer-events-none">M</span>
          </h2>
          <p className="text-secondary text-xs leading-loose max-w-sm mx-auto mb-12 px-6 relative z-10">
            Behind every Mamta International gown lies hundreds of hours of meticulous hand craftsmanship. Our master tailors preserve the heritage of haute couture with a vision for the modern silhouette.
          </p>
          <div className="w-full max-w-[280px] mx-auto mb-10 relative z-10">
            <img src="https://images.unsplash.com/photo-1550614000-4b95d4ed79ea?auto=format&fit=crop&q=80&w=800" alt="Artisan hands" className="w-full h-auto object-cover grayscale opacity-90 shadow-sm" />
          </div>
          <Button variant="secondary" className="border-outline-variant/50 text-[9px] tracking-[0.2em] px-10 py-3 relative z-10 bg-surface-container-lowest">
            Our Craftsmanship
          </Button>
        </div>
      </section>

      {/* Curated Essentials */}
      <section className="py-24 md:py-32 bg-surface text-center">
        {/* Desktop Header */}
        <h2 className="hidden md:block font-serif text-3xl italic mb-16 text-on-surface">Curated Essentials</h2>
        
        {/* Mobile Header */}
        <div className="md:hidden flex flex-col mb-12 bg-surface-container-low pb-2 pt-16">
          <span className="text-[9px] uppercase tracking-[0.2em] text-outline mb-2 block">EXQUISITE DETAILS</span>
          <h2 className="font-serif text-3xl mb-0 text-on-surface">Curated Essentials</h2>
        </div>

        <div className="container mx-auto px-6">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 auto-rows-[300px]">
            <div className="col-span-1 row-span-2 relative group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&q=80&w=800" alt="Black silk dress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="col-span-2 relative group overflow-hidden bg-primary-container/20">
               <img src="https://images.unsplash.com/photo-1515347619152-ed252878d6b8?auto=format&fit=crop&q=80&w=1200" alt="Silk draped" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="relative group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80&w=600" alt="Jewelry details" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
            </div>
            <div className="relative group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1550614000-4b95d4ed79ea?auto=format&fit=crop&q=80&w=600" alt="Bride walking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 top-center"/>
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-2 gap-3 max-w-[320px] mx-auto items-stretch -mt-8">
            <div className="col-span-1 row-span-2 relative group overflow-hidden bg-[#1D253A] flex flex-col justify-end p-3 min-h-[300px]">
              <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400" alt="Box" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40"/>
              <div className="relative z-10 w-full max-w-[85px] bg-surface-container-lowest py-2 shadow-sm text-center">
                <span className="text-[8px] uppercase tracking-[0.15em] text-on-surface">SHOP</span>
              </div>
            </div>
            <div className="col-span-1 row-span-1 relative group overflow-hidden bg-[#0A0A0A] flex flex-col justify-end p-3 aspect-[4/5] min-h-[145px]">
              <img src="https://images.unsplash.com/photo-1599643478524-fb66f7f6f1f4?auto=format&fit=crop&q=80&w=400" alt="Jewelry" className="absolute inset-0 w-full h-full object-cover opacity-90"/>
              <div className="relative z-10 w-full max-w-[85px] bg-surface-container-lowest/90 py-2 shadow-sm text-center backdrop-blur-sm self-start">
                <span className="text-[8px] uppercase tracking-[0.15em] text-on-surface">SHOP</span>
              </div>
            </div>
            <div className="col-span-1 row-span-1 relative group overflow-hidden bg-[#E23F32] flex flex-col justify-end p-3 aspect-[4/5] min-h-[145px]">
              <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400" alt="Perfume" className="absolute inset-0 w-full h-full object-contain p-2"/>
              <div className="relative z-10 w-full max-w-[85px] bg-surface-container-lowest py-2 shadow-sm text-center self-start">
                <span className="text-[8px] uppercase tracking-[0.15em] text-on-surface">SHOP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section (Mobile Only for now to match layout request) */}
      <section className="md:hidden py-16 pb-24 bg-surface text-center flex flex-col items-center justify-center container mx-auto px-6 border-b border-outline-variant/10">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" className="text-outline-variant/50 mb-8 w-8 h-8"><path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z"/></svg>
        <h2 className="font-serif italic text-2xl md:text-3xl max-w-sm leading-[1.4] mb-8 text-on-surface">
          "Fashion is the armor to survive the reality of everyday life."
        </h2>
        <span className="text-[9px] uppercase tracking-[0.2em] text-outline">
          - BILL CUNNINGHAM
        </span>
      </section>
    </div>
  );
}
