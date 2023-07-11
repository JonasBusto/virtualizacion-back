const pool = require("../db");

exports.agregarHerramienta = async (req, res) => {
  try {
    const { nombre, info_extra, img_logo, descripcion, url } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO herramienta (nombre, info_extra, img_logo, descripcion, url) VALUES (?, ?, ?, ?, ?)",
      [nombre, info_extra, img_logo, descripcion, url]
    );
    res.status(201).json({
      id: rows.insertId,
      nombre,
      info_extra,
      img_logo,
      descripcion,
      url,
    });
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};

exports.mostrarHerramienta = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM herramienta WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ error: "Herramienta no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.log(error);
  }
};

exports.mostrarHerramientas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM herramienta");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};

exports.modificarHerramienta = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, info_extra, img_logo, descripcion, url } = req.body;

    const [resultado] = await pool.query(
      "UPDATE herramienta SET nombre = IFNULL(?, nombre), info_extra = IFNULL(?, info_extra), img_logo = IFNULL(?, img_logo), descripcion = IFNULL(?, descripcion), url = IFNULL(?, url) WHERE id = ?",
      [nombre, info_extra, img_logo, descripcion, url, id]
    );

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: "Herramienta no encontrada" });
    }

    const [rows] = await pool.query("SELECT * FROM herramienta WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};

exports.eliminarHerramienta = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM herramienta WHERE id = ?", [
      id,
    ]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ error: "Herramienta no encontrada" });
    }

    res.status(204).json({ mensaje: "Eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ error_consola: error });
  }
};
