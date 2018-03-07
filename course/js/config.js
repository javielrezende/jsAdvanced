// Seta o valor de um titulo em uma variavel
function setConfig() {
    var texts = {
        "title": "Shopping Control"
    };
    document.title = texts.title; // Seta o titulo da pagina
    document.getElementById("naveTitle").innerHTML = texts.title; // Seta um valor html para um elemento pelo id
}

// Executa a função
setConfig();