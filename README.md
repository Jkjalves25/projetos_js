# **projetos_js**

Neste repositório, você encontrará um projeto básico de lista de tarefas desenvolvido com **JavaScript**. Com este projeto, será possível **adicionar tarefas** e **marcá-las como concluídas**.

## **Objetivo**
O principal objetivo deste projeto é **praticar conceitos de JavaScript**, utilizando **funções e eventos** para manipulação de elementos na página.

## **Lógica utilizada**
1. O código foi estruturado para seguir a seguinte lógica:
   - O usuário insere um texto no **input** exibido na tela.
   - Ao clicar no botão "Adicionar", um evento de **click** é disparado, chamando a função `verificacao()`.
   - Essa função verifica se o **input** contém algum texto:
     - Se estiver vazio, exibe um alerta pedindo que o usuário insira um dado antes de prosseguir.
     - Caso contrário, a informação é adicionada à lista de tarefas exibida na tela.
   
2. Após essa verificação, outra função foi criada para **alterar a cor do elemento impresso na tela**. Assim, quando o usuário clica sobre um item da lista, ele é marcado como concluído.
