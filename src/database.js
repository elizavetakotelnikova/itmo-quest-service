const { Client } = require('pg');

const dbConfig = {
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 7560,
    database: 'itmo-quest-service',
};

const client = new Client(dbConfig);

client.connect()

module.exports = client;
