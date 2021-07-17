import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { MenuIcon } from "@heroicons/react/solid";
function Header() {
	const [showMenu, setShowMenu] = useState(false);
	useEffect(() => {});
	return (
		<div className="bg-white fixed top-0 left-0 right-0 z-10 flex justify-between px-12 lg:px-20 xl:px-32 py-5  items-center ">
			<Logo />
			<div
				className={
					"bg-white md:flex-grow md:justify-end lg:space-x-9 shadow-md md:shadow-none \
					 w-full md:space-x-6 space-y-7 md:space-y-0 pb-3 md:pb-0 absolute \
					  md:static left-0 pl-16 md:pl-0 pt-3 md:pt-0 top-16 flex-col \
					  md:flex-row md:flex items-center\
					 " +
					(showMenu ? "" : "hidden")
				}
			>
				<NavLink title="Home" href="/" />
				<NavLink title="About" href="/" />
				<NavLink title="Services" href="/" />
				<NavLink title="Projects" href="/" />
				<NavLink title="Testimonials" href="/" />
				<NavLink title="Contact" href="/" />
			</div>
			<div>
				<MenuIcon
					onClick={() => {
						setShowMenu((prevShowMenu) => !prevShowMenu);
					}}
					className="h-8 w-8  block hover:shadow-2xl md:hidden text-black rounded-3xl cursor-pointer "
				/>
			</div>
		</div>
	);
}

export default Header;
