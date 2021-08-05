import { ISkill } from "../interfaces/ISkill";

function Skill({ skill: { title, expertise } }: { skill: ISkill }) {
	return (
		<div className="flex flex-col items-start space-y-2">
			<p className="text-lg font-medium">{title}</p>
			<div className="bg-gray-300 md:w-1/2 w-5/6 h-7">
				<div
					className="bg-primary opacity-80 h-full"
					style={{
						width: `${expertise}%`,
					}}
				></div>
			</div>
		</div>
	);
}

export default Skill;
