import Link from "next/link";
import Image from "next/image";

// Logo
import logo from "../public/vercel.svg";

const login = () => {
	return (
		<div className="flex min-h-screen">
			<div className="flex flex-row w-full">
				<div className="hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
					<div className="flex items-center justify-start space-x-3">
						<Image src={logo} alt="logo" width={64} height={64} />
						<Link href="/">
							<a className="font-medium text-xl">Event Venue Hub</a>
						</Link>
					</div>
					<div className="space-y-5">
						<h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
							Discover the modern way of organizing events
						</h1>
						<p className="text-lg">You do not have an account?</p>
						<button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white transition-all hover:bg-white hover:text-black">
							Create account here
						</button>
					</div>
					<p className="font-medium">© 2022 eventvenuehub.com</p>
				</div>

				<div className="flex flex-1 flex-col items-center justify-center px-10 relative">
					<div className="flex lg:hidden justify-between items-center w-full py-4">
						<div className="flex items-center justify-start space-x-3">
							<span className="bg-black rounded-full w-6 h-6"></span>
							<a href="#" className="font-medium text-lg">
								Brand
							</a>
						</div>
						<div className="flex items-center space-x-2">
							<span>Not a member? </span>
							<a href="#" className="underline font-medium text-[#070eff]">
								Sign up now
							</a>
						</div>
					</div>

					<div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
						<div className="flex flex-col space-y-2 text-center">
							<h2 className="text-3xl md:text-4xl font-bold">
								Sign in to account
							</h2>
							<p className="text-md md:text-xl">
								Sign up or log in to move forward,no password require!
							</p>
						</div>
						<div className="flex flex-col max-w-md space-y-5">
							<input
								type="text"
								placeholder="Username"
								className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
							/>
							<input
								type="text"
								placeholder="Email"
								className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
							/>
							<button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white transition-all hover:bg-[#ffe85c] hover:text-black">
								Confirm with email
							</button>
							<div className="flex justify-center items-center">
								<span className="w-full border border-black"></span>
								<span className="px-4">Or</span>
								<span className="w-full border border-black"></span>
							</div>
							<button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative transition-all hover:bg-[#ffe85c] hover:text-black">
								<span className="absolute left-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path
											fill="#EA4335"
											d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"
										></path>
										<path
											fill="#34A853"
											d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"
										></path>
										<path
											fill="#4A90E2"
											d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"
										></path>
										<path
											fill="#FBBC05"
											d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"
										></path>
									</svg>
								</span>
								<span>Sign in with Google</span>
							</button>
						</div>
					</div>

					<div className="flex justify-center flex-col m-auto mb-16 text-center text-lg dark:text-slate-200 ">
						{/*<div className="font-bold mb-1">
							Built by{" "}
							<a href="https://asitgrouppakistan.com" className="underline dark:text-white">
								ASIT group Pakistan
							</a>
						</div>*/}
						<p>Contact us on social networks</p>
						<div className="flex items-center justify-center space-x-2 mt-4 flex-wrap">
							<a
								href="https://www.linkedin.com"
								className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<circle
										cx="4.983"
										cy="5.009"
										r="2.188"
										fill="currentColor"
									></circle>
									<path
										fill="currentColor"
										d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
									></path>
								</svg>
							</a>
							<a
								href="https://www.instagram.com"
								className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
										fill="currentColor"
									></path>
								</svg>
							</a>
							<a
								href="https://twitter.com"
								className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
										fill="currentColor"
									></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default login;
