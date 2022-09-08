const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'services.cu3w8pstsjxl.us-east-2.rds.amazonaws.com',
    database: 'capas',
    password: 'admin.aws123',
    port: 5432,
  })

module.exports = pool;