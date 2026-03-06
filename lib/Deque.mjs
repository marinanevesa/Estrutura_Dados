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
        return this.#data.length === 0 ? "Está vazia? true" : "Está vazia? false"
    }



}