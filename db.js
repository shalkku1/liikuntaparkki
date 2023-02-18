const { Client } = require('pg')

const client = new Client({
    user: 'liikuntaparkkidb',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
})
 
client.connect()

module.exports = client;