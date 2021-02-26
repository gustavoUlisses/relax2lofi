// criei uma função minSec que tem como parâmetros minutos e segundos.
//para ser acinada ele precisa receber estes parâmetros. No meu caso os valores estão no
//onclick de cada botão no html.
function minSec(minuto, segundo){
    let min = minuto;
    let seg = segundo;

    //variáveis definidas a funcção relógio é chamada com os argumentos
    //de min e seg recém criadas. 
    relogio(min, seg);

    //uma conferidinha...
    console.log(min, seg)
    //aqui criei uma variável com para informar o tempo selecionado - qual botão foi clicado e
    //quanto tempo iniciou o timer. 
    const tempoSel = document.querySelector('#tempoSel');
    tempoSel.innerHTML = `Tempo selecionado: ${min} min.`
    //mais uma conferidinha...
    console.log(tempoSel)


    //a funcção relógio é a responsável pelo timer regressivo.
    function relogio() {
        //quando chamada ela verifica as seguintes condições: se o valor de minuto é menor 
        //que zero ou se o valor de segundo é menor que zero. Se um dos dois for true ela 
        //segue adiante caso contrário ela aciona o else que coloca 00:00 no html. 
        if ((min > 0) || (seg > 0)) {
            //seguindo ela verifica se segundos é igual a zero, então atribui o valor de
            //59 para seguindos e diminui um minuto da variável minuto.
            if (seg == 0) {
                seg = 59;
                min = min - 1
            }
            //se segundos for diferente de zero ela só reduz um segundo da variável seg.
            else {
                seg = seg - 1;
            }
            //outra condição verificada é se o minuto, convertido para string tem comprimento
            //igual a um. 
            if (min.toString().length == 1) {
                //se tiver minuto passa a ter seu valor de 1 para 01. 
                //É uma forma de inserir o zero à esquerda. 
                min = "0" + min;
            }
            //mesma coisa com os seguindos. 
            if (seg.toString().length == 1) {
                seg = "0" + seg;
            }

            //tudo isso feito é hora de buscar pelo elemento com id 'spanRelogio' no html, 
            //e inserir nele o valor de minuto (agora com o 0 à esquerda) seguido de : e do valor
            //dos segundos(também com zero se for o caso).
            document.getElementById('spanRelogio').innerHTML = min + ":" + seg;

            //esta parte é muito importante!
            //Aqui eu defino que toda a função relógio() vai ser executada a cada 1000 milissegundos, 
            //ou seja, vai executar a cada seguindo, o que dá a impressão de um contador regressivo
            //com valores de seguindo.
            //Muita atenção no parâmetro de setTimeout pois quando é função não usamos o ()!!!!!!!!!
            setTimeout(relogio, 1000);
        }

        //como falei antes se as  condicionais anteriores não forem atendidas este else
        //entra em ação para inserir no html um placeholder 00:00
        else {
            document.getElementById('spanRelogio').innerHTML = "00:00";
        }
    //fim da função relogio()
    }


    
    //executa o escopo global. 
    move();

}