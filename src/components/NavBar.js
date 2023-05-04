import React from 'react'

export default function NavBar() {
	return (
		<>
			<nav class="bg-white border-gray-200 dark:bg-gray-900">
				<div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
				
					<div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
						<ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
							<li>
								<a href="#" class="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
							</li>
							<li>
								<a href="#" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
							</li>
							<li>
								<a href="#" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Product</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
