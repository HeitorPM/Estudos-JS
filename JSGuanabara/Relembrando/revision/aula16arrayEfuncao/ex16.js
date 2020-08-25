/*
tratamento anti undefined 
function soma(n1=0, n2=0){
    return n1+n2
}
 */

 function recursividade (n){
     if (n ==1 ){
         return 1
     }else{
         return n * fagorial(n-1)
     }
 }
