import shammo1 from '../assets/dp.png';
import Talal from '../assets/Talal.png';
import Shammo from '../assets/shammo4.png';

const testimonials = [
  {
    name: 'Bilal Shakeel',
    quote: 'FitCheck let me try on dozens of outfits in minutes. The avatar looks just like me!',
    avatar: shammo1,
  },
  {
    name: 'Talal Rizvi',
    quote: 'I finally found jeans that fit perfectly. No more returns!',
    avatar: Talal,
  },
  {
    name: 'Shahmeer',
    quote: 'The 3D preview is so realistic. Shopping online is fun again!',
    avatar: Shammo,
  },
];

const UserTestimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-900">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">What Our Beta Testers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-gray-800 rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition">
            <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-primary" />
            <p className="text-gray-200 italic mb-4">“{t.quote}”</p>
            <span className="font-semibold text-primary">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UserTestimonials;