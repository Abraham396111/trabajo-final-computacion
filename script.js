let contador = 0;

function sumar() {
    contador++;
    document.getElementById("numero").innerText = contador;
}

function restar() {
    contador--;
    document.getElementById("numero").innerText = contador;
}

function reiniciar() {
    contador = 0;
    document.getElementById("numero").innerText = contador;
}
