import React from 'react';
import Image from '../../assets/contact.svg'
import { FiFacebook, FiInstagram, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import Header from '../../components/Header';

import './contact_style.css';

const Contact = () => {
    return (
        <div className="container">
            <div className="content">
                <Header />
                <main id="main-contact">
                    <img src={Image} alt="Decoration" />
                    <section id="info">
                        <h1><FormattedMessage id="contact.title" /></h1>
                        <div id="contact-links">
                            <a
                                title="Github"
                                href="https://github.com/claitontr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub />
                            </a>
                            <a
                                title="Linkedin"
                                href="https://br.linkedin.com/in/claiton-trindade-13bba7103"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiLinkedin />
                            </a>
                            <a
                                title="Instagram"
                                href="https://www.instagram.com/claitontr/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiInstagram />
                            </a>
                            <a
                                title="Facebook"
                                href="https://pt-br.facebook.com/claiton.trindade.7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiFacebook />
                            </a>
                        </div>
                        <div id="email">
                            <FiMail />
                            <p>claiton.t@protonmail.com</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
export default Contact;