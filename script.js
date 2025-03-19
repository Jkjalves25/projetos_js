let input = document.querySelector('#input'); //selecionou isoladamente cada id #input, #btn e #lista
let btn1 = document.querySelector('#btn');
let lista = document.querySelector('#lista');

function addItems() { // criei a função, porque ao selecionar o input, gostaria que fosse verificado se ele esta preenchido antes de enviar o dado.
    let texto = input.value.trim(); // Remove espaços extras antes/depois do texto

    if (texto === "") { // condicional dizendo, que se o texto, a variavel que a gente pega do input e nomeou a como texto, faz a verificação, se estiver preenchido ele encerra a função se estiver vazio ele aber um alerta.
        alert("Por favor, insira um item.");
        return;
    }

    let novoItem = document.createElement('li'); // Cria um elemento <li>
    novoItem.textContent = texto; // Adiciona o texto variavel do input declarada acima ao <li>

    lista.appendChild(novoItem); // Adiciona o <li> na <ul>
  
  lista.addEventListener('click', function(event) {
    // Verifica se o item clicado é um <li>
    if (event.target.tagName === 'LI') {
        event.target.style.color = 'red'; // Muda a cor do texto para vermelho
    }
});

    input.value = ""; // Limpa o input após adicionar
}

// Adicionando evento ao botão para chamar a função ao clicar
btn1.addEventListener('click', addItems);
