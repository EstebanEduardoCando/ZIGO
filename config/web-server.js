const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.HTTP_PORT || parseInt(process.env.APP_PORT),
  };