'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from './config';

export function useLanguage() {
  const [language, setLanguage] = useState(siteConfig.defaultLanguage);

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang && siteConfig.languages.includes(storedLang)) {
      setLanguage(storedLang);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    if (siteConfig.languages.includes(lang)) {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  return { language, changeLanguage };
}