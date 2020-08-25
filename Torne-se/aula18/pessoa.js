
var Pessoa = function(_nome, _telefone, _cpf){

                this.nome = _nome
                this.telefone = _telefone
                this.cpf = _cpf

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

}

Pessoa.prototype.Original = function(){
    console.log("função original")
}

Pessoa.prototype.nome = ""
Pessoa.prototype.telefone = ""
Pessoa.prototype.cpf = ""
//o this.gravarEmMemoria virou Pessoa.prototype para poder
// ser invocada por classes filhas que herdam a mesma

Pessoa.prototype.gravarEmMemoria = function(){
    Pessoa.Base.push(this);
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

