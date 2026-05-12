import React from 'react';

const tickerItems = [
  "Extra Spicy Available 🌶️",
  "Fire-Kissed BBQ 🔥",
  "Smash Burgers 🍔",
  "Malai Tikka 🍗",
  "Chapli Kebabs 🥙",
  "30-Min Delivery ⚡",
  "Authentic Charcoal Taste 🪵",
  "Farm-Fresh Ingredients 🥦",
  "Weekend Special: Buy 1 Get 1 Kebab 🍢",
];

export default function TickerBar() {
  // To make it seamless, we repeat the items
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full bg-primary text-white py-5 overflow-hidden border-y border-rose-700 z-10 shadow-lg mt-8 mb-4">
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-default">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center px-10">
            <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
