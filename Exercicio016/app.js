let operacao = 0
function fnAcrescimo() {
    document.getElementById("operacao").innerHTML = "Acréscimo"
    operacao = 0
    console.log(operacao)
    // fnCalcular()
}

function fnDesconto() {
    document.getElementById("operacao").innerHTML = "Desconto"
    operacao = 1
    // fnCalcular()
}

function fnCalcular() {
    if (operacao == 0) {
        let contacorrente = parseFloat(document.getElementById("valorConta").value)
        let percent = parseFloat(document.getElementById("percentual").value)
        console.log(percent, "aaaa")
        console.log(percent * contacorrente)
        console.log((percent * contacorrente) / 100)

        let calculo = ((percent * contacorrente) / 100) + contacorrente

        document.getElementById("pagar").innerHTML = calculo
        console.log(operacao)
    } else {
        contacorrente = parseFloat(document.getElementById("valorConta").value)
        percent = parseFloat(document.getElementById("percentual").value)
        calculo = contacorrente -  ((percent * contacorrente) / 100) 
        document.getElementById("pagar").innerHTML = calculo
        console.log(operacao)

    }

}

