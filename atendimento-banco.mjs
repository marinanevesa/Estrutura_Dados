import Queue from "./lib/Queue.mjs"

let filaBanco = new Queue()

filaBanco.enqueue("Cliente 101")
filaBanco.enqueue("Cliente 102")
filaBanco.enqueue("Cliente 103")
filaBanco.enqueue("Cliente 104")
filaBanco.enqueue("Cliente 105")

//fila antes do atendimento
console.log("Fila inicial:", filaBanco.print())

//primeiro cliente foi chamado e atendido. Remove e imprime o nome
let atendido1 = filaBanco.dequeue()
console.log("Atendido:", atendido1)

//imprime a fila após a remoção
console.log("Fila atualizada:", filaBanco.print())

// dois novos clientes: 106 e 107
filaBanco.enqueue("Cliente 106")
filaBanco.enqueue("Cliente 107")

//imprime a fila atualizada
console.log("Fila atualizada:", filaBanco.print())

//próximo cliente a ser atendido
let proximo = filaBanco.peek() // O comando peek() olha o início sem remover
console.log("Próximo a ser chamado é:", proximo)

//chamou o próximo cliente. remove essa pessoa e imprime a fila atualizada
filaBanco.dequeue()
console.log("Fila atualizada:", filaBanco.print())