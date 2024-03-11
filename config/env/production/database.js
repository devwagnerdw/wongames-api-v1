const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
const config = env('DATABASE_URL') ? parse(env('DATABASE_URL')) : {};

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: config.host || 'localhost',
          port: config.port || 5432,
          database: config.database || 'mydatabase',
          username: config.user || 'myusername',
          password: config.password || 'mypassword',
          ssl: {
            rejectUnauthorized: false,
          },
        },
        options: {
          ssl: true,
        },
      },
    },
  };
};
