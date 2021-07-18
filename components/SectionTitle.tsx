interface Props {
	title: string;
}

function SectionTitle({ title }: Props) {
	return (
		<div>
			<div className="text-4xl font-semibold">{title}</div>
		</div>
	);
}

export default SectionTitle;
