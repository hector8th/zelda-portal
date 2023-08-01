import React from 'react'
// import { getZelda } from './Data.js';
// import React, {useState}  from 'react'
// import ogbanner from './media/banner-triforce.jpg'

function Window(props) {
    const {id, name, year, banner, wikiPage} = props.Timeline
    console.log(banner);
    // const bannerList = getZelda();

    // const photoStyle = {
    //     backgroundImage: `url(${ogbanner})`,
    //     backgroundSize: '100%',
    //     backgroundPosition: 'bottom 500px right 0px'
    // };

    // Generate a unique CSS class name based on the 'id' property
    const cssClass = `window-${id}`;

    // Dynamically create a new CSS style for this component
    const dynamicStyle = 
    `.${cssClass} {
        background-image: 'url(${banner})',
    },`;

    // Create a new style element and append it to the head of the document
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(dynamicStyle));
    document.head.appendChild(styleElement);
    
    // function backgroundChange() {
    //     photoStyle.backgroundImage = `url(${bannerList[id].banner})`;
    // // backgroundImage: `url(${ogbanner})`,
    // }
 
    function wikiWebPage() {
        window.open(`${wikiPage}`, "_blank");
    }
    
    return (
        <>
            {/* onMouseOver={backgroundChange} */}
            {/* style={photoStyle} */}
            <div onClick={wikiWebPage}
            className={`window font ${cssClass}`} id='container-bg'>
                <div className='container' id={id}>
                    <div>
                        {name}
                    </div>
                    <div>
                        {year}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Window

   // backgroundImage: 'url(${banner})',
    // background-size: '100%',
    // background-position: 'bottom 300px right 0px'


// const [backgroundImage, setBackgroundImage] = useState(banner);

// const photoStyle = {
//     backgroundImage: `url(${banner})`,
//     backgroundSize: '100%',
//     backgroundPosition: 'bottom 300px right 0px',
// };

// function backgroundChange() {
//     // const ogBackground = document.getElementById('container-bg').style.backgroundImage;
//     document.getElementById('container-bg').style.backgroundImage = `url(${banner})`;
//     document.getElementById('container-bg').onmouseleave = function() {
//         document.getElementById('container-bg').style.backgroundImage = `url(${ogbanner})`;
//     }
// }

// function backgroundChange() {
//     setBackgroundImage(backgroundImage);
//     // document.getElementById('container-bg').onmouseleave = function() {
//     //     document.getElementById('container-bg').style.backgroundImage = `url(${ogbanner})`;
//     // }
// }





// import React, {useState} from 'react'

// function JobSection(props) {

//     const {jobCompany, jobTitle, doe, desc1, desc2, desc3, desc4} = props.Jobs
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//             <div>

//                 <h3 onClick={() => setIsOpen(!isOpen)} className='font' id='company-name'>{jobCompany}</h3>

//                 {isOpen && (
//                     <>
//                         <div className='fontInfo' id='job-info-1'>
//                             {jobTitle}
//                         </div>
//                         <div className='fontInfo' id='job-info-2'>
//                             {doe}
//                         </div>
//                         <div className='fontInfo' id='job-info-3'>
//                             {desc1}
//                         </div>
//                         <div className='fontInfo' id='job-info-4'>
//                             {desc2}
//                         </div>
//                         <div className='fontInfo' id='job-info-5'>
//                             {desc3}
//                         </div>
//                         <div className='fontInfo' id='job-info-6'>
//                             {desc4}
//                         </div>
//                     </>
//                 )
//                 }
//             </div>
//         </>
//     )
// }

// export default JobSection