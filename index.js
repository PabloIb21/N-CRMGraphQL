const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
const conectarDB = require('./config/db');
const jwt = require('jsonwebtoken');

// Conectar a la base de datos
conectarDB();

// Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
    // console.log(req.headers['authorization']);
    const token = req.headers['authorization'] || '';
    if(token) {
      try {
        const usuario = jwt.verify(token.replace('Bearer ', ''), process.env.SECRETA);
        // console.log(usuario);
        return {
          usuario
        }
      } catch (error) {
        console.log('Hubo un error');
        console.log(error);
      }
    }
  }
});

server.listen( process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});