'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguageContext } from '@/lib/LanguageContext';

export default function Header() {
  const { language } = useLanguageContext();
  const headerConfig = siteConfig.header[language as keyof typeof siteConfig.header];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src={headerConfig.logo} alt="Logo" width={100} height={50} />
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            {headerConfig.menu.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="text-gray-700 hover:text-gray-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}