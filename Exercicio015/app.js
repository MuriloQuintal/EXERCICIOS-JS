let contatos = []

function fnSalvar(){
   let umContato = {
    nome:document.getElementById('nome').value,
    telefone:document.getElementById('telefone').value,
    email:document.getElementById('email').value,
    foto:document.getElementById('foto').value
   }
   contatos.push(umContato)
   console.dir(contatos)
}

function fnListar(){
    let dados = ""

contatos.forEach(function(umContato,i){
    dados +=
    `<div class="card" style="width: 18rem;" >
            <img src="${umContato.foto}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${umContato.nome}</h5>
              <p class="card-text">${umContato.telefone} - ${umContato.email} </p>
              <a href="#" class="btn btn-danger">Excluir</a>
            </div>
     </div>`

//  dados += `${umContato.nome} <br> ${umContato.telefone}  <br> ${umContato.email} <br> <img src='${umContato.foto}'style='width: 150px;border-radius: 100px'>`
})
document.getElementById('listaDeContatos').innerHTML = dados
}
function fnExcluir(){}


// function fnExemplo(){
//     alert("oi")
// }

document.getElementById('btSalvar').addEventListener('click', function(){
    fnSalvar()
    fnListar()
})


