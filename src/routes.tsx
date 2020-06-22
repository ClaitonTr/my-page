import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const Routes = () => 
    <BrowserRouter>
        <Route  component={Home} path="/" exact/> 
        <Route  component={About} path="/sobre" exact/> 
        <Route  component={Portfolio} path="/portfolio" exact/> 
        <Route  component={Contact} path="/contato" exact/>
    </BrowserRouter>

export default Routes;