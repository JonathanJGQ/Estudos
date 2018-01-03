var criaJogo = function(sprite) {

    var palavraSecreta = '';
    var etapa = 1;
    var lacunas = [];

    var iniciaLacunas = function(){
        lacunas = [];
        for(var i=0;i<palavraSecreta.length;i++){
            lacunas.push('');
        }
    }
    // recebe a palavra secreta e deve atribuí-la à variável `palavraSecreta`. Vai para a próxima etapa
    var setPalavraSecreta = function (palavra) {
        palavraSecreta = palavra;
        iniciaLacunas();
        etapa = 2;
    };

    // retorna as lacunas do jogo. Importante para quem for exibí-las.
    var getLacunas = function () {
        return lacunas;
    };

    // retorna a etapa atual do jogo
    var getEtapa = function () {
        return etapa;
    };

    // preencher lacuna ou exibe o próximo sprite. Retorna true ou false caso o jogador tenha acertado
    var processaChute = function(chute) {
        var achou = false;
        for(var i=0;i<palavraSecreta.length;i++){
            if(palavraSecreta[i] == chute){
                lacunas[i] = chute;
                achou = true;
            }
        }
        if(!achou){
            sprite.nextFrame();
        }
    };

    var ganhou = function () {
        var temEspaco = false;
        var lacunas = getLacunas();
        for(var i=0;i<lacunas.length;i++){
            if(lacunas[i] == ''){
                temEspaco = true;
            }
        }
        if(temEspaco == false){
            return true;
        }
        return false;
    };

    var perdeu = function () {
        if(!ganhou() && sprite.isFinished()){
            return true;
        }
        return false;
    };

    var ganhouOuPerdeu = function () {
        var win = ganhou();
        var lost = perdeu();

        if(ganhou() || perdeu()){
            return true;
        }
        return false;
    };

    var reinicia = function () {
        palavraSecreta = '';
        lacunas = [];
        etapa = 1;
        sprite.reset();
    };

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia: reinicia
    };
};
