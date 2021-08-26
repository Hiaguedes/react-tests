# React Tests

Acompanhamento do livro Mastering React Test-Driven

always implement the simplest thing that will possibly work. That includes hard-coding, when it's possible. In order to get to the real implementation, we need to add more tests. This process is called triangulation. The more specific our tests get, the more general our production code needs to get.

Irvine, Daniel. Mastering React Test-Driven Development: Build rock-solid, well-tested web apps with React, Redux and GraphQL (p. 31). Packt Publishing. Edição do Kindle. 

Unit tests should be independent of one another. The simplest way to achieve this is to not have any shared state between tests. Each test should only use variables that it has created itself.

Irvine, Daniel. Mastering React Test-Driven Development: Build rock-solid, well-tested web apps with React, Redux and GraphQL (p. 32). Packt Publishing. Edição do Kindle. 

Unit tests should be independent of one another. The simplest way to achieve this is to not have any shared state between tests. Each test should only use variables that it has created itself.

Irvine, Daniel. Mastering React Test-Driven Development: Build rock-solid, well-tested web apps with React, Redux and GraphQL (p. 32). Packt Publishing. Edição do Kindle. 

The rule "more haste; less speed" applies to coding, just as in many other areas of life. If you skip the refactoring phase, your code quality will deteriorate. If you develop a habit of skipping refactoring,your code base will soon become difficult to work with.

A good test has three distinct sections:

- Arrange: Sets up test dependencies
- Act: Executes production code under test
- Assert: Checks expectations are met

 A great test is not just good but is also the following:

- Short
- Descriptive
- Independent of other tests
- Has no side-effects

Irvine, Daniel. Mastering React Test-Driven Development: Build rock-solid, well-tested web apps with React, Redux and GraphQL (p. 37). Packt Publishing. Edição do Kindle.

Ciclo do test

1- Escrever um teste que falhe (escrever um teste que descreva alguma funcionalidade que você quer ver funcionando, executar o teste e ver ele falhando, senao falha é por que não é um bom teste, volte e faça de novo)
2- Fazer passar(faça o teste ficar verde, faça uma coisa simples funcionar, sinta-se livre de fazer bagunça, você irá limpar depois)
3- Refatorar o seu código (pare, desacelere e resista a vontade de mover para a próxima feature, trabalhe duro para fazer seu código funcionar, os dois códigos tanto de produção quanto de teste devem passar o mais limpo possível)
1- ...