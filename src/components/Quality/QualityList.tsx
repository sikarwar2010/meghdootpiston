'use client'
import React from 'react'

const QualityList = () => {
    return (
        <div>
            <section className="container mx-auto py-5">
                <h1 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl capitalize">
                    For manufacturing and Quality Control we are fully equipped with-
                </h1>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full">
                        <ul
                            style={{ listStyleType: "disc" }}
                            className="py-5 px-14 font-light text-lg"
                        >
                            <li>
                                Most make rate Tool Room & workshop and installed there in CNC
                                & SPM machine for various application besides Lathes, milling,
                                boring, grinding and drilling machines etc.
                            </li>
                            <li>
                                All the required instruments for step to step checking and
                                maintenance of classified dimensions and hardness etc.
                            </li>
                            <li>
                                Raw materials melting and casting shop are running on
                                eco-friendly gas and electric power.
                            </li>
                            <li>Heat treatment Plant</li>
                            <li>
                                Besides Hydro power Connections our Unit is backed by
                                Generator Sets employing natural gases.
                            </li>
                            <li>
                                Most moderate inspection section equipped with various
                                instruments (Mitsubushi-Japan make) required for through
                                checking of dimensional measurements and hardness testing etc.
                            </li>
                            <li>Metrological and Metallurgical laboratory</li>
                            <li>
                                Well qualified and experienced team of quality and staff
                                backed by long ancestral experience of Management.
                            </li>
                        </ul>
                        <h3 className=" text-xl font-medium text-justify text-red-500 text-ellipsis ">
                            It is the aim of the management to maintain the maximum best
                            possible quality of the products and we are to stress that
                            “Meghdoot” denote “A Quality Product”
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QualityList