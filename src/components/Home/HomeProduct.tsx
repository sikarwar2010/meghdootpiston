import React from "react";
import Image from "next/image";
import { IProduct } from "@/types";

const products: IProduct[] = [
	{
		id: 1,
		url: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1685786189/meghdoot/piston_hgoesn.jpg",
		name: "Pistons",
		href: "/pistons",
		description:
			"We are Pioneer in Manufacturing of Pistons, where Pistons are being manufactured as per the specifications of the customers.",
	},
	{
		id: 2,
		url: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1685792698/meghdoot/4_dl12uk.jpg",
		name: "cylinder Liner",
		href: "/cylinder",
		description:
			"We are supplier of air & water cooled cylinder blocks for tractors, cars, compressors, stationery diesel engines, commercial vehicles, two & three wheelers etc",
	},
	{
		id: 3,
		url: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691685606/dreamstime_xxl_78054868_xuyndp.jpg",
		name: "Pistons Rings",
		href: "/pistonsring",
		description:
			"The engineering staff designs the piston rings for maximum efficiency over the life of the engine. All the piston",
	},
	{
		id: 4,
		url: "https://res.cloudinary.com/dfvtnrisi/image/upload/v1691858760/pistonpin_2_uzvt1d.jpg",
		name: "Pistons Pins",
		href: "/pistonpin",
		description:
			"GudgeonPin Piston PinGudgeon Pins and mostly in American nomenclature known as wrist pins, are an integral part of all types of internal combustion engines, Otto or diesel",
	},
];

const HomeProduct = () => {
	return (
		<div>
			<section className="py-16">
				<div className="xl:container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
					<h1 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl mb-5">
						Quality Product
					</h1>
					<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16 grid-col-1">
						{products.map((product) => (
							<div
								key={product.id}
								className="md:flex bg-slate-100 rounded-xl shadow-lg p-4 md:p-0 dark:bg-slate-800 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
							>
								<Image
									className="w-72 h-auto object-cover object-center rounded-xl md:w-72 md:h-auto mx-auto"
									src={product.url}
									alt={product.name}
									width={512}
									height={512}
								/>
								<div className="pt-6 md:p-8 md:text-left space-y-4 text-justify">
									<h1 className="font-medium text-lg capitalize dark:text-white">
										{product.name}
									</h1>

									<p className="text-lg font-medium text-justify overflow-hidden dark:text-white h-40">
										{product.description}
									</p>

									<button className="hover:bg-purple-500 py-2 px-4 rounded-full">
										Read More
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomeProduct;
