export async function fetchCep(cep) {

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
        if (data.localidade == undefined) {
            clearValues()
        } else {
            addValues(data)
        }
        
    })
    .catch(error => console.log(error))
}

function clearValues() {
    document.getElementById('rua').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''
    document.getElementById('pais').value = ''
    window.alert("CEP não existente")
}

function addValues(data) {
    document.getElementById('cep').blur()
    document.getElementById('rua').value = data.logradouro
    document.getElementById('bairro').value = data.bairro
    document.getElementById('cidade').value = data.localidade
    document.getElementById('estado').value = data.uf
    document.getElementById('pais').value = "Brasil"
}