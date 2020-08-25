var Fornecedor = function(){
    this.CNPJ = ""

    this.entregarProdutos = function(){
        alert("O fornecedor está entregando os produtos")
    }
    this.gravarEmMemoria = function(){
        Fornecedor.Base.push(this);
    }
}
//forma de estabelecer herança
Fornecedor.prototype = new Pessoa();

Fornecedor.Base = []