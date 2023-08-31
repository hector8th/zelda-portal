import React from 'react'

// ***
// THE NAV WILL HAVE [TIMELINES], [ABOUT US], [CONTACT]
// ***

function unhideTimelines() {
    const timeWindow = document.getElementById('timelines-window');
    const aboutWindow = document.getElementById('about-window');
    const contactWindow = document.getElementById('contact-window');
    timeWindow.classList.toggle('hide');
    aboutWindow.classList.add('hide');
    contactWindow.classList.add('hide');
}

function unhideAboutUs() {
    const timeWindow = document.getElementById('timelines-window');
    const aboutWindow = document.getElementById('about-window');
    const contactWindow = document.getElementById('contact-window');
    timeWindow.classList.add('hide');
    aboutWindow.classList.toggle('hide');
    contactWindow.classList.add('hide');
}

function unhideContact() {
    const timeWindow = document.getElementById('timelines-window');
    const aboutWindow = document.getElementById('about-window');
    const contactWindow = document.getElementById('contact-window');
    timeWindow.classList.add('hide');
    aboutWindow.classList.add('hide');
    contactWindow.classList.toggle('hide');
}

function Nav() {
    return (
        <div className='nav'>
            <div>
                <ul>
                    <li className='navFont' onClick={unhideTimelines}>Timelines</li>
                    <li className='navFont' onClick={unhideAboutUs}>About Us</li>
                    <li className='navFont' onClick={unhideContact}>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav