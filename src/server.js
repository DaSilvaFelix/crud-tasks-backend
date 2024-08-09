import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { router } from './routers/tasks.routes.js';
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("servidor ejecutandoce en el puerto 3000");
});
