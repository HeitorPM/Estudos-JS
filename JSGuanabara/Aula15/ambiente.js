let valores= [8,1,7,4,2,9]

valores.push(3)
console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

//bota em ordem crescente
//obs: ele muda mesmo!!! n exibe apenas.
valores.sort()

for(let pos=0; pos< valores.length; pos++){
    console.log(`A posição ${pos} tem valor ${valores[pos]}` )
}
//exatamente a mesma coisa so que mais rapido!
for (let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}` )
}

let pos = valores.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`)


