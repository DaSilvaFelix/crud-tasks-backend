const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routers/tasks.routes");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("servidor ejecutandoce en el puerto 3000");
});
