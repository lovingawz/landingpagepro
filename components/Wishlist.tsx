'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Wishlist() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('wishlist')
        .insert({ email });

      if (error) throw error;
      setMessage('Thank you for joining our wishlist!');
      setEmail('');
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Join Our Wishlist</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Join Wishlist
          </button>
        </form>
        {message && <p className="text-center mt-4">{message}</p>}
      </div>
    </div>
  );
}