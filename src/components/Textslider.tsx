'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TextSlider = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    "🎉 Afrofest isn't just a party, it's a movement. Join us as we dance across borders, blending beats, cultures, and energies into a night of pure, global connection. 💫",
    '🥁 Experience the vibrant rhythms and soulful energy of African culture, where every beat tells a story. 🌍',
    '💃 Join our global celebration of unity, diversity and pure musical joy. ✨',
    '🎵 Feel the rhythm of Africa pulse through your soul, where tradition meets modern vibes. 🌟',
    "🤝 One dance floor, countless stories, infinite possibilities. Let's celebrate together! 🎊",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[100px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={current}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 text-gray-300 max-w-[600px]"
        >
          {slides[current]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default TextSlider;
