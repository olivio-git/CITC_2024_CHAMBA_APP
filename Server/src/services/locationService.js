// services/locationService.js
const locationDao = require('../dao/locationDao');

const locationService = {
  crearUbicacion: async (data) => {
    try {
      // Aquí podrías agregar validaciones antes de crear la ubicación
      return await locationDao.crearUbicacion(data);
    } catch (error) {
      throw new Error('Error en el servicio al crear la ubicación: ' + error.message);
    }
  },

  obtenerUbicaciones: async () => {
    try {
      return await locationDao.obtenerUbicaciones();
    } catch (error) {
      throw new Error('Error en el servicio al obtener las ubicaciones: ' + error.message);
    }
  },

  obtenerUbicacionPorId: async (id) => {
    try {
      const location = await locationDao.obtenerUbicacionPorId(id);
      if (!location) throw new Error('Ubicación no encontrada');
      return location;
    } catch (error) {
      throw new Error('Error en el servicio al obtener la ubicación: ' + error.message);
    }
  },

  actualizarUbicacion: async (id, data) => {
    try {
      const location = await locationDao.actualizarUbicacion(id, data);
      if (!location) throw new Error('Ubicación no encontrada');
      return location;
    } catch (error) {
      throw new Error('Error en el servicio al actualizar la ubicación: ' + error.message);
    }
  },

  eliminarUbicacion: async (id) => {
    try {
      const result = await locationDao.eliminarUbicacion(id);
      if (!result) throw new Error('Ubicación no encontrada');
      return result;
    } catch (error) {
      throw new Error('Error en el servicio al eliminar la ubicación: ' + error.message);
    }
  },
};

module.exports = locationService;
