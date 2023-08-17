import React from 'react'
import Image from 'next/image';

const Mission = () => {
    return (
        <div>
            <section className="py-10">
                <div className="xl:container m-auto space-y-12 px-6 md:px-12 lg:px-20">
                    <div>
                        <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                            Gentlemen, Start your Engine..!!
                        </h2>
                    </div>
                    <div className="mt-16 grid gap-8 sm:w-1/2 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-2">
                        <div className="p-8 py-12 sm:p-12 rounded-3xl border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                            <div className="space-y-12 text-center">
                                <Image
                                    src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691680075/mision_yidc1l.jpg"
                                    className="w-16 mx-auto"
                                    width={512}
                                    height={512}
                                    alt="burger illustration"
                                />
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                                        Our Mission
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-justify">
                                        Is to be passionate in anticipating and providing the best
                                        products that excite our Global Customers. At Meghdoot
                                        Pistons we work to provide tailor made products and cater to
                                        create the best Customer-Manufacturer relationship.
                                    </p>
                                    <a
                                        href="#"
                                        className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="relative w-5 h-5 text-gray-600 dark:text-white transition duration-300 group-hover:translate-x-1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 py-12 sm:p-12 rounded-3xl border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                            <div className="space-y-12 text-center">
                                <Image
                                    src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691680077/vision_kzrpkx.jpg"
                                    className="w-16 mx-auto"
                                    width={512}
                                    height={512}
                                    alt="burger illustration"
                                />
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                                        Our Vision
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Realizing our full potentials to drive a new era of
                                        Development, Growth and Productivity. To be Earth’s Most
                                        Customer Centric Company, where Customers can get Products
                                        at Friendly Prices.
                                    </p>
                                    <a
                                        href="#"
                                        className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="relative w-5 h-5 text-gray-600 dark:text-white transition duration-300 group-hover:translate-x-1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mission;