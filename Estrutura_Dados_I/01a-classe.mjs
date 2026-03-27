//mjs é um arquivo de módulo em JavaScript, que permite usar a sintaxe de importação e exportação de módulos
//para usar um módulo em outro arquivo, é necessário exportar o módulo usando a palavra-chave "export" e importá-lo usando a palavra-chave "import"
//exemplo de exportação e importação de módulo
class FormaGemometrica {

    #base //# é o encapsulamento, ou seja, a propriedade base é privada e só pode ser acessada dentro da classe (so acessa ele com get (buscar valor) ou set (setar valor))
    #altura
    #tipo

    get base() {
        return this.#base; //oque é o this? this é uma referência ao objeto atual, ou seja, ao objeto que está sendo criado a partir da classe. Ele é usado para acessar as propriedades e métodos do objeto dentro da classe   
    }
    
    get altura() {
        return this.#altura;
    }
    get tipo() {
        return this.#tipo;
    }

    set base(valor) {   
        if(typeof valor !== 'number' || valor <= 0) {
            throw new Error('Valor inválido para base. Deve ser um número positivo.');
        }
        this.#base = valor;
    }
    set altura(valor) {
        if(typeof valor !== 'number' || valor <= 0) {
            throw new Error('Valor inválido para altura. Deve ser um número positivo.');
        }
        this.#altura = valor;
    }
    set tipo(valor) {
        if(!["R", "T", "E"].includes(valor.toUpperCase())) {
            throw new Error('Valor inválido para tipo. Deve ser "R" para retângulo, "T" para triângulo ou "E" para elipse.');
        }
        this.#tipo = valor.toUpperCase();
    }

    calcArea(){
        switch(this.#tipo) {
            case "R":
                return this.#base * this.#altura;
            case "T":
                return (this.#base * this.#altura) / 2;
            case "E":
                return Math.PI * (this.#base / 2) * (this.#altura / 2); //Pi é um metodo pronto do objeto Math, que é um objeto global em JavaScript que fornece propriedades e métodos para realizar operações matemáticas. Pi é uma propriedade do objeto Math que representa a constante matemática π (pi), que é aproximadamente igual a 3.14159. Ele é usado para calcular a área de uma elipse, onde a base e a altura são os diâmetros da elipse.
        }     
    }
}

let forma1 = new FormaGemometrica(); //para intanciar utilizamos a palavra-chave "new" seguida do nome da classe e parênteses, que podem conter argumentos para o constructor da classe (se houver)'
forma1.base = 7
forma1.altura = 22.5
forma1.tipo = "r"

console.log("Area da forma 1:", forma1.calcArea());

let forma2 = new FormaGemometrica();
forma2.base = 10
forma2.altura = 5
forma2.tipo = "t"   

console.log("Area da forma 2:", forma2.calcArea());

let forma3 = new FormaGemometrica();
forma3.base = 8
forma3.altura = 4
forma3.tipo = "e"

console.log("Area da forma 3:", forma3.calcArea());
