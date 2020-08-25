var Cliente = function(){
    this.CodigoDoCliente = ""

    this.gravarEmMemoria = function(){
        Cliente.Base.push(this);
    }

//joga para super a herança de pessoa, como o método original
    this.super = Pessoa.prototype
    this.Original = function(){
        console.log("função sobrescrita")
        this.super.Original()
    }
}
Cliente.prototype = new Pessoa();

Cliente.Base = []