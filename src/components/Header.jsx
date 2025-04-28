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
    <header className="fixed top-0 left-0 w-full z-30 bg-gray-900 shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-2 md:px-6 py-2">
        <span className="font-extrabold text-xl md:text-2xl text-white tracking-tight">FitCheck</span>
        <ul className="flex gap-2 md:gap-4 lg:gap-6 ml-2 md:ml-6">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer text-white hover:text-gray-300 font-medium transition text-xs md:text-sm lg:text-base"
                activeClass="text-gray-900 underline"
                spy={true}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-1 md:gap-3 lg:gap-4 ml-2 md:ml-4 items-center">
          {user ? (
            <>
              <span className="text-white font-semibold text-xs md:text-sm truncate max-w-[80px] md:max-w-[120px]">Hi, {user.displayName || user.email}</span>
              <a href="/recommend" className="px-2 md:px-3 py-1 bg-white text-primary rounded-full font-semibold text-xs md:text-sm shadow hover:bg-gray-100 transition whitespace-nowrap">Get Size</a>
              <a href="/try-fit" className="px-2 md:px-3 py-1 bg-white text-primary rounded-full font-semibold text-xs md:text-sm shadow hover:bg-gray-100 transition whitespace-nowrap">Try Fit</a>
              <a href="/try-arvr" className="px-2 md:px-3 py-1 bg-white text-primary rounded-full font-semibold text-xs md:text-sm shadow hover:bg-gray-100 transition whitespace-nowrap">Try AR/VR</a>
              <button onClick={logout} className="px-3 md:px-4 py-1.5 bg-primary text-white border border-white rounded-full font-semibold shadow hover:bg-primary/80 transition text-xs md:text-sm whitespace-nowrap">Logout</button>
            </>
          ) : (
            <>
              <a href="/signup">
                <button className="px-3 md:px-4 py-1.5 bg-white text-primary rounded-full font-semibold shadow hover:bg-gray-100 transition text-xs md:text-sm whitespace-nowrap">Sign Up</button>
              </a>
              <a href="/login">
                <button className="px-3 md:px-4 py-1.5 bg-primary text-white border border-white rounded-full font-semibold shadow hover:bg-primary/80 transition text-xs md:text-sm whitespace-nowrap">Log In</button>
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;