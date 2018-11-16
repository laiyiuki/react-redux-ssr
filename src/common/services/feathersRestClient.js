const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const axios = require('axios');

const HOST =
  process.env.NODE_ENV === 'production'
    ? process.env.HOST
    : 'http://localhost:3030';

// feathers rest client
const client = feathers();
const restClient = rest(HOST);

client.configure(restClient.axios(axios));

module.exports = client;
