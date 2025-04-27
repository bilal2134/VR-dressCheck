import { useAuth } from './AuthProvider';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'How It Works', to: 'how-it-works' },
  { name: 'Benefits', to: 'key-benefits' },
  { name: 'Brands', to: 'featured-brands' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'Team', to: 'team' },
  { name: 'FAQ', to: 'faq' },
];

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-primary backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-extrabold text-2xl text-white tracking-tight">FitCheck</span>
        <ul className="flex gap-6">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer text-white hover:text-gray-900 font-medium transition"
                activeClass="text-gray-900 underline"
                spy={true}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 ml-8 items-center">
          {user ? (
            <>
              <span className="text-white font-semibold">Hi, {user.displayName || user.email}</span>
              <a href="/recommend" className="px-6 py-2 bg-white text-primary rounded-full font-semibold shadow hover:bg-gray-100 transition">Get Size Recommendation</a>
              <button onClick={logout} className="px-6 py-2 bg-primary text-white border border-white rounded-full font-semibold shadow hover:bg-primary/80 transition">Logout</button>
            </>
          ) : (
            <>
              <a href="/signup">
                <button className="px-6 py-2 bg-white text-primary rounded-full font-semibold shadow hover:bg-gray-100 transition">Sign Up</button>
              </a>
              <a href="/login">
                <button className="px-6 py-2 bg-primary text-white border border-white rounded-full font-semibold shadow hover:bg-primary/80 transition">Log In</button>
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;