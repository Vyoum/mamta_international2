import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price?: string;
  collection?: string;
  imageUrl: string;
  href: string;
  showHeart?: boolean;
}

export default function ProductCard({ title, price, collection, imageUrl, href, showHeart }: ProductCardProps) {
  return (
    <Link href={href} className="group block w-full relative">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container-low mb-4">
        {/* Desaturate on hover to reveal subtle depth */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105 group-hover:saturate-50"
        />
        {showHeart && (
          <button className="absolute top-4 right-4 text-on-surface/60 hover:text-on-surface transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
        )}
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-serif text-lg text-on-surface group-hover:text-primary transition-colors">{title}</h3>
        </div>
        {collection && (
          <p className="text-[10px] uppercase tracking-[0.15em] text-outline">{collection}</p>
        )}
        {price && (
          <p className="text-sm font-medium text-on-surface-variant mt-2">{price}</p>
        )}
      </div>
    </Link>
  );
}
