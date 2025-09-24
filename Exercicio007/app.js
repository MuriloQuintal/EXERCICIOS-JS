let dataAtual = new Date()
// let diaDaSemana = dataAtual.getDate()
console.log(dataAtual.getDay())
if(dataAtual.getDay() == 0){
    document.getElementById("resposta").innerText = "Domingo"
}else if(dataAtual.getDay() == 1){
    document.getElementById("resposta").innerText = "Segunda-feira"
}else if(dataAtual.getDay() == 2){
    document.getElementById("resposta").innerText = "Terça-feira"
}else if(dataAtual.getDay() == 3){
    document.getElementById("resposta").innerText = "Quarta-feira"
}else if(dataAtual.getDay() == 4){
    document.getElementById("resposta").innerText = "Quinta-feira"
}else if(dataAtual.getDay() == 5){
    document.getElementById("resposta").innerText = "Sexta-feira"
}else if(dataAtual.getDay() == 6){
    document.getElementById("resposta").innerText = "Sábado"
}else{ 
    document.getElementById("resposta").innerText = ""

// switch (diaDaSemana) {
//     case 0:
//         document.getElementById("resposta").innerText = "Domingo"    
//         break
//     case 1:
//         document.getElementById("resposta").innerText = "Segunda-feira"
//         break
//     case 2:
//         document.getElementById("resposta").innerText = "Terça-feira"
//         break    
//     case 3:
//         document.getElementById("resposta").innerText = "Quarta-feira"
//         break
//     case 4:
//         document.getElementById("resposta").innerText = "Quinta-feira"
//         break
//     case 5:
//         document.getElementById("resposta").innerText = "Sexta-feira"
//         break
//     case 6:
//         document.getElementById("resposta").innerText = "Sabado"
//         break
//         default:
//             document.getElementById("resposta").innerText = ""
//         break;
// }
}