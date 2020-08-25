
(function(){
    var isValid = false;
    console.log(isValid);



   function somar(){
   console.log(arguments);
   var result =0;
   var x =0;

    for(let y=0;y<arguments.length;y++){
        result +=arguments[y]
    }
//  da no mesmo que:

//    while(arguments[x]){
//    result += arguments[x]
//    x++;
//    }
console.log('result:', result);
}
somar(20, 20, 10,30, 40, 50, 10);

})()

