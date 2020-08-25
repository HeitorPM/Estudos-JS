(function(){

    var $html = document.querySelector('html');
    var $btn = document.querySelector('.header-nav__hamburgger');

    // pega o atributo/nome/valor do aria-controls ===nesse caso vai ser main menu
    var ariaControl = $btn.getAttribute('aria-controls');
    
    // pegou o botao aria control
    // ver melhor sobre o ariacontrol
    var $menu = document.getElementById(ariaControl)
    
    // a partir do momento em que o js foi carregado, troca a classe no-js para js por conta do 
    // progressive enhacement
    $html.classList.remove('no-js');
    $html.classList.add('js');
    
    
    $btn.addEventListener('click', function(){
        $html.classList.toggle('menu-opened');


    
    // obs: qualquer string convertida de booleano fica true
    // ex:boolean('true') > true , boolean('biscoito') > true, boolean('false')> true
    // Entretanto, se fizermos !boolean('thundercats') > false, por conta da !antes do booleano 

    // pega o atributo/nome/valor do ariaExpanded
    // pega o atributo e o compara com tipo e valor de string que se chama "true", se verdadeiro, retorna true (boolean)
    // se n, vira falso (boolean)
    // usar o operador === retorna sempre em um valor booleano, independente da linguagem!


        var ariaExpanded = $btn.getAttribute('aria-expanded')==="true" ;

        // basicamente inverte do que ja está presente
        // funcionando como um toggle
        $btn.setAttribute('aria-expanded', !ariaExpanded);
        $menu.setAttribute('aria-expanded', !ariaExpanded);

    })
})()