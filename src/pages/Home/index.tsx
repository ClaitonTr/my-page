import React from 'react';
import Background from '../../assets/workspace.svg';
import { Link } from 'react-router-dom';
import { FiTerminal } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import Header from '../../components/Header';


import './home_style.css'

const Home = () => {
    return (
        <div className="container">
            <div className="content">
                <Header />
                <main id="main-home">
                    <img src={Background} alt="Background"/>
                    <section id="content-items">
                        <h1><FiTerminal/> <FormattedMessage id="home.title"/></h1>
                        <p><FormattedMessage id="home.description" /></p>
                        <Link to="/sobre"><FormattedMessage id="home.button" /></Link>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Home;