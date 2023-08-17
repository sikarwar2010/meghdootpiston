'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const DemoCarousel = () => {
    return (
        <div className=''>
            <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={3000} >
                <div className=''>
                    <Image
                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691655978/home1_tsgxb9.jpg"
                        alt="image1"
                        className="h-full w-full object-cover object-center"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className=''>
                    <Image
                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691655978/home2_hmyrxy.jpg"
                        alt="image2"
                        className="h-full w-full object-cover object-center"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className=''>
                    <Image
                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691659786/home3_mf2azy.jpg"
                        alt="image3"
                        className="h-full w-full object-cover object-center"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className=''>
                    <Image
                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691655978/home4_jmxnkp.jpg"
                        alt="image4"
                        className="h-full w-full object-cover object-center"
                        width={1920}
                        height={1080}
                    />
                </div>
            </Carousel>
        </div>

    )
}

export default DemoCarousel;