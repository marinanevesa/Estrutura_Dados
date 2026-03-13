import Queue from "./lib/Queue.mjs"

let filaAeroporto = new Queue()

filaAeroporto.enqueue("Passageiro A")
filaAeroporto.enqueue("Passageiro B")
filaAeroporto.enqueue("Passageiro C")
filaAeroporto.enqueue("Passageiro D")
filaAeroporto.enqueue("Passageiro E")

console.log("Fila antes do embarque:", filaAeroporto.print())

// primeiro passageiro foi chamado. Remove e mostra ele
let embarcado1 = filaAeroporto.dequeue()
console.log("Chamado para embarque:", embarcado1)

console.log("Fila atualizada:", filaAeroporto.print())

//três novos passageiros 
filaAeroporto.enqueue("Passageiro F")
filaAeroporto.enqueue("Passageiro G")
filaAeroporto.enqueue("Passageiro H")

console.log("Fila atualizada:", filaAeroporto.print())

// próximo a embarcar
let proximo = filaAeroporto.peek()
console.log("Comando: filaAeroporto.peek()")
console.log("Próximo passageiro a embarcar:", proximo)

// próximo passageiro foi chamado. Remove e imprima a fila atualizada
filaAeroporto.dequeue()
console.log("Fila atualizada: ", filaAeroporto.print())