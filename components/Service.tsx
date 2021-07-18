import React from "react";
import IService from "../interfaces/IService";

function Service({ icon, name, description }: IService) {
	return (
		<div className="flex w-72 p-5 my-3 text-center flex-col items-center">
			<div
				dangerouslySetInnerHTML={{ __html: icon }}
				className="w-20 h-20 text-primary"
			></div>
			<div className="mt-7 mb-3 text-xl">{name}</div>
			<div className="text-sm max-w-prose">{description}</div>
		</div>
	);
}

export default Service;
