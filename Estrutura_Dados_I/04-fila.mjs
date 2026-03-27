import Queue from "./lib/Queue.mjs"

let fila = new Queue()

console.log(fila.print())
//imprime: []
console.log("Está vazia?",fila.isEmpty)
//imprime: Está vazia? true

fila.enqueue("M")
fila.enqueue("A")
fila.enqueue("R")
fila.enqueue("I")
fila.enqueue("N")
fila.enqueue("A")

console.log(fila.print())
//imprime: [(0): M, (1): A, (2): R, (3): I, (4): N, (5): A]

//quem sera atendido primeiro? o primeiro que entrou, ou seja, o elemento no indice 0, que é a letra "M"

let proximo = fila.peek() //variavel proximo para armazenar o valor do inicio da fila, que é o primeiro elemento do vetor, para verificarmos qual é o elemento do inicio da fila sem removê-lo
console.log({proximo}) //imprime o elemento do inicio da fila e a fila após a visualização do elemento do inicio da fila, que deve ser a mesma fila antes da visualização, pois o peek não remove o elemento do inicio da fila.
//imprime: {proximo: "M"} [(0): M, (1): A, (2): R, (3): I, (4): N, (5): A]

//atendendo o proximo da fila, ou seja, removendo o elemento do inicio da fila, que é a letra "M"
let atendido = fila.dequeue() //variavel atendido para armazenar o valor removido da fila, que é o primeiro elemento do vetor, para verificarmos qual foi removido
console.log({atendido}) //imprime oque removeu e a fila após a remoção
//imprime: {atendido: "M"} [(0): A, (1): R, (2): I, (3): N, (4): A]

console.log(fila.print())

while (!fila.isEmpty) { //enquanto a fila nao estiver vazia, ou seja, enquanto houver elementos na fila, o loop continuará executando. O método isEmpty é usado para verificar se a fila está vazia ou não. Se a fila estiver vazia, o loop será interrompido e o programa continuará com a próxima linha de código após o loop.
  let atendido = fila.dequeue() //O método dequeue é usado para remover o elemento do início da fila e retorná-lo. O valor retornado pelo dequeue é adicionado à variável atendido, que armazena o elemento que foi atendido (removido) da fila.
  console.log({atendido}, fila.print()) //imprime o elemento atendido e a fila após a remoção do elemento atendido. Isso permite acompanhar o processo de atendimento dos elementos na fila, mostrando qual elemento foi atendido e como a fila se modifica a cada atendimento.
}