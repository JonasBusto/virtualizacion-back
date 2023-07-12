const express = require("express");
const router = express.Router();
const sobreMiController = require("../controllers/sobreMiController");

router.post("/agregarAlgoSobreMi", sobreMiController.agregarAlgoSobreMi);
router.get("/sobreMi", sobreMiController.mostrarTodoSobreMi);
router.get("/sobreMi/:idSobreMi", sobreMiController.mostrarAlgoSobreMi);
router.put("/modificarsobreMi/:idSobreMi", sobreMiController.modificarSobreMi);
router.delete(
  "/eliminarAlgoSobreMi/:idSobreMi",
  sobreMiController.eliminarAlgoSobreMi
);

module.exports = router;
