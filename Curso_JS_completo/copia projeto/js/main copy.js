// ----------------mascara tel / cel
function mascaraTel(o,f){
    debugger
    // v_obj vai ser o this, ou seja o input de telefone
    v_obj=o 
    // v fun= vai ser a função mtel
    v_fun=f
    // apos um milisegundo vai executar a função
    setTimeout("execmascara()",1)
}
function execmascara(){
    // o valor do input de telefone vai receber 
    // o returno da funçãoo mtel usando o input telefone 
    // como parametro
    v_obj.value=v_fun(v_obj.value)
}
// o this chamado la no window.onload vai servir como
// parametro do mtel, ou seja o telefoneCad.value
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    
    // ^ do regex serve para verificar e aplicar apenas no inicio da string
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    
    // o $ serve para verificar e aplicar apenas no final da string
    v=v.replace(/(\d)(\d{4})$/g,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
// insere o id em que se quer aplicar a função
function id( el ){
	return document.getElementById( el );
}
// no carregamento da janela a função aplica a função id
// ao apertar o botao, chamando a função mascaraTel
// o this vai servir como parametro pro mtel
window.onload = function(){
	id('telefone').onkeypress = function(){
		mascaraTel( this, mtel );
	}
}

// -------------------------- Mascara cep---------------

// verificar como usar arrowfunction no lugar das functions
// verificar o motivo de chamar uma função sem nome para 
// chamar a funcao mascara cep, ao invés de fazer diretamente
window.onload = function(){
  id('cepCad').onkeypress = function(){
    mascaraCep(this, mcep);
  }
}
function mascaraCep(o, f){
  v_obj=o;
  v_fun=f;
  setTimeout('execmascara()',1);
}





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
    }else if (sex-choice.value == ""){
      alert("Preencha o sexo");
    }else if (cidadeCad.value == ""){
      alert("Preencha o sexo");
    }

 }

