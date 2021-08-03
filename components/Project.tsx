import Image from "next/image";
import { IProject } from "../interfaces/IProject";

interface Props {
	project: IProject;
}

function Project({
	project: { title, image, description, liveDemo: link, skills, features },
}: Props) {
	return (
		<a
			href={link}
			className="self-stretch !max-w-md mx-auto"
			target="_blank"
		>
			<div className="flex flex-col w-full h-full shadow-lg hover:shadow-2xl rounded-xl cursor-pointer">
				<Image
					src={image}
					alt={title}
					width={320}
					height={180}
					className="!rounded-t-xl !w-full"
					layout="responsive"
				/>
				<hr />
				<div className="p-8 justify-center space-y-3 my-2">
					<div className="text-2xl font-semibold">{title}</div>
					<div className="text-sm lg:text-base text-gray-500 w-full">
						<div
							className="whitespace-pre-line"
							dangerouslySetInnerHTML={{ __html: description }}
						></div>
					</div>
				</div>
			</div>
		</a>
	);
}

export default Project;
