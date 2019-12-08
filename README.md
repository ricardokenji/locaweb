# Teste

## Executando aplicação
Estando no diretório raiz do projeto, executar:

```
docker build -t 'locaweb' .
docker run --name locaweb -p 3000:3000 -d locaweb
```

Acessar `http://localhost:3000`

## Versões
- node:10
- babel:7.3.4
- jest:24.5.0
- axios:0.18.0

## Escolhas
Apesar do javascript não ser a minha linguagem principal, escolhi trabalhar neste projeto com o javascript + node, pois estive estudando estas ferramentas a algum tempo e queria por em prática o que eu aprendi utilizando os conhecimentos que possuo em php e java. Encontrei algumas  dificuldades como em injeção de dependências, pois javascript não é tipada. Poderia ter utilizado typescript, mas como nunca utilizei não teria tempo viável para aprender e entregar o projeto, então trabalhei com o que o javascript e node oferecem.


