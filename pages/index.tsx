import { ArrowRightIcon } from "@heroicons/react/solid";
import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Parth2412</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<div className="flex items-center p-12">
				<div className="space-y-9 max-w-prose">
					<div className="space-y-4">
						<div className="text-2xl font-medium">
							Hi, my name is Parth
						</div>
						<div className="text-4xl font-medium">
							I am a full stack web developer and bot developer.
						</div>
					</div>
					<button className="flex space-x-2 items-center rounded-lg text-lg text-primary hover:text-white hover:bg-opacity-90 hover:bg-primary border-2 border-primary py-2 px-4">
						<a href="/#contact">Let's talk</a>
						<ArrowRightIcon className="w-5" />
					</button>
				</div>
			</div>
		</div>
	);
}
