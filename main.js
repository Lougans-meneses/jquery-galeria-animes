// Espera até que o documento HTML esteja completamente carregado
$(document).ready(function () {

    // Quando um botão dentro do elemento <header> é clicado,
    // um formulário é exibido deslizando para baixo (slideDown())
    $('header button').click(function () {
        $('form').slideDown();
    })

    // Quando um elemento com o ID #botao-cancelar é clicado,
    // o formulário é escondido deslizando para cima (slideUp())
    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    // Quando o formulário é submetido
    $('form').on('submit', function (e) {

        // Impede o evento de submissão padrão o carregamento da pagina
        e.preventDefault();

        // Obtém o valor do campo de entrada com o ID #endereco-imagem-nova
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();

        // Cria um novo item de lista, mas inicialmente oculto
        const novoItem = $('<li style="display: none"></li>');

        // Cria uma nova imagem com o atributo src definido como o valor do campo de entrada
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

        // Cria um link com o atributo href definido também como o valor do campo de entrada
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>            
            `).appendTo(novoItem);

        // Anexa o novo item de lista à lista <ul>
        $(novoItem).appendTo('ul');

        // Exibe gradualmente o novo item de lista com efeito de fade-in, surgir
        $(novoItem).fadeIn(1000);

        // Limpa o campo de entrada #endereco-imagem-nova
        $('#endereco-imagem-nova').val('')
    })
})