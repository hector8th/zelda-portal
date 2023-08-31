import React from 'react'
import Window from './Window.js'
import Contact from './Contact.js'
import { getZelda } from './Data.js'
import X from './media/x.png'

function unhideMobileTimelines() {
    const timeWindow = document.getElementById('timelines-window');
    const aboutWindow = document.getElementById('about-window');
    const contactWindow = document.getElementById('contact-window');
    timeWindow.classList.toggle('hide');
    aboutWindow.classList.add('hide');
    contactWindow.classList.add('hide');
}

function unhideMobileAboutUs() {
    const timeWindow = document.getElementById('timelines-window');
    const aboutWindow = document.getElementById('about-window');
    const contactWindow = document.getElementById('contact-window');
    timeWindow.classList.add('hide');
    aboutWindow.classList.toggle('hide');
    contactWindow.classList.add('hide');
}

function unhideMobileContact() {
    const timeWindow = document.getElementById('timelines-window');
    const aboutWindow = document.getElementById('about-window');
    const contactWindow = document.getElementById('contact-window');
    timeWindow.classList.add('hide');
    aboutWindow.classList.add('hide');
    contactWindow.classList.toggle('hide');
}

function Content() {
    const zeldaList = getZelda();
    return (
        <div className='content' id='content-container'>
            <div className='content-window hide' id='timelines-window'>
                <img id='x-btn' className='x-logo' src={X} alt='cancel' onClick={unhideMobileTimelines}/>
                <text className='font-thick'>
                    <text>
                        <text className='directory'>The </text>Timeline Before the Split
                        <text className='directory'> is in white.</text>
                    </text>
                    <br />
                    <text>
                        <text className='directory'>The </text>
                        <text className='defeat'>Timeline where the Hero is Defeated</text>
                        <text className='directory'> is in pink.</text>
                    </text>
                    <br />
                    <text>
                        <text className='directory'>The </text>
                        <text className='child'>Timeline where the victorious Hero returns to the Past</text>
                        <text className='directory'> is in green.</text>
                    </text>
                    <br />
                    <text>
                        <text className='directory'>The </text>
                        <text className='adult'>Timeline after the victorious Hero 'disappears'</text>
                        <text className='directory'> is in orange.</text>
                    </text>
                    <br />
                    <text>
                        <text className='directory'>The </text>
                        <text className='newTimeline'>Timeline after the reconvergence of all 3 eras</text>
                        <text className='directory'> is in cyan.</text>
                    </text>
                    <br />
                    <br />
                    <text className='directory'>
                        Clicking on each banner will send you to a thorough Wiki page of the respective Zelda title!
                    </text>
                </text>
                {
                    zeldaList.map((tl) => <Window key={tl.id} Timeline = {tl}/>)
                }
            </div>
            <div className='content-window hide' id='about-window'>
                <img id='x-btn' className='x-logo' src={X} alt='cancel' onClick={unhideMobileAboutUs}/>
                <text className='font-thick directory'>
                    This is the Zelda Timeline as of 2023 - webpage created by <text className='child'>Uzezi Hector Atto</text>!<br/>
                    In the <text className='bold-underline'>Timelines</text> tab is a chronological list 
                    of The Legend of Zelda games including <text className='newTimeline'>Tears of the Kingdom</text>!
                </text>
                <text className='font-thick directory'>
                    ** Though it is not an official part of the Zelda timeline, I took
                    the liberty of adding <text className='newTimeline bold-underline'>Hyrule Warriors</text> to the timeline because it is the
                    only game before <text className='newTimeline bold-underline'>Breath of the Wild</text> that merges each timeline together
                    leaving the map of Hyrule resembling what it looks like in the latter game.
                </text>
            </div>
            <div className='content-window hide' id='contact-window'>
                <img id='x-btn' className='x-logo' src={X} alt='cancel' onClick={unhideMobileContact}/>
                <Contact />
            </div>
        </div>
    )
}

export default Content

