import Image from "next/image";
import { IProject } from "../interfaces/IProject";

interface Props {
	project: IProject;
}

function Project({
	project: { title, image, description, liveDemo: link, codeLink },
}: Props) {
	const linkClassname = "font-medium hover:text-gray-700";
	return (
		<div
			data-aos="fade-up"
			className="flex self-stretch !max-w-md mx-auto flex-col w-full h-full shadow-lg rounded-xl "
		>
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
			<div className="flex self-end space-x-5 mt-auto px-8 mb-4">
				<a href={link} target="_blank" className={linkClassname}>
					Live Demo
				</a>
				<a href={codeLink} target="_blank" className={linkClassname}>
					Code
				</a>
			</div>
		</div>
	);
}

export default Project;
