import axios from "axios"

export default function useCalculate(value, insert){
    try {
        const resultCalc = eval(value).toString()

        if(resultCalc == "NaN") throw new TypeError()
        else {
            if(insert){
                axios.post(`${import.meta.env.VITE_URL_DATABASE_JSON}/history`, {
                    equation: value,
                    result: resultCalc
                })
                .then(e => console.log(e))
                .catch(err => console.log(err))
            }

            return resultCalc
        }
    } catch (error) {
        return "Error"
    }
}