1. Extruturar o banco o dados;
```
database: Block30Activities

// colection: reactions
reactions = {
  { id: 1, name: 'love', vote: 1 },
  { id: 2, name: 'surprised', vote: 2 },
  { id: 3, name: 'cool', vote: 1 },
  { id: 4, name: 'boring', vote: 1 },
};
```
2. iniciar o serviço do mongodb no ubuntu:
sudo service mongod start

3. Criar tabela
Block30Activities

```
use Block30Activities;
```
4. Criar a coleção inserindo um objeto
```
db.reactions.insertOne( { name: 'love', votes: 1 } );
```
