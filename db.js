const { Client } = require('pg')

/*const client = new Client({
    user: 'liikuntaparkkidb',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
})*/

const client = new Client({connectionString: process.env.DATABASE_URL})
 
client.connect()

module.exports = client;