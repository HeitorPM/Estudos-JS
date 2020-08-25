
var valores =[]
var num = window.document.getElementById('num')
var res= window.document.getElementById('res')
var lista = window.document.getElementById('seltab')
//let n =Number(num.value)

var a = window.document.getElementById('btna')
a.addEventListener('click', adicionar)

var f = window.document.getElementById('btnf')
f.addEventListener('click', finalizar)

function isNumero(nu){
    if(Number(nu) >=1 && Number(nu) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n2,l2){
    if(l2.indexOf(Number(n2))!=-1){
        return true
    }else{
        return false
    }
}


//pq quando ponho o n no lugar num.value n funciona???
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        window.alert('Valor invalido ou ja encontrado na lista')
        return false;
    }
    num.value =''
    num.focus()
}



function finalizar(){
    if(valores.length ==0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma+= valores[pos]
            if(valores[pos]>maior)
            maior = valores[pos]
            if(valores[pos]<menor)
            menor = valores[pos]
        }
        media= soma/tot

        res.innerhtml =''
        res.innerHTML +=`<p>Ao todo, temos ${tot} números cadastros.</p>`
        res.innerHTML+=`<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML+=`<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML+=`<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML+=`<p>A média dos valores digitados é de ${media}</p>`
    }
}
