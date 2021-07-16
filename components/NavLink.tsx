interface Props {
	title: string;
	href: string;
}

function NavLink({ title, href }: Props) {
	return (
		<div className="text-gray-600 hover:text-black font-semibold">
			<a href={href} className="">
				{title}
			</a>
		</div>
	);
}

export default NavLink;
