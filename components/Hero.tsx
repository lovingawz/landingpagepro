'use client';

import { useLanguage } from '@/lib/useLanguage';
import { siteConfig } from '@/lib/config';

export default function Hero() {
  const { language } = useLanguage();
  const content = siteConfig.pages.home.components[0].content[language as keyof typeof siteConfig.languages];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{content.title}</h1>
        <p className="text-xl md:text-2xl mb-8">{content.description}</p>
        <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}