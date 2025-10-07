let numeroDeVagas = []
let veiculo= []
function fnSalvarVeiculos(){
    numeroDeVagas.push(document.getElementById("numero_vaga").value)
   veiculo.push(document.getElementById("veiculo").value)
      
}

function fnListarVeiculos(){
    // console.dir(numeroDeVagas)
    // console.dir(veiculo)
    // document.getEle
    
    // let i = 0
    // while(i < veiculo.length){
    //     console.log(veiculo[i], numeroDeVagas[i])
    //     i++
    // }
    
    // for(declaração contador; condição; incremento){}
    document.getElementById("tabela_veiculos").innerHTML=""
    for(let i = 0; i < veiculo.length; i++){
        document.getElementById("tabela_veiculos").innerHTML +=`<tr>`
        document.getElementById("tabela_veiculos").innerHTML +=`<td> ${numeroDeVagas[i]}</td><td>${veiculo[i]}<td>`
        document.getElementById("tabela_veiculos").innerHTML += `</tr>`
    }

}
function fnLimpar(){
     document.getElementById("form_veiculos").reset()}