'use client';

import image1 from '@/images/home.jpeg';
import image2 from '@/images/image1.jpg';
import image3 from '@/images/image2.jpg';
import image4 from '@/images/image3.jpg';
import image5 from '@/images/image4.jpg';
import image6 from '@/images/image5.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    { src: image1, alt: 'image1' },
    { src: image2, alt: 'image2' },
    { src: image3, alt: 'image3' },
    { src: image4, alt: 'image4' },
    { src: image5, alt: 'image5' },
    { src: image6, alt: 'image6' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Image
            src={images[current].src}
            alt={images[current].alt}
            width={350}
            height={200}
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default ImageSlider;
