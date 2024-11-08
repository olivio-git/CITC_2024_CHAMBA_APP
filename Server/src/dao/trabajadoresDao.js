const { Worker } = require("../db"); // Importamos el modelo Worker

module.exports = {
  // Crear un trabajador
  createWorkerDao: async (data) => {
    try {
      return await Worker.create(data);
    } catch (error) {
      throw new Error("Error creando el trabajador: " + error.message);
    }
  },

  // Obtener todos los trabajadores
  findAllWorkersDao: async () => {
    try {
      return await Worker.findAll();
    } catch (error) {
      throw new Error("Error obteniendo los trabajadores: " + error.message);
    }
  },

  // Eliminar un trabajador
  deleteWorkerDao: async (id) => {
    try {
      return await Worker.destroy({
        where: { workerId: id },
      });
    } catch (error) {
      throw new Error("Error eliminando el trabajador: " + error.message);
    }
  },

  // Actualizar un trabajador
  updateWorkerDao: async (id, data) => {
    try {
      return await Worker.update(data, {
        where: { workerId: id },
      });
    } catch (error) {
      throw new Error("Error actualizando el trabajador: " + error.message);
    }
  },

  // Filtrar trabajadores
  findFilteredWorkersDao: async (filters) => {
    const { Op } = require("sequelize"); // Importamos los operadores de Sequelize

    const queryOptions = {
      where: {},
    };

    // Aplicamos los filtros si están definidos
    if (filters.workExperience) {
      queryOptions.where.workExperience = {
        [Op.like]: `%${filters.workExperience}%`,
      };
    }
    if (filters.education) {
      queryOptions.where.education = { [Op.like]: `%${filters.education}%` };
    }
    if (filters.certifications) {
      queryOptions.where.certifications = {
        [Op.like]: `%${filters.certifications}%`,
      };
    }

    try {
      return await Worker.findAll(queryOptions);
    } catch (error) {
      throw new Error("Error filtrando los trabajadores: " + error.message);
    }
  },
};
