import { ClockCountdown } from "@phosphor-icons/react"

function App() {
	return (
		<main
			className="bg-blur min-h-screen bg-no-repeat bg-cover dark:bg-zinc-900 flex"
		>
			<section
				className="flex-1 flex items-center justify-center"
			>

				<div
					className="bg-zinc-100 px-5 py-8 rounded-lg flex flex-col gap-6 w-fit max-w-md"
				>
					<div
						className="bg-gray-300 w-full px-4 py-2 rounded-lg"
					>
						<button
							className="hover:bg-zinc-200 transition-colors duration-300 rounded-full p-2"
						>
							<ClockCountdown size={18} />
						</button>

						<input type="text" value={0} className="w-full text-end bg-inherit text-[2rem] text-zinc-900 focus-visible:outline-none" />
					</div>

					<div
						className="flex gap-6 justify-between"
					>
						<div
							className="grid grid-cols-3 gap-4"
						>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
						</div>
						<div
							className="flex flex-col gap-4"
						>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
							<button
								className="bg-gray-500 rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm"
							>
								1
							</button>
						</div>
					</div>
				</div>

			</section>
		</main>
	)
}

export default App
