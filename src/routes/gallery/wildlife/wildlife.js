import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

// import { listWLimagess } from '../../../graphql/queries';
import * as queries from '../../../graphql/queries';

import awsExports from "../../../aws-exports";
import { SRLWrapper } from 'simple-react-lightbox';

import './wildlife.scss';

Amplify.configure(awsExports);

// const allWLimages = await API.graphql({ query: queries.listWLimagess });
// console.log(allWLimages);

const Wildlife = () => {
    const [WLimages, setWLimages] = useState([])

    useEffect(() => {
        fetchWLimages()
    }, [])

    async function fetchWLimages() {
        try {
          const wlImagesData = await API.graphql({ query: queries.listWLimagess });
          const wlImages = wlImagesData.data.listWLimagess.items;
          setWLimages(wlImages);
        } catch (err) { console.log('error fetching WLImages') };
      } 

    return (
        <section className="section">
            <div className="block-container">
                <h1 className="main-title heading">Wildlife Photography</h1>
                <SRLWrapper>
                    <div className="gallery-container">
                        {WLimages.map((WLimages, index) => {
                            return(
                                <div className="gallery-square" key={index}>
                                    <a className="img-centre" href={`/images/wl-images/${WLimages.imageName}`}>
                                        <img className={WLimages.cName} src={`/images/wl-images/small-${WLimages.imageName}`} alt='wildlife' crossOrigin></img>
                                    </a> 
                                </div>
                            )
                        })} 
                    </div>
                </SRLWrapper>
            </div>
        </section> 
    )
}

export default Wildlife;


//import React from 'react';
// import WlImages from './wl-images';
// import { SRLWrapper } from 'simple-react-lightbox';

// import './wildlife.scss';

// function Wildlife() {
//     return (
//         <section className="section">
//             <div className="block-container">
//                 <h1 className="main-title heading">Wildlife Photography</h1>
//                 <SRLWrapper>
//                     <div className="gallery-container">
//                         {WlImages.map((WlImages, index) => {
//                             return(
//                                 <div className="gallery-square" key={index}>
//                                     <a className="img-centre" href={`/images/wl-images/${WlImages.imageName}`}>
//                                         <img className={WlImages.cName} src={`/images/wl-images/small-${WlImages.imageName}`}></img>
//                                     </a> 
//                                 </div>
//                             )
//                         })} 
//                     </div>
//                 </SRLWrapper>
//             </div>
//         </section> 
//     )
// }

// export default Wildlife;

// graphqlOperation(listWLimagess)