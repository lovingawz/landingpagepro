'use client';

import { useLanguageContext } from '@/lib/LanguageContext';
import { siteConfig } from '@/lib/config';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguageContext();

  return (
    <div className="flex space-x-2">
      {siteConfig.languages.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-2 py-1 rounded ${
            language === lang ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}