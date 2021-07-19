interface Props {
	title: string;
}

function SectionTitle({ title }: Props) {
	return <div className={"text-4xl font-semibold"}>{title}</div>;
}

export default SectionTitle;
