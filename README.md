# Karma Speedup Example

Esse é o código fonte completo do artigo [Aumentando a velocidade dos testes com Karma e Angular](https://medium.com/@michael.silva/aumentando-a-velocidade-dos-testes-com-karma-e-angular-72a665592b58).
Aplicação construida em Angular com testes unitários usando Karma e Jasmine padrão do AngularCLI. Na raiz do projeto temos uma versão com problemas de performance para praticar os passos descritos no artigo, na pasta "final" está o resultado para comparar a performance e replicar esta alteração para seus próprios projetos.  

## Executando os testes

Execute `npm run test` para rodar os testes do projeto raiz, uma suite de 100 testes levando cerca de 1 minuto.
Execute `npm run test:final` para rodar os testes do projeto *final*, uma suite de 100 testes levando cerca de 1 segundo.

