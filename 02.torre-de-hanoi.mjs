import Stack from "./lib/Stack.mjs";

const torreA = new Stack();
const torreB = new Stack();
const torreC = new Stack();

function exibir(etapa = "MOVIMENTAÇÕES") {
    console.log(`\n------- ${etapa} -------`);
    console.log('Torre A:', torreA.print());
    console.log('Torre B:', torreB.print());
    console.log('Torre C:', torreC.print(), "\n");
}

torreB.push(1);
torreB.push(2);
torreB.push(3);
torreB.push(4);

exibir("ANTES");

torreC.push(torreB.pop()); 
exibir();

// Passo 2: B -> A
torreA.push(torreB.pop()); 
exibir();

// Passo 3: C -> A
torreA.push(torreC.pop()); 
exibir();

// Passo 4: B -> C
torreC.push(torreB.pop()); 
exibir();

// Passo 5: A -> B
torreB.push(torreA.pop()); 
exibir();

// Passo 6: A -> C
torreC.push(torreA.pop()); 
exibir();

// Passo 7: B -> C
torreC.push(torreB.pop()); 
exibir();

// Passo 8: B -> A (O disco da base de B vai para a base de A)
torreA.push(torreB.pop()); 
exibir();

// Passo 9: C -> A
torreA.push(torreC.pop()); 
exibir();

// Passo 10: C -> B
torreB.push(torreC.pop()); 
exibir();

// Passo 11: A -> B
torreB.push(torreA.pop()); 
exibir();

// Passo 12: C -> A
torreA.push(torreC.pop()); 
exibir();

// Passo 13: B -> C
torreC.push(torreB.pop()); 
exibir();

// Passo 14: B -> A
torreA.push(torreB.pop()); 
exibir();

// Passo 15: C -> A (Finaliza a torre)
torreA.push(torreC.pop()); 

console.log("\n------- DEPOIS -------");
console.log('Torre A:', torreA.print());
console.log('Torre B:', torreB.print());
console.log('Torre C:', torreC.print());