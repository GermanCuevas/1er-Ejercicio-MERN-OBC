* @types/express , @types/jest , @types/node

Hacen referencia a Typescript, y se utilizan justamente para este lenguaje. Estas librerias proporcionan informacion sobre los tipos de datos y funciones que se pueden utilizar en TS.
@types/express para escribir servidores en TS
@types/jest para integrar y definir pruebas unitarias en TS.
@types/node provee definiciones para escribir TS en el entorno Node.js.
Al tener estas librerias se pueden detectar errores con mayor facilidad y actuar en base a eso.

* Concurrently

Es una libreria que nos permite ejecutar varios comandos de forma simultanea.

* Eslint 

Es la herramienta que nos permite tener un codigo mas limpio y ordenado. 
Al momento de instalar eslint, se nos da la posibilidad de aplicarle diferentes caracteristicas ( plugins ), de acuerdo a nuestras necesidades.
eslint-plugin-promise : reglas adicionales para el uso de promesas

eslint-plugin-n : para verificar la version de node y evitar errores

eslint-plugin-import : para detectar y corregir errores de importaciones.

eslint-config-standard-with-typescript: configuracion para reglas de codeo. Extiende de 
eslint-config-standard, pero en este caso de usa para TS.

@typescript-eslint/eslint-plugin: mas reglas de codeo para TS.

* jest / ts-jest

Jest es un framework que nos permite realizar puebas unitarias. ts/jest es una extension del mismo que nos permite realizar las pruebas en TS sin problemas.

* Nodemon

Se usa para reiniciar la app de Node al momento de guardar los cambios.

* Supertest

Para poder simular peticiones htttp. Esta herramienta ,entonces , nos permite probar y testear el funcionamiento de las solicitudes en nuestra app.

* ts-node 

Es un paquete de Node.js que se utiliza para ejecutar archivos de TypeScript directamente en Node.js sin tener que compilarlos primero a JavaScript.
Entonces, es intérprete TypeScript para Node.js que permite ejecutar código TypeScript directamente en la máquina Node.js.


* Typescript

Ts necesita ser instalado para su uso. Se lo conoce como un superset de JS, pero, aun asi, el navegador aun no puede interpretarlo.
Una vez instalado obtendremos herramientas y funcionalidades que pueden ayudarnos a mejorar nuestro codigo.

* Webpack

Se utiliza para compilar y empaquetar archivos. Lo que nos permite la gestion y reutilizacion de codigo; integracion con diferentes herramientas; facilitacion de despliegue de una app; optimizacion de codigo.

webpack-cli : nos proporciona una interfaz de linea de comandos.
webpack-node-externals:  permite excluir modulos de node para poder mejorar el tiempo de compilacion y rendimiento de la app.
webpack-shell-plugin : es un plugin de Webpack que permite ejecutar comandos de shell en el sistema operativo durante la compilación de Webpack

COMANDOS
```javascript
"build": "npx tsc"
```
Este comando utiliza el compilador de TypeScript para compilar el código TypeScript en código JavaScript.

```javascript
"start": "node dist/index.js"
```
Se utiliza para ejecutar un archivo de JavaScript en un entorno de Node.js.

```javascript
"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js \""
```
Se utiliza concurrently para poder ejecutar varios comandos en simultaneo.
npx tsc --watch se utiliza para compilar codigo TS y mantenerlo actualizado. --watch es para indicar que el compilador vigile los archivos y vuelva compilarlos en caso de que hayan cambios.
nodemon -q dist/index.js usa la libreria nodemon para reiniciar el servidos cada vez que hayan cambios. La -q indica a nodemon que los cambios no se mostraran por consola.

```javascript
"test": "jest"
```
Se utiliza para ejecutar pruebas automatizadas utilizando la herramienta de pruebas Jest.

```javascript
"serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"
```
Se utiliza para generar y servir un informe de cobertura de código después de que se ejecutan las pruebas.
-npm run test : para ejecutar las pruebas
-cd coverage/Icov-report navega hasta la carpeta mencionada, el mismo contiene el informe generado por jest.
-npx serve: inicia un servidor web para mostrar el informe.

En resumen, el comando "serve:coverage" se utiliza para ejecutar las pruebas en Jest y generar un informe de cobertura de código. Luego, se inicia un servidor web y se sirve el informe de cobertura de código en una interfaz de usuario para que el desarrollador pueda inspeccionar la cobertura y asegurarse de que todas las partes importantes del código estén siendo probadas adecuadamente.

ARCHIVOS .env
Las variables de entorno que se utilizan en ese proyecto son:
PORT=8000
SECRETKEY=THISISMYSECRETTEXTFORJWT