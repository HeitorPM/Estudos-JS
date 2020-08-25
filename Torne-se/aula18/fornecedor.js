var Fornecedor = function(){
    this.CNPJ = ""

    this.super = Pessoa.prototype

    this.entregarProdutos = function(){
        alert("O fornecedor está entregando os produtos")
    }
    this.gravarEmMemoria = function(){
        Fornecedor.Base.push(this);
        this.super.gravarEmMemoria()
    }
}
//forma de estabelecer herança
Fornecedor.prototype = new Pessoa();

Fornecedor.Base = []