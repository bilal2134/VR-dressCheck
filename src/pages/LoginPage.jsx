import { useState } from 'react';
import { GoogleIcon, FacebookIcon } from '../assets/SocialIcons';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const LoginPage = () => {
  const navigate = useNavigate();
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

  // Modified function for Google login with redirect
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Redirect to home page after successful login
      navigate('/');
    } catch (error) {
      alert('Google sign-in failed: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-2 text-center">Log In to FitCheck</h2>
        <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-700 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-700 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-300">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="mr-2 rounded bg-gray-700 border-gray-600"
              />
              Remember me
            </label>
            <a href="#" className="text-primary hover:underline text-sm">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/80 transition"
          >
            Log In
          </button>
          <div className="flex items-center my-2">
            <div className="flex-grow h-px bg-gray-700" />
            <span className="mx-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-700" />
          </div>
          <button type="button" className="flex items-center justify-center gap-2 border border-gray-700 rounded-lg py-2 hover:bg-gray-700 transition text-white" onClick={handleGoogleLogin}>
            <GoogleIcon className="w-5 h-5" /> Log in with Google
          </button>
          <button type="button" className="flex items-center justify-center gap-2 border border-gray-700 rounded-lg py-2 hover:bg-gray-700 transition text-white">
            <FacebookIcon className="w-5 h-5" /> Log in with Facebook
          </button>
          <div className="text-sm text-center mt-2 text-gray-300">
            Don&apos;t have an account? <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
