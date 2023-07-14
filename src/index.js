const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const routesHerramientas = require("./routes/herramientaRoutes");
const routesEstudiante = require("./routes/estudianteRoutes");
const routesSobreMi = require("./routes/sobreMiRoutes");
const routesBlog = require("./routes/blogRoutes");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/", routesHerramientas);
app.use("/", routesEstudiante);
app.use("/", routesSobreMi);
app.use("/", routesBlog);

app.listen(PORT, () => {
  console.log("Backend ejecutandose en el puerto 3001");
});
