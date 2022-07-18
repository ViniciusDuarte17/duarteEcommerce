# projeto duarteEcommerce

Feitor por: 
- [Vinicius Duarte Passo](https://github.com/ViniciusDuarte17)

### -  link do site front-end integrado com o api: https://abstracted-bubble.surge.sh/
### - Link da documentação da api:  https://documenter.getpostman.com/view/19713876/UzJLPwxi

## Sobre o projeto
É um projeto full-stack, onde desenvolvi um ecommerce de produto eletrônica, comsumindo minha própria api. No front-end crei a home-page trazendo todos os produtos do meu banco de dados, faço a lógica de adicionar produto para a página de carrinho, na página de carrinho havendo produtos o usuário consegue deletar  um produto ou efetuar a compra. A página de histórico traz todo o historico da compra de um usuário.
<br/>
No back-end é onde ta toda a minha regra de négocio, criei três tabelas, de USUÁRIO, PRODUTO e COMPRA, a tabela de COMPRA se relaciona com a tabela de PRODUTO e com a tabela de USUÁRIO, a tabela de USUÁRIO se relaciona com a tabela de PRODUTO e com a tabela de COMPRA. Com essa minha estrutura, desenvolvo meu back-end com as seguintes funcionalidade: criar usuário, criar produtos, na tabela de COMPRA passando o id do usuário e o id do produto, e passando a quantidade faço o cálculo da quantidade vezes o preço do produto para ter o preço total. Por fim faço o endpoint de: pegar os produtos criados que recebe um query para fazer minha a filtragem por nome do produto. Por fim pego os resgistros de compras de cada usuário.
<br/>


# Tecnologias utilizadas front-end
- [React.js](https://pt-br.reactjs.org/docs/getting-started.html)
- [Styled-Components](https://styled-components.com/docs)
- [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [MUI](https://mui.com/pt/)
- [Sweetalert2](https://sweetalert2.github.io)

<hr/>

# Tecnologias utilizadas BACK-END
 - Mysql workbench  
 - typescript
 - node.js
 - Express.js
 - APIs REST


## DESMOSTRAÇÃO DE COMO FICOU O DUARTE-ECOMMERCE
![ecommerce](https://user-images.githubusercontent.com/92999708/179429890-e93506e4-b44d-41ef-aa3c-740c0c06da94.gif)
