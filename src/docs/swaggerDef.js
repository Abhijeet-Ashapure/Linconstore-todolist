const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'To-Do List Web Application v1 Documentation',
    version,
  },
  servers: [
    {
      url: `http://localhost:3000/v1`,
    },
  ],
};

module.exports = swaggerDef;
