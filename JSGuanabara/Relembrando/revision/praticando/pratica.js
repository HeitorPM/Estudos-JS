var num = window.document.getElementById('num')
var valores = []
var res = window.document.getElementById('res')
var sel = window.document.getElementById('sel')
var add = window.document.getElementById('btnAdd')
add.addEventListener('click', adicionar)
var fim = window.document.getElementById('btnFin')
fim.addEventListener('click', finalizar)

function isNumero(n) {
    /*
    if((Number(n)>0 &&(Number(n)<=100))){
        return true
    } */
    if (isNaN(n) || (n) < 1 || (n) > 100) {
        return false
    }
    else {
        return true
    }
}
function nExiste(n1, n2) {
    if (n2.indexOf((n1)) != -1) {
        return false
    } else {
        return true
    }
}
function adicionar() {
    let nu = Number(num.value)
    if (nExiste(nu, valores) && isNumero(nu)) {

        valores.push(nu)
        let item = document.createElement('option')
        item.text = (`O valor ${nu} foi inserido`)
        sel.appendChild(item)

    } else {
        alert('Número invalido, por ser repetido ou por não ser número')
    }
    num.focus()
    num.value = ''
}


function finalizar() {

    let qtd = valores.length
    if (qtd == 0) {
        alert("Nenhum número inserido")

    } else {
        valores.sort()
        let maior = valores[qtd - 1]
        let menor = valores[0]
        let soma = 0

        for (let x = 0; x < qtd; x++) {
            soma += valores[x]
        }
        let media = soma / qtd
        res.innerHTML = ''
        res.innerHTML += `A quantidade dos números informados foi de${qtd}<br>`
        res.innerHTML += `O maior dos números informados foi de${maior}<br>`
        res.innerHTML += `O menor dos números informados foi de${menor}<br>`
        res.innerHTML += `A media dos números informados foi de ${media} <br>`
        res.innerHTML += `A soma dos números informados foi de ${soma}<br>`
    }
}