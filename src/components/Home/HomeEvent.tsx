import React from 'react'
import Image from 'next/image'

const HomeEvent = () => {
    return (
        <div>
            <section>
                <div className="py-10">
                    <div className="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20 rounded-3xl border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                        <div className="flex flex-row h-96 justify-evenly">
                            <div className="flex flex-col items-center justify-center px-4">
                                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                                    Upcoming
                                </h1>
                                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                                    Events -
                                </h1>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src={
                                        "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691676950/event_lqfeos.jpg"
                                    }
                                    alt="image"
                                    loading="lazy"
                                    width={300}
                                    height={300}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeEvent;