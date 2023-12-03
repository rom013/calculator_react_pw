import { twMerge } from "tailwind-merge"
import useCalculate from "../hook/useCalculete"

export function ButtonKeyBoard({ valueKey, codeKey, values, setNewValue, setValueDisplay, valuesDisplay, setOldValue, disabled=false, className }) {
    return (
        <button
            disabled={disabled}
            className={twMerge("bg-gray-500 hover:bg-gray-600 transition-all rounded-lg flex items-center justify-center py-2 w-20 max-h-9 text-white text-sm disabled:opacity-25", className)}
            onClick={()=>{
                if(typeof valueKey == "object" && values == "clear"){
                    setValueDisplay(``)
                    setNewValue(``)
                    setOldValue(``)
                }
                else{
                    if(values.length <= 20){
                        setNewValue(`${values}${codeKey}`)
                        setValueDisplay(`${valuesDisplay}${valueKey}`)
                    }
                    
                    if(valueKey == "=") {
                        setValueDisplay(useCalculate(values))
                        setNewValue(useCalculate(values, true))
                        setOldValue(values)
                    }
                }

            }}
        >
            {
                valueKey
            }
        </button>
    )
}