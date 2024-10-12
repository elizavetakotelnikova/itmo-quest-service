const pgp = import('pg-promise')(/* initialization options */);

const db = {
    host: 'localhost', // server name or IP address;
    port: 5760,
    database: 'itmo-quest-service',
    user: 'postgres',
    password: 'postgres'
};

db.connect(function(err) {
    if (err) throw err;
});

module.exports = db;
