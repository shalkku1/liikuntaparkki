const { Client } = require('pg')
    const client = process.env.NODE_ENV === 'production' 
    ? new Client({connectionString: process.env.DATABASE_URL}) 
    : new Client({
        user: 'liikuntaparkkidb',
        host: 'localhost',
        database: 'postgres',
        password: 'password',
        port: 5432,
    })
 
client.connect()

module.exports = client;