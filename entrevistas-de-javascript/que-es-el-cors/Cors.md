## ¿Qué es el CORS?

El CORS es un mecanismo que permite quitar la politica del mismo origen que tienen los navegadores por defecto.

## ¿Por qué se produce el error de CORS?

El navegador tiene por seguridad una política llamada política del mismo origen. Cuando Fetch o Ajax le hacen una petición a una URL/API (servidor) tiene que tener el mismo origen que el origen del cliente. Si el cliente no tiene el mismo origen que el servidor no está autorizado para hacer peticiones, por lo tanto se produce el error de CORS.

## Cliente

http://mipagina.com : origen

- http : Método o protocolo
- mipagina : dominio
- .com : subdominio

## Servidor

http://localhost:3000/api

- http : Método o protocolo
- localhost: dominio
- :3000 : puerto

## ¿Como solucionar el error de CORS?

Para solucionar el error de CORS, se debe instalar el paquete de CORS de npm y se lo debe configurar en el backend. De esta manera se agrega a los headers la cabecera "Access-Control-Allow-Origin: listaDeOrigenesPermitidos" y de esta manera se soluciona el error de CORS.
