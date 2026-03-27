
import Queue from "./lib/Queue.mjs"

let atendimento = new Queue()

atendimento.enqueue("José")
atendimento.enqueue("Sérgio")
atendimento.enqueue("Joaquim")
atendimento.enqueue("Maria")
atendimento.enqueue("João")
atendimento.enqueue("Samuel")
atendimento.enqueue("Vicente")
atendimento.enqueue("Terezinha")
atendimento.enqueue("Firmino")
atendimento.enqueue("Toninho")
atendimento.enqueue("Alexandre")

console.log("Fila inicial:", atendimento.print())

// chamando a primeira pessoa e mostrando o resultado
let primeiroAtendido = atendimento.dequeue()
console.log("Pessoa atendida:", primeiroAtendido)
console.log("Fila após o 1º atendimento:", atendimento.print())

// chegou mais 3 pessoas
atendimento.enqueue("Rafael")
atendimento.enqueue("Isabela")
atendimento.enqueue("Cauã")

console.log("Fila atualizada:", atendimento.print())

// próximo a ser atendido
let proximoNome = atendimento.peek()
console.log("Comando para verificar o próximo: atendimento.peek()")
console.log("Próximo a ser atendido:", proximoNome)

// o medico chamou o próximo 
atendimento.dequeue()

console.log("Fila atualizada:", atendimento.print())