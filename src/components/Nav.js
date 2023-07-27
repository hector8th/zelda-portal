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


// function unhideSkillWindow() {
//     const jobWindow = document.getElementById('job-window');
//     const educationWindow = document.getElementById('edu-window');
//     const skillWindow = document.getElementById('skill-window');
//     jobWindow.classList.add('hide');
//     educationWindow.classList.add('hide');
//     skillWindow.classList.toggle('hide');
// }

// function SideBar() {

//     return (
//         <div className="App-sidebar">
//             <h4 onClick={unhideJobWindow}>
//                 Work History
//             </h4>
//             <h4 onClick={unhideEduWindow}>
//                 Education
//             </h4>
//             <h4 onClick={unhideSkillWindow}>
//                 Skills
//             </h4>
//         </div>
//     )
// }

// export default SideBar