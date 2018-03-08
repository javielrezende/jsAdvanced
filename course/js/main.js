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
        table += '<tr><td>' + list[key].desc + '</td><td>' + list[key].amount + '</td><td>' + list[key].value + '</td><td>Edit | Delete</td></tr>';
    }

    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}
setList(list);
console.log(getTotal(list));