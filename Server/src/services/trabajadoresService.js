const {
  createWorkerDao,
  findAllWorkersDao,
  deleteWorkerDao,
  updateWorkerDao,
  findFilteredWorkersDao,
} = require("../dao/trabajadoresDao");

module.exports = {
  // Crear un trabajador
  createWorkerService: async (data) => {
    try {
      return await createWorkerDao(data);
    } catch (error) {
      throw new Error("Error en la creación del trabajador: " + error.message);
    }
  },

  // Obtener todos los trabajadores
  getAllWorkersService: async () => {
    try {
      return await findAllWorkersDao();
    } catch (error) {
      throw new Error("Error al obtener los trabajadores: " + error.message);
    }
  },

  // Eliminar un trabajador
  deleteWorkerService: async (id) => {
    try {
      return await deleteWorkerDao(id);
    } catch (error) {
      throw new Error("Error al eliminar el trabajador: " + error.message);
    }
  },

  // Actualizar un trabajador
  updateWorkerService: async (id, data) => {
    try {
      return await updateWorkerDao(id, data);
    } catch (error) {
      throw new Error("Error al actualizar el trabajador: " + error.message);
    }
  },

  // Filtrar trabajadores
  filterWorkersService: async (filters) => {
    try {
      return await findFilteredWorkersDao(filters);
    } catch (error) {
      throw new Error("Error al filtrar los trabajadores: " + error.message);
    }
  },
};
