import Head from 'next/head'
// import Image from 'next/image'


import React from 'react';
import Link from 'next/link';
import HomeCarousel from '../components/Carousel';
import Button from '../components/Button';

import styles from '../styles/Home.module.scss';



function Home() {
    return(
        <>
            <Head>
                <title>Rebecca Reynolds Photography</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="icon" href="/images/icon.png" />
            </Head>
            <section className={styles.section}>
                <div className={styles['carousel-container']}>
                    <HomeCarousel/>
                </div>
                <div className={styles['block-container']}>
                    <h2 className={styles['home-header']}>Welcome to Rebecca Reynolds Photography</h2>
                    <p className={`${styles["main-title"]} ${styles["sm"]}`}>Bringing focus to the natural world.</p>
                    <div className={styles['btn-padding']}>
                        <Button/>
                    </div>
                    <div className={styles['object-container']}>
                        <div className={styles['object-wrapper']}>
                            <Link href="/landscape">
                                <a className={styles.decoration}>
                                    <div className={styles['object-img-wrapper']}>
                                        <img className={styles['img-fit']} src="images/home/ls-circle.jpg" alt="Landscape"></img>
                                    </div>
                                    <div className={styles['object-info-wrapper']}>
                                        <h3 className={styles['blurb-header']}>Landscape Photography</h3>
                                        <p className={styles.blurb}>Landscapes, Seascapes and Skyscapes</p>
                                    </div>
                                </a>
                            </Link>
                            
                        </div>
                        <div className={styles['object-wrapper']}>
                            <Link href="/wildlife">
                                <a className={styles.decoration}>
                                    <div className={styles['object-img-wrapper']}>
                                        <img className={styles['img-fit']} src="images/home/wl-circle.jpg" alt="Landscape"></img>
                                    </div>
                                    <div className={styles['object-info-wrapper']}>
                                        <h3 className={styles['blurb-header']}>Wildlife Photography</h3>
                                        <p className={styles.blurb}>Flora and Fauna</p>
                                    </div>
                                </a>
                                
                            </Link>  
                        </div>
                        <div className={styles['object-wrapper']}>
                            <Link href="/cyanotype">
                                <a className={styles.decoration}>
                                    <div className={styles['object-img-wrapper']}>
                                        <img className={styles['img-fit']} src="images/home/c-circle.jpg" alt="Landscape"></img>
                                    </div>
                                    <div className={styles['object-info-wrapper']}>
                                        <h3 className={styles['blurb-header']}>Cyanotype Art</h3>
                                        <p className={styles.blurb}>Inspired by the Natural Landscape</p>
                                    </div>
                                </a>
                                
                            </Link>
                        </div>
                        <div className={styles['object-wrapper']}>
                            <Link href="/black-white">
                                <a className={styles.decoration}>
                                    <div className={styles['object-img-wrapper']}>
                                        <img className={styles['img-fit']} src="images/home/bw-circle.jpg" alt="Landscape"></img>
                                    </div>
                                    <div className={styles['object-info-wrapper']}>
                                        <h3 className={styles['blurb-header']}>Black & White Photography</h3>
                                        <p className={styles.blurb}>The Natural World in Black & White</p>
                                    </div>
                                </a>
                                
                            </Link>
                        </div>
                    </div>
                
                </div>
            </section>
        </>
    )
};

export default Home;