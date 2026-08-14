//variáveis
//var
//variável global
var vl1 = 10;
var vl2 = "10";
console.log(vl1);
console.log(vl2);
vl2 = 20;

//let
let nome = 'Fulano';
nome = 'Ciclano';
console.log(nome);

//const --> constante
const vl3 = 30;
//vl3 = 40;
console.log(vl3);

//operadores aritméticos
// + * / - % ** 

//operadores de comparação
// == !=  === !==
console.log(10 === '10'); //true ou false

//algoritmo: entrada + processamento = saída
var n1 = parseInt(window.prompt("Valor 1: "));
console.log(typeof n1);
var n2 = parseInt(window.prompt("Valor 2: "));
var resultado = n1 + n2;
console.log(resultado);

//template literal
console.log(`O resultado é ${resultado}`);
document.writeln(`<b>Resultado</b>: ${resultado}`);

//estruturas de controle (if_else; for; switch; while; do-while)
