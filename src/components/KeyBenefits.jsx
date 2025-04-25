import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const benefits = [
  {
    icon: <ClockIcon className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Save Time',
    description: 'Eliminate physical try-ons and shop efficiently from home.',
  },
  {
    icon: <CheckCircleIcon className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Perfect Fit Every Time',
    description: 'Accurate 3D modeling ensures you always get the right size.',
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12 text-indigo-500 mb-4" />,
    title: 'Shop Confidently',
    description: 'Reduce returns by previewing your look before you buy.',
  },
];

const KeyBenefits = () => (
  <section id="key-benefits" className="py-20 bg-gray-900">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Key Benefits</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={benefit.title}
            className="flex-1 flex flex-col items-center text-center p-6 bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {benefit.icon}
            <h3 className="text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
            <p className="text-gray-200 text-base">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default KeyBenefits;