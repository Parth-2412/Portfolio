import React, { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { MenuIcon } from "@heroicons/react/solid";
function Header() {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="bg-white fixed top-0 left-0 right-0 z-10 flex justify-center px-12 py-8 items-center ">
			<div className="flex flex-grow justify-between items-center  max-w-7xl">
				<Logo />
				<div
					className={
						"bg-white md:flex-grow md:justify-end shadow-md md:shadow-none \
						 w-full md:space-x-7 space-y-7 md:space-y-0 pb-4 md:pb-0 absolute \
						  md:static left-0 pl-16 md:pl-0 pt-5 md:pt-0 top-16 flex-col \
						  md:flex-row md:flex items-center\
						 " +
						(showMenu ? "" : "hidden")
					}
				>
					{[
						<NavLink title="Home" href="/" />,
						<NavLink title="About" href="#about" />,
						<NavLink title="Services" href="#services" />,
						<NavLink title="Projects" href="/" />,
						<NavLink title="Testimonials" href="/" />,
						<NavLink title="Contact" href="#contact" />,
					].map((Link, i) => ({
						...Link,
						key: i,
						props: {
							...Link.props,
							onClick: () => {
								if (showMenu) {
									setShowMenu(false);
								}
							},
						},
					}))}
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
		</div>
	);
}

export default Header;
