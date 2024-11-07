const empleadores = require("../services/empleadores");

module.exports = {
    // Crear un nuevo empleador
    create: async (req, res, next) => {
        const { nombre, apellido } = req.body;
        try {
            const create = await empleadores.create(nombre, apellido);
            res.status(200).json(create);
        } catch (error) {
            next(error); // Maneja el error
        }
    },

    // Obtener todos los empleadores
    findAll: async (req, res, next) => {
        try {
            const empleadoresList = await empleadores.findAll();
            res.status(200).json(empleadoresList);
        } catch (error) {
            next(error); // Maneja el error
        }
    },

    // Eliminar un empleador
    delete: async (req, res, next) => {
        const { id } = req.params;
        try {
            const deleted = await empleadores.delete(id);
            res.status(200).json({ message: `Empleador con ID ${id} eliminado`, deleted });
        } catch (error) {
            next(error); // Maneja el error
        }
    },

    // Actualizar un empleador
    update: async (req, res, next) => {
        const { id } = req.params;
        const { nombre, apellido } = req.body;
        try {
            const updated = await empleadores.update(id, { nombre, apellido });
            res.status(200).json(updated);
        } catch (error) {
            next(error); // Maneja el error
        }
    },
};
