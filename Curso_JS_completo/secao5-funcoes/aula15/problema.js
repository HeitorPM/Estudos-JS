(function init(){

    function calcIMC(peso, altura, callback){
        var imc =peso/(altura*altura);
        if(callback && typeof callback === 'function'){
            return callback(imc)
        }else{
            console.log('Callback não passou')
            return imc;
        }
    }

    function classificaIMC(imc){
                                        
        if(imc <= 16.9 ){
            return 'muito abaixo do peso';
        } else if (imc <= 18.4){
            return 'abaixo do peso';
        } else if(imc <= 24.9){
            return 'normal';
        } else if(imc <= 29.9) {
            return 'acima do peso';
        } else if(imc <= 34.9){
            return 'obesidade 1';
        } else if(imc <= 40){
            return 'obesidade 2';
        } else {
            return 'obesidade 3';
        }
    }
    var imc = calcIMC(75, 1.82, classificaIMC)
    var imc2 = calcIMC(75, 1.82)

    console.log(imc2, imc)


})()