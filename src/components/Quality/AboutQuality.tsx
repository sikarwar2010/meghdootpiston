'use client'
import React from 'react'
import Image from 'next/image'

const AboutQuality = () => {
    return (
        <div>
            <section className="text-slate-900 body-font container mx-auto">
                <h1 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Quality
                </h1>
                <div className="container px-5 py-8 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <Image
                            alt="feature"
                            className="object-cover object-center h-full w-full"
                            src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1690185819/dreamstime_xxl_21865382_yqefgr.jpg"
                            width={2560}
                            height={1560}
                        />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">
                                    Quality
                                </h2>
                                <p className="leading-relaxed text-base text-justify dark:text-white overflow-hidden">
                                    “Good quality is of crucial importance. There is always room
                                    for improvement!” This position of company founder Late B.D.
                                    Agarwal still serves as a model for us today.
                                    <br className='py-5' />
                                    For our customers, quality means failure-free assembly,
                                    satisfied end customers, no product recalls—and thus a
                                    strong brand. For MEGHDOOT, quality is a significant factor
                                    global success. Quality management is fully integrated into
                                    all business processes. We have developed an in-house Group
                                    standard for quality planning and controlling.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">
                                    Product Development
                                </h2>
                                <p className="leading-relaxed text-base dark:text-white text-justify overflow-hidden">
                                    In order to ensure seamless series production, quality
                                    planning during product development and series launch had to
                                    be highly effective. MEGHDOOT therefore repeatedly puts it
                                    to the test and defines ever more effective standards.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 dark:text-white">
                                    Production
                                </h2>
                                <p className="leading-relaxed text-base text-justify dark:text-white">
                                    For product quality is the quantity of defective parts. We
                                    are thus continuously working to monitor the production
                                    processes even more diligently and are optimizing the data
                                    information flow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutQuality