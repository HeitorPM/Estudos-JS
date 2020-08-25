var b= window.document.getElementById('btn')
b.addEventListener("click", tab)
function tab(){
    
    var tab = window.document.getElementById('seltab')
    var num = document.getElementById("txtn")
    var n= Number(num.value)

        tab.innerHTML =''
    for(var x=1; x<=10;x++){
        let item =document.createElement('option')
        item.text = `${n} x ${x} = ${n*x}`
// não funciona o botao se usar o item.value
//        item.value = `tab${c}`
        tab.appendChild(item)
    }

}
