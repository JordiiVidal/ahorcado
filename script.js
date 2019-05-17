function start() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "data.php", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        console.log("EStat Petició" + xmlhttp.readyState);
        if (xmlhttp.readyState == 4) {
            console.log("Resposta rebuda");
            repRespostaAjaxGet(xmlhttp);
        }
    };
    xmlhttp.send();
}
function repRespostaAjaxGet(xmlhttp) {
    if (xmlhttp.status == 200) { //el recurs existeix
        var resposta = xmlhttp.responseText;
        var respJSON = JSON.parse(resposta);
        empezarJuego(respJSON);
    }
}
function empezarJuego(paraula) {
    document.getElementById("paraula").innerHTML = '';
    var html = '';
    for (var i = 0; i < paraula.length; i++) {
        html += ' _ ';
    }
    document.getElementById("paraula").innerHTML = html;
}
