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
    if(litros <=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Insira um valor válido";
    } else {
        let valorTotal = precoCombustivel * litros;  
        document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
    }
    
    }

function formatarMoeda(valor){
    return "R$ " + valor.toLocaleString("pt-br", 
        {minimumFractionDigits: 2, maximumFractionDigits: 2}
    )
}

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

//colocar o resultado no formato de moeda R$ (com duas casas decimais)
//retornar uma mensagem de valor inválido, caso o valor seja menor que 0;
//criar uma função para realizar a formatação da moeda;
