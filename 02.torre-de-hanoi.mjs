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

//disco 4 da torre B indo para torre C
torreC.push(torreB.pop()); 
exibir();

// disco 3 da torre B indo para torre A
torreA.push(torreB.pop()); 
exibir();

// disco 4 da torre C indo para torre A
torreA.push(torreC.pop()); 
exibir();

// disco 2 da torre B indo para torre C
torreC.push(torreB.pop()); 
exibir();

// disco 4 da torre A indo para torre B
torreB.push(torreA.pop()); 
exibir();

// disco 3 da torre A indo para torre C
torreC.push(torreA.pop()); 
exibir();

// disco 4 da torre B indo para torre C
torreC.push(torreB.pop()); 
exibir();

// disco 1 da torre B indo para torre A
torreA.push(torreB.pop()); 
exibir();

// disco 4 da torre C indo para torre A
torreA.push(torreC.pop()); 
exibir();

// disco 3 da torre C indo para torre B
torreB.push(torreC.pop()); 
exibir();

// disco 4 da torre A indo para torre B
torreB.push(torreA.pop()); 
exibir();

// disco 2 da torre C indo para torre A
torreA.push(torreC.pop()); 
exibir();

// disco 4 da torre B indo para torre C
torreC.push(torreB.pop()); 
exibir();

// disco 3 da torre B indo para torre A
torreA.push(torreB.pop()); 
exibir();

// disco 4 da torre C indo para torre A
torreA.push(torreC.pop()); 

console.log("\n------- DEPOIS -------");
console.log('Torre A:', torreA.print());
console.log('Torre B:', torreB.print());
console.log('Torre C:', torreC.print());