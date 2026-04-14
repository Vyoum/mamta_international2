import { Button } from "@/components/Button";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      title: "Aurelia Embroidered Silk Gown",
      collection: "COUTURE COLLECTION | IVORY GOLD",
      size: "EU 38",
      qty: 1,
      price: "$4,250",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      title: "Luna Velvet Draped Gown",
      collection: "THE ATELIER | MIDNIGHT BLUE",
      size: "EU 40",
      qty: 1,
      price: "$3,800",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      title: "Rose Garden Tulle Gown",
      collection: "HERITAGE | BLUSH PINK",
      size: "EU 36",
      qty: 1,
      price: "$5,100",
      image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="bg-surface min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-4xl text-on-surface mb-2">Your Shopping Bag</h1>
        <p className="text-secondary text-sm mb-16">3 exquisite pieces selected for your collection</p>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Cart Items */}
          <div className="w-full lg:w-2/3 flex flex-col gap-12">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-8 group">
                <div className="w-32 md:w-48 aspect-[3/4] bg-surface-container-low shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex-1 flex flex-col pt-2">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-serif text-xl text-on-surface">{item.title}</h3>
                    <p className="font-medium text-on-surface-variant shrink-0">{item.price}</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-outline mb-6">{item.collection}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-on-surface-variant mb-auto">
                    <span>Size: {item.size}</span>
                    <span>Qty: {item.qty}</span>
                  </div>

                  <div className="flex gap-6 mt-6">
                    <Button variant="tertiary" className="text-xs !tracking-[0.1em] gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                      EDIT
                    </Button>
                    <Button variant="tertiary" className="text-xs !tracking-[0.1em] gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                      REMOVE
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-surface-container-low p-10 sticky top-32">
              <h2 className="font-serif text-2xl italic text-on-surface mb-8">Summary</h2>
              
              <div className="space-y-4 text-sm mb-10">
                <div className="flex justify-between text-secondary">
                  <span>Subtotal</span>
                  <span>$13,150</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Complimentary Shipping</span>
                  <span className="italic text-on-surface-variant">Standard Duty-Free</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Taxes</span>
                  <span>$1,052</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-body border-outline-variant/30 pt-6 mb-10">
                <span className="font-serif text-xl">Total</span>
                <span className="font-serif text-2xl text-on-surface">$14,202</span>
              </div>

              <Button variant="primary" className="w-full mb-4">Secure Checkout</Button>
              <p className="text-[10px] text-center uppercase tracking-[0.1em] text-outline mb-10">Includes personalized fitting consultation</p>

              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.1em] text-on-surface-variant mb-4">Gift Message or Promo Code</p>
                <div className="flex border border-outline-variant/50 bg-transparent">
                  <input type="text" placeholder="ENTER CODE" className="bg-transparent flex-1 px-4 py-3 outline-none text-sm placeholder:text-outline/50" />
                  <button className="text-[10px] uppercase font-bold tracking-[0.1em] px-4 text-on-surface hover:text-primary transition-colors">Apply</button>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="relative z-10 text-white">
                   <p className="text-[10px] tracking-[0.2em] uppercase mb-2">Accessories</p>
                   <h3 className="font-serif text-2xl italic">Silk Wrapped Pumps</h3>
                </div>
             </div>
             
             {/* Right two stacked or side by side images */}
             <div className="w-full md:w-1/4 h-full relative group overflow-hidden bg-black flex flex-col justify-end p-6 text-left hidden md:flex">
                <img src="https://images.unsplash.com/photo-1599643478524-fb66f7f6f1f4?auto=format&fit=crop&q=80&w=600" alt="Jewelry" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="relative z-10 text-white">
                   <h3 className="font-serif text-lg italic">Ethereal Choker</h3>
                </div>
             </div>
             
             <div className="w-full md:w-1/4 h-full relative group overflow-hidden bg-black flex flex-col justify-end p-6 text-left hidden md:flex">
                <img src="https://images.unsplash.com/photo-1566958769312-82cef41d19ef?auto=format&fit=crop&q=80&w=600" alt="Clutch" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
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
