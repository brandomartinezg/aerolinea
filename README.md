# Como ejecutar el proyecto

Una vez que se tiene el repositorio de manera local, solo basta con hacer un `npn install` para que el gestor de paquetes descargue las dependendencias necesarias para el proyecto

# Scripts disponibles

Los scripts que se encuentran disponibles para su ejecución son

### `npm start`

Este comando inicia el proyecto de manera local (localhost) y el puerto por defecto es el 3000, aunque depende de la disponibilidad del puerto

### `npm run buil`

Se obtiene el compilado de la interfaz listo para ser colocado en un servidor web

### `npm run deploy`

Este comando obtiene un compilado y lo publica en git hub pages, la configuración depende del archivo package.json en la propiedad homepage

### `npm run test`

Este comando corre las pruebas de jest y obtiene los archivos visuales de la covertura de código