# CRMGraphQL Backend

_Backend de un CRM._

## Instalación 🔧

_Escribe el siguiente comando para instalar los módulos de Node.js_

```
npm install
```

_Crear una archivo en la raíz llamado variables.env con las sig. variables_

```
PORT=Tu puerto en desarrollo
DB_MONGO=Tu conexión a la BD
SECRETA=Una "password" para JWT
```

_Iniciar la aplicación (modo desarrollo)_

```
npm run dev
```

_Iniciar la aplicación (modo "producción")_

```
npm start
```

## Construido con 🛠️

* [Node](https://nodejs.org/en/) - Entorno de desarrollo de JS
* [GraphQL](https://graphql.org/) - Lenguaje de consulta para API
* [Apollo-Server](https://www.apollographql.com/docs/apollo-server/) - Servidor GraphQL compatible con cualquier cliente GraphQL
* [dotenv](https://www.npmjs.com/package/dotenv) - Librería para manejar variables de entorno
* [mongoose](https://mongoosejs.com/) - Librería para trabajar con MongoDB
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Librería para trabajar con JWT
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Librería para hashing de passwords
