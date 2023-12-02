import Calculator from "./components/Calculator"
import HistoryMenu from "./components/History"

function App() {
	return (
		<main
			className="bg-blur min-h-screen bg-no-repeat bg-cover dark:bg-zinc-900 flex"
		>
			<HistoryMenu/>
			<section
				className="flex-1 flex items-center justify-center"
			>
				<Calculator/>
			</section>
		</main>
	)
}

export default App
