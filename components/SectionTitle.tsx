interface Props {
	title: string;
}

function SectionTitle({ title }: Props) {
	return (
		<div className={"md:text-4xl text-3xl md:font-semibold font-medium"}>
			{title}
		</div>
	);
}

export default SectionTitle;
