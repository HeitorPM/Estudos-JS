function calcular(){
    let res = document.getElementById('res')

    var fim = Number((document.getElementById("fim")).value)
    var ini = Number((document.getElementById("ini")).value)
    var pas = Number((document.getElementById("passo")).value)
    

    if(ini.length==0 || fim.length==0 || pas.length==0){
    alert("esta errado")
    }else{

    for(let x=ini; x<=fim; x+=passo){
       if(x>=fim){
            res.innerHtML += `-->fiM!!!`
        }else{
            res.innerHTML +=`${x} -->`

        }
    }
}

