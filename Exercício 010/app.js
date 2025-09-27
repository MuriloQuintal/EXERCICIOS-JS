
function fnCalcularMedia(){
    let n1 = 0, n2 = 0, n3 = 0, n4 = 0, nome = "", media = 0
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    n3 = parseFloat(document.getElementById("n3").value)
    n4 = parseFloat(document.getElementById("n4").value)
    nome = document.getElementById("nome").value
    media = (n1 + n2 + n3 + n4) / 4
    document.getElementById("nome_resultado").innerHTML = nome
    document.getElementById("media").innerHTML = media.toFixed(1)
    fnExibir("resultado")
}

function fnExibir(painel_exibir){
document.getElementById("painel_resultado").style.display="none"
document.getElementById("painel_formulario").style.display="none"

if(painel_exibir == "resultado"){
    document.getElementById("painel_resultado").style.display="block"
}else if (painel_exibir == "formulario"){
    document.getElementById("painel_formulario").style.display="block"
  fnLimparFormulario()
}  
}
function fnLimparFormulario(){
    document.getElementById("painel_formulario").reset()
}


