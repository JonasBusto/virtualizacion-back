const express = require("express");
const router = express.Router();
const herramientasController = require("../controllers/herramientaController");

router.post("/agregarHerramienta", herramientasController.agregarHerramienta);
router.get("/herramientas", herramientasController.mostrarHerramientas);
router.get("/herramientas/:id", herramientasController.mostrarHerramienta);
router.put(
  "/modificarHerramienta/:id",
  herramientasController.modificarHerramienta
);
router.delete(
  "/eliminarHerramienta/:id",
  herramientasController.eliminarHerramienta
);

module.exports = router;
