//informar os preços
const precoGasolina = 6.69;
const precoEtanol = 5.45;
const precoDiesel = 5.95;

//identificar o tipo de combustível
function atualizarValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    let litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;
    switch(tipo){
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("escolha uma opção");
            return;
    }
    console.log(precoPorLitro);
    calcularValorAbastecimento(precoPorLitro, litros);
}

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);

//calcular o valor do abastecimento
function calcularValorAbastecimento(precoCombustivel, litros){
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = valorTotal;
}

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);
