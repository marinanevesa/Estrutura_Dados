class Node {
    constructor(val){
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
            let nodePos = this.#findNode(pos) //nodo que se encontra na posição onde o novo nodo deve ser inserido
            let before = nodePos.prev //nodo que se encontra antes do nodo onde o novo nodo deve ser inserido

            before.next = inserted;
            inserted.prev = before;
            nodePos.prev = inserted;
            inserted.next = nodePos;
        }

        this.#count++
    }

    //metodo de atalho para inserçao na 1 posicao
    insertHead(val){
        this.insert(0, val)
    }

    //metodo de atalho para inserçao na ultima posicao
    insertTail(val){
        this.insert(this.#count, val)
    }

    //metodo de remoção de um nodo em qualquer posição da lista encadeada
    remove(pos){
        //1° caso: lista vazia ou posição fora dos limiytes
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }
        
        let removed

        //2° caso: remoção do primeiro nodo da lista
        if(pos ===0){
           removed = this.#head
           this.#head = removed.next
              if(this.#head){ //verifica se a lista não ficou vazia após a remoção do primeiro nodo
                this.#head.prev = null
              }
              if (this.#count === 1 ){ //verifica se a lista tinha apenas um nodo antes da remoção, ou seja, se a lista ficou vazia após a remoção do primeiro nodo
                this.#tail = null
              }
              
           
        }

        //3° caso: remoção do último nodo da lista
        else if(pos === this.#count - 1){
            removed = this.#tail
            this.#tail = removed.prev


            if(this.#tail){ //verifica se a lista não ficou vazia após a remoção do último nodo
                this.#tail.next = null
            }
            if (this.#count === 1 ){ //verifica se a lista tinha apenas um nodo antes da remoção, ou seja, se a lista ficou vazia após a remoção do último nodo
                this.#head = null
              }
        }

        //4° caso: remoção de um nodo no meio da lista
        else{
            removed = this.#findNode(pos) //nodo que se encontra na posição onde o nodo deve ser removido
            let before = removed.prev //nodo que se encontra antes do nodo onde o nodo deve ser removido
            let after = removed.next //nodo que se encontra depois do nodo onde o nodo deve ser removido

            before.next = after
            after.prev = before
        }

        this.#count--

        return removed.data
    }

    //metodo de atalho para remoção do primeiro nodo da lista
    removeHead(){
        return this.remove(0)
    }

    //metodo de atalho para remoção do último nodo da lista
    removeTail(){
        return this.remove(this.#count - 1)
    }

    peek(pos){
        //lista vazia ou posição fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }
        const node = this.#findNode(pos)
        return node.data        
    }

    peekHead(){
        return this.peek(0)
    }

    peekTail(){
        return this.peek(this.#count - 1)
    }
}

