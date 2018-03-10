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
    // Usar crase ao invez de aspas faz com que possamos coocar o html normalmente sem concatenação (ES6)
    var table = `<thead>
<tr>
<td>Description</td>
<td>Amount</td>
<td>Value</td>
<td>Action</td>
</tr>
</thead>
<tbody>`;

    for (var key in list) {
        table += '<tr><td>' + formatDesc(list[key].desc) + '</td><td>' + list[key].amount + '</td><td>' + formatValue(list[key].value) + '</td><td><button class="btn btn-default" onclick="setUpdate(' + key + ');">Edit</button>Delete</td></tr>';
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

// Funcao para adicionar novo registro
function addData() {
    // recebe as informacoes do formulario
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    // unshift é utilizado para add os elementos no inicio do array e retorna o length
    // Como nossa lista é um objeto temos que passar o objeto para dentro do metodo
    list.unshift({"desc": desc, "amount": amount, "value": value});
    setList(list); //Aqui chamamos o metodo que atualiza a lista
}

// Funcao para editar algum registro
function setUpdate(id) {
    var obj = list[id]; // Aqui pegamos um registro. Se for o ultimo indice do array será o meat (carne)
    document.getElementById("desc").value = obj.desc; // Aqui pegamos a informacao desc do objeto do array
                                                      // selecionado e jogamos pro documento
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";
}

setList(list);
console.log(getTotal(list));