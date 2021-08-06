import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	className?: string;
	[key: string]: any;
}

function Button({ children, className, ...props }: Props) {
	return (
		<button
			{...props}
			className={
				"flex space-x-2 items-center rounded-lg text-primary md:hover:text-white hover:bg-opacity-90 md:hover:bg-primary border-2 border-primary py-2 px-4 " +
				(className || "")
			}
		>
			{children}
		</button>
	);
}

export default Button;
