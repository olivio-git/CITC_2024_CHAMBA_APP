const { createEmpleadorService, findAll, deleteEmpleadorService, updateEmpleadorService } = require("../services/empleadores.service");
const response = require("../utils/response");
module.exports = {
    // Crear un nuevo empleador
    createEmpleador: async (req, res, next) => {
        const { companyName,address,city,country,phone,companyDescription } = req.body;
        try {
            const create = await createEmpleadorService(companyName,address,city,country,phone,companyDescription);
            response(res,200,create)
        } catch (error) {
            next(error); // Maneja el error
        }
    },

    // Obtener todos los empleadores
    findAll: async (req, res, next) => {
        try {
            const empleadoresList = await findAll();
            response(res,200,empleadoresList);
        } catch (error) {
            next(error); // Maneja el error
        }
    },

    // Eliminar un empleador
    deleteEmpleador: async (req, res, next) => {
        const { id } = req.params;
        try {
            const deleted = await deleteEmpleadorService(id);
            res.status(200).json({ message: `Empleador con ID ${id} eliminado`, deleted });
        } catch (error) {
            next(error); // Maneja el error
        }
    },

    // Actualizar un empleador
    updateEmpleador: async (req, res, next) => {
        const { id } = req.params;
        const { companyName,address,city,phone,companyDescription } = req.body;
        try {
            const updated = await updateEmpleadorService(id, companyName,address,city,phone,companyDescription);
            res.status(200).json(updated);
        } catch (error) {
            next(error); // Maneja el error
        }
    },
};
