import { ArrowRightIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Service from "../components/Service";
import { GetServerSideProps } from "next";
import SectionTitle from "../components/SectionTitle";
import { HeartIcon } from "@heroicons/react/outline";

export default function Home({ services, user }) {
	return (
		<div className="space-y-10">
			<Head>
				<title>Parth2412</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<div className="flex items-start lg:space-x-8 space-y-14 lg:space-y-0 lg:items-center py-16 justify-between">
				<div className="space-y-12 max-w-xl">
					<div className="space-y-5">
						<div className="text-3xl font-medium">
							Hi, my name is {user.name}!!
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

			<div id="services">
				<SectionTitle title="What I can offer" />
				<div className="flex mt-10 justify-center flex-grow">
					<div className="flex justify-evenly space-x-5 flex-wrap">
						{services.map((service) => (
							<Service key={service.id} {...service} />
						))}
					</div>
				</div>
			</div>
			<div id="about" className="pt-10">
				<SectionTitle title="About Me" />
				<div className="p-5 my-5 text-lg">
					Hi there!! I am {user.name}, a {user.age} years old full
					stack web developer. I really love learning and making new
					things. That is what encouraged me into programming. My goal
					is to become a successful software developer and help people
					by making useful tools for them.
					<div className="my-3 flex items-center space-x-2">
						<HeartIcon className="w-10" />
						<p>I love programming, football and anime!</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const protocol = req.headers["x-forwarded-proto"] || "http";
	const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
	return {
		props: {
			services: await (await fetch(baseUrl + "/api/services")).json(),
			user: await (await fetch(baseUrl + "/api/user")).json(),
		},
	};
};
