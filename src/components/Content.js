import React from 'react'
import Window from './Window.js'
import { getZelda } from './Data.js'

function Content() {
    const zeldaList = getZelda();
    return (
        <div className='content' id='content-container'>
            <div className='content-window hide' id='timelines-window'>
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
