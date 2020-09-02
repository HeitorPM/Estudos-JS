

// -------------------------- Mascara cep---------------



// // obs: chama a função execmascara la em cima
// // verificar se n atrapalhar as outras variaveis de nome semelhante
// function mascaraCep(y, x){
//  v_objCep=y;
//  v_funCep=x;
// // verificar se dá pra executar diretamente
// setTimeout('execmascaraCep()',1);
// }
// function execmascaraCep(){
//   v_objCep.value=v_funCep(v_objCep.value)
// }
// function mcep(z){
//  z=z.replace(/\D/g,"");
//  z=z.replace(/(\d)(\d{3})$/g, '$1-$2' )
//  return z;
// }
// // verificar como usar arrowfunction no lugar das functions
// // verificar o motivo de chamar uma função sem nome para 
// // chamar a funcao mascara cep, ao invés de fazer diretamente
// function id( el ){
// return document.getElementById( el );
// }

// window.onload = function(){
//   id('cepCad').onkeypress = function(){
//     mascaraCep(this, mcep);
//   }
//   }

// -----------------fazer regex cpf----------




// function maiuscula(texto){
// texto.value = texto.value.toUpperCase();
// }

// function valida(){

// if(email.value == "" || password.value == ""){
//     alert("Preencha todos os campos!");
//   //document.container.main.login.email.focus();
//   return false;
// }
// if (email.value == "admin" && password.value == "123456"){
//   window.location.href = "views/home-admin.html";
// }else if(email.value == "cliente" && password.value == "123456"){
//   window.location.href = "views/home-cliente.html";
// }
// else{
//   alert("Usuario ou senha incorretos");
//   //document.container.main.login.email.focus();
//   return false;
// }
// }

// function validaCadastro(){

//   if(dob.value == "" ){
//       alert("Preencha a data");
//   }else if (sex-choice.value == ""){
//     alert("Preencha o sexo");
//   }

// }

