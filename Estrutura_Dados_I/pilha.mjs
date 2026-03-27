//ultimo a entrar é o primeiro a sair
//pilha sao usadas em tarefas computacionais que requerem a inversão da ordem da entrada dos dados 
//torre de hanoi*, desfazer refazer, chamada de funcoes, etc
//a pilha é uma estrutura de dados que segue o princípio LIFO (Last In, First Out), onde o último elemento adicionado é o primeiro a ser removido.
//a pilha é composta por elementos que são inseridos e removidos de uma única extremidade, chamada de topo da pilha. 
//as operações básicas em uma pilha são: push (adicionar um elemento ao topo da pilha), pop (remover o elemento do topo da pilha) e peek (visualizar o elemento do topo da pilha sem removê-lo).
let pilha = [];
pilha.push(1); //adiciona o elemento 1 ao topo da pilha
pilha.push(2);
pilha.push(3);

console.log(pilha); // [1, 2, 3]

pilha.unshift(0); //adiciona o elemento 0 ao início da pilha

console.log(pilha); // [0, 1, 2, 3]

pilha.pop(); //remove o elemento do topo da pilha (3)

