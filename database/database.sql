/* 

La base de datos, realizada con MySQL//MariaDB se llama 'virtualizaciondb' 
  
  Consta de las siguientes tablas:

  # blog (idBlog, descripcion);
  # herramienta (id, nombre, info_extra, img_logo, descripcion, url)
  # estudiante (idEstudiante, nombre, apellido, edad, email, presentacion, url_img_perfil)
  # sobre_mi (idSobreMi, descripcion)

 */


/* LISTA DE COMANDOS PARA ARMAR LA DB Y LAS TABLAS: */


/* Crear la DB si no existe */
CREATE DATABASE IF NOT EXISTS virtualizaciondb;

/* Acceder a la DB creada */
USE virtualizaciondb;

/* Crear las tablas para la DB creada */
CREATE TABLE IF NOT EXISTS `virtualizaciondb`.`blog` (
  `idBlog` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(5000) NULL,
  `urlPDF` VARCHAR(5000) NULL,
  PRIMARY KEY (`idBlog`)
  )
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `virtualizaciondb`.`estudiante` (
  `idEstudiante` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NULL,
  `apellido` VARCHAR(200) NULL,
  `edad` INT NULL,
  `email` VARCHAR(200) NULL,
  `presentacion` VARCHAR(5000) NULL,
  `url_img_perfil` VARCHAR(1000) NULL,
  `Blog_idBlog` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`idEstudiante`, `Blog_idBlog`),
  INDEX `fk_Estudiante_Blog1_idx` (`Blog_idBlog` ASC) VISIBLE,
  CONSTRAINT `fk_Estudiante_Blog1`
    FOREIGN KEY (`Blog_idBlog`)
    REFERENCES `virtualizaciondb`.`blog` (`idBlog`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `virtualizaciondb`.`sobre_mi` (
  `idSobreMi` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(1000) NULL,
  `Estudiante_idEstudiante` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`idSobreMi`, `Estudiante_idEstudiante`),
  INDEX `fk_Conocimiento_Estudiante_idx` (`Estudiante_idEstudiante` ASC) VISIBLE,
  CONSTRAINT `fk_Conocimiento_Estudiante`
    FOREIGN KEY (`Estudiante_idEstudiante`)
    REFERENCES `virtualizaciondb`.`estudiante` (`idEstudiante`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `virtualizaciondb`.`herramienta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NULL,
  `info_extra` VARCHAR(100) NULL,
  `img_logo` VARCHAR(1000) NULL,
  `descripcion` VARCHAR(5000) NULL,
  `url` VARCHAR(1000) NULL,
  `Blog_idBlog` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`, `Blog_idBlog`),
  INDEX `fk_Herramienta_Blog1_idx` (`Blog_idBlog` ASC) VISIBLE,
  CONSTRAINT `fk_Herramienta_Blog1`
    FOREIGN KEY (`Blog_idBlog`)
    REFERENCES `virtualizaciondb`.`blog` (`idBlog`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


INSERT INTO blog VALUES (1, 'El blog personal consta de una estructura básica definida en
              secciones, que organizan la información necesaria y requerida por
              la materia. Se empleo HTML, CSS, JavaScript y Google Firebase para la creación del
              Frontend del blog, y NodeJs como MariaDB para el Backend, donde
              ambas partes fueron subidas a los contenedores de Proxmox.', 'https://drive.google.com/file/d/1MPbZxkoG7aPbZyUqdCV8C_W_mLp1DnXI/preview');

INSERT INTO estudiante VALUES (1, 'Kevin Jonás', 'Busto', 23, 'Kevin.Busto@alu.frt.utn.edu.ar', 'Tengo 23 años. Estudio Ing. Sistemas...', 'https://drive.google.com/uc?export=view&id=1EemG9V23wiT_tado0MqbqQ8BoUY7vKFO', 1);


