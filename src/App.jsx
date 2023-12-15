import { useState } from "react"
import Calculator from "./components/Calculator"
import HistoryMenu from "./components/History"
import ImageProfile from "./components/ImageProfile"

const USERS = [
	{
		name: "Rômullo Melo",
		image: "https://pawsy-alpha.vercel.app/assets/romullo-d356a6a2.jpg",
		link: "https://github.com/rom013"
	},
	{
		name: "Fernando Fernandes",
		image: "https://pawsy-alpha.vercel.app/assets/fernando-075c3371.jpg",
		link: "https://github.com/Fernando-Fernandes05"
		
	},
	{
		name: "Luana Alcantara",
		image: "https://pawsy-alpha.vercel.app/assets/luana-a8515d4e.jpg",
	},
	{
		name: "Nicole Nunes",
		image: "https://pawsy-alpha.vercel.app/assets/nicole-37ee5e34.jpg",
	},
	{
		name: "Pedro Daniel",
		image: "https://pawsy-alpha.vercel.app/assets/pedro-eda90fec.jpg",
		link: "https://github.com/pedroDanielBrunetto"
	}
]

function App() {

	const [ showHistory, setShowHistory ] = useState(false)
	return (
		<main
			className="bg-blur min-h-screen bg-no-repeat bg-cover dark:bg-zinc-900 flex flex-col"
		>
			<header
				className="flex gap-1 items-center justify-end px-20 py-6"
			>
				<span className="text-white font-semibold">Criado por: {" "}</span>
				<div
					className="grid grid-cols-[18px_18px_18px_18px_18px_18px]"
				>
					{
						USERS.map((u,i)=>{
							return(
								<ImageProfile
									nameUser={u.name}
									urlImg={u.image}
									key={i}
									link={u.link}
								/>
							)
						})
					}
				</div>
			</header>

			{
				showHistory && <HistoryMenu />
			}
			
			<section
				className="flex-1 flex items-center justify-center"
			>
				<Calculator showHistory={setShowHistory} state={showHistory} />
			</section>


			<footer
				className="flex justify-center items-center py-2 dark:text-white text-zinc-800"
			>
				<a 
					href="https://pawsy-alpha.vercel.app/"
					target="_blank"
					className="flex items-center gap-2"
				>
					Conheça já a <img src="https://pawsy-alpha.vercel.app/assets/logoPawsyGreen-2541ae2d.svg" alt="logo pawsy" width={64} />
				</a>
			</footer>
		</main>
	)
}

export default App
