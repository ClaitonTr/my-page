import React from 'react';
import { FaJs, FaHtml5, FaCss3, FaPython, FaGithub, FaReact, FaNodeJs, FaJava } from 'react-icons/fa'
import Flutter from '../../assets/flutterio-icon.svg';
import { FormattedMessage } from 'react-intl';
import Foto from '../../assets/minhafoto.jpg';
import Header from '../../components/Header';


import './about_style.css';

const About = () => {
    return (
        <div className="container">
            <div className="content">
                <Header />
                <main id="main-about">
                    <div id="top-content">
                        <img
                            id="foto" 
                            src={Foto}
                            alt="Foto"
                        />
                        <section id="description">
                            <h1><FormattedMessage id="about.title" /></h1>
                            <p><FormattedMessage id="about.description" /></p>
                        </section>
                    </div>
                    <div id="bottom-content">
                        <h1><FormattedMessage id="about.sec-title" /></h1>
                            <div id="logos">
                                <div id="tooltip-js">
                                    <FaJs/>
                                    <span>JavaScript</span>
                                </div>
                                <div id="tooltip-html">
                                    <FaHtml5/>
                                    <span>HTML</span>
                                </div>
                                <div id="tooltip-css">
                                    <FaCss3/>
                                    <span>CSS</span>
                                </div>
                                <div id="tooltip-java">
                                    <FaJava/>
                                    <span>Java</span>
                                </div>
                                <div id="tooltip-py">
                                    <FaPython/>
                                    <span>Python</span>
                                </div>
                                <div id="tooltip-github">
                                    <FaGithub/>
                                    <span>Github</span>
                                </div>
                                <div id="tooltip-flutter">
                                    <img src={Flutter} alt="Flutter"/>
                                    <span>Flutter</span>
                                </div>
                                <div id="tooltip-node">
                                    <FaNodeJs/>
                                    <span>Node JS</span>
                                </div>
                                <div id="tooltip-react">
                                    <FaReact/>
                                    <span>ReactJS</span>
                                </div>
                            </div>
                            <FormattedMessage id="about.learning" />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default About;