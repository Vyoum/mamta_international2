import { Button } from "@/components/Button";
import ProductCard from "@/components/ProductCard";

export default function Collection() {
  const products = [
    {
      id: 1,
      title: "The Seraphina Gown",
      collection: "Heritage Collection - Hand-Woven Silk",
      price: "$4,250",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Luna Embroidered Slip",
      collection: "The Atelier - Crystal Embellishment",
      price: "$3,800",
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Nocturnal Tulle Maxi",
      collection: "Couture - Layered French Tulle",
      price: "$5,100",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Elysian Wrap Gown",
      collection: "Heritage Collection - Liquid Satin",
      price: "$2,900",
      image: "https://images.unsplash.com/photo-1515347619152-ed252878d6b8?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-surface min-h-screen">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row min-h-[40vh] border-b border-outline-variant/30">
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-surface-container-low/30">
          <h1 className="font-serif text-5xl md:text-6xl text-on-surface mb-6 leading-tight">The Bridal <br/><i className="font-serif italic text-primary">Heritage</i></h1>
          <p className="text-secondary text-sm max-w-md leading-loose">
            Discover our curation of handcrafted evening gowns and bridal couture, where each thread tells a story of timeless elegance and contemporary silhouettes.
          </p>
        </div>
        <div className="hidden lg:block lg:w-1/2 bg-surface-container-lowest relative">
           {/* Empty or subtle texture per design */}
           <div className="absolute bottom-10 right-10">
              <span className="text-[10px] tracking-[0.2em] uppercase text-outline flex items-center gap-2 cursor-pointer hover:text-on-surface transition-colors">
                 Refine By
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </span>
           </div>
        </div>
      </div>

      {/* Toolbar / Filters */}
      <div className="container mx-auto px-6 py-6 flex flex-wrap justify-between items-center text-xs tracking-widest text-on-surface-variant font-medium border-b border-outline-variant/10">
        <div className="flex gap-10">
           <div className="flex flex-col gap-2">
             <span className="text-[10px] uppercase text-outline">Collection</span>
             <span className="flex items-center gap-2 cursor-pointer hover:text-on-surface">Summer Atelier '24 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
           </div>
           <div className="flex flex-col gap-2">
             <span className="text-[10px] uppercase text-outline">Fabric</span>
             <span className="flex items-center gap-2 cursor-pointer hover:text-on-surface">Pure Silk & Tulle <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
           </div>
           <div className="flex flex-col gap-2">
             <span className="text-[10px] uppercase text-outline">Silhouette</span>
             <span className="flex items-center gap-2 cursor-pointer hover:text-on-surface">All Forms <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
           </div>
        </div>
        <div className="flex gap-4 items-center">
           <button className="bg-outline-variant/20 px-4 py-2 hover:bg-outline-variant/40 transition-colors">Reset All</button>
           <span className="text-outline uppercase text-[10px]">Showing 24 Gowns</span>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 items-start">
          
          {/* Item 1 */}
          <div className="mt-0">
             <ProductCard title={products[0].title} price={products[0].price} collection={products[0].collection} imageUrl={products[0].image} href="/product/the-seraphina-gown" showHeart showAddToCart />
          </div>

          {/* Item 2: Offset */}
          <div className="mt-12">
             <ProductCard title={products[1].title} price={products[1].price} collection={products[1].collection} imageUrl={products[1].image} href="/product/luna-slip" showHeart showAddToCart />
          </div>

          {/* Item 3 */}
          <div className="mt-0">
             <ProductCard title={products[2].title} price={products[2].price} collection={products[2].collection} imageUrl={products[2].image} href="/product/nocturnal-tulle" showHeart showAddToCart />
          </div>

          {/* Spotlight Interstitial spanning 2 columns */}
          <div className="lg:col-span-2 bg-surface-container-low p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 mt-12">
             <div className="w-full md:w-1/2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-outline mb-4 block">Seasonal Spotlight</span>
                <h2 className="font-serif text-3xl lg:text-4xl text-on-surface mb-6 leading-tight">The Imperial<br/>Silk<br/><i className="italic">Column</i></h2>
                <p className="text-secondary text-sm leading-loose mb-8">
                   A masterclass in restraint and architectural tailoring. Crafted from double-faced heavy silk satin.
                </p>
                <Button variant="tertiary">Discover The Making</Button>
             </div>
             <div className="w-full md:w-1/2">
                <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800" alt="Silk detail" className="w-full h-80 object-cover" />
             </div>
          </div>

          {/* Item 4 */}
          <div className="mt-12">
             <ProductCard title={products[3].title} price={products[3].price} collection={products[3].collection} imageUrl={products[3].image} href="/product/elysian-wrap" showHeart showAddToCart />
          </div>

        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-32 border-t border-outline-variant/30 pt-16">
           <div className="flex items-center gap-8 text-[10px] tracking-[0.2em] uppercase text-outline">
              <span className="cursor-not-allowed opacity-50">Previous</span>
              <div className="flex gap-6 text-on-surface-variant">
                 <span className="text-on-surface border-b pb-1 border-primary font-bold">01</span>
                 <span className="cursor-pointer hover:text-on-surface transition-colors">02</span>
                 <span className="cursor-pointer hover:text-on-surface transition-colors">03</span>
                 <span className="cursor-pointer hover:text-on-surface transition-colors">04</span>
              </div>
              <span className="cursor-pointer hover:text-on-surface transition-colors">Next</span>
           </div>
        </div>
      </div>

    </div>
  );
}
