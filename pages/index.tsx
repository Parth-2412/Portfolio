import { ArrowRightIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Service from "../components/Service";
import { GetServerSideProps, GetStaticProps } from "next";
import SectionTitle from "../components/SectionTitle";
import { HeartIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Contact from "../components/Contact";
import Button from "../components/Button";
import Project from "../components/Project";
import IService from "../interfaces/IService";
import IUser from "../interfaces/IUser";
import { IProject } from "../interfaces/IProject";

interface StaticPropsResult {
	services: IService[];
	user: IUser;
	projects: IProject[];
}

export default function Home({ services, user, projects }: StaticPropsResult) {
	return (
		<div className="space-y-20">
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
					<Link href="#contact">
						<Button className="text-lg">
							<p>Let's talk</p>
							<ArrowRightIcon className="w-5" />
						</Button>
					</Link>
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
			<div id="projects">
				<SectionTitle title="Projects" />
				<div>
					{projects.map((project) => (
						<Project key={project.id} project={project} />
					))}
				</div>
			</div>
			<div id="about" className="pt-10">
				<SectionTitle title="About Me" />
				<div className="py-5 px-8 my-5 text-lg">
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
			<Contact />
		</div>
	);
}

export const getStaticProps: GetStaticProps<StaticPropsResult> = async () => {
	const baseUrl = process.env.BASE_URL;
	return {
		props: {
			services: await (await fetch(baseUrl + "/api/services")).json(),
			user: await (await fetch(baseUrl + "/api/user")).json(),
			projects: await (await fetch(baseUrl + "/api/projects")).json(),
		},
	};
};
