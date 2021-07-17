import { ArrowRightIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Parth2412</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<div className="flex flex-col lg:flex-row items-start lg:space-x-8 space-y-14 lg:space-y-0 lg:items-center py-16 justify-between">
				<div className="space-y-12 max-w-xl">
					<div className="space-y-5">
						<div className="text-3xl font-medium">
							Hi, my name is Parth!!
						</div>
						<div className="text-4xl font-semibold">
							I'm a full stack web developer and bot developer.
						</div>
					</div>
					<button className="flex space-x-2 items-center rounded-lg text-lg text-primary hover:text-white hover:bg-opacity-90 hover:bg-primary border-2 border-primary py-2 px-4">
						<a href="/#contact">Let's talk</a>
						<ArrowRightIcon className="w-5" />
					</button>
				</div>
				<div className="hidden lg:block">
					<Image
						src="/Profile.jpeg"
						width={350}
						height={400}
						className="rounded-3xl max-w-md !h-96"
					/>
				</div>
			</div>
		</div>
	);
}
