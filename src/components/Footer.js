import React from 'react'

function resumeLink() {
    window.open('https://hector8th.github.io/resume', "_blank");
}

function Footer() {
    return (
        <div className='footer'>
            <text className='directory'>
                ** I do not own any Zelda or Nintendo-related content **
            </text>
            <p onClick={resumeLink} className='footerFont'>
                About Me
            </p>
        </div>
    )
}

export default Footer