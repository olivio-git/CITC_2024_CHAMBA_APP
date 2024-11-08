const workerService = require("../services/trabajadoresService");

module.exports = {
  // Crear un trabajador
  createWorkerController: async (req, res) => {
    try {
      const data = req.body;
      const worker = await workerService.createWorkerService(data);
      res.status(201).json(worker); // Responde con el trabajador creado
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtener todos los trabajadores
  getAllWorkersController: async (req, res) => {
    try {
      const workers = await workerService.getAllWorkersService();
      res.status(200).json(workers); // Responde con la lista de trabajadores
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Eliminar un trabajador
  deleteWorkerController: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await workerService.deleteWorkerService(id);
      if (result === 0) {
        return res.status(404).json({ error: "Trabajador no encontrado" });
      }
      res.status(200).json({ message: "Trabajador eliminado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Actualizar un trabajador
  updateWorkerController: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const result = await workerService.updateWorkerService(id, data);
      if (result[0] === 0) {
        return res.status(404).json({ error: "Trabajador no encontrado" });
      }
      res.status(200).json({ message: "Trabajador actualizado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Filtrar trabajadores
  filterWorkersController: async (req, res) => {
    const filters = req.query;
    try {
      const workers = await workerService.filterWorkersService(filters);
      res.status(200).json(workers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
