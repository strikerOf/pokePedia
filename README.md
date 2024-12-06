
# PokePedia

Es una pequeña app en angular , tambien pwa y se utiliza la PokeApi

## Installation

Clonar el repositorio de la siguiente forma usando git clone:

```bash
  git clone https://github.com/strikerOf/pokePedia.git
```
accede a la carpeta poke-pediae instala las dependencias
```bash
  cd pokePedia
  npm install
```
Al terminar de instalr todas las dependencias en la carpeta raiz en que te ubicas corre el proyecto de la siguiente forma:

```bash
  ng serve
```
se comenzara a contruir la aplicacion y en la consola veras la url y el puerto al que debes acceder:

```bash
  http://localhost:4200/
```


### Probar PWA apllication
Con los siguientes comandos en la carpeta raiz:
```bash
  npm run prod
```
Esto construira la aplicacion para poderla probar.
para ello ejecutar:
```bash
  http-server -p 8080 -c-l dist/poke-pedia
```
en caso de no tener http-server en tu equipo, puedes instalarlo de la siguiente forma:
```bash
npm install -g http-server
```
con esto la aplicacion ya deberia estar ejecutandose, para poder verla ACCEDE A :
```bash
http://127.0.0.1:8080/
```
En esa ruta encontraras las opciones del server, en el cual para poder verlo selecciona "browser", esto te mandara a la vista de la aplicacion.

### Probar en Modo Offline
Abre las herramientas de desarrollo del navegador (F12).

* Ve a la pestaña Application/Aplicación y selecciona Service Workers.

* Marca la opción Offline/Sin conexion para simular que no hay conexión a internet.

* Navega por la aplicación para verificar el uso de la misma.
## Authors

- Luis Sánchez Juárez

## Extra
Para la creacion de esta app me enfoque en un diseño limpio y no saturado para mostrar todos los elementos, me inspire en las aplicaciones moviles para que fuese sencillo lo que corresponde al responsive y demas.
