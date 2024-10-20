'use client';

import { createContext, useContext } from 'react';
import { siteConfig } from './config';

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: siteConfig.defaultLanguage,
  changeLanguage: () => {},
});

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider = LanguageContext.Provider;