import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Dropdown from '../Dropdown';

import './header_style.css';

const Header: React.FC =  () => {
    return (
        <header id="mainHeader">
                    <Link to="/"><h1>Claiton</h1></Link>
                    <nav>
                        <ul>
                            <li><Link to="/sobre"><FormattedMessage id="header.about" /></Link></li>
                            <li><Link to="/portfolio"><FormattedMessage id="header.portfolio" /></Link></li>
                            <li><Link to="/contato"><FormattedMessage id="header.contact" /></Link></li>
                        </ul>
                    </nav>
                    <Dropdown />
                </header>
    );
}

export default Header