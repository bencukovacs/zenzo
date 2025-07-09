import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { translations } from './translations';

// Define the shape of the context data
type LanguageContextType = {
  language: 'hu' | 'en';
  setLanguage: (lang: 'hu' | 'en') => void;
  t: typeof translations.en; // 't' will have the shape of one of the translation objects
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the Provider component
// It will wrap our entire application
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'hu' | 'en'>('hu');
  const t = translations[language];

  const value = { language, setLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook for easy access to the context
// This is the hook our components will use
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
