(function init(){

function calcMedia(array){
    console.log(arguments)
    var x=0;
    var result=0;
    
        //o uso de type of === 'number' se da pelo fato de 
        //quando o array é lido com o numero '0', ele para de continuar lendo
        //fazendo com que quebre o codigo, pois o 0 é considerado false.
        // usando o type of sempre pegara o número

    while(typeof arguments[x] === 'number'){
        result +=arguments[x];
        x++;
    }
    media = result/arguments.length
    console.log('O resultado é de: ', result,' a média é de ', media)
}
calcMedia(2,4,6,0,10,12,13,15)

})()