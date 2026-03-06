export default class Deque {

    #data //vetor privado 

    constructor(){
        this.#data = []

    }

    //metodo para insersco no inicio da estrutura

    insertFront(val){
        this.#data.unshift(val)
    }

    //metodo para insercao no final da estriutura

    insertBack(val){
        this.#data.push(val)
    }

    //metodo para remocao do inicio da estrutura

    removeFront(){
        return this.#data.shift() //shift remove posicao 0
    }

    //metodo para remocao do fim da estrutura

    removeBack(){
        return this.#data.pop() //pop remove do fim da estrutura
    }

    //espiar o inicio

    peekFront(){
        return this.#data[0]
    }

    //espiar o fim

    peekBack(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0 ? "Esta Vazia" : "Não está vazia"
    }

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