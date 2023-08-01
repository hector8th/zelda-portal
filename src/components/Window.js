import React from 'react'

function Window(props) {
    const {id, name, year, banner, wikiPage} = props.Timeline
    console.log(banner);
    const cssClass = `window-${id}`;

    function wikiWebPage() {
        window.open(`${wikiPage}`, "_blank");
    }
    
    return (
        <>
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

// import React from 'react'
// import { getZelda } from './Data.js';
// import React, {useState}  from 'react'
// import ogbanner from './media/banner-triforce.jpg'

// function Window(props) {
//     const {id, name, year, banner, wikiPage} = props.Timeline
//     console.log(banner);
    // const bannerList = getZelda();

    // const photoStyle = {
    //     backgroundImage: `url(${ogbanner})`,
    //     backgroundSize: '100%',
    //     backgroundPosition: 'bottom 500px right 0px'
    // };

    // // Generate a unique CSS class name based on the 'id' property
    // const cssClass = `window-${id}`;

    // // Dynamically create a new CSS style for this component
    // const dynamicStyle = 
    // `.${cssClass} {
    //     background-image: 'url(${banner})',
    // },`;

    // Create a new style element and append it to the head of the document
    // const styleElement = document.createElement('style');
    // styleElement.type = 'text/css';
    // styleElement.appendChild(document.createTextNode(dynamicStyle));
    // document.head.appendChild(styleElement);
    
//     function wikiWebPage() {
//         window.open(`${wikiPage}`, "_blank");
//     }
    
//     return (
//         <>
//             {/* onMouseOver={backgroundChange} */}
//             {/* style={photoStyle} */}
//             <div onClick={wikiWebPage}
//             className={`window font ${cssClass}`} id='container-bg'>
//                 <div className='container' id={id}>
//                     <div>
//                         {name}
//                     </div>
//                     <div>
//                         {year}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Window

