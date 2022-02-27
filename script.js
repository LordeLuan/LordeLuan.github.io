$(document).ready(function(){
    console.log('JavaScript funcionando!');

    // Esconde campos
    $('#imagempoke').hide();
    $('.erro').hide();

})

function buscaPoke(pokemon){
    var urlAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    return  fetch(urlAPI).then(resp => resp.json()).catch(err=> $('.erro').show());
};

function mostraPoke(){
    // Pega o valor do campo texto
    var inputPoke = $('#poke');
    // Limpa a div que imputa a imagem no html para não duplicar a informação
    $('#imagempoke').empty()
    // Limpa o campo de habilidadess
    $('#conteudo-poke').val('');
    $('.erro').hide();
    // Chama a function para consumir a API e armazenar as informações
    buscaPoke(inputPoke.val()).then(
        (response) => {
            console.log(response);
            $('#conteudo-poke').val(response.moves.map(item => ' ' + item.move.name).toString());
            
            var imagemPoke = document.createElement('img');
            $(imagemPoke).attr('src',response.sprites.front_default);
            
            // Passa a informação da imagem criada para a div do HTML
            $('#imagempoke').append(imagemPoke);
            $('#imagempoke').show();

        }
    ); 
}
