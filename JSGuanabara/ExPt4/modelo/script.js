function contar(){

    //pegando os caracteres escritos
    // buscar o que significa o document
    let inicio= document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let contando = document.getElementById("Contando")
    
    //se o comprimento da sentença for 0, dará erro
    //obs: não é o valor!!!
    if(inicio.value.length == 0 || fim.value.length == 0
         || passo.value.length == 0 || passo.value == 0){
            res.innerHTML = 'Impossível contar'
    }
        else{
            res.innerHTML = "A conta foi: <br>"
            //pegando e convertendo os valores numéricos dentro das variaveis
            let i = Number (inicio.value)
            let f = Number (fim.value)
            let p = Number (passo.value)
            if(i<f){
        for(let c =i; c<= f; c+=p){
                    // contagem progressiva
                //http://unicode.org/emoji/charts/emoji-list.html
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    else{
        // contagem regressiva
        for(let c = i ; c >= f;c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
    }

    }





