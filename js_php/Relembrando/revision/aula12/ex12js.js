
    function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //retorna a data
    var data = new Date()
    //retorna o numero da hora em formato de 24h
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if(hora>=6 && hora <12){
        msg.innerHTML += "<br>Bom dia!"
        img.src = "/Relembrando/revision/img/fotomanha.png"
        document.body.style.background = '#e2cd9f'
    }else if(hora>=12 && hora<18){
        msg.innerHTML += "<br>Boa tarde!"
        img.src = "/Relembrando/revision/img/fototarde.png"
        document.body.style.background = '#b9846f'
        
    }else{
        msg.innerHTML += "<br>boa noite";
        img.src = "/Relembrando/revision/img/fotonoite.png"
        document.body.style.background = 'black'
    }
   
}