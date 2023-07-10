import express from 'express';
import cors from 'cors';
import { categoriesRoutes } from './routes/categories.routs';

const app = express();

app.use(cors())
app.use(express.json());
app.use('/categories', categoriesRoutes)



app.listen(3333, ()=> {
  console.log('running in server in the port 3333')
})