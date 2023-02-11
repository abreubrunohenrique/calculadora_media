const form = document.getElementById('form-agenda')
let linhas = ''

const nomes = []
let numeros = []


form.addEventListener('submit', function(e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela() 
})

function adicionaLinha() {

    const inputNomeAtividade = document.getElementById('nome-contato')
    const inputNotaAtividade = document.getElementById('numero-contato')    
    
        nomes.push(parseFloat(inputNomeAtividade.value))
        numeros.push(parseFloat(inputNotaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha +=`<td>${inputNotaAtividade.value}</td>`
        linha +=`</tr>`
    
        linhas += linha   
        
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}
