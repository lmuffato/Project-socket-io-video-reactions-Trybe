const reactionModels = require('./reactionsModels');

/* OBJETO RETORNADO PELO FRONT-END
objectReturned = { name: 'love' }
*/

module.exports = (io) => {
  io.on('connection', (socket) => { // Quando inicia a função, cria uma instânica de socket.
    // O socket vai ficar ouvindo a aplicação esperando o retorno do objeto 'objectReturned'.
    socket.on('objectReturned', async ({ name }) => { // Quando o socket ouvir o 'objectReturned', ele vai desestrutura o objeto retornado
      const newCount = await reactionModels.increaseVotes(name); // Chama a função que altera a base de dados do mongodb passando o name como parâmetro desestruturado.
      // io.emit => Emite o objeto 'refreshCurrentReactions' para todos os clientes, como valor newCount.
      io.emit('refreshCurrentReactions', newCount); 
    })
  });  
}
