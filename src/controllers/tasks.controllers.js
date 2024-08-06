const coneccion = require("./../db/database");

const traerTasks = async (req, res) => {
  try {
    const conecction = await coneccion();
    const tareas = await conecction.query("SELECT * FROM tasks");
    res.status(200).json(tareas[0]);
  } catch (error) {
    console.log(error);
  }
};

const crearTareas = async (req, res) => {
  try {
    console.log(req.body);

    const { title, description, isComplete } = req.body;
    if (!title || !description || !isComplete) {
      res.json({ msg: "todos los capos deben estar completos" });
    } else {
      const conecction = await coneccion();
      await conecction.query(
        "INSERT INTO `tasks`( `title`, `description`, `isComplete`) VALUES (?,?,?)",
        [title, description, isComplete]
      );
      res.status(201).json({ msg: "tarea creada" });
    }
  } catch (error) {
    console.log(error);
  }
};

const traerTareaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const conecction = await coneccion();
    const [results] = await conecction.query(
      "SELECT * FROM `tasks` WHERE id = ?",
      [id]
    );
    const searchTask = results.find((task) => task.id === parseInt(id, 10));

    if (!searchTask) {
      return res
        .status(404)
        .json({ msg: "La tarea buscada no se ha encontrado" });
    }

    res.json(searchTask);
  } catch (error) {
    console.log(error);
  }
};

const actualizarPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;

    const conecction = await coneccion();
    const [results] = await conecction.query(
      "SELECT * FROM `tasks` WHERE id = ?",
      [id]
    );
    if (results.length === 0) {
      return res.status(404).json({ msg: "La tarea no se ha encontrado" });
    }
    await conecction.query(
      "UPDATE `tasks` SET `title`=?,`description`=?,`isComplete`=? WHERE id = ?",
      [title, description, isComplete, id]
    );
    res.status(200).json({ msg: "Tarea actualizada con éxito" });
  } catch (error) {
    console.log(error);
  }
};
const eliminarPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const conecction = await coneccion();
    const deleteTasks = await conecction.query(
      "DELETE FROM `tasks` WHERE id = ?",
      id
    );
    if (id !== deleteTasks) {
      res
        .status(400)
        .json({ msg: "la tarea que buscas para eliminar no se a encontrado " });
    } else {
      res.status(200).json({ msg: "registro eliminado correctamente" });
    }
  } catch (error) {}
};
module.exports = {
  traerTasks,
  crearTareas,
  traerTareaPorId,
  actualizarPorId,
  eliminarPorId,
};
