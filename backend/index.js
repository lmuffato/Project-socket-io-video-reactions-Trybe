const express = require('express')
const app = express()
const port = 3000
const server = require('http').createServer(app);
const increaseReaction = require('./layers/increaseReaction');

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
  }
});

const votesSockets = require('./layers/increaseReaction');
votesSockets(io);

app.use(cors(corsOptions));

app.get('/reactions', async (_req, res) => {
  const reactions = await increaseReaction.getAll();
  res.status(200).json(reactions);
})

app.listen(port, () => console.log(`Example app listening on port port!`))