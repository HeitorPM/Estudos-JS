
var Cliente = function(_campos){

    if(_campos != undefined){
        if(_campos.nome != undefined){
            this.nome = _campos.nome
        }else{
            this.nome= ""
        }
        if(_campos.telefone != undefined){
            this.telefone = _campos.telefone
        }else{
            this.telefone= ""
        }
        if(_campos.cpf != undefined){
            this.cpf = _campos.cpf
        }else{
            this.cpf= ""
        }

}

    this.mostrar = function(){
        document.write(this.nome);
        document.write(this.telefone);
        document.write(this.cpf);
    }
    this.mostrar2 = function(){
        console.log(this.telefone);
        console.log(this.cpf);
        console.log(this.nome);
    }
    this.gravarEmMemoria = function(){
        Cliente.clientes.push(this);
    }
    
}

Cliente.clientes = [];

Cliente.todos = function(){
    html = "<h1>Executando o método</h1>"

    for(i=0;i<Cliente.clientes.length; i++){
        cliente = Cliente.clientes[i];

        html +="Nome: " +cliente.nome + "<br>"
        html +="Telefone: " + cliente.telefone + "<br>"
        html +="Cpf: " + cliente.cpf + "<br>"
        html += "<hr>"
    }
    document.getElementById("resultado").innerHTML = html
}


/**
 * 
 * var a = new Cliente
a.nome = "Heitor";
a.telefone = "2222-4444";
a.cpf = "12312312312";
//a.mostrar2();
a.gravarEmMemoria();


var b = new Cliente
b.nome = "Raul";
b.telefone = "3333-4444";
b.cpf = "32132132132";
//b.mostrar2();
b.gravarEmMemoria();

Cliente.todos();
 */


