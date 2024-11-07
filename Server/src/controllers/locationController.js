// controllers/locationController.js
const locationService = require('../services/locationService');

const locationController = {
  crearUbicacion: async (req, res) => {
    try {
      const data = req.body;
      const location = await locationService.crearUbicacion(data);
      res.status(201).json(location);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  },

  obtenerUbicaciones: async (req, res) => {
    try {
      const locations = await locationService.obtenerUbicaciones();
      res.status(200).json(locations);
    } catch (error) {
      console.error('XD',error);
      res.status(400).json({ error: error.message });
    }
  },

  obtenerUbicacionPorId: async (req, res) => {
    try {
      const location = await locationService.obtenerUbicacionPorId(req.params.id);
      res.status(200).json(location);
    } catch (error) {
      console.error(error);
      res.status(404).json({ error: error.message });
    }
  },

  actualizarUbicacion: async (req, res) => {
    try {
      const location = await locationService.actualizarUbicacion(req.params.id, req.body);
      res.status(200).json(location);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  },

  eliminarUbicacion: async (req, res) => {
    try {
      await locationService.eliminarUbicacion(req.params.id);
      res.status(204).send();  // 204 No Content, ya que no hay respuesta que devolver
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = locationController;
