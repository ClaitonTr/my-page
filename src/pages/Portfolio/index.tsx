import React, { useState } from 'react';
import Header from '../../components/Header';
import Site from '../../assets/home-site.png';
import { FiCode, FiEye, FiX } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';

import './portfolio_style.css';

const Portfolio = () => {
    const [viewImage, setVisible] = useState(false);
    const [src, setSrc] = useState('');

    function openImage(src: string) {
        setSrc(src);
        setVisible(true);
    }

    function close() {
        setVisible(false);
    }

    return (
        <div className="container">
            <div className="content">
                <Header />
                <main id="main-portfolio">
                    <ul id="project-grid">
                        <li>
                            <div className="project-content">
                                <img src={Site} alt="Site"/>
                                <div className="overlay">
                                    <div className="project-detail">
                                        <h3><FormattedMessage id="portfolio.this" /></h3>
                                        <div className="links">
                                            <a href="https://github.com/ClaitonTr/my-page" target="_blank" rel="noopener noreferrer"><FiCode /></a>
                                            <div className="eye" onClick={() => openImage(Site)}><FiEye /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </main>
                {viewImage? <div id="modal-image">
                    <span id="close" onClick={close}><FiX /></span>
                    <img src={src} alt="Site" id="image-opened"/>
                </div> : null}
            </div>
        </div>
    );
}
export default Portfolio;