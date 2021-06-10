document.getElementById('button-login').addEventListener('click', function() {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

   window.alert('email digitado: ' +email)
   window.alert('senha digitada: ' +senha)
})

document.getElementById('button-limpar').addEventListener('click', function() {
    document.getElementById('email').value = ''
    document.getElementById('senha').value = ''
})
