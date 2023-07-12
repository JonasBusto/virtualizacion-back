const express = require("express");
const router = express.Router();
const estudianteController = require("../controllers/estudianteController");

router.get("/estudiante", estudianteController.mostrarEstudiantes);
router.get("/estudiante/:idEstudiante", estudianteController.mostrarEstudiante);
router.put(
  "/modificarEstudiante/:idEstudiante",
  estudianteController.modificarEstudiante
);

module.exports = router;
