<h1 align="center">
  📋 Clinic Office
</h1>


## :rocket: Sobre o projeto

Site de cadastro de usuários no sistema Clinic Office. Para efetuar o cadastro o usuário deve preencher os seguintes dados:
- Nome;
- E-mail;
- Confirmação do e-mail;
- Telefone;
- Nome da Clínica;
- Estado;
- Cidade;
- Plano escolhido.

Na página inicial o usuário deve informar o nome, que será guardado no localStorage do navegador, para utilização no formulário de cadastro. Caso o usuário clique no botão sem informar o nome é feita uma animação em CSS balançando o campo, o usuário só será direcionado a próxima página após preenchê-lo

Na página de cadastro o nome vem preenchido com o dado do localStorage. No e-mail é feita uma validação utilizando RegExp para verificar se o e-mail é válido, caso não seja é exibida a mensagem de erro, já o campo de confirmação de e-mail só será habilitado quando o campo de e-mail estiver preenchido com um e-mail válido. Para a confirmação de e-mail é feita uma comparação com os dois e-mails, se não forem iguais é exibida uma mensagem de erro.

No campo de telefone foi utilizada uma máscara de telefone celular (XX) X XXXX - XXXX em RegExp que é aplicada após digitar o último número do telefone.

No select de estado é feita uma busca de todos os estados do Brasil por meio da API do IBGE, desse modo o select de cidade é habilitado e populado apenas após o usuário selecionar o estado exibindo apenas as cidades do estado selecionado. No select de cidade também foi utilizado o Select2 que possibilita digitar o nome da cidade para buscá-la.

Com todos os dados preenchidos de forma válida ao clicar em "Continuar" o usuário é direcionado a página de cliente, os dados informados são passados como parâmetros para a URL por meio de uma requisição GET do formulário. Na página de cliente o usuário pode retornar a página inicial clicando em "Voltar para Site", essa ação também faz com que o nome seja removido do localStorage.

Para simular uma página de erro existe um link acima do rodapé de cadastro, clicando nesse link é apresentada a página de erro que também possuí o botão "Voltar para Site".

Em todas as páginas foram desenvolvidas animações utilizando propriedades animation do CSS juntamente com javaScript, além da responsividade utilizando Media queries.



## :computer: Tecnologias usadas:

- `Javascript`
- `HTML`
- `CSS`


## :bulb: Telas
![1](https://user-images.githubusercontent.com/23708544/91246476-4a53c980-e726-11ea-867c-c6344d7a3059.png)

![2](https://user-images.githubusercontent.com/23708544/91246482-4d4eba00-e726-11ea-80a4-423ced1b93d8.png)

![3](https://user-images.githubusercontent.com/23708544/91246492-53449b00-e726-11ea-8df7-c14dd7b5bbb0.png)

![4](https://user-images.githubusercontent.com/23708544/91246469-4758d900-e726-11ea-88d7-29c5a9d00400.png)

![res1](https://user-images.githubusercontent.com/23708544/91491546-97e94700-e88a-11ea-9f66-5e34cb1fbeda.png)

![res2](https://user-images.githubusercontent.com/23708544/91491565-a0418200-e88a-11ea-814a-a5d610c74f58.png)


