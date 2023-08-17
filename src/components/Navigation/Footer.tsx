"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";


const Footer = () => {
	return (
		<Fragment>
			<footer className="py-8 bg-[#034694]">
				<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 px-2">
					<div className="lg:w-[90%] h-full flex-shrink-0 mx-auto">
						<Image
							src={
								"https://res.cloudinary.com/dfvtnrisi/image/upload/v1691657016/footer_whvkml.jpg"
							}
							alt="logo burn piston"
							width={1200}
							height={600}
							className="object-cover object-center rounded cursor-pointer transition duration-300 ease-in-out hover:scale-110"
						/>
					</div>
					<div className="lg:w-1/2 md:w-1/2 w-full px-4">
						<h2 className="font-medium tracking-widest text-lg mb-3 text-white capitalize">
							How can we help you?
						</h2>
						<nav className="list-none mb-8 text-white flex-col items-center">
							<p className="flex items-center py-3 text-lg">
								<BsTelephoneInbound fontSize={20} />
								<span className="ml-5 text-lg">+91 9719029044</span>
							</p>
							<p className="flex items-center py-3 text-lg">
								<BsTelephoneInbound fontSize={20} />{" "}
								<span className="ml-5 text-lg">+91 9760415467</span>
							</p>
                            <p className="flex items-center py-3 text-lg">
                                <BsTelephoneInbound fontSize={20} />{" "}
                                <span className="ml-5 text-lg">0562 - 2990513</span>
                            </p>
                            <p className="flex items-center">
                                <AiOutlineMail fontSize={20} />
                                <span className="ml-5 text-lg">meghdootpistons@gmail.com</span>
                            </p>
						</nav>
					</div>
					<div>
						<div className="lg:w-1/2 md:w-1/2 w-full px-4">
							<h2 className="font-medium text-white tracking-widest text-lg mb-3">
								Our Locations :
							</h2>
							<nav className="list-none text-white items-center mb-24">
								<p className="flex items-center">
									<SlLocationPin fontSize={20} />{" "}
									<span className="ml-5 text-lg">
										{" "}
										Unit-1: 6, Industrial Estate, Nunhai, Agra-282006, INDIA
									</span>
								</p>
								<p className="flex items-center py-3 text-lg">
									<SlLocationPin fontSize={20} />{" "}
									<span className="ml-5 text-lg">
										Unit-2: 29, Industrial Estate, Nunhai, Agra-282006, INDIA
									</span>
								</p>
							</nav>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-col-2 md:grid-cols-2 px-5 py-5">
					<div className="flex items-center justify-center space-x-4">
						<Image
							src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691669303/logo_buxtxq.png"
							alt="meghdoot logo"
							width={70}
							height={70}
							className="cursor-pointer px-2"
						/>
						<Image
							src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691669307/techpart_taemmp.png"
							alt="meghdoot logo"
							width={70}
							height={70}
							className="cursor-pointer px-2"
						/>
						<p className="text-white text-lg text-center sm:text-left">
							© 2023 Meghdoot Pistons Pvt Ltd
						</p>
					</div>
					<div className="flex items-center justify-center my-5 ">
						<p className="text-white text-lg text-center sm:text-left">
							Development By: Ringerlabs Technologies
						</p>
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
