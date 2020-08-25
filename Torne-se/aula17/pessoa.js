
var Pessoa = function(_campos){

    if(_campos != undefined){
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
        Pessoa.Base.push(this);
    }
    
}

Pessoa.Base = [];

Pessoa.todos = function(){
    html = "<h1>Executando o método</h1>"

    for(i=0;i<Pessoa.Base.length; i++){
        pessoa = Pessoa.Base[i];

        html +="Nome: " +pessoa.nome + "<br>"
        html +="Telefone: " + pessoa.telefone + "<br>"
        html +="Cpf: " + pessoa.cpf + "<br>"
        html += "<hr>"
    }
    document.getElementById("resultado").innerHTML = html
}

