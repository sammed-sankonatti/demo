const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config()

exports.db = new Pool({
    host : process.env.host,
    port : process.env.port,
    database : process.env.database,
    user : process.env.user, 
    password : process.env.password
}) 