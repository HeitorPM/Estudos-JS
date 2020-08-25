function gerar(){
    let pegaNum = document.getElementById('txtn')
    let pegaNumTab = document.getElementById('seltab')

    if(pegaNum.value.length ==0){
        window.alert('Senta!')
    }else{
        let n = Number(pegaNum.value)


        selTab.innerHTML =''
        for(var x=1; x<=10; x++){
            let itemNaLista = document.createElement('option')
            //itemNaLista.text = `${n} x ${x} = ${n*x} `
            itemNaLista.text =  n + ' x ' + x + " = " +n*x
            itemNaLista.value = 'pegaNumTab${x}'
            //itemNaLista.value = `pegaNumTab${c}`
            pegaNumTab.appendChild(itemNaLista)
            

        }
    }

}