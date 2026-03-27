//classe em js provem uma maneira mais simples e clara para criar obj, lidar com herença e outras facilidades proprias da poo
//classe é um molde para criar objetos, ela define as propriedades e comportamentos que os objetos criados a partir dela terão
//a classe é definida usando a palavra-chave "class" seguida do nome da classe, e o corpo da classe é delimitado por chaves {}
//dentro do corpo da classe, podemos definir um método especial chamado "constructor", que é executado automaticamente quando um novo objeto é criado a partir da classe
//o constructor é usado para inicializar as propriedades do objeto
//exemplo de classe em js:
//intanciar é criar apartir da classe um objeto, ou seja, criar uma instância da classe
//so vai alocar na memoria quando eu instanciar a classe, ou seja, criar um objeto a partir dela
//métodos são funções que pertencem a um objeto, ou seja, são ações que o objeto pode realizar. Eles são definidos dentro da classe e podem ser chamados em objetos criados a partir dessa classe
//metodos prontos: math, string, array, date, etc
//atributos são as características ou propriedades de um objeto, ou seja, os dados que o objeto armazena. Eles são definidos dentro da classe e podem ser acessados e modificados em objetos criados a partir dessa classe
//exemplo de classe com métodos e atributos
//classe Pessoa com atributos nome e idade, e métodos exibirInfo e envelhecer
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome; //propriedade nome
        this.idade = idade; //propriedade idade
    }

    //método para exibir as informações da pessoa
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
    //método para fazer a pessoa envelhecer
    envelhecer() {
        this.idade++;
    }
}

//criando um objeto a partir da classe Pessoa
const pessoa1 = new Pessoa("João", 30);
pessoa1.exibirInfo(); //saída: Nome: João, Idade: 30
pessoa1.envelhecer();
pessoa1.exibirInfo(); //saída: Nome: João, Idade: 31