import React, { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { MenuIcon } from "@heroicons/react/solid";
function Header() {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="flex justify-between px-12 lg:px-20 xl:px-32 py-5  items-center ">
			<Logo />

			<div
				className={
					"md:flex-grow md:justify-end lg:space-x-9 md:space-x-6 space-y-7 md:space-y-0 absolute md:static left-16 mt-3 md:mt-0 top-16 flex-col md:flex-row md:flex items-center " +
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
