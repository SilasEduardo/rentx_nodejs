import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json'
import "./database"
import "./shared/container"
const app = express()
import { router } from './routers';
app.use(express.json());
app.use(express())
app.use(router)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));




app.listen(3333, ()=>{
  console.log('server is running!')
})