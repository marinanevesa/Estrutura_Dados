import Stack from "./lib/Stack.mjs"

let pilha = new Stack()
console.log(pilha.print()) 
//imprime: []
console.log("Está vazia?",pilha.isEmpty)
//imprime: Está vazia? true

pilha.push(35)
pilha.push(77)
pilha.push(19)

console.log(pilha.print())
//imprime: [35,77,19]
console.log("Está vazia?",pilha.isEmpty)
//imprime: Está vazia? false

let removido = pilha.pop() //variavel removido para armazenar o valor removido da pilha, que é o último elemento do vetor, para verificarmos qual foi removido
console.log({removido}, pilha.print()) //imprime oque removeu e a pilha após a remoção
//imprime: {removido: 19} [35,77]

let ultimo = pilha.peek() //variavel ultimo para armazenar o valor do topo da pilha, que é o último elemento do vetor, para verificarmos qual é o elemento do topo da pilha sem removê-lo
console.log({ultimo}, pilha.print()) //imprime o elemento do topo da pilha e a pilha após a visualização do elemento do topo da pilha, que deve ser a mesma pilha antes da visualização, pois o peek não remove o elemento do topo da pilha.
//imprime: {ultimo: 77} [35,77]