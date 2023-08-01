import React from 'react'
import Window from './Window.js'
import { getZelda } from './Data.js'

function Content() {
    const zeldaList = getZelda();
    return (
        <div className='content' id='content-container'>
            <div className='content-window hide' id='timelines-window'>
                <text className='font-thick directory'>
                    This is the Zelda Timeline as of 2023! Below is a chronological list 
                    of The Legend of Zelda games including <text className='newTimeline'>Tears of the Kingdom</text>!
                </text>
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
                </text>
                <text className='font-thick directory'>
                    ** Though it is not an official part of the Zelda timeline, I took
                    the liberty of adding <text className='newTimeline bold-underline'>Hyrule Warriors</text> to the timeline because it is the
                    only game before Breath of the Wild that each timeline is merged together
                    leaving the map of Hyrule resembling what it looks like in the latter game.
                </text>
                {
                    zeldaList.map((tl) => <Window key={tl.id} Timeline = {tl}/>)
                }
            </div>
            <div className='content-window hide' id='about-window'>
                About Us here
            </div>
            <div className='content-window hide' id='contact-window'>
                Contact here
            </div>
        </div>
    )
}

export default Content

// import React from 'react'
// import JobSection from './JobSection.js';
// import { getJobs } from './JobData.js'

// function JobWindow() {

//     const jobList = getJobs();
    
//     return (
//         <div className='App-job-info hide' id='job-window'>
//             {
//                 jobList.map((job) => <JobSection Jobs = {job} />)
//             }
//         </div>
//     )
// }

// export default JobWindow
