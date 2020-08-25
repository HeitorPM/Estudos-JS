let add = document.getElementById("txtn")
let lista = document.getElementById("lista")
let res = document.getElementById("res")
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    //procura o numero no array, para saber se já existe em alguma posição. se o res for 1 é pq esta, se for -1, é pq n esta.

    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function adicionar(){
    //se for um n de 1 ate 100 e NÃO estiver na lista, dê ok!
    if(isNumero(add.value) && !inLista(add.value, valores)){

        //aumenta uma posição no array com o valor inserido
        valores.push(Number(add.value))

        //cria um item
        let item = document.createElement('option')

        //criar um texto para o item onde será apresentado o valor
        item.text = `Valor ${add.value} adicionado.` 

        //ver melhor o que faz
        lista.appendChild(item)
        //serve para limpar onde ficou a frase, enquanto faz o calculo, antes de finalizar
        res.innerHTML = ''

    }
    else{
        window.alert("valor invalido ou já encontrado na lista")
    }
    //limpa a caixa do add
    add.value = ''
    // retorna a seleçao do mouse para a caixa de texto onde se encontrava o add
    add.focus()


}

function finalizar(){
    // se a quantidade de numeros nas posiçoes for 0, ou seja inexisteste
    //indique erro
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma =0
        let media =0



        for(let pos in valores){
            soma += valores[pos]


            if(valores[pos] > maior){
            maior = valores[pos]
        }
        //ou         maior = valores[pos] > maior ? valores[pos] : maior

            if(valores[pos] < menor){
                menor = valores[pos]
            }
            //ou menor = valores[pos] < menor ? valores[pos] : menor
            
        }
        media=soma/tot
        //serve para limpar onde ficou a frase, para n acumular uma acima da outra
        res.innerHTML = ''
        res.innerHTML += ` <p>Ao todo, temos ${tot} números cadastrados.</p> `
        res.innerHTML += `<p>O maior valor informado foi de ${maior}`
        res.innerHTML += `<p>O menor valor informado foi de ${menor}`
        res.innerHTML += `<p>A soma dos valores informados foi de ${soma}`
        res.innerHTML += `<p>A media dos valores informados foi de ${media}`

        //ra quem não quer a média com número com ponto
        //`<p>A média dos valores é de ${Math.round(media)}.</p>

    }}

    var btnAd = document.getElementById("btnAdd")
    var btnFn = document.getElementById("btnFin")

    btnAd.addEventListener("click", adicionar )
    btnFn.addEventListener("click", finalizar )