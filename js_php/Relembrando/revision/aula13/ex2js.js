function calcular(){
    var data = new Date;
    var anoAtual = data.getFullYear();
    var anoT = document.getElementById("txtidade");
    var res = document.getElementById("res");

    var ano = Number(anoT.value);
    var idade = anoAtual-ano;

    if(anoT.value.length <= 3 || ano> anoAtual){
        window.alert('[Erro] Digite o ano corretamente')
    }else{
        var fsex = document.getElementsByName('radsex')

        var genero = ''
        if(fsex[0].checked){
            genero='masculino'
            if(idade<=12){
                img.src="banco de imagens/criança.png"
                
            }else if(idade<=22){
                img.src="banco de imagens/jovem2.png"
            }else if(idade<=50){
                img.src="banco de imagens/adulto.png"
            }else{
                img.src="banco de imagens/velho.png"
            }
        }else{
            genero='feminino'
            if(idade<=12){
                img.src="banco de imagens/criança2.png"
                
            }else if(idade<=22){
                img.src="banco de imagens/jovem.png"
            }else if(idade<=50){
                img.src="banco de imagens/adulta.png"
            }else{
                img.src="banco de imagens/velha.png"
            }
        }



        res.innerHTML = `Você é do sexo ${genero} e sua idade calculada: ${idade}`
       
    }


    /*
    if(ano > anoatual || ano<1900){
        res.innerHTML="Erro, insira um ano válido";
        alert("Erro, insira um ano válido");
    }else{
        alert("Calculando idade...");
        res.innerHTML=`Você tem ${idade}`;
    }
*/

}

function calcula(){
    window.alert("shazam")
}