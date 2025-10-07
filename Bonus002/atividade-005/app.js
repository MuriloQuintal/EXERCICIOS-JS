document.getElementById('btcalcular').addEventListener('click', function(){
    let Salario = parseFloat(document.getElementById('salario').value)
    let horasTrabalhadas = parseFloat(document.getElementById('horas-trabalhadas').value)
    let cargaHoraria = parseFloat(document.getElementById('carga-horaria').value)
    let horasExtras = fnHorasExtras(Salario, horasTrabalhadas, cargaHoraria)
    document.getElementById('resposta').innerHTML = fnFormatarMonetario(horasExtras)
})