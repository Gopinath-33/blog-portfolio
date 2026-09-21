import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setLoading(false);
        navigate('/home');
      })
      .catch((err) => {
        setLoading(false);
        console.error("Firebase Login Error:", err.code);
        if (
          err.code === 'auth/user-not-found' ||
          err.code === 'auth/wrong-password' ||
          err.code === 'auth/invalid-credential'
        ) {
          setError('Invalid email or password.');
        } else if (err.code === 'auth/invalid-email') {
          setError('Invalid email format.');
        } else {
          setError('Failed to login. Please try again.');
        }
      });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-500 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="relative w-full max-w-md">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/25 to-indigo-600/25 blur-3xl rounded-3xl pointer-events-none" />

          {/* Login Card */}
          <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="text-center mb-8 space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Welcome Back
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-white">
                Account <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Login</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Sign in to manage your portfolio and blogs.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
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

              {error && (
                <p className="p-2.5 rounded-lg bg-red-950/40 border border-red-800/40 text-red-400 text-xs mt-1">
                  ⚠️ {error}
                </p>
              )}

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-400">New around here?</span>
                <Link
                  to="/signup"
                  className="font-medium text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Register here →
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 cursor-pointer"
              >
                {loading ? 'Authenticating...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;