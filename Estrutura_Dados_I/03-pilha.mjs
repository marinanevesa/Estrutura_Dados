import Stack from "./lib/Stack.mjs";

let frase = "Soccoram-me, subi no onibus em Marrocos";

let pilha = new Stack();

//for (let letra of frase) { //preciso separar eles para inverter isso
//  pilha.push(letra);
//}
//let fraseInvertida = "";


//while (!pilha.isEmpty) {
//  fraseInvertida += pilha.pop();
//}
//console.log(fraseInvertida);

for(let i=0; i<frase.length; i++) {
  pilha.push(frase.charAt(i)); //charAt() é um método de string que retorna o caractere na posição especificada. Ele é usado para acessar caracteres individuais em uma string, onde i é o índice do caractere que queremos acessar.
}

console.log(pilha.print());
//imprime: ["S","o","c","c","o","r","a","-","m","e",","," ","s","u","b","i"," ","n","o"," ","o","n","i","b","u","s"," ","e","m"," ","M","a","r","r","o","c","o","s"]

let reverso = "";

while (!pilha.isEmpty) { //enquando a pilha nao estiver vazia, ou seja, enquanto houver elementos na pilha, o loop continuará executando. O método isEmpty é usado para verificar se a pilha está vazia ou não. Se a pilha estiver vazia, o loop será interrompido e o programa continuará com a próxima linha de código após o loop.
  reverso += pilha.pop(); //O método pop é usado para remover o elemento do topo da pilha e retorná-lo. O valor retornado pelo pop é adicionado à variável reverso usando o operador de concatenação +=, que é uma forma abreviada de escrever reverso = reverso + pilha.pop(). Isso significa que cada vez que um elemento é removido da pilha, ele é adicionado ao final da string reverso, construindo assim a frase invertida.
}
console.log(reverso);
//imprime: socorraM me subino on ibus ,em-aroccoS

