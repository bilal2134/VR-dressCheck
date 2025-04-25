import avatarScan from '../assets/avatar-scan.png';
import collectionsUI from '../assets/collections-ui.png';
import avatarFit from '../assets/avatar-fit.png';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Create Your Avatar',
    description: 'Scan your body or enter measurements to generate your digital twin.',
    img: avatarScan,
  },
  {
    title: 'Browse Collections',
    description: 'Explore the latest fashion and select your favorite outfits.',
    img: collectionsUI,
  },
  {
    title: 'See The Perfect Fit',
    description: 'Preview clothes on your avatar for a true-to-life fit.',
    img: avatarFit,
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-gray-800">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">How It Works</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            className="flex-1 flex flex-col items-center text-center group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-32 h-32 mb-6 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
              <img src={step.img} alt={step.title} className="object-contain w-20 h-20" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
            <p className="text-gray-200 text-base">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;