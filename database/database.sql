/* Pasos para crear, modificar, eliminar y leer la tabla herramienta */

CREATE DATABASE IF NOT EXISTS virtualizaciondb;

USE virtualizaciondb;

CREATE TABLE herramienta (
  id INT(15) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) DEFAULT NULL,
  info_extra VARCHAR(100) DEFAULT NULL,
  img_logo VARCHAR(1000) DEFAULT NULL,
  descripcion VARCHAR(5000) DEFAULT NULL,
  url VARCHAR(1000) DEFAULT NULL,
  PRIMARY KEY(id)
);

DESCRIBE herramienta;

INSERT INTO herramienta VALUES
  (1, 'Proxmox', 'v8.0', 'https://static-00.iconduck.com/assets.00/proxmox-icon-512x512-wdyg8x2z.png','Proxmox es una plataforma de virtualización de código abierto que combina la virtualización basada en el hipervisor KVM y la virtualización a nivel de contenedor utilizando LXC. Proporciona una interfaz web intuitiva y funciones avanzadas como migración en vivo de máquinas virtuales, clústeres de alta disponibilidad y copias de seguridad integradas.','https://www.proxmox.com/en/');

UPDATE herramienta SET nombre = IFNULL(?, nombre), info_extra = IFNULL(?, info_extra), img_logo = IFNULL(?, img_logo), descripcion = IFNULL(?, descripcion), url = IFNULL(?, url) WHERE id = 1;

DELETE FROM herramienta WHERE id=1;

DROP TABLE herramienta;

 ALTER TABLE herramienta ALTER Blog_idBlog SET DEFAULT 1;