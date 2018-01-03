var criaController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

    // consulta jogo.getLacunas() e exibe para o usuário cada lacuna
    var exibeLacunas = function () {
        var lacunas = jogo.getLacunas();
        $lacunas.empty();
        for(var i=0;i<lacunas.length;i++){
            $lacunas.append("<li class='lacuna'>" + lacunas[i] + "</li>")
        }
        console.log($lacunas);
    };

    // muda o texto do placeHolder do campo de entrada
    var mudaPlaceHolder = function (texto) {
        $entrada.attr("placeholder",texto);
    };

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller.
    var guardaPalavraSecreta = function () {
        var palavraSecreta = $entrada.val();
        $entrada.val("");
        jogo.setPalavraSecreta(palavraSecreta);
        exibeLacunas();
        mudaPlaceHolder("chute");
    };

    var reinicia = function(){
        $lacunas.empty();
        mudaPlaceHolder("Palavra secreta");
        jogo.reinicia();
    }

    var leChute = function(){
        jogo.processaChute($entrada.val());
        $entrada.val("");
        exibeLacunas();
        setTimeout(function(){},1000);
        if(jogo.ganhouOuPerdeu()){

            setTimeout(function(){
                if(jogo.ganhou()){
                    alert("Parabéns, você venceu!");
                }
                else{
                    alert("Que pena, tente outra vez!");
                }
                reinicia();
            },200);
        }
    }

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    var inicia = function () {
        exibeLacunas();
        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    };

    // retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado.
    return { inicia: inicia };
};
