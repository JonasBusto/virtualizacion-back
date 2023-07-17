# Instalación del backend en un contenedor LXC en Proxmox

## _Herramientas usadas:_

- Proxmox
- Git
- Javascript - NodeJS - Express
- MariaDB
- SO: Debian
- Apache2

## Comandos a usar en la consola de CT:

Instalar apache2:

```sh
apt update
apt install apache2
apache2 -v
systemctl status apache2
```

Si el estado de 'Systemctl status apache2' no es 'running', ejecutar:

```sh
systemctl enable apache2
```

\
Instalar MariaDB

```sh
apt update
apt install mariadb-server
mariadb -v
systemctl status mariadb
```

\
Instalar Node

```sh
apt update
apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
nvm install node
```

\
Instalar Git

```sh
apt update
apt-get install git-all
git version
```

## Clonar repositorio del backend en un contenedor:

```sh
cd /var/www
git clone 'url-repo'
mv nombre-repo html
cd html
npm install
```

Luego ejecutar el backend

## Configurar MariaDB // MySQL en un contenedor:

Para acceder a MariaDB y configurarla, ejecutar:

```sh
mariadb
mysql_secure_installation
```

El usuario siempre sera 'root'. Por lo tanto, debera cargar una nueva contraseña:

- user: root
- pass: contraseña_nueva

Luego, armar la base de datos y las tablas.

**Nota: El nombre de la DB, información de las tablas y demas, deben ser los mismos que aparecen en el codigo del backend, para que las instrucciones de MariaDB // MySQL funcionen correctamente.**

## Fetch desde el frontend hacia backend:

La ip del contenedor debe ser pegada como una URL en una nueva pestaña. Usarla como una api fetch desde el frontend. Para obtener la IP del contenedor, ejecutar lo siguiente:

```sh
ip a
```
