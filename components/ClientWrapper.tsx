'use client';

import { useLanguage } from '@/lib/useLanguage';
import { LanguageProvider } from '@/lib/LanguageContext';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const languageHook = useLanguage();

  return (
    <LanguageProvider value={languageHook}>
      {children}
    </LanguageProvider>
  );
}