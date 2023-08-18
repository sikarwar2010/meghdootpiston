"use client";
import React, { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const PistonInfo = () => {
    return (
        <Fragment>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2 lg:container mx-auto py-4 mb-5">
                <div className="flex items-center justify-center w-full h-full">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={3000}
                    >
                        <div className="">
                            <Image
                                src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691687946/dreamstime_xxl_44760106_uvztok.jpg"
                                alt="image1"
                                className="h-full w-full object-cover object-center"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="">
                            <Image
                                src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691687902/piston_dbfew1.jpg"
                                alt="image2"
                                className="h-full w-full object-cover object-center"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="">
                            <Image
                                src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691688051/dreamstime_xxl_177670937_kju41o.jpg"
                                alt="image3"
                                className="h-full w-full object-cover object-center"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="">
                            <Image
                                src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691682699/dreamstime_xxl_163373149_wcarol.jpg"
                                alt="image4"
                                className="h-full w-full object-cover object-center"
                                width={1920}
                                height={1080}
                            />
                        </div>
                    </Carousel>
                </div>
                <div>
                    <h2 className="mt-4 text-center text-2xl font-bold dark:text-white md:text-4xl capitalize">
                        Pistons
                    </h2>
                    <p className="py-4 text-slate-900 dark:text-gray-300 text-justify px-5 text-base font-medium">
                        We are the pioneer manufacturers of piston, where pistons are being
                        manufactured as per the specifications of the customers. We at
                        meghdoot pistons facilitate dealing directly with customer avoiding
                        all sort of middlemen and hence able to quote customer friendly
                        prices. In an engine, its purpose is to transfer force from
                        expanding gas in the cylinder to the crankshaft via a piston rod
                        and/or connecting rod. And we are specialized in providing the best
                        quality pistons to our customers.
                    </p>
                    <p className="py-4 text-slate-900 dark:text-gray-300 text-justify px-5 text-base font-medium">
                        Our manufacturing unit is equipped with modern techniques backed
                        with a technically sound management team and qualified engineers to
                        ensure adequate quality control. We adhere to <q>Inspected once,
                        Inspected right</q>, which implies that consumer might have to get it
                        done again if they do not choose us.
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default PistonInfo;
