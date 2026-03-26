class Node {
    contructor(){
        this.prev = null
        this.data = val 
        this.next = null
    }
}

export default class DoublyLinkedList {
    #head
    #tail
    #count

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    get isEmpty(){
        return this.#count === 0
    }

    get count(){
        return this.#count
    }

    //metodo privado que encontra um nodo por sua posição
    #findNode(pos){
        let node
        //nodo encontrase na primeira metade da lista
        if(pos < this.#count / 2){
            node = this.#head
            for(let i = 0; i < pos; i++){
                node = node.next
            }
        } //nodo encontra-se na segunda metade da lista
        else{ 
            node = this.#tail
            for(let i = this.#count - 1; i > pos; i--){
                node = node.prev
            }
        }
        return node

    }

    //metodo de inserir em qualquer posição da lista encadeada
    insert(pos, val){
        let inserted = new Node(val)

        //1° caso: supor que a lista esta vazia, ou seja, o head e o tail apontam para null
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }   

        //2° caso: inserçao na primeira posição da lista
        else if(pos === 0){
            inserted.next = this.#head
            this.#head.prev = inserted
            this.#head = inserted
        }

        //3° caso: inserção na última posição da lista
        else if(pos >= this.#count){
            this.#tail.next = inserted
            inserted.prev = this.#tail
            this.#tail = inserted
        }

        //4° caso: inserção no meio da lista
        else{
            let nodePas = this.#findNode(pos) //nodo que se encontra na posição onde o novo nodo deve ser inserido
            let before = nodePas.prev //nodo que se encontra antes do nodo onde o novo nodo deve ser inserido

        this.#count++
    }    

}