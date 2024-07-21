/*function calcular() {
    // Defina os valores por unidade para cada item
    var valoresPorUnidade = {
        gasolina: 6.50,  // Valor fictício para gasolina em reais por litro
        oleo: 6.00,      // Valor fictício para óleo em reais por litro
        // Adicione os outros itens com seus respectivos valores por unidade
        // ...
    };

    // Calcula o valor total para cada item
    calcularItem("gasolina", valoresPorUnidade.gasolina);
    calcularItem("oleo", valoresPorUnidade.oleo);
    // Adicione as chamadas para os outros itens
    // ...

    // Calcula o valor total geral
    calcularTotalGeral();
}

function calcularItem(item, valorPorUnidade) {
    var quantidade = parseFloat(document.getElementById(item + "Quantidade").value) || 0;
    var total = quantidade * valorPorUnidade;
    document.getElementById(item + "Total").textContent = total.toFixed(2);
    return total;
}

function calcularTotalGeral() {
    var totalGeral = 0;
    // Adicione os valores totais de todos os itens
    totalGeral += calcularItem("gasolina", 6.50);  // Substitua pelo valor real por litro
    totalGeral += calcularItem("oleo", 6.00);      // Substitua pelo valor real por litro
    // Adicione as chamadas para os outros itens
    // ...

    document.getElementById("totalGeral").textContent = totalGeral.toFixed(2);
}*/



function calcular() {
    // Defina os valores por unidade para cada item
    var valoresPorUnidade = {
        gasolina: 6.50,  // Valor fictício para gasolina em reais por litro
        oleo: 6.00,      // Valor fictício para óleo em reais por litro
        // Adicione os outros itens com seus respectivos valores por unidade
        // ...
       oleo2t:10,
    };

    // Calcula o valor total para cada item
    var totalGeral = 0;
    totalGeral += calcularItem("gasolina", valoresPorUnidade.gasolina);
    totalGeral += calcularItem("oleo", valoresPorUnidade.oleo);


    totalGeral += calcularItem("oleo2t", valoresPorUnidade.oleo2t);
    
    

    
    // Adicione as chamadas para os outros itens
    // ...

    // Calcula o valor total geral
    document.getElementById("totalGeral").textContent = totalGeral.toFixed(2);

    // Obtém o valor recebido
    var valorRecebido = parseFloat(document.getElementById('valorRecebido').value) || 0;

    // Calcula o valor líquido
    var valorLiquido =   valorRecebido - totalGeral;
    document.getElementById("valorLiquido").textContent = valorLiquido.toFixed(2);
}

function calcularItem(item, valorPorUnidade) {
    var quantidade = parseFloat(document.getElementById(item + "Quantidade").value) || 0;
    var total = quantidade * valorPorUnidade;
    document.getElementById(item + "Total").textContent = total.toFixed(2);
    return total;
}