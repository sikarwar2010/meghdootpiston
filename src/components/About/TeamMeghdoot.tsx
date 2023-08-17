import { IUsers } from "@/types";
import Link from "next/link";
import React from "react";

const users: IUsers[] = [
	{
		id: 1,
		name: "Mr. Sunil Agarwal",
		position: "Director",
		url: "",
		description:
			"Managing director, with over massive years of exposure to deal with complex micro macro issues that may threaten company profitability and longevity by providing innovative turn key solutions. Acts as the advisory to the board of directors and team with demonstrated expertise. Mr.Agarwal started his journey along with his father, is a mentor and guiding force behind all decisions.",
	},
	{
		id: 2,
		name: "Mr. Akash Agarwal",
		position: "Director",
		url: "",
		description:
			"was always keen to be join the business. After completing his education, Mr.Akash decided to take the lead. Years of experience and exposure to business environment made him rock solid to achieve day to day goals and encourage his entire team in creating Meghdoot Pistons, a world known brand.",
	},
	{
		id: 3,
		name: "Mr.Vishwas Agarwal",
		position: "Director",
		url: "",
		description:
			"After completing his graduation from Delhi University, wanted to follow his fathers footstep and join family business to take it to new heights. He has a proven track record of successful leading and overseeing manufacturing process. Adept in directing business strategy and constantly aiming to achieve 100% client satisfaction.",
	},
];

const TeamMeghdoot = () => {
	return (
		<div>
			<section className="text-slate-900">
				<div className="container px-5 py-8 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="mt-4 mb-5 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
							Leadership and Management
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-slate-900 dark:text-white">
							Our Management Team comprises of eminent experts who bring a
							wealth of knowledge that help in strategic decision making towards
							improving operations and performances.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8">
						{users.map((user) => (
							<div key={user.id}>
								<div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] h-72 hover:scale-105 transition-transform duration-500 ease-in-out">
									<h3 className="text-lg font-bold text-gray-800 dark:text-white">
										{user.name}
									</h3>
									<p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
										{user.position}
									</p>
									<p className="mt-2 text-gray-800 dark:text-gray-400 text-justify text-base">
										{user.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default TeamMeghdoot;
