import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { LogIn } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (!success) {
        setError('Invalid email or password');
      }
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const demoUsers = [
    { email: 'admin@ncrst.na', role: 'CCM Administrator', department: 'CCM' },
    { email: 'oceo.editor1@ncrst.na', role: 'Editor', department: 'OCEO' },
    { email: 'marketing.editor1@ncrst.na', role: 'Editor', department: 'Marketing' },
    { email: 'checker@ncrst.na', role: 'Checker', department: 'Content Review' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#777675] via-[#6a6968] to-[#ffd332] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#ffd332] to-[#e6be2d] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-[#777675] font-bold text-2xl">N</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">NCRST Portal</h2>
          <p className="text-gray-200">Company Multi-Department CMS</p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl border-2 border-[#ffd332] p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd332] focus:border-[#ffd332]"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd332] focus:border-[#ffd332]"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center space-x-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[#777675] bg-gradient-to-r from-[#ffd332] to-[#e6be2d] hover:from-[#e6be2d] hover:to-[#d4a829] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd332] disabled:opacity-50 transition-all duration-200"
            >
              <LogIn className="h-4 w-4" />
              <span>{isLoading ? 'Signing in...' : 'Sign in'}</span>
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Demo accounts</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {demoUsers.map((user) => (
                <button
                  key={user.email}
                  onClick={() => {
                    setEmail(user.email);
                    setPassword('password');
                  }}
                  className="w-full text-left px-4 py-3 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="font-medium text-gray-900">{user.role}</div>
                  <div className="text-gray-600">{user.email}</div>
                  <div className="text-xs text-gray-500">{user.department}</div>
                </button>
              ))}
            </div>
            
            <p className="mt-4 text-xs text-gray-500 text-center">
              Password for all demo accounts: <code className="bg-gray-100 px-1 rounded">password</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}