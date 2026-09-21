import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';// src/firebase.js-la irundhu auth import pannanum
import Navbar from './common/Navbar';
import Footer from './common/Footer';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Password validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    try {
      // Firebase User Creation
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully:', userCredential.user);

      // Succcess aana pinnaadi login page-ku redirect
      navigate('/login');
    } catch (err) {
      console.error('Firebase Auth Error:', err.message);

      // Friendly Error Messages
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please login.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email format.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="relative w-full max-w-md">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/25 to-indigo-600/25 blur-3xl rounded-3xl pointer-events-none" />

          {/* Form Card */}
          <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="text-center mb-8 space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Get Started
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-white">
                Create an <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Account</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Sign up to join discussions, like posts, and share articles.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 placeholder-slate-500 focus:outline-none text-sm transition-all ${
                    error
                      ? 'border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-slate-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
                  }`}
                />
                {error && (
                  <p className="p-2.5 rounded-lg bg-red-950/40 border border-red-800/40 text-red-400 text-xs mt-2">
                    ⚠️ {error}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-400">Already have an account?</span>
                <Link
                  to="/login"
                  className="font-medium text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Login here →
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 cursor-pointer"
              >
                {loading ? 'Creating Account...' : 'Register'}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Signup;