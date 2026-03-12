export default class Stack {
    #data //vetor provado - encapulamento

    constructor(){
        this.#data = [];
    }

    //metodo para inseção no vetor
    push(val){ //metodo push meu é diferente do push do vetor, pois o meu push adiciona um elemento ao topo da pilha, ou seja, ao final do vetor, enquanto o push do vetor adiciona um elemento ao final do vetor. O meu push é um método da classe Stack, enquanto o push do vetor é um método do objeto Array. O meu push é usado para adicionar elementos à pilha, enquanto o push do vetor é usado para adicionar elementos a um array. O meu push é implementado usando o método push do vetor, mas ele pode ser implementado de outras formas, como usando o operador de atribuição para adicionar um elemento ao final do vetor.
        this.#data.push(val); //push do vetor para adicionar um elemento ao final do vetor, que é o topo da pilha (node)
    }

    //metodo de remoção do vetor
    pop(){ //metodo pop meu é diferente do pop do vetor, pois o meu pop remove o elemento do topo da pilha, ou seja, o último elemento do vetor, enquanto o pop do vetor remove o último elemento do vetor. O meu pop é um método da classe Stack, enquanto o pop do vetor é um método do objeto Array. O meu pop é usado para remover elementos da pilha, enquanto o pop do vetor é usado para remover elementos de um array. O meu pop é implementado usando o método pop do vetor, mas ele pode ser implementado de outras formas, como usando o operador de atribuição para remover o último elemento do vetor.
        return this.#data.pop(); //pop do vetor para remover o último elemento do vetor, que é o topo da pilha (node)
    }

    //verificar o elemento do topo da pilha sem removê-lo
    peek(){ //metodo peek meu é diferente do peek do vetor, pois o meu peek visualiza o elemento do topo da pilha, ou seja, o último elemento do vetor, sem removê-lo, enquanto o peek do vetor visualiza o último elemento do vetor sem removê-lo. O meu peek é um método da classe Stack, enquanto o peek do vetor é um método do objeto Array. O meu peek é usado para visualizar o elemento do topo da pilha, enquanto o peek do vetor é usado para visualizar o último elemento de um array. O meu peek é implementado usando o método length do vetor para acessar o último elemento do vetor, mas ele pode ser implementado de outras formas, como usando o operador de indexação para acessar o último elemento do vetor.
        return this.#data[this.#data.length - 1]; //acessa o último elemento do vetor, que é o topo da pilha (node). O -1 seria porque o índice do vetor começa em 0, então o último elemento do vetor tem índice length - 1.
    }

    get isEmpty(){ //verifica se a pilha está vazia, ou seja, se o vetor está vazio
        return this.#data.length === 0; //verifica se o vetor está vazio, ou seja, se a pilha está vazia. O length do vetor é 0 quando o vetor está vazio.
    }

    print(){ //imprime os elementos da pilha, ou seja, os elementos do vetor
        return JSON.stringify(this.#data); //converte o vetor em uma string JSON para facilitar a visualização dos elementos da pilha. O JSON.stringify é um método do objeto JSON que converte um valor JavaScript em uma string JSON.
    }
}
