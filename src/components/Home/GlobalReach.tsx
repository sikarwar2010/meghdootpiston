import Image from "next/image";
import React from "react";

const GlobalReach = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:container mx-auto px-5">
			<div className="flex items-center justify-center">
				<Image
					src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1692290990/modern-world-map-background_1035-7605_zdxrgd.avif"
					alt="globalreach"
					width={1920}
					height={1080}
					className="object-cover object-center h-96 w-full rounded-lg"
				/>
			</div>
			<div className="flex flex-col items-center justify-evenly px-5">
				<h1 className="mt-4 text-center text-2xl font-bold dark:text-white md:text-4xl capitalize">
					Global Reach
				</h1>
				<p className="py-2 text-slate-900 dark:text-gray-300 text-justify">
					Meghdoot Piston Pvt Ltd global footprint includes more than 20
					locations across four continents (South America, Far East Asia,
					Europe, East & West Africa and CIS Countries).
				</p>
				<p className="py-2 text-slate-900 dark:text-gray-300 text-justify text-sm">
					Exporting to over <span className="font-bold text-lg">20</span>{" "}
					Countries
				</p>
				<p className="py-2 text-slate-900 dark:text-gray-300 text-justify text-sm">
					Selling over <span className="font-bold text-lg">70000 pcs Annually</span>{" "}
					Engine Parts
				</p>
				
			</div>
		</div>
	);
};

export default GlobalReach;
