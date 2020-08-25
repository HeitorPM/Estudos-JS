function calcular(){

    var ini1= document.getElementById("ini")
    var fim1= document.getElementById("fim")
    var passo1=document.getElementById("passo")
    var res = document.getElementById('res')

    var fimi = Number((document.getElementById("fim")).value)
    var inii = Number((document.getElementById("ini")).value)
    var passi = Number((document.getElementById("passo")).value)
      

    


    if(ini1.value.length ==0 || fim1.value.length==0 || passo1.value.length==0){
    alert("esta errado")
    }
    else{

    var ini = Number(ini1.value)
    var fim = Number(fim1.value)
    var passo = Number(passo1.value)



    for(let x=inii; x<=fimi; x+=passi){
        if(x>=fim){
            res.innerHtML += `-->fiM!!!`
        }
        else{
            res.innerHTML +=`${x} -->`
        }
    }
}
}
