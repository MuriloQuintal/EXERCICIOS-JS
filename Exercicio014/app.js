const times = [
    "Atlético Mineiro - MG",
    "Bahia - BA",
    "Botafogo - RJ",
    "Ceará - CE",
    "Corinthians - SP",
    "Cruzeiro - MG",
    "Flamengo - RJ",
    "Fluminense - RJ",
    "Fortaleza - CE",
    "Grêmio - RS",
    "Internacional - RS",
    "Juventude - RS",
    "Mirassol - SP",
    "Palmeiras - SP",
    "Red Bull Bragantino - SP",
    "Santos - SP",
    "São Paulo - SP",
    "Sport - PE",
    "Vasco da Gama - RJ",
    "Vitória - BA"
];
const cidades_time = [
    "Belo Horizonte",
    "Salvador",
    "Rio de Janeiro",
    "Fortaleza",
    "São Paulo",
    "Belo Horizonte",
    "Rio de Janeiro",
    "Rio de Janeiro",
    "Fortaleza",
    "Porto Alegre",
    "Porto Alegre",
    "Caxias do Sul",
    "Mirassol",
    "São Paulo",
    "Bragança Paulista",
    "Santos",
    "São Paulo",
    "Recife",
    "Rio de Janeiro",
    "Salvador"
];

function fnListaTimes() {
    for (let i = 0; i < times.length; i++) {
        document.getElementById("lista_times").innerHTML +=
            `<div class="col-6 border text-center"> ${times[i]} - ${cidades_time[i]}
    </div>`

        
    }
}

fnListaTimes()

