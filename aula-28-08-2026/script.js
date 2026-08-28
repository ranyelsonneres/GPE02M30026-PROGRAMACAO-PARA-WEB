//DOM
//buscar o elemento HTML pelo ID
let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);

//conteúdo de texto
console.log(meuElemento.textContent);

//buscar o elemento pela Classe
let paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos);
//laço de repetição: for
for(let i=0; i<paragrafos.length;i++){
    console.log(paragrafos[i].textContent);
};

//buscar o elemento por meio de sua TAG
let textos =  document.getElementsByTagName("p");
console.log(textos);

//criar o elemento HTML
let destino = document.getElementById("elemento");
let elementoHTML = document.createElement("p"); //tag
elementoHTML.textContent = "Paragrafo criado via javascript";
destino.append(elementoHTML); //adcionar ao DOM

let lista = document.getElementById("lista");
let ul = document.createElement("ul"); //criar a TAG
let itens = ["Laranja", "Uva", "Maça"]; //elementos da lista
for(let i=0;i<itens.length;i++){ //percorrer a lista
    let li = document.createElement("li"); //criar a TAG
    li.textContent = itens[i]; //adiciono o conteúdo
    ul.append(li); //vincular li para a ul
};
lista.append(ul); //adicionar ao DOM

//algoritmo
function somar(){
    //capturar o que o usuário digita
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    let saida = `Resultado: <b>${soma}</b>`; //template literal
    document.getElementById("resultado").innerHTML = saida;
};


//eventos
let btn1 = document.getElementById("btn1");
//manipulador (clique, double clique, arrastar, soltar, etc..)
btn1.onclick = function(){
    //lógica de negócio
    alert("Clicouuu!!!!");
};
let btn2 = document.getElementById("btn2");
btn2.onmouseover = function(){
    btn2.style.backgroundColor = "red";
} ;

btn2.onmouseout = function(){
   btn2.style.backgroundColor = ""; 
};

btn2.ondblclick = function(){
    btn2.textContent = "Duplo Clique";
}
