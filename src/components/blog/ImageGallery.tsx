"use client";

import { useState } from "react";

export default function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mb-10">
      {/* Main image */}
      <div className="rounded-2xl overflow-hidden border border-border-light mb-3 h-[400px] md:h-[500px] bg-gray-50">
        <img src={images[selected]} alt={`${alt} - ${selected + 1}`} className="w-full h-full object-contain" />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === selected
                  ? "border-primary-green ring-2 ring-primary-green/20"
                  : "border-border-light hover:border-primary-green/40"
              }`}
            >
              <img src={img} alt={`${alt} - ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
