// Aqui teremos um array de objetos
// É a nossa lista de compras
var list = [
    {"desc":"rice","amount": "1","value":"5.40"},
    {"desc":"beer","amount": "12","value":"1.99"},
    {"desc":"meat","amount": "1","value":"15.00"}
];

function getTotal(list){
    var total = 0;
    for(var key in list){
        // incrementa o total com o valor multiplicado pela quantidade, de todos os produtos da lista
        total += list[key].value * list[key].amount;
    }
    return total;
}

console.log(getTotal(list));