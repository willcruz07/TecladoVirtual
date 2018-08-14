var spice = (function () {
'use strict'    

    var btn1 =   document.getElementById("1");
    var btn2 =   document.getElementById("1");
   
    function preencher(valor) {
        var campoTexto = document.getElementById("campo");
        var numeros = campoTexto.value;        
        var calc = numeros + valor;
        campoTexto.value = ("000" + calc).slice(-3);
    }

    btn1.addEventListener('click', function(e){
        preencher(e.toElement.value);
    });

    btn2.addEventListener('click', function(e){
        preencher(e.toElement.value);
    });

    return {
        bolinha : preencher
    };

})();

