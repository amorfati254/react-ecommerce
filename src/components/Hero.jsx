import React from "react";

export default function Hero() {
	return (
		<div className="flex mt-14 h-screen">
			<div className="md:basis-2/3 flex flex-col justify-center items-center bg-hero-img md:bg-none bg-cover bg-center">
				<div className="flex flex-col justify-center items-center backdrop-blur-sm flex-1 px-2">
					<h1 class="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-gray-900 md:text-5xl lg:text-6xl">
						Best Fashion Online Store
					</h1>
					<p class="mb-6 text-lg font-normal text-white md:text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-center">
						Here at React Ecommerce we focus on bringing you quality fashion
						clothes at reasonable prices.
					</p>
					<a
						href="#"
						class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
					>
						Shop Now
						<svg
							class="ml-2 -mr-1 w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
				</div>
			</div>
			<div className="basis-1/3 bg-hero-img bg-cover bg-center hidden md:block"></div>
		</div>
	);
}
