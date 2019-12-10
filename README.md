# Teste back-end 2017

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
Teste em node.js usando padrão MVC sem framework.


