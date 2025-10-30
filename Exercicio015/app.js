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
    `<div class="card" style="width: 18rem;"  >
            <img src="${umContato.foto}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${umContato.nome}</h5>
              <p class="card-text">${umContato.telefone} - ${umContato.email} </p>
              <button type="button" onclick = 'fnExcluir(${i})' class="btn btn-danger">Excluir</a>
            </div>
     </div>`

//  dados += `${umContato.nome} <br> ${umContato.telefone}  <br> ${umContato.email} <br> <img src='${umContato.foto}'style='width: 150px;border-radius: 100px'>`
})
document.getElementById('listaDeContatos').innerHTML = dados
}
function fnExcluir(indice){   //função criada para excluir  ocarde criado, o (indice,1) siginificar excluir apenaso carde que tem o button excluir, se color outro numero sera o total de cardes excluidos
    contatos.splice(indice,1)
    fnListar()
    }
    function fnLimpar(){     //funcção criada para limpar os dados do formulario
        document.getElementById('formulario').reset()    //resete para limpar o endereço do indice do formulario com nome de 'formulario
    }
    
// function fnExemplo(){
//     alert("oi")
// }

document.getElementById('btSalvar').addEventListener('click', function(){
    fnSalvar()
    fnListar()
    fnLimpar()    //funcão limpar os dados do formulario
})


