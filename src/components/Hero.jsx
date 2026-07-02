import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from '../assets/sizzle_banner_1.png';
import banner2 from '../assets/sizzle_banner_2.png';
import banner3 from '../assets/sizzle_banner_3.png';

const banners = [banner1, banner2, banner3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + banners.length) % banners.length);
  const next = () => setCurrent((p) => (p + 1) % banners.length);

  return (
    <div className="relative w-full overflow-hidden" style={{ marginTop: '72px', height: 'clamp(200px, 45vw, 600px)' }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={banners[current]}
          alt={`Banner ${current + 1}`}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${
              i === current ? 'bg-white w-6 h-2.5' : 'bg-white/50 w-2.5 h-2.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
