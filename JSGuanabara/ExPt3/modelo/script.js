function verificar(){

   

    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //tanto faz o qual vai usar, sao apenas 2 formas diferentes
    // tanto no getElement/querySelector quanto no Number(fano.value)/fano.value.length
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade=ano-Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if(fsex[0].checked){
            
            genero ="Homem"
            if( idade>=0 && idade<=6){
                img.setAttribute('src',  "criança.png")

            }
            else if(idade<=22){
                img.setAttribute('src',  "jovem2.png")
            }
            else if(idade<=50){
                img.setAttribute('src', "adulto.png")
            }
            else{
                img.setAttribute('src', "velho.png")

            }
        }
        else{
            genero ="Mulher"
            if(idade>=0 && idade<=6){
                img.setAttribute('src', "criança2.png")
            }
            else if(idade<=22){
                img.setAttribute('src', "jovem.png")
            }
            else if(idade<=50){
                img.setAttribute('src',"adulta.png")
            }
            else{
                img.setAttribute('src', "velha.png")

            }

        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${genero} com ${idade} anos<br></br>`
        res.appendChild(img)
    }



}