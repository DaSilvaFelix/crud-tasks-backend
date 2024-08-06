const coneccion = require("./../db/database");

const traerTasks = async (req, res) => {
  try {
    const conecction = await coneccion();
    const tareas = await conecction.query("SELECT * FROM tasks");
    res.json(tareas[0]);
  } catch (error) {
    console.log(error);
  }
};

const crearTareas = async (req, res) => {
  try {
    console.log(req.body);

    const { title, description, isComplete } = req.body;
    const conecction = await coneccion();
    await conecction.query(
      "INSERT INTO `tasks`( `title`, `description`, `isComplete`) VALUES (?,?,?)",
      [title, description, isComplete]
    );
    res.json({ msg: "tarea creada" });
  } catch (error) {
    console.log(error);
  }
};

const traerTareaPorId = async (req, res) => {
  const { id } = req.params;
  const conecction = await coneccion();
  const searchTasks = await conecction.query(
    "SELECT * FROM `tasks` WHERE id =?",
    id
  );
  res.json(searchTasks[0]);
};

const actualizarPorId = async (req, res) => {
  const { id } = req.params;
  const { title, description, isComplete } = req.body;
  const conecction = await coneccion();
  await conecction.query(
    "UPDATE `tasks` SET `title`= ?,`description`=?,`isComplete`= ? WHERE id = ?",
    [title, description, isComplete, id]
  );
  res.json({ msg: "tareas actualizada correctamente" });
};
const eliminarPorId = async (req, res) => {
  const { id } = req.params;
  const conecction = await coneccion();
  await conecction.query("DELETE FROM `tasks` WHERE id = ?", id);
  res.json({ msg: "registro eliminado correctamente" });
};
module.exports = {
  traerTasks,
  crearTareas,
  traerTareaPorId,
  actualizarPorId,
  eliminarPorId,
};
