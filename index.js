const bool1 = true
const bool2 = false
const bool3 = bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

// a.  false
// b.  false
// c.  true
// d.  boolean

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// Apareceria '34', por isso eu utilizaria Number para mostrar '7'.

// a) Pergunte a idade do usuário

let idade1 = prompt("qual sua idade?")
console.log("a sua idade é:", idade1)


// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let idadeBest = prompt("qual sua idade Best?")
console.log("a sua idade best é:", idadeBest)



// c) **Imprima no console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
console.log("sua idade é maior do que sua melhor amiga?", idade1 > idadeBest)

// d) **Imprima no console** a diferença de idade (não tem problema se sair um número negativo)
console.log("sua idade é menor do que sua melhor amiga?", idade1 < idadeBest)

// 2. Faça um programa que:
    
//     a) Peça ao usuário que insira um número **par**
let par = prompt("insira um numero par")
console.log(par % 2 === 0);
    
//     b) Imprima na console **o resto da divisão** desse número por 2.
//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.    
//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código


// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
//     a) A idade do usuário em meses
//     b) A idade do usuário em dias
//     c) A idade do usuário em horas

const idade =  Number(prompt("digite sua idade"))
const idadeEmMeses = idade * 12
const idadeEmDias = idade * 365
const idadeEmHoras = idade * 365 * 24 

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e 
// imprima no console as seguintes mensagens seguidas pelo true ou false

const numero3 = Number(prompt("digite numero"))
const numero4 = Number(prompt("digite outro numero"))

console.log(numero3 > numero4);
console.log(numero3 === numero4);
console.log(numero3 % numero4 === 0);
console.log(numero4 % numero3 === 0);

