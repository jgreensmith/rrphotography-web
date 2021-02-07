import React from 'react';
import { Link } from 'react-router-dom';

import './gallery.scss';


function Gallery() {
    return(

        <section className="section">
            <div className="block-container">
            <h1 className="main-title heading">Gallery</h1>

                <div className="object-container">
                    <div className="object-wrapper">
                        <Link to='/landscape' className="decoration">
                            <div className="object-img-wrapper">
                                <img className="img-fit" src="images/landscape-circle.jpg" alt="Landscape"></img>
                            </div>
                            <div className="object-info-wrapper">
                                <h3 className="blurb-header">Landscape Photography</h3>
                                <p className="blurb">Landscapes, Seascapes and Skyscapes</p>
                            </div>
                        </Link>
                        
                    </div>
                    <div className="object-wrapper">
                        <Link to='/wildlife' className="decoration">
                            <div className="object-img-wrapper">
                                <img className="img-fit" src="images/landscape-circle.jpg" alt="Landscape"></img>
                            </div>
                            <div className="object-info-wrapper">
                                <h3 className="blurb-header">Wildlife Photography</h3>
                                <p className="blurb">Flora and Fauna</p>
                            </div>
                        </Link>  
                    </div>
                    <div className="object-wrapper">
                        <Link to='/cyanotype' className="decoration">
                            <div className="object-img-wrapper">
                                <img className="img-fit" src="images/landscape-circle.jpg" alt="Landscape"></img>
                            </div>
                            <div className="object-info-wrapper">
                                <h3 className="blurb-header">Cyanotype Art</h3>
                                <p className="blurb">Inspired by the natural landscape</p>
                            </div>
                        </Link>
                    </div>
                    <div className="object-wrapper">
                        <Link to='/black-white' className="decoration">
                            <div className="object-img-wrapper">
                                <img className="img-fit" src="images/landscape-circle.jpg" alt="Landscape"></img>
                            </div>
                            <div className="object-info-wrapper">
                                <h3 className="blurb-header">Black & White Photography</h3>
                                <p className="blurb">The Natural World in Black & White</p>
                            </div>
                        </Link>
                    </div>
                </div>
               
            </div>
        </section>

    )
};

export default Gallery;