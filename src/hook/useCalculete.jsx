export default function useCalculate(value){
    return eval(value).toString() 
    // existe um erro ao utilizar o eval, pois ele permite que usuários mal intencionados insiram códigos maliciosos
}