function calcular(){
    let num = document.getElementById("n")
    let tab = document.getElementById('tabuada')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n= Number(num.value)
        

        tabuada.innerHTML= ''
        for(var x=1; x<=10; x++){
            let item = document.createElement('option')
            //'${n} x ${x} = ${n*x}'
            item.text =  n + ' x ' + x + " = " +n*x
            //o itemvalue abaixo serve para garantir os dados para um php por exemplo
            item.value = 'tab${x}'
            // analisar melhor para que server o tab.appendChild
            tab.appendChild(item)
        }
    }
    

    

}