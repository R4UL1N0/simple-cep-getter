import { fetchCep } from './cep_api.js'


export function disableFormFields() {
    console.log('disable form function')
    document.getElementById('rua').disabled = true
    document.getElementById('bairro').disabled = true
    document.getElementById('cidade').disabled = true
    document.getElementById('estado').disabled = true
    document.getElementById('pais').disabled = true
}

export function styleCep() {
    const cep = document.getElementById('cep')

    const validRegex = /^[0-9-]+$/;
    
    cep.addEventListener('keypress', function(e) {

        const charCode = e.key
        console.log(charCode)

        if (validRegex.test(charCode)) {
            
            const cepText = cep.value

            if (cepText.length >= 9) {
                e.preventDefault()
                
            }
            else if (cepText.length < 8) {
                const limit = 8
                
                const trim = cepText.slice(0, limit)

                const newValue = trim.replace(/^(\d{5})(\d)/, '$1-$2')

                cep.value = newValue
            }

            console.log(cepText)

            let offHyphenCep = cepText.replace('-', '')
            offHyphenCep += charCode
            if (offHyphenCep.length >= 8) {
                
                console.log(offHyphenCep)
                fetchCep(offHyphenCep)
                // cep.blur()
            }
            

            
        } else {
            e.preventDefault()
        }

        
        
    })
}