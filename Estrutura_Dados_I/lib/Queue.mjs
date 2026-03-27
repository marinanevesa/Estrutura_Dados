export default class Queue {

    #data

    constructor() {
        this.#data = []
    }

    //metodo para inserção na fila

    enqueue(val){
        this.#data.push(val)
    }


    //metodo para remoção da fila

    dequeue(){
        return this.#data.shift() //shift() é um método de array que remove o primeiro elemento de um array e retorna esse elemento. Ele é usado para implementar a funcionalidade de remoção da fila, onde o primeiro elemento inserido na fila é o primeiro a ser removido.
    }

        //metodo para consultar o inicio da fila sem remover o elemento

    peek(){
        return this.#data[0] //retorna o primeiro elemento do array, que é o início da fila, sem removê-lo. Ele é usado para visualizar o elemento do início da fila sem modificar a estrutura da fila.
    }

    //a fila esta vazia
    get isEmpty() {
        return this.#data.length === 0
    }

    //metodo para imprimir a fila (para efeitos de depuração)

    print() {
        let output = "[" //coloca dentro da variavel output o simbolo de abertura de colchetes para iniciar a representação da fila como um array
        for (let i = 0; i < this.#data.length; i++) {
            if(output !== "[") { //verifica se a variavel output é diferente de "[". Isso é necessário para adicionar uma vírgula e um espaço antes de cada elemento da fila, exceto para o primeiro elemento, que não deve ter uma vírgula antes dele.
                output += ", " //adiciona uma vírgula e um espaço à variável output para separar os elementos da fila na representação em string.
            }
            output += `(${i}): ${this.#data[i]}` //adiciona à variável output a representação do elemento da fila no formato "(índice): valor", onde i é o índice do elemento na fila e this.#data[i] é o valor do elemento. Isso cria uma representação detalhada da fila, mostrando tanto os índices quanto os valores dos elementos.
        } //adiciona o simbolo de fechamento de colchetes à variável output para finalizar a representação da fila como um array.
        return output + "]" //retorna a variável output, que agora contém a representação em string da fila, incluindo os elementos e seus índices, formatada como um array.
    }

}