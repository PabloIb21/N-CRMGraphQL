# CRMGraphQL Backend

_Backend de un CRM._

## Instalaci贸n 馃敡

_Escribe el siguiente comando para instalar los m贸dulos de Node.js_

```
npm install
```

_Crear una archivo en la ra铆z llamado variables.env con las sig. variables_

```
PORT=Tu puerto en desarrollo
DB_MONGO=Tu conexi贸n a la BD
SECRETA=Una "password" para JWT
```

_Iniciar la aplicaci贸n (modo desarrollo)_

```
npm run dev
```

_Iniciar la aplicaci贸n (modo "producci贸n")_

```
npm start
```

## Construido con 馃洜锔?

* [Node](https://nodejs.org/en/) - Entorno de desarrollo de JS
* [GraphQL](https://graphql.org/) - Lenguaje de consulta para API
* [Apollo-Server](https://www.apollographql.com/docs/apollo-server/) - Servidor GraphQL compatible con cualquier cliente GraphQL
* [dotenv](https://www.npmjs.com/package/dotenv) - Librer铆a para manejar variables de entorno
* [mongoose](https://mongoosejs.com/) - Librer铆a para trabajar con MongoDB
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Librer铆a para trabajar con JWT
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Librer铆a para hashing de passwords
