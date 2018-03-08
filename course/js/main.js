// Aqui teremos um array de objetos
// É a nossa lista de compras
var list = [
    {"desc": "rice", "amount": "1", "value": "5.40"},
    {"desc": "beer", "amount": "12", "value": "1.99"},
    {"desc": "meat", "amount": "1", "value": "15.00"}
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        // incrementa o total com o valor multiplicado pela quantidade, de todos os produtos da lista
        total += list[key].value * list[key].amount;
    }
    return total;
}


function setList(list) {
    // Dentro desta variavel ira o cod html que estava na pagina
    // Foram qubradas as linhas para melhor leitura do codigo
    var table = '<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>';

    for (var key in list) {
        table += '<tr><td>' + formatDesc(list[key].desc) + '</td><td>' + list[key].amount + '</td><td>' + formatValue(list[key].value) + '</td><td>Edit | Delete</td></tr>';
    }

    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

// Funcao para formatar as descricao dos produtos
function formatDesc(desc) {
    var str = desc.toLowerCase(); // Formata o texto da descrição para minusculo
    str = str.charAt(0).toUpperCase() + str.slice(1); // primeiro formata o primeiro caracter para
                                                      // maiusculo e depois concatena o restante da palavra.
    return str;
}

// Funcao para formatar os valores
function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + ""; // Aqui primeiro formatamos para float, apos fixamos que as
                                                 // casas decimais serao somente de dois numeros e ao concatenar com valor vazio estamos transformando para string novamente.
    str = str.replace(".", ","); // Aqui troca os pontos por virgula
    str = "$ " + str;
    return str;
}

setList(list);
console.log(getTotal(list));