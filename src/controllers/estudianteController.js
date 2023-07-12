const pool = require("../db");

exports.mostrarEstudiantes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM estudiante");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};

exports.mostrarEstudiante = async (req, res) => {
  try {
    const { idEstudiante } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM estudiante WHERE idEstudiante = ?",
      [idEstudiante]
    );

    if (rows.length <= 0) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.modificarEstudiante = async (req, res) => {
  try {
    const { idEstudiante } = req.params;
    const { nombre, apellido, edad, email, presentacion, url_img_perfil } =
      req.body;

    const [resultado] = await pool.query(
      "UPDATE estudiante SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), edad = IFNULL(?, edad), email = IFNULL(?, email), presentacion = IFNULL(?, presentacion), url_img_perfil = IFNULL(?, url_img_perfil) WHERE idEstudiante = ?",
      [
        nombre,
        apellido,
        edad,
        email,
        presentacion,
        url_img_perfil,
        idEstudiante,
      ]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    const [rows] = await pool.query(
      "SELECT * FROM estudiante WHERE idEstudiante = ?",
      [idEstudiante]
    );

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};
