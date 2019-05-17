var contador_errors = 0;

function start(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","data.php",true);
    xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange=function(){
        console.log("EStat Petició"+xmlhttp.readyState);
        if(xmlhttp.readyState==4){

            console.log("Resposta rebuda");
            repRespostaAjaxGet(xmlhttp);
        }
    }
    xmlhttp.send();

}

function repRespostaAjaxGet(xmlhttp:XMLHttpRequest){
    if(xmlhttp.status==200){ //el recurs existeix
        let resposta = xmlhttp.responseText;
        let respJSON = JSON.parse(resposta);
        construirParaula(respJSON);
    }
}

function construirParaula(paraula:string){

    document.getElementById("paraula").innerHTML='';
    var html = '';
    for(var i = 0; i < paraula.length; i++){
        html += '<span id="lletra-'+(i+1)+'"> _ </span>';
    }
    document.getElementById("paraula").innerHTML=html;
    document.getElementById("resposta").innerHTML=paraula;
}

function checkParaula(){
    let lletra = <HTMLInputElement>document.forms["form-lletra"]["lletra"];
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "check.php?lletra=" + lletra.value + "", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            checkLletra(xmlhttp);
        }
    }
    xmlhttp.send();
}

function checkLletra(xmlhttp) {

    if (xmlhttp.status = 200) {

        let resposta = xmlhttp.responseText;
        let respostaJSON = JSON.parse(resposta);

        let paraula = respostaJSON.paraula;
        let array_posicions = respostaJSON.posicions;

        console.log(paraula);
        console.log(array_posicions);

        if(array_posicions.length > 0){
            array_posicions.forEach(posicio => {
                document.getElementById("lletra-"+posicio).innerHTML=' '+paraula[posicio]+' ';
    
            });
        }else{
            contador_errors += 1;
            document.getElementById("num_errors").innerHTML=''+contador_errors;

        }
    
    }
}