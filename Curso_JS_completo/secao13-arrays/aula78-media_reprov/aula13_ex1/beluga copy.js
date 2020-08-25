function calcularMedia(arr){                    
    debugger

    var total = 0;
    var qtd = arr.length;
    var x = 0;
    while(typeof arr[x] === 'number'){
        total += arr[x];
        x++
    }                    

    return (total / qtd).toFixed(2);
}

function sortear(n){
    var _n = n || 1;
    var nSorteado = Math.random();
    nSorteado = nSorteado * _n;
    nSorteado = Math.floor(nSorteado);
    return nSorteado;
}