import { useRef, useEffect } from 'react';
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';
import brand5 from '../assets/brand5.png';
import brand6 from '../assets/brand6.png';

const brands = [
  { name: 'BrandOne', logo: brand1 },
  { name: 'BrandTwo', logo: brand2 },
  { name: 'BrandThree', logo: brand3 },
  { name: 'BrandFour', logo: brand4 },
  { name: 'BrandFive', logo: brand5 },
  { name: 'BrandSix', logo: brand6 },
  // Add more as needed
];

const FeaturedBrands = () => {
  const stripRef = useRef();

  useEffect(() => {
    const strip = stripRef.current;
    let animId;
    let pos = 0;
    function animate() {
      pos -= 0.7; // speed
      if (strip) {
        strip.style.transform = `translateX(${pos}px)`;
        if (Math.abs(pos) > strip.scrollWidth / 2) {
          pos = 0;
        }
      }
      animId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  // Duplicate the brands array for seamless looping
  const logos = [...brands, ...brands];

  return (
    <section id="featured-brands" className="py-16 bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-primary">Featured Brands & Stores</h2>
        <div className="overflow-x-hidden relative">
          <div
            ref={stripRef}
            className="flex items-center gap-12 whitespace-nowrap will-change-transform"
            style={{ width: 'max-content' }}
          >
            {logos.map((brand, i) => (
              <div key={i} className="flex flex-col items-center min-w-[120px]">
                <img src={brand.logo} alt={brand.name} className="h-16 w-auto object-contain mb-2 grayscale hover:grayscale-0 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;