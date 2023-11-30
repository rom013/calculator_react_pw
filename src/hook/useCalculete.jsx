export default function useCalculate(value){
    try {
        const resultCalc = eval(value).toString()

        if(resultCalc == "NaN") throw new TypeError()
        else return resultCalc
    } catch (error) {
        return "Error"
    }
}