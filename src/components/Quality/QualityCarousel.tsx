'use client'
import React from 'react'
import Image from 'next/image';

const QualityCarousel = () => {
    return (
        <div>
            <section className="flex justify-center mx-auto w-full lg:w-2/3 md:w-2/3 rounded-box">
                <div className="w-full ">
                    <Image
                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1685893179/quality_2_y8zekx.jpg"
                        className="w-full object-cover object-center h-full"
                        alt="Tailwind CSS Carousel component Quality"
                        width={2500}
                        height={1200}
                    />
                </div>
            </section>
        </div>
    )
}

export default QualityCarousel;