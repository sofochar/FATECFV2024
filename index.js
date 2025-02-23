//declaracao variavel

const c = 50;
var a = 1;
let b = 2;
let d = 10;

console.log(a, b, c, d);


const ano = 1991;
let atrasoEmSegundos = 0.00016;
let area = 16 * 3.14;
let metadeArea = area / 2;

console.log("Ano:", ano);
console.log("Atraso em Segundos:", atrasoEmSegundos);
console.log("Área:", area);
console.log("Tipo:", typeof metadeArea);


let pais = "Brasil";
let continente = 'América do Sul';

console.log(pais); // -> Brasil
console.log(typeof pais); // -> string
console.log(continente); // -> América do Sul
console.log(typeof continente); // -> string


let nome = "João";
let idade = 30;
let mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;

console.log(mensagem); // Exibe: Olá, João! Você tem 30 anos.




let numeros = [1, 2, 3, 4, 5];
let nomes = ["Ana", "João", "Maria"];

console.log(numeros[0]); // Exibe: 1
console.log(nomes[1]);   // Exibe: João

numeros.push(6);
console.log(numeros); // Exibe: [1, 2, 3, 4, 5, 6]

numeros.pop();
console.log(numeros); // Exibe: [1, 2, 3, 4, 5]




function soma(a, b) {
    return a + b;
}

console.log("Resultado da Soma:", soma(1, 2)); // Exibe: 3



let usuario = {
    nome: "João",
    sobrenome: "da Silva",
    idade: 18,
    email: "joao@email.com"
};

console.log(usuario.nome + " " + usuario.sobrenome);
console.log(usuario.idade);
console.log(usuario.email);





let idade = 15;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}



for (let i = 0; i < 5; i++) {
    console.log(i); // Exibe números de 0 a 4
}


class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa('João', 30);
pessoa1.saudacao();





funções em java scripts
let multiplicar = function(a, b) {








Objetos em java scripts
let usuario1 = {}
console.log(usuario1);
console.log(typeof usuario1);


let usuario2 = {
    nome: "João",
    sobrenome:" da Silva",
    idade: 18,
    email: 'joao@email.com'
}

console.log(usuario2.nome + usuario2.sobrenome);
console.log(usuario2.idade);
console.log(usuario2.email);

let usuario3 = {
    nome: "Maria",
    sobrenome: "Silva",
    idade: 25,
    email: "maria@email.com"
}

console.log(usuario3.nome + " " + usuario3.sobrenome);
usuario3.idade = 30;
console.log(usuario3.idade);


let carro = {
    marca:"Toyota",
    modelo: "Corolla",
    acelerar:function(){
        console.log("Acelerando o carro...");
    }
}
carro.acelerar(); //exibe o carro está acelerando





