import { createConnection } from 'mysql2/promise';

const coneccion = ()=>{
   return createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'tasks_db'
    })
}
export {coneccion};