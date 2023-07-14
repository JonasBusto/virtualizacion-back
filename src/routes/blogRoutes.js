const express = require("express");
const router = express.Router();
const blogControllers = require("../controllers/blogController");

router.get("/mostrarInfoBlog/:idBlog", blogControllers.mostrarInfoBlog);
router.put("/modificarInfoBlog/:idBlog", blogControllers.modificarInfoBlog);

module.exports = router;
