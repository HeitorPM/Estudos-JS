var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

/*
function renderTodos(){
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}
*/


var todos = [
    'Fazer café',
    'Estudar JS',
    'Peidar'

];
function adicionar(){

    let x = 0;
    let criarli = document.createElement('li')
    let textopreenchido=document.createTextNode(camp)

    criarli.appendChild(textopreenchido)
    listElement.appendChild(criarli)

    let camp = document.getElementById('campo');
    listElement.appendChild()

     x++;
}


function renderCada(){
    toolbar.innerHTML= ''
    for(var y=0;y<x;y++){

    }
}


