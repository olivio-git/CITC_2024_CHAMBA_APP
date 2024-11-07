// daos/LocationDao.js
const { Location } = require("../db");

const LocationDao = {
  crearUbicacion: async (data) => {
    try {
      return await Location.create(data);
    } catch (error) {
      throw new Error("Error al crear la ubicación: " + error.message);
    }
  },

  obtenerUbicaciones: async () => {
    try {
      return await Location.findAll(); // Verifica que 'Location' no sea undefined
    } catch (error) {
      throw new Error("Error al obtener ubicaciones: " + error.message);
    }
  },

  obtenerUbicacionPorId: async (id) => {
    try {
      return await Location.findByPk(id);
    } catch (error) {
      throw new Error("Error al obtener la ubicación por ID: " + error.message);
    }
  },

  actualizarUbicacion: async (id, data) => {
    try {
      const [updated] = await Location.update(data, { where: { id } });
      if (updated) {
        return await Location.findByPk(id);
      }
      return null;
    } catch (error) {
      throw new Error("Error al actualizar la ubicación: " + error.message);
    }
  },

  eliminarUbicacion: async (id) => {
    try {
      return await Location.destroy({ where: { id } });
    } catch (error) {
      throw new Error("Error al eliminar la ubicación: " + error.message);
    }
  },
};

module.exports = LocationDao;
