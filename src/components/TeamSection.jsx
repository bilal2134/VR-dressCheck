import shammo1 from '../assets/shammo1.png';
import shammo4 from '../assets/shammo4.png';
import Talal from '../assets/Talal.png';
import Shahroze from '../assets/Shahroze.png';

const team = [
  {
    name: 'Shahmeer Ahmed',
    role: 'CEO & Product Lead',
    bio: 'Visionary in fashion tech, passionate about user experience.',
    photo: shammo1,
  },
  {
    name: 'Talal Hussain Rizvi',
    role: 'CTO & 3D Systems',
    bio: 'Expert in 3D graphics and real-time rendering.',
    photo: Talal,
  },
  {
    name: 'Shahroze Khan',
    role: 'Head of Design',
    bio: 'UI/UX specialist with a love for elegant interfaces.',
    photo: Shahroze,
  },
  {
    name: 'Luca Rossi',
    role: 'Engineering Lead',
    bio: 'Full-stack engineer focused on scalable web apps.',
    photo: shammo4,
  },
];

const TeamSection = () => (
  <section id="team" className="py-20 bg-gray-800">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.name} className="bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <img src={member.photo} alt={member.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-primary" />
            <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
            <span className="text-white text-sm mb-2">{member.role}</span>
            <p className="text-gray-200 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;