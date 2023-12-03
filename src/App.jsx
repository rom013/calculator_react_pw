import { useState } from "react"
import Calculator from "./components/Calculator"
import HistoryMenu from "./components/History"

function App() {

	const [ showHistory, setShowHistory ] = useState(false)

	return (
		<main
			className="bg-blur min-h-screen bg-no-repeat bg-cover dark:bg-zinc-900 flex"
		>
			{
				showHistory && <HistoryMenu />
			}
			
			<section
				className="flex-1 flex items-center justify-center"
			>
				<Calculator showHistory={setShowHistory} state={showHistory} />
			</section>
		</main>
	)
}

export default App
