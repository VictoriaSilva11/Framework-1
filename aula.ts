//Atividade II
//Crie uma função que receba um vetor e some os números do vetor

//somaNumeros([1,2,3,4])
//10

//Quando o vetor passado for vazio:
//Retorna undefined

// function x(array: number[]){
//     var i = []
//     var number = []
//     number.push()
// }
// const array = []
// array.length


//Atividade III
//Crie uma função que receba um vetor e um número
//Sua função deve somar as posições do vetor elevado
//ao número recebido por parâmetro

//Exemplo
//somaElevado([2,2,2,],2) //12

//Se o vetor for vázio delvolva o undefined X

//////////////////////////////
//.map
//.find
//.filter´

//map -> transforma o vetor em um mapeamento
//,2,3,4] +2
//4,5,6]
/*
const vetor:number[] = [1,2,3,4,5]

 const func = function Soma2(x:number){
    return x+2
}

 const result = vetor.map(func)
 console.log(result)
*/
 //crie uma função que receba um vetor e devolva o mesmo vetor elevado ao cubo
 //ex: eleva([1,2,3])     //[1,8,27]
/*
 const vetor:number[] = [1,2,3]
 const func = function aocubo(x:number){
    return x**3
 } 
 const result = vetor.map(func)
 console.log(result)
 
 //crie uma função que receba um vetor e um numero
 // e devolva um vetor com a soma de cada item com esse número
 //ex: somavetor([1,2,3,4],5)  //[6,7,8,9]
 //ex somavetor([1,2,3,4],4)  //[5,6,7,8]

 function somavetor (v:number [],x :number){
    return vetor.map(
        function(num:number){
            return num+x
        }
    )
 }
 console.log(somavetor([1,2,3,4],4))
*/
/*
filter = filtra todos os numero menos que ex:3
const vetor = [1,2,3,4]
const result = vetor.filter(
function (x){
if (x<3){
  return true
} else{
  return false
 }
}
)
console.log(result)
/*

/*igual a : const vetor = [1,2,3,4]
const result = vetor.filter((x) => x <3)
console.log(result)*/

/////////

//find
//criar uma função que retorn v ou f
//v quando busca elementos e quando não for retorne false

// const v = [1,2,3,4,5,6]
// function callbacks(x:number){
//         return x==5
// }
// let result = v.filter(callbacks)

////

/*
Assincronidade -> não sincronizado
Não ficar esperando algo que demore enquanto você pode fazer outras coisas.
Ex: Enquanto esperando o banco responder algo.
Podemos realizar algo com javascript.

Promessas
É um tipo de objetpo Javascript que é o retorno de uma função que não é sincrona.
Esse objeto chamado de (Promise) quando a função termina:
Ele pode estra nos dois casos:
resolvr -> Quando a função executou corretamente.
reject -> Quando algo deu errado.
*/

// function demora():Promise<string>{
//     let promise = new Promise<string>((resolve, reject)=>{
//         setTimeout(
//             function(){
//                 if(Math.random() <.5){
//                     resolve("Dados!!!")
//                 }
//                 else{
//                     reject("Ah para")
//                 }
//             },
//             4000
//         )
//     });
//     return promise
// }

// const resultado = demora()
// console.log(resultado)

// resultado
// .then((resultadoEspera)=>{console.log(resultadoEspera)})
// .catch((resultadoEspera)=>{console.log("Catch"+resultadoEspera)})

// console.log("Executar algo depois")

//.then => Então
//.catch => Capturar

// await sync

/**
 * 2017 javascript trouxe esse novo conceito de await e sync
 * await -> é pra você ficar esperando algo que é assíncrono(async).
 * 
 * Não podemos utilizar await sem ser em uma função assíncrona(async)
 */
// async function aux(){
//     try{
//     const resultado = await demora()
//     console.log("Resultado await: "+resultado)
//     }
//     catch(erro){
//         console.log("ERRO TRY/CATCH: "+erro)
//     }
// }
// aux()

//bora lá
import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';
import fastify, { FastifyRequest, FastifyReply } from 'fastify'
import cors from '@fastify/cors'
const app = fastify()
app.register(cors)

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando")
})
app.get('/estudantes', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const conn =  await mysql.createConnection({
            host: "localhost",
            user: 'root',
            password: "",
            database: 'banco1023a',
            port: 3306
        })
        const resultado =  await conn.query("SELECT * FROM estudantes")
        const [dados, camposTabela] = resultado
        reply.status(200).send(dados)
    }
    catch (erro: any) {
        if (erro.code === 'ECONNREFUSED') {
            console.log("ERRO: LIGUE O LARAGAO => Conexão Recusada")
            reply.status(400).send({mensagem:"ERRO: LIGUE O LARAGAO => Conexão Recusada"})
        } else if (erro.code === 'ER_BAD_DB_ERROR') {
            console.log("ERRO: CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CRIE UM BANCO DE DADOS COM O NOME DEFINIDO NA CONEXÃO"})
        } else if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
            console.log("ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFERIR O USUÁRIO E SENHA DEFINIDOS NA CONEXÃO"})
        } else if (erro.code === 'ER_NO_SUCH_TABLE') {
            console.log("ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY")
            reply.status(400).send({mensagem:"ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY"})
        } else if (erro.code === 'ER_PARSE_ERROR') {
            console.log("ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS")
            reply.status(400).send({mensagem:"ERRO: Você tem um erro de escrita em sua QUERY confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS"})
        } else {
            console.log(erro)
            reply.status(400).send({mensagem:"ERRO: NÃO IDENTIFICADO"})
        }
    }
})

app.listen({ port: 8000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})