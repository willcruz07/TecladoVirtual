var tecladoSpice = (function () {

    function preencher(valor) {
        var campoTexto = document.getElementById("campo");
        var numeros = campoTexto.value;        
        var calc = numeros + valor;
        campoTexto.value = ("000" + calc).slice(-3);
    }

    var btn0 =   document.getElementById("0");
    var btn1 =   document.getElementById("1"); 
    var btn2 =   document.getElementById("2");
    var btn3 =   document.getElementById("3");
    var btn4 =   document.getElementById("4");
    var btn5 =   document.getElementById("5");
    var btn6 =   document.getElementById("6");
    var btn7 =   document.getElementById("7");
    var btn8 =   document.getElementById("8");
    var btn9 =   document.getElementById("9");
    
    btn0.addEventListener('click', function(e){preencher(e.toElement.value)});
    btn1.addEventListener('click', function(e){preencher(e.toElement.value)});
    btn2.addEventListener('click', function(e){preencher(e.toElement.value)});
    btn3.addEventListener('click', function(e){preencher(e.toElement.value)});
    btn4.addEventListener('click', function(e){preencher(e.toElement.value)});
    btn5.addEventListener('click', function(e){preencher(e.toElement.value)});
    btn6.addEventListener('click', function(e){preencher(e.toElement.value)});
    btn7.addEventListener('click', function(e){preencher(e.toElement.value)});
    btn8.addEventListener('click', function(e){preencher(e.toElement.value)});
    btn9.addEventListener('click', function(e){preencher(e.toElement.value)});
})();

