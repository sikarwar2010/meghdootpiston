"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="bg-[#034694]">
			<nav className="lg:container mx-auto z-50 w-full h-20 flex items-center justify-between text-white">
				{/* desktops menus */}
				<div className="flex items-center space-x-2 md:items-center">
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
						className="cursor-pointer px-2 hidden md:flex"
					/>
					<span className="text-lg cursor-pointer">Meghdoot Pistons Pvt Ltd</span>
				</div>
				<div className="hidden md:flex">
					<ul className="flex items-center space-x-4 text-sm uppercase">
						<li className="cursor-pointer hover:border-b border-black dark:text-white">
							<Link href={"/"}>Home</Link>
						</li>
						<li className="cursor-pointer hover:border-b border-black dark:text-white">
							<Link href={"/about"}>About</Link>
						</li>
						<li className="bg-[#034694]">
							<Menu as="div" className="relative inline-block text-left">
								<div>
									<Menu.Button className="inline-flex w-full uppercase justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm text-white shadow-sm">
										Our Products
										<ChevronDownIcon
											className="-mr-1 h-5 w-5 text-gray-400"
											aria-hidden="true"
										/>
									</Menu.Button>
								</div>

								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<Link
														href="/pistons"
														className={classNames(
															active
																? "bg-gray-100 text-gray-900"
																: "text-gray-700",
															"block px-4 py-2 text-sm"
														)}
													>
														Pistons
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<Link
														href="/cylinder"
														className={classNames(
															active
																? "bg-gray-100 text-gray-900"
																: "text-gray-700",
															"block px-4 py-2 text-sm"
														)}
													>
														Cylinder Linear
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<Link
														href="/pistonrings"
														className={classNames(
															active
																? "bg-gray-100 text-gray-900"
																: "text-gray-700",
															"block px-4 py-2 text-sm"
														)}
													>
														Pistons Rings
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<Link
														href="/pistonpins"
														className={classNames(
															active
																? "bg-gray-100 text-gray-900"
																: "text-gray-700",
															"block px-4 py-2 text-sm"
														)}
													>
														Pistons Pins
													</Link>
												)}
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
						</li>
						<li className="cursor-pointer hover:border-b border-black dark:text-white">
							<Link href={"/quality"}>Quality</Link>
						</li>
						<li className="cursor-pointer hover:border-b border-black dark:text-white">
							<Link href={"/contact"}>Contact Us</Link>
						</li>
					</ul>
				</div>
				<div className="hidden md:flex items-center justify-end">
                    <ul className=" space-x-2 px-2">
                        <Menu as="div" className="relative inline-block text-left">
							<div>
                                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#034694] text-white px-3 py-2 text-sm font-semibold shadow-sm">
									Language
									<ChevronDownIcon
										className="-mr-1 h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													English
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													Russian
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													Urdu
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													Spanish
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm"
													)}
												>
													Persian
												</a>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</ul>
				</div>

				{/* mobile button */}
				<div className="md:hidden px-5">
					<button
						onClick={toggleMobileMenu}
						className="dark:text-white focus:outline-none"
					>
						{isMobileMenuOpen ? (
							<AiOutlineClose size={20} />
						) : (
							<AiOutlineMenu size={20} />
						)}
					</button>
				</div>
			</nav>
			{/* mobile menus  */}
			{isMobileMenuOpen && (
				<Fragment>
					<div className="md:hidden absolute z-10 w-72 bg-cyan-700 dark:bg-black h-full top-0 left-0">
						<ul className="flex flex-col items-center space-y-10 px-10 py-5 h-full uppercase">
							<div className="flex flex-row space-x-4 items-center mb-5">
								<Image
									src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691669303/logo_buxtxq.png"
									alt="meghdoot logo"
									width={70}
									height={70}
									className="cursor-pointer"
								/>
								<Image
									src="https://res.cloudinary.com/dfvtnrisi/image/upload/v1691669307/techpart_taemmp.png"
									alt="meghdoot logo"
									width={70}
									height={70}
									className="cursor-pointer"
								/>
							</div>
							<li className="text-yellow-500 hover:underline underline-offset-2 text-lg cursor-pointer">
								<Link href={"/"} className="">
									Home
								</Link>
							</li>
                            <li className="text-yellow-500 hover:underline underline-offset-2 text-lg cursor-pointer">
								<Link href={"/about"}>About</Link>
							</li>
                            <li className="text-yellow-500 hover:underline underline-offset-2 text-lg cursor-pointer">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-yellow-500 text-lg uppercase font-serif shadow-sm">
                                            Our Products
                                            <ChevronDownIcon
                                                className="-mr-1 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/pistons"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Pistons
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/cylinder"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Cylinder Linear
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/pistonrings"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Pistons Rings
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/pistonpins"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            Pistons Pins
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
							</li>
                            <li className="text-yellow-500 hover:underline underline-offset-2 text-lg cursor-pointer">
								<Link href={"/quality"}>Quality</Link>
							</li>
							<li className="text-yellow-500 hover:underline underline-offset-2 text-lg cursor-pointer">
								<Link href={"/contact"}>Contact Us</Link>
							</li>
							<li>
								<Menu as="div" className="relative inline-block text-left">
									<div>
										<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-cyan-700 text-yellow-500 px-3 py-2 text-lg font-semibold shadow-sm">
											Language
											<ChevronDownIcon
												className="-mr-1 h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</Menu.Button>
									</div>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<div className="py-1">
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? "bg-gray-100 text-gray-900"
																	: "text-gray-700",
																"block px-4 py-2 text-sm"
															)}
														>
															English
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? "bg-gray-100 text-gray-900"
																	: "text-gray-700",
																"block px-4 py-2 text-sm"
															)}
														>
															Russian
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? "bg-gray-100 text-gray-900"
																	: "text-gray-700",
																"block px-4 py-2 text-sm"
															)}
														>
															Urdu
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? "bg-gray-100 text-gray-900"
																	: "text-gray-700",
																"block px-4 py-2 text-sm"
															)}
														>
															Spanish
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? "bg-gray-100 text-gray-900"
																	: "text-gray-700",
																"block px-4 py-2 text-sm"
															)}
														>
															Persian
														</a>
													)}
												</Menu.Item>
											</div>
										</Menu.Items>
									</Transition>
								</Menu>
							</li>
						</ul>
					</div>
				</Fragment>
			)}
		</header>
	);
};

export default Header;
