const express = require("express");
const app = express();
const morgan = require("morgan");
const routesHerramientas = require("./routes/herramientaRoutes");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", routesHerramientas);

app.listen(PORT, () => {
  console.log("Backend ejecutandose en el puerto 3001");
});
