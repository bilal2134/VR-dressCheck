import { useState } from 'react';
import { GoogleIcon, FacebookIcon } from '../assets/SocialIcons'; // You will need to create these SVG icon components or use inline SVGs
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with authentication backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-2 text-center">Log In to FitCheck</h2>
        <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
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
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="mr-2 rounded"
              />
              Remember me
            </label>
            <a href="#" className="text-indigo-600 hover:underline text-sm">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Log In
          </button>
          <div className="flex items-center my-2">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
          <button type="button" className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <GoogleIcon className="w-5 h-5" /> Log in with Google
          </button>
          <button type="button" className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
            <FacebookIcon className="w-5 h-5" /> Log in with Facebook
          </button>
          <div className="text-sm text-center mt-2">
            Don&apos;t have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
