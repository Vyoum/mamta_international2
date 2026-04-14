import Image from "next/image";
import { Button } from "@/components/Button";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  return (
    <div className="bg-surface min-h-screen pt-10">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Images and Details */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="w-full aspect-[3/4] relative bg-surface-container-low">
              <img 
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200" 
                alt="The Aurelia Silk Gown"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative bg-surface-container-low">
                 <img src="https://images.unsplash.com/photo-1515347619152-ed252878d6b8?auto=format&fit=crop&q=80&w=600" alt="Detail 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square relative flex items-center justify-center bg-surface-container-low overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=600" alt="Detail 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Column: Details (Sticky on Desktop) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 pb-24">
            <p className="text-xs tracking-[0.2em] text-outline uppercase mb-6">Couture Collection</p>
            <h1 className="font-serif text-5xl text-on-surface mb-6 leading-tight">The Aurelia Silk Gown</h1>
            <p className="text-xl font-serif italic text-primary-container mb-10">$12,400</p>
            
            <p className="text-sm text-secondary leading-loose mb-10">
              A masterpiece of fluid architecture, the Aurelia Gown is hand-crafted from 40 momme mulberry silk. Featuring a signature bias cut that drapes like liquid gold, every piece is individualized with heritage Zardosi embroidery.
            </p>

            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.1em] text-on-surface-variant font-semibold mb-4">Select Size</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {['FR 34', 'FR 36', 'FR 38', 'FR 40', 'FR 42'].map((size) => (
                  <button 
                    key={size}
                    className="w-14 h-14 border border-outline-variant/40 text-sm text-on-surface hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Button variant="tertiary">Size Guide</Button>
            </div>

            <div className="flex flex-col gap-4 mb-16">
              <Button variant="primary" className="w-full">Add to Bag</Button>
              <Button variant="secondary" className="w-full">Request An Appointment</Button>
            </div>

            <div className="border-t border-outline-variant/30 flex flex-col">
              {['Craftsmanship', 'Composition & Care', 'Shipping & Returns'].map((item, idx) => (
                <div key={idx} className="border-b border-outline-variant/30 py-6 flex justify-between items-center cursor-pointer group">
                  <span className="text-xs uppercase tracking-[0.1em] text-on-surface-variant font-semibold group-hover:text-primary transition-colors">{item}</span>
                  <span className="text-outline group-hover:text-primary transition-colors">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The Hand of the Artisan Section */}
      <section className="bg-surface-container-low py-32 mt-24">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-center relative h-auto lg:h-[600px]">
              <div className="w-full lg:w-1/2 h-[400px] lg:h-[700px] relative lg:absolute lg:-left-6 lg:-top-16 z-0">
                  <img src="https://images.unsplash.com/photo-1617325247661-675ab03407b3?auto=format&fit=crop&q=80&w=800" alt="Artisan detail" className="w-full h-full object-cover" />
              </div>
              <div className="w-full lg:w-2/5 lg:absolute lg:left-[45%] lg:top-[10%] bg-surface-container-lowest p-12 shadow-2xl z-20 border-[8px] border-surface-container-lowest outline outline-1 outline-outline-variant/20 -mt-20 lg:mt-0">
                 <img src="https://images.unsplash.com/photo-1596452296150-1def3c9b2d35?auto=format&fit=crop&q=80&w=800" alt="Stacked Fabric" className="w-full h-64 object-cover mb-10" />
                 <h3 className="font-serif text-3xl text-on-surface mb-6 italic">The Hand of the Artisan</h3>
                 <p className="text-secondary text-sm leading-loose mb-8">
                    Each Aurelia gown undergoes 300 hours of delicate hand-embroidery in our private atelier. Our master artisans use century-old techniques to ensure that no two pieces are ever truly identical, preserving the soul of the garment.
                 </p>
                 <Button variant="tertiary">Discover Our Heritage</Button>
              </div>
           </div>
        </div>
      </section>

      {/* Style With Section */}
      <section className="py-24 bg-surface container mx-auto px-6">
        <h3 className="text-center font-serif text-sm tracking-[0.2em] uppercase text-outline mb-16">Style With</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           <ProductCard 
              title="Aria Strappy Sandals" 
              price="$950" 
              imageUrl="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600" 
              href="#"
           />
           <ProductCard 
              title="Crescent Moon Clutch" 
              price="$1,290" 
              imageUrl="https://images.unsplash.com/photo-1566958769312-82cef41d19ef?auto=format&fit=crop&q=80&w=600" 
              href="#"
           />
           <ProductCard 
              title="Starfall Drop Earrings" 
              price="$2,100" 
              imageUrl="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600" 
              href="#"
           />
           <ProductCard 
              title="Ethereal Silk Wrap" 
              price="$400" 
              imageUrl="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600" 
              href="#"
           />
        </div>
      </section>
    </div>
  );
}
