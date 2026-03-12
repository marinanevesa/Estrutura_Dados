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
        
        this.count++ //aumenta a qtdd de nodos da lista encadeada
    }


   

}