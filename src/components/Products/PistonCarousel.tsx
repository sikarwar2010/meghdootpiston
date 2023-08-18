import React from 'react'
import Image from 'next/image'

const PistonCarousel = () => {
    return (
        <div>
            <section className="flex justify-center mx-auto w-full lg:w-2/3 md:w-2/3 rounded-box">
                <div className="w-full ">
                    <Image
                        src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691687570/q2_vl6t7v.jpg"
                        className="w-full object-cover object-center h-full"
                        alt="Tailwind CSS Carousel component"
                        width={2500}
                        height={1200}
                    />
                </div>
            </section>
        </div>
    )
}

export default PistonCarousel;