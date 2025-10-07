function mostrarnumero(){
    let numero = parseFloat(document.getElementById("numero").value)
    document.getElementById("resposta").innerHTML = "o numero informado foi: " +  numero
    document.getElementById("Numero").value = ""
}