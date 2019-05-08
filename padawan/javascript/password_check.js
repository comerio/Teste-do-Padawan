var request = require('request');
var url = 'https://r2d2-secret-pass.herokuapp.com/validate';
var link = '';
console.log(url);
request(url, function(err, resp, body){
  console.log(body);
  link = body;
})

function CheckPassword(password){
  var psw = /^[a-zA-Z0-9-]\w{1,6}$/;
  if (password.value.match(psw)){
    alert('Senha válida, redirecionando ..');
    document.location.assign(body);
    return false;
  }
  else{
    alert('Senha inválida. Tente novamente.');
    return true;
  }
}