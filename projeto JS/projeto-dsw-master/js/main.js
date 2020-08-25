function maiuscula(texto){
texto.value = texto.value.toUpperCase();
}

function valida(){

if(email.value == "" || password.value == ""){
    alert("Preencha todos os campos!");
  //document.container.main.login.email.focus();
  return false;
}
if (email.value == "admin" && password.value == "123456"){
  window.location.href = "views/home-admin.html";
}else if(email.value == "cliente" && password.value == "123456"){
  window.location.href = "views/home-cliente.html";
}
else{
  alert("Usuario ou senha incorretos");
  //document.container.main.login.email.focus();
  return false;
}
}

function validaCadastro(){

  if(dob.value == "" ){
      alert("Preencha a data");
  }else if ((sex-choice).value == ""){
    alert("Preencha o sexo");
  }

}

