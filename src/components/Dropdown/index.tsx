import React, { useState, useEffect, useRef } from 'react';
import { MdTranslate, MdKeyboardArrowDown } from 'react-icons/md';
import LanguageContext from '../../translations/language-context';

import './dropdown_style.css';

const Dropdown: React.FC = () => {
    
    const langs = [
        'Português',
        'English'
    ];
      
    const [isOpen, setDropDown] = useState(false);
    const refDropDown = useRef<HTMLDivElement>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClickOutside = (event: Event) => {
        if(isOpen) {
            if (refDropDown.current && !refDropDown.current.contains(event.target as Node)) {
                setDropDown(false);
            }
        }
    }

    useEffect(() => {
        //document.addEventListener('click', handleClickOutside, true);
        ['click', 'touchend'].forEach(handler => document.addEventListener(handler, handleClickOutside, true));
        return () => {
            //document.removeEventListener('click', handleClickOutside, true);
            ['click', 'touchend'].forEach(handler => document.removeEventListener(handler, handleClickOutside, true));
        };
        
    }, [handleClickOutside]);

    function openMenu() {
        setDropDown(!isOpen);
    }

    return (
        <LanguageContext.Consumer>
            {({ language, switchLanguage }) => (
                <div id="dropdown" ref={refDropDown}>
                    <button onClick={openMenu}><MdTranslate id="icon-left" /> {language} <MdKeyboardArrowDown id="icon-right" /></button>
                    <div id="items">
                        {isOpen ? <ul>
                            {langs.map(lang => (
                                <li
                                    key={lang}
                                    onClick={() => { switchLanguage(lang); setDropDown(false); }}
                                >
                                    {lang}
                                </li>
                            ))
                            }
                        </ul> :
                            null}
                    </div>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}
export default Dropdown;