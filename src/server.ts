import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res)=> {
  res.send('tudo certo')
})




app.listen(3333, ()=> {
  console.log('running in server in the port 3333')
})