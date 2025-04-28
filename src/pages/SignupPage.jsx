import { useState } from 'react';
import { GoogleIcon, FacebookIcon } from '../assets/SocialIcons';
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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        <div className="md:w-1/2 flex flex-col items-center justify-center p-8 bg-gray-700">
          <div className="w-72 mx-auto flex items-center justify-center" style={{height: 320, marginTop: 40}}>
            <AvatarCanvas scale={1.2} modelPath="/avatar2.glb" position={[0, -1.2, 0]} />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Create Your Account</h2>
            <p className="text-gray-300">Sign up to start your virtual fitting experience</p>
          </div>
        </div>
        <form className="md:w-1/2 p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-700 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
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
          <input
            type="text"
            name="measurements"
            placeholder="Body Measurements (optional)"
            value={form.measurements}
            onChange={handleChange}
            className="border border-gray-700 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/80 transition"
          >
            Sign Up
          </button>
          <div className="flex items-center my-2">
            <div className="flex-grow h-px bg-gray-700" />
            <span className="mx-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-700" />
          </div>
          <button type="button" className="flex items-center justify-center gap-2 border border-gray-700 rounded-lg py-2 hover:bg-gray-700 transition text-white">
            <GoogleIcon className="w-5 h-5" /> Sign up with Google
          </button>
          <button type="button" className="flex items-center justify-center gap-2 border border-gray-700 rounded-lg py-2 hover:bg-gray-700 transition text-white">
            <FacebookIcon className="w-5 h-5" /> Sign up with Facebook
          </button>
          <div className="text-sm text-center mt-2 text-gray-300">
            Already have an account? <Link to="/login" className="text-primary hover:underline">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
