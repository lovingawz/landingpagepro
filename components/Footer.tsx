'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { useLanguageContext } from '@/lib/LanguageContext';

export default function Footer() {
  const { language } = useLanguageContext();
  const footerConfig = siteConfig.footer[language as keyof typeof siteConfig.footer];

  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <p>{footerConfig.copyright}</p>
          <nav>
            <ul className="flex space-x-4">
              {footerConfig.links.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="text-gray-600 hover:text-gray-800">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}