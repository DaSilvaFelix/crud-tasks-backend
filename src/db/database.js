const mysql = require('mysql2/promise');

const coneccion = ()=>{
   return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'tasks_db'
    })
}
module.exports = coneccion;