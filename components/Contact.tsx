import SectionTitle from "./SectionTitle";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import React, { useState } from "react";
import axios from "axios";

const Contact = React.forwardRef((props, ref) => {
	const {
		register,
		handleSubmit,
		formState: {
			errors: { name, email, description },
		},
	} = useForm();
	const [message, setMessage] = useState<null | {
		message: string;
		error: boolean;
	}>(null);
	return (
		<div ref={ref as any} className="">
			<SectionTitle title="Let's get in touch" />
			<div
				data-aos="fade-right"
				className="flex flex-col lg:flex-row lg:space-x-20 xl:space-x-0 lg:justify-between"
			>
				<div className="space-y-10 my-14">
					<div className="max-w-md">
						I am always open to discuss your project. Please don't
						hesitate to contact !!
					</div>
					<div className="text-base">
						<div className="text-sm text-gray-600">
							Email me at:
						</div>
						<div className="font-semibold">
							parthnpatil06@gmail.com
						</div>
					</div>
				</div>
				<div className="flex-grow lg:max-w-xl relative">
					<div className="text-gray-600 font-semibold mb-5">
						Or use this form
					</div>
					<form
						onSubmit={handleSubmit((data, e) => {
							axios
								.post("/api/contact", {
									...data,
								})
								.then(() => {
									setMessage({
										message:
											"Thank you for contacting me!! I will get back to you in 1-2 days through email",
										error: false,
									});
								})
								.catch(() => {
									setMessage({
										message:
											"Error contacting. Please try again",
										error: true,
									});
								});
							setTimeout(() => {
								setMessage(null);
							}, 5000);
							e.target.reset();
						})}
						className="flex flex-col text-sm"
					>
						<FormInput
							placeholder="Your name*"
							{...register("name", {
								required: "Name is required",
							})}
						/>
						<ErrorMessage message={name?.message} />

						<FormInput
							placeholder="Your Email*"
							type="email"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid email address",
								},
							})}
						/>
						<ErrorMessage message={email?.message} />
						<textarea
							className="border-2 px-4 py-2 rounded-md h-32 focus:border-0 focus:ring-2 outline-none focus:ring-primary"
							placeholder="How can I help?*"
							{...register("description", {
								required: "Description is required",
							})}
						/>
						<ErrorMessage message={description?.message} />
						<Button
							type="submit"
							className="self-start lg:self-end text-base"
						>
							Get in touch
						</Button>
					</form>
					{message && (
						<div className="fixed bottom-20 z-10 left-0 right-0 text-gray-100">
							{!message.error ? (
								<p className="rounded-lg px-5 py-4 absolute right-10 bottom-5 mx-auto max-w-xl md:w-auto w-4/5 bg-[#28a745]">
									{message.message}
								</p>
							) : (
								<p className="rounded-lg px-5 py-4 absolute right-10 bottom-5 mx-auto max-w-xl md:w-auto w-4/5 bg-[#c82333]">
									{message.message}
								</p>
							)}
						</div>
					)}
				</div>
			</div>
			<p className="hidden lg:block mt-10 text-gray-700 font-medium">
				Talk to me at
			</p>
			<div className="flex space-x-5 mt-10 lg:mt-5 justify-center lg:justify-start">
				<a href="https://www.instagram.com/parth_2412_/">
					<svg
						width="38"
						height="38"
						viewBox="0 0 38 38"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M22.6367 19C22.6367 21.0085 21.0085 22.6367 19 22.6367C16.9915 22.6367 15.3633 21.0085 15.3633 19C15.3633 16.9915 16.9915 15.3633 19 15.3633C21.0085 15.3633 22.6367 16.9915 22.6367 19Z"></path>
						<path d="M27.5062 12.5655C27.3313 12.0918 27.0524 11.663 26.69 11.311C26.3381 10.9486 25.9096 10.6697 25.4356 10.4949C25.0511 10.3456 24.4736 10.1679 23.4099 10.1194C22.2592 10.067 21.9142 10.0557 19.0012 10.0557C16.0878 10.0557 15.7428 10.0667 14.5924 10.1192C13.5287 10.1679 12.9509 10.3456 12.5667 10.4949C12.0927 10.6697 11.6639 10.9486 11.3123 11.311C10.9499 11.663 10.671 12.0915 10.4959 12.5655C10.3466 12.9499 10.1688 13.5277 10.1204 14.5914C10.0679 15.7418 10.0566 16.0868 10.0566 19.0002C10.0566 21.9133 10.0679 22.2583 10.1204 23.4089C10.1688 24.4727 10.3466 25.0502 10.4959 25.4346C10.671 25.9086 10.9496 26.3371 11.312 26.6891C11.6639 27.0515 12.0924 27.3304 12.5665 27.5052C12.9509 27.6548 13.5287 27.8325 14.5924 27.8809C15.7428 27.9334 16.0875 27.9444 19.0009 27.9444C21.9145 27.9444 22.2595 27.9334 23.4096 27.8809C24.4733 27.8325 25.0511 27.6548 25.4356 27.5052C26.3871 27.1382 27.1391 26.3861 27.5062 25.4346C27.6555 25.0502 27.8332 24.4727 27.8819 23.4089C27.9344 22.2583 27.9454 21.9133 27.9454 19.0002C27.9454 16.0868 27.9344 15.7418 27.8819 14.5914C27.8335 13.5277 27.6558 12.9499 27.5062 12.5655ZM19.0012 24.6022C15.9069 24.6022 13.3985 22.0942 13.3985 18.9999C13.3985 15.9056 15.9069 13.3975 19.0012 13.3975C22.0952 13.3975 24.6035 15.9056 24.6035 18.9999C24.6035 22.0942 22.0952 24.6022 19.0012 24.6022ZM24.825 14.4853C24.102 14.4853 23.5157 13.8991 23.5157 13.176C23.5157 12.453 24.102 11.8668 24.825 11.8668C25.5481 11.8668 26.1343 12.453 26.1343 13.176C26.134 13.8991 25.5481 14.4853 24.825 14.4853Z"></path>
						<path d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM29.8443 23.4981C29.7916 24.6595 29.6069 25.4524 29.3373 26.1465C28.7705 27.612 27.612 28.7705 26.1465 29.3373C25.4527 29.6069 24.6595 29.7913 23.4984 29.8443C22.3349 29.8974 21.9632 29.9102 19.0003 29.9102C16.037 29.9102 15.6657 29.8974 14.5019 29.8443C13.3408 29.7913 12.5476 29.6069 11.8538 29.3373C11.1256 29.0633 10.4663 28.6339 9.92125 28.0788C9.36635 27.534 8.93698 26.8744 8.66301 26.1465C8.39339 25.4527 8.20871 24.6595 8.15594 23.4984C8.10231 22.3346 8.08984 21.963 8.08984 19C8.08984 16.037 8.10231 15.6654 8.15565 14.5019C8.20842 13.3405 8.39281 12.5476 8.66243 11.8535C8.9364 11.1256 9.36606 10.466 9.92125 9.92125C10.466 9.36606 11.1256 8.93669 11.8535 8.66272C12.5476 8.3931 13.3405 8.20871 14.5019 8.15565C15.6654 8.1026 16.037 8.08984 19 8.08984C21.963 8.08984 22.3346 8.1026 23.4981 8.15594C24.6595 8.20871 25.4524 8.3931 26.1465 8.66243C26.8744 8.9364 27.534 9.36606 28.079 9.92125C28.6339 10.4663 29.0636 11.1256 29.3373 11.8535C29.6072 12.5476 29.7916 13.3405 29.8446 14.5019C29.8977 15.6654 29.9102 16.037 29.9102 19C29.9102 21.963 29.8977 22.3346 29.8443 23.4981Z"></path>
					</svg>
				</a>
				<a href="https://twitter.com/Parth24121">
					<svg
						width="38"
						height="38"
						viewBox="0 0 38 38"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM27.6752 14.8142C27.6836 15.0012 27.6877 15.189 27.6877 15.3778C27.6877 21.1405 23.3012 27.7856 15.2795 27.7859H15.2798H15.2795C12.8167 27.7859 10.5249 27.064 8.59488 25.827C8.93611 25.8673 9.28343 25.8873 9.6351 25.8873C11.6784 25.8873 13.5588 25.1903 15.0516 24.0205C13.1425 23.9851 11.5329 22.7243 10.9774 20.9914C11.2433 21.0425 11.5167 21.0703 11.797 21.0703C12.1951 21.0703 12.5807 21.0167 12.9471 20.9166C10.9516 20.5171 9.44839 18.7536 9.44839 16.6418C9.44839 16.6221 9.44839 16.6044 9.44897 16.5862C10.0366 16.9129 10.7087 17.1095 11.4242 17.1315C10.2532 16.3502 9.48347 15.0145 9.48347 13.5014C9.48347 12.7024 9.69946 11.9539 10.074 11.3094C12.2246 13.9482 15.4387 15.6836 19.0632 15.866C18.9884 15.5465 18.9498 15.2137 18.9498 14.8716C18.9498 12.4641 20.903 10.5109 23.3114 10.5109C24.5658 10.5109 25.6988 11.0412 26.4946 11.8889C27.4882 11.6929 28.4211 11.33 29.2639 10.8304C28.9378 11.8483 28.2466 12.7024 27.3461 13.2425C28.2283 13.137 29.0691 12.903 29.8504 12.5557C29.2668 13.4304 28.5267 14.1987 27.6752 14.8142Z"
							fill="#0D0C22"
						></path>
					</svg>
				</a>
				<a href="https://linkedin.com">
					<svg
						width="38"
						height="38"
						viewBox="0 0 38 38"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM13.4788 28.7227H8.85146V14.8011H13.4788V28.7227ZM11.1653 12.9001H11.1351C9.58234 12.9001 8.57806 11.8312 8.57806 10.4953C8.57806 9.1292 9.61307 8.08984 11.196 8.08984C12.779 8.08984 13.7531 9.1292 13.7832 10.4953C13.7832 11.8312 12.779 12.9001 11.1653 12.9001ZM30.1641 28.7227H25.5373V21.275C25.5373 19.4033 24.8673 18.1268 23.1931 18.1268C21.9148 18.1268 21.1535 18.9878 20.8189 19.819C20.6966 20.1165 20.6667 20.5322 20.6667 20.9482V28.7227H16.0397C16.0397 28.7227 16.1003 16.1072 16.0397 14.8011H20.6667V16.7723C21.2816 15.8237 22.3819 14.4744 24.8369 14.4744C27.8813 14.4744 30.1641 16.4641 30.1641 20.7401V28.7227Z"
							fill="#0D0C22"
						></path>
					</svg>
				</a>
				<svg
					width="38"
					height="38"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 128 128"
				>
					<g fill="#0D0C22">
						<path
							fillRule="evenodd"
							d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
							clipRule="evenodd"
						/>
						<path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
					</g>
				</svg>
			</div>
		</div>
	);
});

export default Contact;
