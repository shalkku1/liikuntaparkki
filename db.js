const { Client } = require('pg')

const client = new Client({
    user: 'liikuntaparkkidb',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
})
 
client.connect()
 
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})