import { createContext } from 'react';

type LanguageContext = {
    language: string,
    switchLanguage(lang: string): void,
  };

export default createContext<LanguageContext>({
    language: 'Português',
    switchLanguage: (lang) => {}
});
