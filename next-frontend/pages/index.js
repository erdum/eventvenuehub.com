import { useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

// Images
import hero from "../public/dummy/hero.svg";
import avatar1 from "../public/dummy/avatar1.png";
import avatar2 from "../public/dummy/avatar2.png";
import avatar3 from "../public/dummy/avatar3.png";
import avatar4 from "../public/dummy/avatar4.png";
import img1 from "../public/dummy/img1.jpg";
import img2 from "../public/dummy/img2.jpg";
import img3 from "../public/dummy/img3.jpg";
import img4 from "../public/dummy/img4.jpg";
import img5 from "../public/dummy/img5.jpg";
import img6 from "../public/dummy/img6.jpg";
import img7 from "../public/dummy/img7.jpg";
import img8 from "../public/dummy/img8.jpg";
import img9 from "../public/dummy/img9.jpg";
import img10 from "../public/dummy/img10.jpg";
import img1P from "../public/dummy/img1.png";
import img2P from "../public/dummy/img2.png";
import img3P from "../public/dummy/img3.png";
import img4P from "../public/dummy/img4.png";
import img5P from "../public/dummy/img5.png";
import img6P from "../public/dummy/img6.png";

const Index = () => {
	useEffect(() => {
		setTimeout(() => {
			document.getElementById("__next").classList.add("loaded-success");
		}, 1000);
	}, []);

	return (
		<>
			<Head>
				<link rel="stylesheet" href="/animations.css" />
				<title>Event Management Solution - Invitation For Me</title>
			</Head>
			<div className="preloader loaded-success fixed inset-0 z-50 bg-gray-50">
				<div className="absolute left-1/2 top-1/2 transform -translate-y-1/2">
					<div className="relative mx-auto my-12">
						<div className="inline-block">
							<svg
								className="animate-spin h-8 w-8 text-blue-700"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx={12}
									cy={12}
									r={10}
									stroke="currentColor"
									strokeWidth={4}
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<header className="fixed top-0 left-0 right-0 z-40">
				<nav className="main-nav">
					<div className="container xl:max-w-6xl mx-auto px-4">
						<div className="lg:flex lg:justify-between">
							<div className="flex justify-between">
								<div className="mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center">
									Invitation For Me
								</div>
								{/* mobile nav */}
								<div className="flex flex-row items-center py-4 lg:py-0">
									<div className="relative text-gray-900 hover:text-black block lg:hidden">
										<button
											type="button"
											className="menu-mobile block py-3 px-6 border-b-2 border-transparent"
										>
											<span className="sr-only">Mobile menu</span>
											<svg
												className="open h-8 w-8"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M4 6h16M4 12h16M4 18h16"
												/>
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={16}
												height={16}
												fill="currentColor"
												className="close bi bi-x-lg h-8 w-8"
												viewBox="0 0 16 16"
											>
												<path
													fillRule="evenodd"
													d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
												/>
												<path
													fillRule="evenodd"
													d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div className="flex flex-row">
								<ul className="navbar bg-white lg:bg-transparent w-full hidden text-center lg:text-left lg:flex lg:flex-row text-gray-900 text-sm items-center font-bold">
									<li className="relative hover:text-black">
										<a
											className="active block py-3 lg:py-7 px-6 border-b-2 border-transparent"
											href="#hero"
										>
											Home
										</a>
									</li>
									<li className="relative hover:text-black">
										<a
											className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
											href="#services"
										>
											What we do
										</a>
									</li>
									<li className="relative hover:text-black">
										<a
											className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
											href="#portfolio"
										>
											Our works
										</a>
									</li>
									<li className="relative hover:text-black">
										<a
											className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
											href="#contact"
										>
											Contact
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<main id="content">
				<div
					id="hero"
					className="section relative z-0 py-16 md:pt-32 md:pb-20 bg-gray-50"
				>
					<div className="container xl:max-w-6xl mx-auto px-4">
						<div className="flex flex-wrap flex-row -mx-4 justify-center">
							<div className="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
								{/*<img
									src="src/img/dummy/hero.svg"
									className="w-full max-w-full h-auto"
									alt="creative agency"
								/>*/}
								<Image src={hero} alt="hero image" />
							</div>
							<div className="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
								<div className="text-center lg:text-left mt-6 lg:mt-0">
									<div className="mb-12">
										<h1 className="text-4xl leading-normal text-black font-bold mb-4">
											We are a Online Solution
											<br />
											serve{" "}
											<span
												data-toggle="typed"
												data-options='{"strings": ["Seminars", "Webinars", "Community Events", "Conferences", "Workshops"]}'
											/>
										</h1>
										<p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
											We would direct you to limitless ideas and move your brand
											into a global landscape.
										</p>
									</div>
									<Link href="/login">
										<a className="py-2.5 px-10 inline-block rounded-md text-center leading-normal text-gray-100 bg-black border-2 border-black transition-all hover:bg-[#68e1fd] hover:text-black">
											Get Started, for Free
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					id="services"
					className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
				>
					<div className="container xl:max-w-6xl mx-auto px-4">
						<header className="text-center mx-auto mb-12 lg:px-20">
							<h2 className="text-2xl leading-normal mb-2 font-bold text-black">
								What We Do
							</h2>
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 100 60"
								style={{ margin: "0 auto", height: 35 }}
								xmlSpace="preserve"
							>
								<circle
									cx="50.1"
									cy="30.4"
									r={5}
									className="stroke-primary"
									style={{
										fill: "transparent",
										strokeWidth: 2,
										strokeMiterlimit: 10,
									}}
								/>
								<line
									x1="55.1"
									y1="30.4"
									x2={100}
									y2="30.4"
									className="stroke-primary"
									style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
								/>
								<line
									x1="45.1"
									y1="30.4"
									x2={0}
									y2="30.4"
									className="stroke-primary"
									style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
								/>
							</svg>
							<p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
								Save time managing advertising &amp; Content for your business.
							</p>
						</header>
						<div className="flex flex-wrap flex-row -mx-4 text-center">
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
							>
								<div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div className="inline-block text-gray-900 mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="2rem"
											height="2rem"
											fill="currentColor"
											className="bi bi-search"
											viewBox="0 0 16 16"
										>
											<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
										</svg>
									</div>
									<h3 className="text-lg leading-normal mb-2 font-semibold text-black">
										SEO Services
									</h3>
									<p className="text-gray-500">
										This is a wider card with supporting text below as a natural
										content.
									</p>
								</div>
							</div>
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".1s"
							>
								<div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div className="inline-block text-gray-900 mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="2rem"
											height="2rem"
											fill="currentColor"
											className="bi bi-chat-square-dots"
											viewBox="0 0 16 16"
										>
											<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
											<path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
										</svg>
									</div>
									<h3 className="text-lg leading-normal mb-2 font-semibold text-black">
										Social Content
									</h3>
									<p className="text-gray-500">
										This is a wider card with supporting text below as a natural
										content.
									</p>
								</div>
							</div>
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".3s"
							>
								<div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div className="inline-block text-gray-900 mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="2rem"
											height="2rem"
											fill="currentColor"
											className="bi bi-badge-ad"
											viewBox="0 0 16 16"
										>
											<path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
											<path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
										</svg>
									</div>
									<h3 className="text-lg leading-normal mb-2 font-semibold text-black">
										Creative ads
									</h3>
									<p className="text-gray-500">
										This is a wider card with supporting text below as a natural
										content.
									</p>
								</div>
							</div>
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
							>
								<div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div className="inline-block text-gray-900 mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="2rem"
											height="2rem"
											fill="currentColor"
											className="bi bi-card-checklist"
											viewBox="0 0 16 16"
										>
											<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
											<path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
										</svg>
									</div>
									<h3 className="text-lg leading-normal mb-2 font-semibold text-black">
										Brand Identity
									</h3>
									<p className="text-gray-500">
										This is a wider card with supporting text below as a natural
										content.
									</p>
								</div>
							</div>
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".1s"
							>
								<div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div className="inline-block text-gray-900 mb-4">
										{/* icon */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="2rem"
											height="2rem"
											fill="currentColor"
											className="bi bi-wallet2"
											viewBox="0 0 16 16"
										>
											<path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
										</svg>
									</div>
									<h3 className="text-lg leading-normal mb-2 font-semibold text-black">
										Budget &amp; Marketing
									</h3>
									<p className="text-gray-500">
										This is a wider card with supporting text below as a natural
										content.
									</p>
								</div>
								{/* end service block */}
							</div>
							<div
								className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
								data-wow-duration="1s"
								data-wow-delay=".3s"
							>
								{/* service block */}
								<div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
									<div className="inline-block text-gray-900 mb-4">
										{/* icon */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="2rem"
											height="2rem"
											fill="currentColor"
											className="bi bi-funnel"
											viewBox="0 0 16 16"
										>
											<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
										</svg>
									</div>
									<h3 className="text-lg leading-normal mb-2 font-semibold text-black">
										Optimize conversions
									</h3>
									<p className="text-gray-500">
										This is a wider card with supporting text below as a natural
										content.
									</p>
								</div>
								{/* end service block */}
							</div>
						</div>
						{/* end row */}
					</div>
				</div>
				{/* End Service */} {/* Portfolio Content */}
				<div
					id="portfolio"
					className="section relative z-0 py-12 md:py-16 bg-white"
				>
					<div className="container xl:max-w-6xl mx-auto px-4">
						{/* Heading start */}
						<header className="text-center mx-auto mb-12 lg:px-20">
							<h2 className="text-2xl leading-normal mb-2 font-bold text-black">
								Our work
							</h2>
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 100 60"
								style={{ margin: "0 auto", height: 35 }}
								xmlSpace="preserve"
							>
								<circle
									cx="50.1"
									cy="30.4"
									r={5}
									className="stroke-primary"
									style={{
										fill: "transparent",
										strokeWidth: 2,
										strokeMiterlimit: 10,
									}}
								/>
								<line
									x1="55.1"
									y1="30.4"
									x2={100}
									y2="30.4"
									className="stroke-primary"
									style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
								/>
								<line
									x1="45.1"
									y1="30.4"
									x2={0}
									y2="30.4"
									className="stroke-primary"
									style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
								/>
							</svg>
							<p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
								We create engaging experiences that are innovatingand beautiful.
							</p>
						</header>
						{/* End heading */}
					</div>
					<div className="flex flex-wrap flex-row">
						<figure
							className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
							data-wow-duration="1s"
						>
							<div className="relative overflow-hidden cursor-pointer mb-6">
								<a
									href="src/img/dummy/img1.jpg"
									data-gallery="gallery1"
									data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content"
									className="glightbox3"
								>
									{/*<img
										className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
										src="src/img/dummy/img1.jpg"
										alt="Image Description"
									/>*/}
									<Image src={img1} alt="" />
									<div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
										<h3 className="text-base leading-normal font-semibold my-1 text-white">
											Logo Design
										</h3>
										<small className="d-block">Branding</small>
									</div>
								</a>
							</div>
						</figure>
						<figure
							className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".1s"
						>
							<div className="relative overflow-hidden cursor-pointer mb-6">
								<a
									href="src/img/dummy/img2.jpg"
									data-gallery="gallery1"
									data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content"
									className="glightbox3"
								>
									{/*<img
										className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
										src="src/img/dummy/img2.jpg"
										alt="Image Description"
									/>*/}
									<Image src={img2} alt="" />
									<div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
										<h3 className="text-base leading-normal font-semibold my-1 text-white">
											Web Development
										</h3>
										<small className="d-block">Web</small>
									</div>
								</a>
							</div>
						</figure>
						<figure
							className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".3s"
						>
							<div className="relative overflow-hidden cursor-pointer mb-6">
								<a
									href="src/img/dummy/img3.jpg"
									data-gallery="gallery1"
									data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content"
									className="glightbox3"
								>
									{/*<img
										className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
										src="src/img/dummy/img3.jpg"
										alt="Image Description"
									/>*/}
									<Image src={img3} alt="" />
									<div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
										<h3 className="text-base leading-normal font-semibold my-1 text-white">
											Graphic Design
										</h3>
										<small className="d-block">Graphic</small>
									</div>
								</a>
							</div>
						</figure>
						<figure
							className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".5s"
						>
							<div className="relative overflow-hidden cursor-pointer mb-6">
								<a
									href="src/img/dummy/img4.jpg"
									data-gallery="gallery1"
									data-glightbox="title: My title; description:  This is a wider card with supporting text below as a natural lead-in to additional content"
									className="glightbox3"
								>
									{/*<img
										className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
										src="src/img/dummy/img4.jpg"
										alt="Image Description"
									/>*/}
									<Image src={img4} alt="" />
									<div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
										<h3 className="text-base leading-normal font-semibold my-1 text-white">
											Logo Design
										</h3>
										<small className="d-block">Branding</small>
									</div>
								</a>
							</div>
						</figure>
						<figure
							className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".7s"
						>
							<div className="relative overflow-hidden cursor-pointer mb-6">
								<a
									href="src/img/dummy/img5.jpg"
									data-gallery="gallery1"
									data-glightbox="title: My title; description:  This is a wider card with supporting text below as a natural lead-in to additional content"
									className="glightbox3"
								>
									{/*<img
										className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
										src="src/img/dummy/img5.jpg"
										alt="Image Description"
									/>*/}
									<Image src={img5} alt="" />
									<div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
										<h3 className="text-base leading-normal font-semibold my-1 text-white">
											Web Development
										</h3>
										<small className="d-block">Web</small>
									</div>
								</a>
							</div>
						</figure>
						<figure
							className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
							data-wow-duration="1s"
						>
							<div className="relative overflow-hidden cursor-pointer mb-6">
								<a
									href="src/img/dummy/img6.jpg"
									data-gallery="gallery1"
									data-glightbox="title: Graphic Design; description: This is a wider card with supporting text below as a natural lead-in to additional content"
									className="glightbox3"
								>
									{/*<img
										className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
										src="src/img/dummy/img6.jpg"
										alt="Image Description"
									/>*/}
									<Image src={img6} alt="" />
									<div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
										<h3 className="text-base leading-normal font-semibold my-1 text-white">
											Graphic Design
										</h3>
										<small className="d-block">Graphic</small>
									</div>
								</a>
							</div>
						</figure>
						<figure
							className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".1s"
						>
							<div className="relative overflow-hidden cursor-pointer mb-6">
								<a
									href="src/img/dummy/img7.jpg"
									data-gallery="gallery1"
									data-glightbox="title: Logo Design; description: This is a wider card with supporting text below as a natural lead-in to additional content"
									className="glightbox3"
								>
									{/*<img
										className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
										src="src/img/dummy/img7.jpg"
										alt="Image Description"
									/>*/}
									<Image src={img7} alt="" />
									<div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
										<h3 className="text-base leading-normal font-semibold my-1 text-white">
											Logo Design
										</h3>
										<small className="d-block">Branding</small>
									</div>
								</a>
							</div>
						</figure>
						<figure
							className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".3s"
						>
							<div className="relative overflow-hidden cursor-pointer mb-6">
								<a
									href="src/img/dummy/img8.jpg"
									data-gallery="gallery1"
									data-glightbox="title: Web Development; description: This is a wider card with supporting text below as a natural lead-in to additional content"
									className="glightbox3"
								>
									{/*<img
										className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
										src="src/img/dummy/img8.jpg"
										alt="Image Description"
									/>*/}
									<Image src={img8} alt="" />
									<div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
										<h3 className="text-base leading-normal font-semibold my-1 text-white">
											Web Development
										</h3>
										<small className="d-block">Web</small>
									</div>
								</a>
							</div>
						</figure>
						<figure
							className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".5s"
						>
							<div className="relative overflow-hidden cursor-pointer mb-6">
								<a
									href="src/img/dummy/img9.jpg"
									data-gallery="gallery1"
									data-glightbox="title: Graphic Design; description: This is a wider card with supporting text below as a natural lead-in to additional content"
									className="glightbox3"
								>
									{/*<img
										className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
										src="src/img/dummy/img9.jpg"
										alt="Image Description"
									/>*/}
									<Image src={img9} alt="" />
									<div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
										<h3 className="text-base leading-normal font-semibold my-1 text-white">
											Graphic Design
										</h3>
										<small className="d-block">Graphic</small>
									</div>
								</a>
							</div>
						</figure>
						<figure
							className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".7s"
						>
							<div className="relative overflow-hidden cursor-pointer mb-6">
								<a
									href="src/img/dummy/img10.jpg"
									data-gallery="gallery1"
									data-glightbox="title: App Design; description: This is a wider card with supporting text below as a natural lead-in to additional content"
									className="glightbox3"
								>
									{/*<img
										className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
										src="src/img/dummy/img10.jpg"
										alt="Image Description"
									/>*/}
									<Image src={img10} alt="" />
									<div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
										<h3 className="text-base leading-normal font-semibold my-1 text-white">
											App Design
										</h3>
										<small className="d-block">App</small>
									</div>
								</a>
							</div>
						</figure>
					</div>
				</div>
				{/*  End Content */} {/* contact start */}
				<div
					id="contact"
					className="section relative pb-20 bg-white dark:bg-gray-800"
				>
					<div className="container xl:max-w-6xl mx-auto px-4">
						<div className="flex flex-wrap flex-row -mx-4 justify-center">
							<div className="max-w-ful px-4 w-full lg:w-8/12">
								<div
									className="bg-gray-50 border-b border-gray-100 w-full p-12 wow fadeInUp"
									data-wow-duration="1s"
									data-wow-delay=".5s"
								>
									{/* section header */}
									<header className="text-center mx-auto mb-12 lg:px-20">
										<h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
											<span className="font-light">Contact</span> Us
										</h2>
										<svg
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											x="0px"
											y="0px"
											viewBox="0 0 100 60"
											style={{ margin: "0 auto", height: 35 }}
											xmlSpace="preserve"
										>
											<circle
												cx="50.1"
												cy="30.4"
												r={5}
												className="stroke-primary"
												style={{
													fill: "transparent",
													strokeWidth: 2,
													strokeMiterlimit: 10,
												}}
											/>
											<line
												x1="55.1"
												y1="30.4"
												x2={100}
												y2="30.4"
												className="stroke-primary"
												style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
											/>
											<line
												x1="45.1"
												y1="30.4"
												x2={0}
												y2="30.4"
												className="stroke-primary"
												style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
											/>
										</svg>
										<p className="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">
											Have questions about service, please contact us.
										</p>
									</header>
									{/* end section header */}
									{/* contact form */}
									<form action="#">
										<div className="flex flex-wrap flex-row -mx-4">
											<div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
												<label className="inline-block mb-2" htmlFor="name">
													Your Name
												</label>
												<input
													type="text"
													name="name"
													className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
													id="name"
												/>
												<div className="validate" />
											</div>
											<div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
												<label className="inline-block mb-2" htmlFor="email">
													Your Email
												</label>
												<input
													type="email"
													className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
													name="email"
													id="email"
												/>
												<div className="validate" />
											</div>
										</div>
										<div className="mb-6">
											<label className="inline-block mb-2" htmlFor="subject">
												Subject
											</label>
											<input
												type="text"
												className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
												name="subject"
												id="subject"
											/>
											<div className="validate" />
										</div>
										<div className="mb-6">
											<label className="inline-block mb-2" htmlFor="messages">
												Message
											</label>
											<textarea
												className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
												name="message"
												rows={10}
												id="messages"
												defaultValue={""}
											/>
											<div className="validate" />
										</div>
										<div className="text-center mb-6">
											<a
												className="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border border-black hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
												href="#project"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="1.5rem"
													height="1.5rem"
													className="inline-block mr-1"
													fill="currentColor"
													viewBox="0 0 512 512"
												>
													<rect
														x={48}
														y={96}
														width={416}
														height={320}
														rx={40}
														ry={40}
														style={{
															fill: "none",
															stroke: "currentColor",
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 32,
														}}
													/>
													<polyline
														points="112 160 256 272 400 160"
														style={{
															fill: "none",
															stroke: "currentColor",
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 32,
														}}
													/>
												</svg>
												Send message
											</a>
										</div>
									</form>
									{/* end contact form */}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End contact */}
			</main>
			{/* end main */} {/* =========={ FOOTER }==========  */}
			<footer className="bg-gray-50 text-gray-700">
				{/*Footer content*/}
				<div
					id="footer-content"
					className="relative pt-8 xl:pt-16 pb-6 xl:pb-12"
				>
					<div className="container xl:max-w-6xl mx-auto px-4 overflow-hidden">
						<div className="flex flex-wrap flex-row lg:justify-between -mx-3">
							<div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
								<div className="flex items-center mb-2">
									<span className="text-3xl leading-normal mb-2 font-bold text-gray-800 mt-2">
										Invitation For Me
									</span>
									{/* <img src="src/img-min/logo.png" alt="LOGO"> */}
								</div>
								<p>
									Tailwind One Page Template for build One page landing page.
								</p>
								<ul className="space-x-3 mt-6 mb-6 Lg:mb-0">
									{/*facebook*/}
									<li className="inline-block">
										<a
											target="_blank"
											className="hover:text-gray-800"
											rel="noopener noreferrer"
											href="https://facebook.com"
											title="Facebook"
										>
											{/* <i class="fab fa-facebook fa-2x"></i> */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="2rem"
												height="2rem"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
												/>
											</svg>
										</a>
									</li>
									{/*twitter*/}
									<li className="inline-block">
										<a
											target="_blank"
											className="hover:text-gray-800"
											rel="noopener noreferrer"
											href="https://twitter.com"
											title="Twitter"
										>
											{/* <i class="fab fa-twitter fa-2x"></i> */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="2rem"
												height="2rem"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
												/>
											</svg>
										</a>
									</li>
									{/*youtube*/}
									<li className="inline-block">
										<a
											target="_blank"
											className="hover:text-gray-800"
											rel="noopener noreferrer"
											href="https://youtube.com"
											title="Youtube"
										>
											{/* <i class="fab fa-youtube fa-2x"></i> */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="2rem"
												height="2rem"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"
												/>
											</svg>
										</a>
									</li>
									{/*instagram*/}
									<li className="inline-block">
										<a
											target="_blank"
											className="hover:text-gray-800"
											rel="noopener noreferrer"
											href="https://instagram.com"
											title="Instagram"
										>
											{/* <i class="fab fa-instagram fa-2x"></i> */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="2rem"
												height="2rem"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
												/>
												<path
													fill="currentColor"
													d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
												/>
												<path
													fill="currentColor"
													d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
												/>
											</svg>
										</a>
									</li>
									{/*end instagram*/}
								</ul>
							</div>
							<div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
								<div className="flex flex-wrap flex-row">
									<div className="flex-shrink max-w-full w-1/2 md:w-1/3 mb-6 lg:mb-0">
										<h4 className="text-base leading-normal mb-3 uppercase text-gray-800">
											Company
										</h4>
										<ul>
											<li className="py-1 hover:text-gray-900">
												<Link href="/support">
													<a>24/7 Live Support</a>
												</Link>
											</li>
											<li className="py-1 hover:text-gray-900">
												<a href="mailto:erdumadnan@gmail.com?subject=InvitationFor.Me Customer">
													Contact Founder
												</a>
											</li>
											<Link href="/demo">
												<a className="mt-4 mr-12 px-0.5 py-0.5 md:py-1 md:px-2 text-center rounded-md bg-black text-white border-2 border-black transition-colors cursor-pointer text-sm md:text-md hover:bg-[#68e1fd] hover:text-black">
													Try demo, for Free
												</a>
											</Link>
										</ul>
									</div>
									<div className="flex-shrink max-w-full w-1/2 md:w-1/3 mb-6 lg:mb-0">
										<h4 className="text-base leading-normal mb-3 uppercase text-gray-800">
											Services
										</h4>
										<ul>
											<li className="py-1 hover:text-gray-900">
												<a href="#">Webinar</a>
											</li>
											<li className="py-1 hover:text-gray-900">
												<a href="#">Conference</a>
											</li>
											<li className="py-1 hover:text-gray-900">
												<a href="#">Community Event</a>
											</li>
											<li className="py-1 hover:text-gray-900">
												<a href="#">Seminar</a>
											</li>
											<li className="py-1 hover:text-gray-900">
												<a href="#">Workshop</a>
											</li>
										</ul>
									</div>
									<div className="flex-shrink max-w-full w-1/2 md:w-1/3 mb-6 lg:mb-0">
										<h4 className="text-base leading-normal mb-3 uppercase text-gray-800">
											Legal
										</h4>
										<ul>
											<li className="py-1 hover:text-gray-900">
												<a href="#">Privacy Policy</a>
											</li>
											<li className="py-1 hover:text-gray-900">
												<a href="#">Terms of Use</a>
											</li>
											<li className="py-1 hover:text-gray-900">
												<a href="#">License</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*Start footer copyright*/}
				<div className="footer-dark">
					<div className="container xl:max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 border-opacity-10">
						<div className="row">
							<div className="col-12 col-md text-center">
								<p className="d-block my-3">
									© 2022 invitationfor.me | All rights reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/*End footer copyright*/}
			</footer>
			{/* end footer */} {/* =========={ SCROLL TO TOP }==========  */}
			<a
				href="#"
				className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden"
				aria-label="Scroll To Top"
			>
				<svg
					width="1rem"
					height="1rem"
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
						clipRule="evenodd"
					/>
				</svg>
			</a>
			<Script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/js/splide.min.js" />
			<Script src="https://cdn.jsdelivr.net/npm/glightbox@3.2.0/dist/js/glightbox.min.js" />
			<Script src="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js" />
			<Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12/lib/typed.min.js" />
			<Script src="https://cdn.jsdelivr.net/npm/smooth-scroll@16.1.3/dist/smooth-scroll.polyfills.min.js" />
			<Script src="/animations.js" />
		</>
	);
};

export default Index;
