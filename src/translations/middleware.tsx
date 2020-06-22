import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import LanguageContext from './language-context';

import portuguese from './pt.json';
import english from './en.json';

interface MidProps {
    children: React.ReactNode
}

const messages: { [key: string]: any }  = {
  'pt': portuguese,
  'en': english
};

const Middleware = (props: MidProps) => {
  const [langAbv, setLangAbv] = useState('pt');
  const [lang, setLang] = useState('Português');

  function changeLanguage(language: string) {
    setLang(language);
    if(language === 'Português') {
      setLangAbv('pt');
    }else {
      setLangAbv('en');
    }
  }

  return (
    <LanguageContext.Provider value={{ language: lang, switchLanguage: changeLanguage }} >
      <IntlProvider locale={langAbv} messages={messages[langAbv]}>
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  )

}

export default Middleware;