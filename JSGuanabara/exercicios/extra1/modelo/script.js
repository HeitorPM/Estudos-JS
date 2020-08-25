//pega o valor inserido no elemento que tem id txtn e joga na variavel add
let add = document.getElementById("txtn")
let lista = document.getElementById("lista")
let res = document.getElementById("res")
let valores = []

function isNumero(n){
    //pegue o numero inserido na função, ao ser convertido, se for maior
    // que 1 e menor que 100, retorne verdadeiro, senão, falso
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
    
}
function inLista(n, l){
    //procura o numero no array, para saber se já existe em alguma posição
    if(l.indexOf(Number(n))!=-1){
        return true 
    }else{
        return false
    }
}



function adicionar(){
        //se o valor que esta inserido em add
        //for um n de 1 ate 100 e NÃO estiver na lista, dê ok
    if(isNumero(add.value) && !inLista(add.value, valores)){
        //aumenta uma posição no array com o valor inserido
        valores.push(Number(add.value))

        //cria um item
        let item = document.createElement ('option')

        //cria um texto para o item onde será apresentado o valor
        item.text = `Valor ${add.value} adicionado`
    
        lista.appendChild(item)
    
        res.innerHTML = ''
    
    
    }else{
        window.alert('Valor inválido')
    }
}

    function finalizar(){
        if(valores.length ==0){
            window.alert('Adicione valores antes de finalizar!')
        }else{
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma= 0 
            let media = 0   

            for(let pos in valores){
                soma+= valores[pos]
            }
                if(valores[pos]> maior){
                    maior =valores[pos]
                }




        }
    }




