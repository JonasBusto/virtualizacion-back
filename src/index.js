const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 3001;
// require("./database/config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.listen(PORT, () => {
  console.log("Backend ejecutandose en el puerto 3001");
});
