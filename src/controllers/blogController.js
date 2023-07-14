const pool = require("../db");

exports.mostrarInfoBlog = async (req, res) => {
  try {
    const { idBlog } = req.params;
    const [rows] = await pool.query("SELECT * FROM blog WHERE idBlog = ?", [
      idBlog,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ error: "Información no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.modificarInfoBlog = async (req, res) => {
  try {
    const { idBlog } = req.params;
    const { descripcion, urlPDF } = req.body;

    const [resultado] = await pool.query(
      "UPDATE blog SET descripcion = IFNULL(?, descripcion), urlPDF = IFNULL(?, urlPDF) WHERE idBlog = ?",
      [descripcion, urlPDF, idBlog]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: "Información no encontrada" });
    }

    const [rows] = await pool.query("SELECT * FROM blog WHERE idBlog = ?", [
      idBlog,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};
