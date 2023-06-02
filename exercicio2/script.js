// # Exercício 2 - Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// **Utilize o for...in para resolver**

let numero = 7

for (let i = 1; i <= 10; i++){

    tabuada = numero * i
    console.log(`${numero} x ${i} = ${tabuada}`);
}

// #########################################################
console.log(" ");


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in array){

    let tabuada = numero * array[i]
    console.log(`${numero} x ${array[i]} = ${tabuada}`);
}

// Um detalhe importante sobre essa resolução acima com Array, é que na fórmula da tabuada, eu tinha transformado o array[i] para Number, no entanto nem precisava, porque o Array em questão já é um Array de números. 
