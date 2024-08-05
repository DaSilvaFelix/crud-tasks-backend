const coneccion = require('./../db/database');

const traerTasks = async (req, res)=>{
    try {
    const conecction = await coneccion();
    const tareas = await conecction.query('SELECT * FROM tasks');
    res.json(tareas[0]);
    } catch (error) {
        console.log(error);
    }
}

module.exports = traerTasks