(function init(){
    function calcMedia(){
        var total =0;
        var x =0;

        //o uso de type of === 'number' se da pelo fato de 
        //quando o array é lido com o numero '0', ele para de continuar lendo
        //fazendo com que quebre o codigo, pois o 0 é considerado false.
        // usando o type of sempre pegara o número

        while(typeof arguments[x] === 'number'){
            total += arguments[x];
            x++;
        }

        return total/arguments.length;
    }
    var media1 = calcMedia(2,3);
    var media2 = calcMedia(2,0,4,5,6)

    console.log(media1)
    console.log(media2)
})()