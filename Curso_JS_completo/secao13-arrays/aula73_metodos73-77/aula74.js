
         var arr = ['1',20, 2,3,4,5, 'kjkl', 20 , '30'];
        // o some devolve baseado na amostragem de pelo menos 1 
        // logo retornará verdadeiro
        var aoMenosUmNumero = arr.some( function(el){
            return el === 0;

        });
        console.log(aoMenosUmNumero)