import Image from "next/image";
import { IProject } from "../interfaces/IProject";

interface Props {
	project: IProject;
}

function Project({
	project: { title, image, description, liveDemo: link },
}: Props) {
	return (
		<a href={link} className="self-stretch m-5">
			<div className="flex flex-col h-full space-y-7 shadow hover:shadow-lg cursor-pointer">
				<Image src={image} alt={title} width={320} height={180} />
				<div className="p-5 space-y-5">
					<div className="text-2xl font-medium">{title}</div>
					<div className="max-w-xs text-sm">{description}</div>
				</div>
			</div>
		</a>
	);
}

export default Project;
