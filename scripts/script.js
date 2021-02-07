
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
function Resultado () {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / ( altura * altura);
    if (imc.entre(0, 18.5)) document.getElementById("esse").value='Que tal fechar o lol ir comer?';
    if (imc.entre(18.6, 24.9)) document.getElementById("esse").value='Você aparenta estar com a saúde em dia';
    if (imc.entre(25, 29.9)) document.getElementById("esse").value='Massa magra ou gordura? você pode virar um bolinho';
    if (imc.entre(30, 39.9)) document.getElementById("esse").value='Aparentemente você é o Andre Marques antes da lipo';
    if (imc.entre(40, 50)) document.getElementById("esse").value="No way bro, you're dead";
}