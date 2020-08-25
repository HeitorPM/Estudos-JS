
var valores =[]
var soma =0
var res= window.document.getElementById('res')
var tab = window.document.getElementById('seltab')

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


// procurar saber pq as variaveis so funcionam dentro da funçao

function adicionar(){

    if(isNumero(num.value)&& !inLista(num.value, valores)){

        var n1 = window.document.getElementById('num')
        var n =Number(n1.value)

        valores.push(n);
        let item = document.createElement('option')
            item.text = `O valor ${n} foi adicionado.`
            tab.appendChild(item)
            soma +=n;
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
        return false
       
    }
    num.value =''
    num.focus()
}

function finalizar(){
    let qtd =valores.length
    if(qtd ==0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
    
    valores.sort()
    let maior = valores[qtd-1]
    let menor = valores[0]
    let media = (soma/qtd)
    
    res.innerHTML =''
    res.innerHTML+=`Ao todo temos, ${qtd} números cadastrados \u{2714}	<br>`
    res.innerHTML+=`O maior valor informado foi ${maior} \u{1F30E} <br>`
    res.innerHTML+=`O menor valor informado foi ${menor} \u{1F30D} <br>`
    res.innerHTML+=`Somando todos os valores, temos ${soma} \u{1F310} <br>`
    res.innerHTML+=`A média dos valores digitados é de ${media} \u{274E} <br>`
    }
}

