"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export default function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="space-y-10">
      {categories.map((category, catIdx) => (
        <div key={catIdx}>
          <h3 className="font-[var(--font-fustat)] text-xl md:text-2xl font-semibold text-teal-dark mb-4">
            {category.title}
          </h3>
          <div className="space-y-2">
            {category.items.map((item, itemIdx) => {
              const key = `${catIdx}-${itemIdx}`;
              const isOpen = openIndex === key;

              return (
                <div
                  key={key}
                  className={`border rounded-xl transition-all duration-300 ${
                    isOpen
                      ? "border-primary-green/30 bg-green-surface/30 shadow-sm"
                      : "border-border-light bg-white hover:border-primary-green/20"
                  }`}
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                  >
                    <span className="font-[var(--font-fustat)] text-base font-semibold text-teal-dark">
                      {item.question}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-text-secondary flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
