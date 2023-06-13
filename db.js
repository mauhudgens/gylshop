const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'glhop.cp6woz82j0bt.us-east-1.rds.amazonaws.com',
    database: 'gylshop',
    password: 'Gylshop05*',
    port: 5432,
  })

module.exports = pool;

