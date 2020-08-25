
var Cliente = function(){
    this.nome = "";
    this.telefone= "";
    this.cpf = "";

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



Cliente.todos = function(){
    for(i=0;i<Cliente.clientes.length; i++){
        cliente = Cliente.clientes[i];
        console.log("Nome: " +cliente.nome)
        console.log("Telefone: " + cliente.telefone)
        console.log("Cpf: " + cliente.cpf)
    }
}

Cliente.clientes = [];

var a = new Cliente
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

