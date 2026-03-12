//a lista encadeada é formada por nodos ou nós
//cada nó tem 2 partes: aramzena a infomação e ooutra o endereço
//vantage: nao precisa remontar a lista inteira, apenas isola o excluido e reaponta 

//antes de montar um no e uma lista encadeada, é preciso criar a classe nó (Node) e a classe lista encadeada (LinkedList) para depois criar os métodos de manipulação da lista.
//antes de montar a lista preciso saber se ela esta vazia ou não, para isso crio um método isEmpty() que retorna true ou false dependendo do estado da lista.
//meu primeiro nó precisa ser o head e o tail da lista, depois disso, o tail vai apontar para o novo nó criado e o novo nó passa a ser o tail da lista.
//para inserir um nó no início da lista, o novo nó aponta para o head e o head passa a ser o novo nó.
//para inserir um nó no meio da lista, preciso percorrer a lista até encontrar a posição desejada, depois disso, o novo nó aponta para o próximo nó e o nó anterior aponta para o novo nó.
//para excluir um nó, preciso percorrer a lista até encontrar o nó desejado, depois disso, o nó anterior aponta para o próximo nó do nó excluido e o nó excluido é isolado da lista.