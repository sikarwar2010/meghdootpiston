import React from 'react'
import Image from 'next/image';

const AboutMeghdoot = () => {
    return (
        <div>
            <section>
                <div className="py-10">
                    <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16 rounded-xl">
                        <div className=" border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
                            <div className="md:5/12 lg:w-1/2">
                                <Image
                                    src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1685782493/meghdoot/piston_2_c0mx71.jpg"
                                    alt="image"
                                    loading="lazy"
                                    width={700}
                                    height={400}
                                />
                            </div>
                            <div className="md:7/12 lg:w-1/2">
                                <h2 className="mt-4 text-center text-2xl font-bold dark:text-white md:text-4xl capitalize">
                                    <q>A complete solution for your engine power</q>
                                </h2>
                                <p className="py-8 text-slate-900 dark:text-gray-300 text-justify">
                                    Meghdoot Pistons Pvt. Ltd. (India) is a leading manufacturer
                                    and exporter, Ours diverse portfolio includes extensive range
                                    of Pistons, Liners, Rings and other Engine parts. Meghdoot
                                    Pistons was established in 1967 and has been a predominant
                                    brand in both National and International market under the
                                    brand name <q> Meghdoot</q> and <q>Techne Parts</q>.Our
                                    manufacturing unit is equipped with modern techniques backed
                                    with a technically sound management team and qualified
                                    engineers to ensure adequate quality control. We adhere to{" "}
                                    <q>Inspected once, Inspected right</q> ,which implies that
                                    consumer might have to get it done again if they dont choose
                                    us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMeghdoot;
