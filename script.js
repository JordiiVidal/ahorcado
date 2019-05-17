var contador_errors = 0;
var total_erros = 10;
function start() {
    document.getElementById("div-nova-paraula").style.display = 'block';
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
        construirParaula(respJSON);
    }
}
function construirParaula(paraula) {
    document.getElementById("paraula").innerHTML = '';
    var html = '';
    for (var i = 0; i < paraula.length; i++) {
        html += '<span id="lletra-' + (i + 1) + '"> _ </span>';
    }
    document.getElementById("paraula").innerHTML = html;
}
function checkParaula() {
    var lletra = document.forms["form-lletra"]["lletra"];
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "check.php?lletra=" + lletra.value + "", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            checkLletra(xmlhttp);
        }
    };
    xmlhttp.send();
}
function checkLletra(xmlhttp) {
    if (xmlhttp.status = 200) {
        var resposta = xmlhttp.responseText;
        var respostaJSON = JSON.parse(resposta);
        var paraula_1 = respostaJSON.paraula;
        var array_posicions = respostaJSON.posicions;
        console.log(paraula_1);
        console.log(array_posicions);
        if (array_posicions.length > 0 && contador_errors <= total_erros) {
            array_posicions.forEach(function (posicio) {
                document.getElementById("lletra-" + posicio).innerHTML = ' ' + paraula_1[posicio] + ' ';
            });
        }
        else {
            if (contador_errors < total_erros) {
                contador_errors += 1;
                document.getElementById("num_errors").innerHTML = '' + contador_errors;
            }
            else {
                contador_errors += 1;
                document.getElementById("num_errors").innerHTML = ' No hay más intentos';
                document.getElementById("resposta").innerHTML = 'La respuesta era' + paraula_1;
            }
        }
    }
}
function addParaula() {
    var paraula = document.forms["form-paraula"]["paraula-nova"];
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "add.php?paraula=" + paraula.value + "", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            checkParaules(xmlhttp);
        }
    };
    xmlhttp.send();
}
function checkParaules(xmlhttp) {
    if (xmlhttp.status = 200) {
        var resposta = xmlhttp.responseText;
        console.log(resposta);
    }
}
