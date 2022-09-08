function calcular(tipo, valor) {
    if (tipo === 'acao') {

        if (valor === 'c') {
            document.getElementById('resultado').value = ''

            document.querySelector('body').style.background = '#D9D9D9'
            document.querySelector('body').style.transition = '3.5s'
          
        }

        if (valor === '+' || valor === '-' || valor === '+' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            var valor_campo = document.getElementById('resultado').value
            document.getElementById('resultado').value = (eval(valor_campo))

            document.querySelector('body').style.background = '#4e91df'
            document.querySelector('body').style.transition = '3.5s'

        }
    } else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}


function dia() {
    document.querySelector('body').style.background = 'white'
    document.querySelector('body').style.transition = '2s'
}

function noite() {
    document.querySelector('body').style.background = 'black'
    document.querySelector('body').style.transition = '2s'
}