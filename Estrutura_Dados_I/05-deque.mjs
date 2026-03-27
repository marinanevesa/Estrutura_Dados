//lista de compras
import Deque from "./lib/Deque.mjs"

let listaCompras = new Deque()
console.log(listaCompras.print())
//imprime: []
console.log("Está vazia? \n" + listaCompras.isEmpty)
//imprime: Está vazia? true

//Produtow Alimenticios 
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")

//Produtos Higiene Pessoal  e limpeza
listaCompras.insertBack("Sabonete")
listaCompras.insertBack("Shampoo")
listaCompras.insertBack("Condicionador")

console.log(listaCompras.print())
//imprime: [(0): Macarrão, (1): Feijão, (2): Arroz, (3): Sabonete, (4): Shampoo, (5): Condicionador]

listaCompras.insertFront("Óleo de Soja")
listaCompras.insertBack("Detergente")
console.log(listaCompras.print())
//imprime: [(0): Óleo de Soja, (1): Macarrão, (2): Feijão, (3): Arroz, (4): Sabonete, (5): Shampoo, (6): Condicionador, (7): Detergente]

let removido = listaCompras.removeFront() //variavel removido para armazenar o valor removido da fila, que é o primeiro elemento do vetor, para verificarmos qual foi removido
console.log({removido}, "\n" + listaCompras.print()) //imprime oque removeu e a fila após a remoção
//imprime: {removido: Óleo de Soja} [(0): Macarrão, (1): Feijão, (2): Arroz, (3): Sabonete, (4): Shampoo, (5): Condicionador, (6): Detergente]

let Frente = listaCompras.peekFront() //variavel Frente para armazenar o valor do inicio da fila, que é o primeiro elemento do vetor, para verificarmos qual é o elemento do inicio da fila sem removê-lo
let Fundo = listaCompras.peekBack() //variavel Fundo para armazenar o valor do fim da fila, que é o último elemento do vetor, para verificarmos qual é o elemento do fim da fila sem removê-lo
console.log({Frente}, {Fundo}, "\n" + listaCompras.print()) //imprime o elemento do inicio da fila, o elemento do fim da fila e a fila após a visualização dos elementos do inicio e do fim da fila, que deve ser a mesma fila antes da visualização, pois o peek não remove os elementos do inicio e do fim da fila.
//imprime: {Frente: Macarrão} {Fundo: Detergente} [(0): Macarrão, (1): Feijão, (2): Arroz, (3): Sabonete, (4): Shampoo, (5): Condicionador, (6): Detergente]    
