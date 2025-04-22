/*let nomeMateria:string = "Frameworks I"
console.log(nomeMateria)

const variavel = 10
const variavelNumber:number = 10
const variavelString:string = "Frameworks I"
const variavelBooleano:boolean = true //false

const vetor:number[] = []

const vetorstring:string[] = ["Strings", "11"]

vetor.push(10)

//Como criar objetos dentro do JS

const pessoa:{nome:string,idade:number} = {
    idade: 17,
    nome:"Victória"
}
pessoa.nome = "Victória Silva"
pessoa.idade = 10
console.log


//TYPE
type EstudanteType = {
    nome:string,
    idade:number,
    cpf:number
}
const estudanteObj:EstudanteType = {
    nome: "Vic",
    idade: 17,
    cpf: 12312312312
}
console.log(estudanteObj)

//Funções no Javascript
function soma(a:number,b:number):number|undefined{
    return a+b
}
console.log(`O resultado da soma é:${soma(10,20)}`)

const vetorExemplo = [1,2,3,4,5,6,7,8]
console.log(vetorExemplo)
console.log(vetorExemplo.pop())
console.log(vetorExemplo)




function somaA(a:number,b:number):number{
    return a+b
}
const SomaB= function(a:number,b:number):number{
    return a+b
}
const somaC=(a:number,b:number):number=>{
    return a+b
}
const somaD=(a:number,b:number):number=>a+b

const somay = (a,b)=>a+b


//Atividade I
//Primeira atividade com tipagem do typescript

//Crie uma função que par()
//Recebe um número e se ele for par retorna true
//Se não for, retorna false 

//Usem tipagem do typescript na função

//Exemplo1     par(10)      //true
//Exemplo2     par(11)      //false
//Exemplo3     par(0)       //undefined
//Exemplo4     par(-1)      //undefined

//TYPE

function numPar(numero){
    if(numero<=0) return undefined
    if(numero%2==0) return true
    return false
}

console.log(0)
console.log(0)
console.log(0)
console.log(0)



//Atividade II
//Crie uma função que receba um vetor e some os números do vetor

//somaNumeros([1,2,3,4])
//10

//Quando o vetor passado for vazio:
//Retorna undefined
*/

