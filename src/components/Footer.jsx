import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Terms', href: '#' },
];
const socialLinks = [
  { name: 'Twitter', href: 'https://bilalshakeel-portfolio.vercel.app/', icon: <FaTwitter className="w-7 h-7" /> },
  { name: 'Instagram', href: 'https://bilalshakeel-portfolio.vercel.app/', icon: <FaInstagram className="w-7 h-7" /> },
  { name: 'Facebook', href: 'https://bilalshakeel-portfolio.vercel.app/', icon: <FaFacebook className="w-7 h-7" /> },
];

const Footer = () => (
  <footer className="bg-primary text-white py-10 mt-10">
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start">
        <span className="font-bold text-xl mb-2">FitCheck</span>
        <div className="flex space-x-4 mb-2">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:underline text-white text-sm">{link.name}</a>
          ))}
        </div>
        <div className="flex items-center space-x-2 text-white text-sm">
          <EnvelopeIcon className="w-5 h-5 text-white" />
          <span>contact@fitcheck.com</span>
        </div>
      </div>
      <div className="flex space-x-4">
        {socialLinks.map(link => (
          <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
    <div className="text-center text-xs text-white mt-6">© {new Date().getFullYear()} FitCheck. All rights reserved.</div>
  </footer>
);

export default Footer;