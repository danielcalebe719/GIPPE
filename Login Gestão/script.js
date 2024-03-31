
function logar(){

 var username = document.getElementById('username').value;

 if(username =='gestoroperacional'){
    
    location.href = '/a/submit.html'
    alert('Sucesso')
 }

 else if(username =='gestorfinanceiro'){
    
    location.href = './a/submit.html'
    alert('Sucesso')
 }
 else{
    alert('Usuário ou senha incorretos')
 }

}