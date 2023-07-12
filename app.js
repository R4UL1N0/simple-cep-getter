import { disableFormFields, styleCep } from './functions/form_functions.js'

function initApp() {
    console.log('running')
    disableFormFields()
    styleCep()
}

initApp()