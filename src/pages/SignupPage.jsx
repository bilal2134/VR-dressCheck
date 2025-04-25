import { useState } from 'react';
import { GoogleIcon, FacebookIcon } from '../assets/SocialIcons'; // You will need to create these SVG icon components or use inline SVGs
import AvatarCanvas from '../three/AvatarCanvas';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    measurements: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with authentication backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        <div className="md:w-1/2 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-50 to-blue-100">
          <div className="w-40 h-40 mb-6">
            <AvatarCanvas />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">Create Your Account</h2>
            <p className="text-gray-600">Sign up to start your virtual fitting experience</p>
          </div>
        </div>
        <form className="md:w-1/2 p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="text"
            name="measurements"
            placeholder="Body Measurements (optional)"
            value={form.measurements}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
          <div className="flex items-center my-2">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
          <button type="button" className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <GoogleIcon className="w-5 h-5" /> Sign up with Google
          </button>
          <button type="button" className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <FacebookIcon className="w-5 h-5" /> Sign up with Facebook
          </button>
          <div className="text-sm text-center mt-2">
            Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
