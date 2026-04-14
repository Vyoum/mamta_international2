"use client";

import { useState, useEffect } from "react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=2000",
    alt: "Beautiful Model in a Gown",
  },
  {
    url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=2000",
    alt: "Elegant Evening Wear",
  },
  {
    url: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=2000",
    alt: "Luxury Fashion Collection",
  },
  {
    url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2000",
    alt: "High Fashion Model",
  },
];

interface HeroSliderProps {
  interval?: number;
}

export default function HeroSlider({ interval = 5000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <>
      {/* Background Images with Fade Transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover object-top"
          />
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:hidden"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
      <div className="hidden md:block absolute inset-0 bg-black/20"></div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:bottom-8">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-surface-container-lowest w-6"
                : "bg-surface-container-lowest/50 hover:bg-surface-container-lowest/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
