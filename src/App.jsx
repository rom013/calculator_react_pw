import { ClockCountdown, Trash } from "@phosphor-icons/react"
import { ButtonKeyBoard } from "./components/Button"
import { useEffect, useState } from "react"

function App() {

	const [ values, setValues ] = useState("")
	const [ valuesDisplay, setValuesDisplay ] = useState("")
	const [ oldValue, setOldValue ] = useState("")

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
						<div
							className="flex justify-between w-full items-center"
						>
							<button
								className="hover:bg-zinc-200 transition-colors duration-300 rounded-full p-2"
							>
								<ClockCountdown size={18} />
							</button>
							<span>
								{oldValue}
							</span>
						</div>

						<input 
							type="text" 
							value={valuesDisplay}
							className="w-full bg-inherit text-[2rem] text-zinc-900 focus-visible:outline-none" 
						/>
					</div>

					<div
						className="flex gap-6 justify-between"
					>
						<div
							className="grid grid-cols-3 gap-4"
						>
							<ButtonKeyBoard
								disabled={true}
							/>
							<ButtonKeyBoard
								disabled={true}
							/>
							<ButtonKeyBoard
								disabled={true}
							/>

							<ButtonKeyBoard
								codeKey={"1"}
								valueKey={"1"}
								setNewValue={setValues}
								setValueDisplay={setValuesDisplay}
								values={values}
								valuesDisplay={valuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"2"}
								valueKey={"2"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"3"}
								valueKey={"3"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>



							<ButtonKeyBoard
								codeKey={"4"}
								valueKey={"4"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"5"}
								valueKey={"5"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"6"}
								valueKey={"6"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>



							<ButtonKeyBoard
								codeKey={"7"}
								valueKey={"7"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"8"}
								valueKey={"8"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"9"}
								valueKey={"9"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>


							
							<ButtonKeyBoard
								codeKey={"0"}
								valueKey={"0"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"."}
								valueKey={","}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"="}
								valueKey={"="}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
								setOldValue={setOldValue}
							/>
						</div>
						<div
							className="flex flex-col gap-4"
						>
							<ButtonKeyBoard
								valueKey={<Trash size={18}/>}
								values={"clear"}

								setNewValue={setValues}
								setValueDisplay={setValuesDisplay}
								setOldValue={setOldValue}
							/>
							<ButtonKeyBoard
								codeKey={"+"}
								valueKey={"+"}
								values={values}
								valuesDisplay={valuesDisplay}
								setNewValue={setValues}
								setValueDisplay={setValuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"-"}
								valueKey={"-"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"/"}
								valueKey={"÷"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>
							<ButtonKeyBoard
								codeKey={"*"}
								valueKey={"×"}
								setNewValue={setValues}
								values={values}
								valuesDisplay={valuesDisplay}
								setValueDisplay={setValuesDisplay}
							/>
						</div>
					</div>
				</div>

			</section>
		</main>
	)
}

export default App
