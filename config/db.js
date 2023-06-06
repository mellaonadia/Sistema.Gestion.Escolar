const mysql = require('mysql2');
const config = require('./../config');

const pool = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sistema de gestion escolar",
    port:3306
})

module.exports = pool.promise()