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
						"bg-white lg:flex-grow lg:justify-end shadow-md lg:shadow-none \
						 w-full lg:space-x-7 space-y-7 lg:space-y-0 pb-4 lg:pb-0 absolute \
						  lg:static left-0 pl-16 lg:pl-0 pt-5 lg:pt-0 top-16 flex-col \
						  lg:flex-row lg:flex items-center\
						 " +
						(showMenu ? "" : "hidden")
					}
				>
					{[
						<NavLink title="Home" href="#" />,
						<NavLink title="About" href="#about" />,
						<NavLink title="Services" href="#services" />,
						<NavLink title="Projects" href="#projects" />,
						<NavLink title="Skills" href="#skills" />,
						<NavLink title="Testimonials" href="#testimonials" />,
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
						className="h-8 w-8  block hover:shadow-2xl lg:hidden text-black rounded-3xl cursor-pointer "
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
