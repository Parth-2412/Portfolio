import { ArrowRightIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import React, { createRef, useEffect } from "react";
import Service from "../components/Service";
import { GetStaticProps } from "next";
import SectionTitle from "../components/SectionTitle";
import { HeartIcon } from "@heroicons/react/outline";
import Contact from "../components/Contact";
import Button from "../components/Button";
import Project from "../components/Project";
import { IService } from "../interfaces/IService";
import IUser from "../interfaces/IUser";
import { IProject } from "../interfaces/IProject";
import { ITestimonial } from "../interfaces/ITestimonial";
import AllTestimonials from "../components/AllTestimonials";
import { ISkill } from "../interfaces/ISkill";
import Skill from "../components/Skill";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectModal from "../models/Project";
import ServiceModal from "../models/Service";
import TestimonialModal from "../models/Testimonial";
import SkillModal from "../models/Skill";

interface StaticPropsResult {
	services: IService[];
	user: IUser;
	projects: IProject[];
	testimonials: ITestimonial[];
	skills: ISkill[];
}
const refs: {
	[key: string]: React.RefObject<HTMLDivElement>;
} = {};
["services", "about", "skills", "projects", "contact", "testimonials"].map(
	(hash) => {
		refs[hash] = createRef<HTMLDivElement>();
	}
);

export default function Home({
	services,
	user,
	projects,
	testimonials,
	skills,
}: StaticPropsResult) {
	useEffect(() => {
		AOS.init({
			once: true,
		});
		Object.values(refs).forEach((ref) => {
			// ref.current.setAttribute("data-aos", "slide-right");
		});
	}, []);
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
			window.onload = window.onhashchange;
			return () => {
				window.onload = () => {};
				window.onhashchange = () => {};
			};
		}
	}, []);

	return (
		<div className="sm:space-y-24 space-y-16">
			<Head>
				<title>Parth2412</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<div className="flex items-start lg:space-x-8 space-y-14 lg:space-y-0 lg:items-center py-16 justify-between">
				<div className="space-y-12 max-w-xl">
					<div className="space-y-5">
						<div className="md:text-3xl text-2xl sm:font-medium">
							Hi, my name is {user.name}!!
						</div>
						<div className="md:text-4xl text-3xl font-medium sm:font-semibold">
							I'm a full stack web developer and bot developer.
						</div>
					</div>

					<Button
						className="text-lg"
						onClick={() => {
							window.location.hash = "#contact";
						}}
					>
						<p>Let's talk</p>
						<ArrowRightIcon className="w-5" />
					</Button>
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
							<Service key={service.service_id} {...service} />
						))}
					</div>
				</div>
			</div>
			<div ref={refs["projects"]}>
				<SectionTitle title="Projects" />
				<div className="grid xl:!grid-cols-3 lmd:grid-cols-2 justify-center grid-cols-1 p-5 gap-y-14 gap-x-10 mt-10">
					{projects.map((project) => (
						<Project key={project.project_id} project={project} />
					))}
				</div>
			</div>
			<div ref={refs["skills"]}>
				<SectionTitle title="Skills" />
				<div className="flex flex-wrap justify-around p-10">
					{skills
						// .sort((a, b) => b.expertise - a.expertise)
						.map((skill) => (
							<Skill key={skill.skill_id} skill={skill} />
						))}
				</div>
			</div>
			<AllTestimonials
				ref={refs["testimonials"]}
				testimonials={testimonials}
			/>
			<div ref={refs["about"]} className="pt-10">
				<SectionTitle title="About Me" />
				<div
					className="py-5 md:px-8 my-5 sm:text-lg"
					data-aos="zoom-in"
				>
					Hi there!! I am {user.name}, a full stack web developer. I
					really love learning and making new things. That is what
					encouraged me into programming. My goal is to become a
					successful software developer and help people by making
					useful tools for them.
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

export const getStaticProps: GetStaticProps<StaticPropsResult> = async () => {
	const services = (await ServiceModal.find({}).lean()).map((service) => {
		const newService = { ...service };
		delete newService.__v;
		delete newService._id;
		delete newService.id;
		return newService;
	});
	const projects = (await ProjectModal.find({}).lean()).map((project) => {
		const newProject = { ...project };
		delete newProject.__v;
		delete newProject._id;
		delete newProject.id;
		return newProject;
	});
	const skills = (await SkillModal.find({}).lean()).map((skill) => {
		const newSkill = { ...skill };
		delete newSkill.__v;
		delete newSkill._id;
		delete newSkill.id;
		return newSkill;
	});
	const testimonials = (await TestimonialModal.find({}).lean()).map(
		(testimonial) => {
			const newTestimonial = { ...testimonial };
			delete newTestimonial.__v;
			delete newTestimonial._id;
			delete newTestimonial.id;
			return newTestimonial;
		}
	);

	return {
		props: {
			services,
			skills,
			projects,
			testimonials,
			user: {
				name: "Parth",
			},
		},
	};
};
