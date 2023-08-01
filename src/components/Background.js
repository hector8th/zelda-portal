import './ZeldaStyles.css';
import './responsive.css';
import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Content from './Content.js';
import Footer from './Footer.js';

// cd C:\Users\iH3X\Desktop\CODING\GitHub\zelda-portal-app

function Background() {
    return (
        <div className ='background'>
            <Header />
            <div className='App-Nav-Content'>
                <Nav />
                <Content />
            </div>
            <Footer />
        </div>
    )
}

export default Background