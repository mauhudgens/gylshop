const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'services.con59mchywxh.us-east-2.rds.amazonaws.com',
    database: 'capas',
    password: 'admin.aws123',
    port: 5432,
  })

module.exports = pool;