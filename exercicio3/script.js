// # Exercício 3 - Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// **Utilize o for...of para resolver**

const maioresCidades = ["Tóquio", "Shangai", "São Paulo", "Nova Yorque", "Cidade do México"]

for (let i = 0; i < maioresCidades.length; i++){

    console.log(`${i+1} - ${maioresCidades[i]}`);
}

// #########################################################
console.log(" ");


for (let ranking of maioresCidades){

    console.log(`${maioresCidades.indexOf(ranking)+1} - ${ranking}`);
}

// Atenção para esta última resolução acima, pois estávamos querendo utilizar o índice do array + 1 para fazer corretamente o ranking, mas a estrutura for of nos dá uma String, e quando tentei transformar o índice para Number ele dava NaN, dizendo que não era um número. Sendo assim, com a ajuda da Ana, o problema foi solucionado utilizando esse indexOf(), com o qual nem precisa fazer a transformação para Number que ele já reconhece o dado número e ainda permite a soma que fizemos ali, subindo o índice 0 pra 1 e assim sucessivamente até chegar em 5. 