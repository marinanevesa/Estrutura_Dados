class Node{
    constructor(val){
        this.data = val
        this.next = null
    }
}

export default class LinkedList{
    #head //inicio da lista (cabeça) 
    #tail //fim da lista (cauda)
    #count //qntdd de nodos da lista

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    //Getter que retorna se a lista encadeada esta vazia ou não
    get isEmpty(){
        return this.#count === 0
    }

    //Getter que retorna a qtdd de elemento da lista encadeada
    get count(){
        return this.#count
    }

    //metodo de inserir em qualquer posição da lista encadeada
    insert(pos, val){ //pos - posiçao onde o nó deve ser inserido, val - valor do nó a ser inserido
        //cria um nodo para armazer o valor a ser inserido
        const inserted = new Node(val) 

        //primeiro caso: a lista esta vazia, ou seja, o head e o tail apontam para null
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }
        //segundo caso: a lista nao esta vazia, inserção na primeira posição da lista
        else if(pos === 0){
            inserted.next = this.#head //o novo nó aponta para o head atual
            this.#head = inserted //o head passa a ser o novo nó
        }
        //terceiro caso: a lista nao esta vazia, inserção na última posição da lista
        else if(pos >= this.#count){
            this.#tail.next = inserted //o tail atual aponta para o novo nó
            this.#tail = inserted //o tail passa a ser o novo nó
        }

        //4 caso: inserção no meio da lista
        else{
            let before = this.#head //nó que aponta para o início da lista
            for(let i = 1; i < pos; i++){
                before = before.next //nó que aponta para o nó anterior a posição onde o novo nó deve ser inserido
            }
            let after = before.next //nó que aponta para o nó posterior a posição onde o novo nó deve ser inserido
            before.next = inserted //o nó anterior aponta para o novo nó
            inserted.next = after //o novo nó aponta para o nó posterior
        }
        
        this.count++ //aumenta a qtdd de nodos da lista encadeada
    }

    //metodo para insercoes no início da lista (atalho)
    insertHead(val){
        this.insert(0, val)
    }

    //metodo para insercoes no final da lista (atalho)
    insertTail(val){
        this.insert(this.#count, val)      
    }

    //metodo para remocao de um nodo na lista
    remove(pos){
        if(this.isEmpty || pos < 0 || pos >= this.#count - 1){
            return null
        }
    
    
        let removed //nó a ser removido
        //primeiro caso: remoção do primeiro nodo da lista
        if(pos === 0){
            removed = this.#head //o nó a ser removido é o head
            this.#head = this.#head.next //o head passa a ser o próximo nó da lista
        }

        if (this.#count === 1) { //se a lista tiver apenas um nodo, o tail também deve ser atualizado para null
            this.#tail = null
        }   

        this.#count-- //diminui a qtdd de nodos da lista encadeada
        return removed.data //retorna o valor do nó removido

   
    }
}