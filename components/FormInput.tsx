interface Props {
	[key: string]: any;
}

function FormInput({ ...props }: Props) {
	return (
		<input
			{...props}
			className="border-2 focus:ring-primary px-4 py-2 focus:border-0 focus:ring-2 outline-none rounded-md"
		/>
	);
}

export default FormInput;
