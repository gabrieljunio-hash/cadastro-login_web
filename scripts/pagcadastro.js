let btn = document.querySelector('#versenha')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

let btnconfirm = document.querySelector('#verconfirmsenha')

btnconfirm.addEventListener('click', ()=>{
    let inputconfirmSenha = document.querySelector('#confirmsenha')

    if(inputconfirmSenha.getAttribute('type') == 'password'){
        inputconfirmSenha.setAttribute('type', 'text')
    } else {
        inputconfirmSenha.setAttribute('type', 'password')
    }
})