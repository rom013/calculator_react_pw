import { Trash } from "@phosphor-icons/react"
import { ButtonKeyBoard } from "./Button"
import { useEffect, useState } from "react"
import Display from "./Display"

export default function Calculator({showHistory, state}) {

    const [values, setValues] = useState("")
    const [valuesDisplay, setValuesDisplay] = useState("")
    const [oldValue, setOldValue] = useState("")

    const [disabledKey, setDisabledKey] = useState(true)

    useEffect(() => {
        if (valuesDisplay.length > 0) setDisabledKey(false)
        else setDisabledKey(true)

        if (values.endsWith("+") || values.endsWith("-") || values.endsWith("*") || values.endsWith("/")) {
            setDisabledKey(true)
        }
    }, [values, oldValue])
    return (
        <div
            className="bg-zinc-100 dark:bg-zinc-800 px-5 py-8 rounded-lg flex flex-col gap-6 w-fit max-w-md"
        >
            <Display
                oldValue={oldValue}
                valuesDisplay={valuesDisplay}
                showHistory={showHistory}
                state={state}
            />

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
                        disabled={disabledKey}
                    />
                    <ButtonKeyBoard
                        codeKey={"="}
                        valueKey={"="}
                        setNewValue={setValues}
                        values={values}
                        valuesDisplay={valuesDisplay}
                        setValueDisplay={setValuesDisplay}
                        setOldValue={setOldValue}
                        disabled={disabledKey}
                    />
                </div>
                <div
                    className="flex flex-col gap-4"
                >
                    <ButtonKeyBoard
                        valueKey={<Trash size={18} />}
                        values={"clear"}
                        setNewValue={setValues}
                        setValueDisplay={setValuesDisplay}
                        setOldValue={setOldValue}
                        className={"bg-red-500 hover:bg-red-600"}
                    />
                    <ButtonKeyBoard
                        codeKey={"+"}
                        valueKey={"+"}
                        values={values}
                        valuesDisplay={valuesDisplay}
                        setNewValue={setValues}
                        setValueDisplay={setValuesDisplay}

                        disabled={disabledKey}
                        className={"bg-slate-700 hover:bg-slate-800 text-sm"}
                    />
                    <ButtonKeyBoard
                        codeKey={"-"}
                        valueKey={"-"}
                        setNewValue={setValues}
                        values={values}
                        valuesDisplay={valuesDisplay}
                        setValueDisplay={setValuesDisplay}

                        disabled={disabledKey}
                        className={"bg-slate-700 hover:bg-slate-800 text-sm"}
                    />
                    <ButtonKeyBoard
                        codeKey={"/"}
                        valueKey={"÷"}
                        setNewValue={setValues}
                        values={values}
                        valuesDisplay={valuesDisplay}
                        setValueDisplay={setValuesDisplay}

                        disabled={disabledKey}
                        className={"bg-slate-700 hover:bg-slate-800 text-sm"}
                    />
                    <ButtonKeyBoard
                        codeKey={"*"}
                        valueKey={"×"}
                        setNewValue={setValues}
                        values={values}
                        valuesDisplay={valuesDisplay}
                        setValueDisplay={setValuesDisplay}

                        disabled={disabledKey}
                        className={"bg-slate-700 hover:bg-slate-800 text-sm"}
                    />
                </div>
            </div>
        </div>
    )
}