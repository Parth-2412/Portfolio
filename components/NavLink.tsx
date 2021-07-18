interface Props {
	title: string;
	href: string;
	[key: string]: any;
}

function NavLink({ title, href, ...props }: Props) {
	return (
		<div className="text-gray-600 hover:text-black font-semibold">
			<a href={href} {...props}>
				{title}
			</a>
		</div>
	);
}

export default NavLink;
