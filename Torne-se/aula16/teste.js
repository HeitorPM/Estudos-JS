
var media = function(_nota1,_nota2){
    //o this deixa a variavel publica quando acessarem
    //o var aparece apenas na assinatura
    //mas n permite ser invocada
    this.nota1 =_nota1;
    this.nota2=_nota2

    var a = "";
    a *= 8
    
    var mostrarValor = function(){
        var media = (this.nota1 + this.nota2)/2
        document.write(media)
    }
    this.calculo = function(){
        var media = (this.nota1 + this.nota2)/2
        return media;
    }
    this.mostrar = function(){
        var media = (this.nota1 + this.nota2)/2
        document.write(media)
    }
}