function preencher(valor) {
    var campoTexto = document.getElementById("campo");
    var numeros = campoTexto.value;
    campoTexto.value = numeros + valor;
}