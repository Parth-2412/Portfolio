import { ISkill } from "../interfaces/ISkill";

function Skill({ skill: { title, logo, link } }: { skill: ISkill }) {
	return (
		<a href={link}>
			<div className="flex rounded-lg flex-col hover:opac0 group items-center cursor-pointer my-6 mx-8 space-y-2">
				<img
					src={logo}
					loading="lazy"
					className="h-14 object-contain"
				/>
				<p className="font-medium group-hover:text-gray-700">{title}</p>
			</div>
		</a>
	);
}

export default Skill;
