function fnVerificarPeriodo(){
    let periodoSelecionado = document.getElementById("periodo").value

    //document.getElementById("resposta").innerText =periodoSelecionado

    if(periodoSelecionado == "d"){
        document.getElementById("resposta").innerText = "Dia ☀️😎"
        document.body.style.backgroundColor=" #1f80ffcc"
        document.body.style.color = "#060142"
        document.getElementById("foto").src="image/dia.gif"

    }else if(periodoSelecionado == "t"){
        document.getElementById("resposta").innerText = "Tarde 🌤️"
                document.body.style.backgroundColor=" #ff841fa9"
        document.body.style.color = "#242724"
        document.getElementById("foto").src="image/tarde.gif"

    }else if(periodoSelecionado == "n"){
        document.getElementById("resposta").innerText ="Noite 🌙 🛏️😴"
                document.body.style.backgroundColor=" #050036"
        document.body.style.color = "#ffffff"
        document.getElementById("foto").src="image/noite.gif"

    }else {
        document.getElementById("resposta").innerText = ""
         document.body.style.backgroundColor=" #602881"
        document.body.style.color = "#daf0da"
        document.getElementById("foto").src="image/original.gif"

    }}