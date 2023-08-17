'use client'
import React from 'react'
import Image from 'next/image'


const QualityCertifcate = () => {
    return (
        <div>
            <section>
                <div className="py-10 flex flex-col items-center lg:container mx-auto">
                    <div className="">
                        <h1 className="mt-4 text-center text-2xl font-bold dark:text-white md:text-4xl capitalize">Quality Certificate</h1>
                    </div>
                    <div className="py-5 mx-5">
                        <Image
                            src={
                                "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691934350/MEGHDOOT_PISTONS_PVT._LTD._QMS_page-0001_pgjr6g.jpg"
                            }
                            width={500}
                            height={300}
                            alt="certifcate"
                            className="rounded-lg object-cover object-center aspect-auto"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QualityCertifcate