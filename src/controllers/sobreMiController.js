const pool = require("../db");

exports.agregarAlgoSobreMi = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO sobre_mi (descripcion) VALUES (?)",
      [descripcion]
    );
    res.status(201).json({
      idSobreMi: rows.insertId,
      descripcion,
    });
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};

exports.mostrarTodoSobreMi = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM sobre_mi");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};

exports.mostrarAlgoSobreMi = async (req, res) => {
  try {
    const { idSobreMi } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM sobre_mi WHERE idSobreMi = ?",
      [idSobreMi]
    );

    if (rows.length <= 0) {
      return res.status(404).json({ error: "Información no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.modificarSobreMi = async (req, res) => {
  try {
    const { idSobreMi } = req.params;
    const { descripcion } = req.body;

    const [resultado] = await pool.query(
      "UPDATE sobre_mi SET descripcion = IFNULL(?, descripcion) WHERE idSobreMi = ?",
      [descripcion, idSobreMi]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: "Información no encontrada" });
    }

    const [rows] = await pool.query(
      "SELECT * FROM sobre_mi WHERE idSobreMi = ?",
      [idSobreMi]
    );

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};

exports.eliminarAlgoSobreMi = async (req, res) => {
  try {
    const { idSobreMi } = req.params;
    const [rows] = await pool.query(
      "DELETE FROM sobre_mi WHERE idSobreMi = ?",
      [idSobreMi]
    );

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ error: "Información no encontrada" });
    }

    res.status(204).json({ mensaje: "Eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};
