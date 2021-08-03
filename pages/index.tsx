import { ArrowRightIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import React, { createRef, useEffect } from "react";
import Service from "../components/Service";
import { GetServerSideProps } from "next";
import SectionTitle from "../components/SectionTitle";
import { HeartIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Contact from "../components/Contact";
import Button from "../components/Button";
import Project from "../components/Project";
import IService from "../interfaces/IService";
import IUser from "../interfaces/IUser";
import { IProject } from "../interfaces/IProject";
import { ITestimonial } from "../interfaces/ITestimonial";
import Testimonial from "../components/Testimonial";
import AllTestimonials from "../components/AllTestimonials";

interface StaticPropsResult {
	services: IService[];
	user: IUser;
	projects: IProject[];
	testimonials: ITestimonial[];
}
const refs: {
	[key: string]: React.RefObject<HTMLDivElement>;
} = {};
["services", "about", "projects", "contact", "testimonials"].map((hash) => {
	refs[hash] = createRef<HTMLDivElement>();
});
export default function Home({
	services,
	user,
	projects,
	testimonials,
}: StaticPropsResult) {
	useEffect(() => {
		if (process.browser) {
			window.onhashchange = () => {
				const hash = window.location.hash.slice(1);
				if (hash) {
					const element = refs[hash]?.current;
					if (!element) return;
					window.scrollTo({
						top: element.offsetTop - 128,
						left: 0,
						behavior: "smooth",
					});
				} else if (window.location.hash === "#") {
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				}
			};
			return () => {
				window.onhashchange = () => {};
			};
		}
	}, []);

	return (
		<div className="space-y-24">
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

			<div ref={refs["services"]}>
				<SectionTitle title="What I can offer" />
				<div className="flex mt-10 justify-center flex-grow">
					<div className="flex justify-evenly space-x-5 flex-wrap">
						{services.map((service) => (
							<Service key={service.id} {...service} />
						))}
					</div>
				</div>
			</div>
			<div ref={refs["projects"]}>
				<SectionTitle title="Projects" />
				<div className="grid xl:!grid-cols-3 lmd:grid-cols-2 justify-center grid-cols-1 p-5 gap-y-14 gap-10 mt-10">
					{projects.map((project) => (
						<Project key={project.id} project={project} />
					))}
				</div>
			</div>
			<AllTestimonials
				ref={refs["testimonials"]}
				testimonials={testimonials}
			/>
			<div ref={refs["about"]} className="pt-10">
				<SectionTitle title="About Me" />
				<div className="py-5 md:px-8 my-5 sm:text-lg">
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
			<Contact ref={refs["contact"]} />
		</div>
	);
}

export const getServerSideProps: GetServerSideProps<StaticPropsResult> =
	async ({ req }) => {
		const protocol = req.headers["x-forwarded-proto"] || "http";
		const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
		return {
			props: {
				services: await (await fetch(baseUrl + "/api/services")).json(),
				user: await (await fetch(baseUrl + "/api/user")).json(),
				projects: await (await fetch(baseUrl + "/api/projects")).json(),
				testimonials: await (
					await fetch(baseUrl + "/api/testimonials")
				).json(),
			},
		};
	};
