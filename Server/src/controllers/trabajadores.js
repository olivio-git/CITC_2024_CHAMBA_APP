const { createTrabajadorService, findAll, deleteTrabajadorService, updateTrabajadorService } = require("../services/trabajadores.service");
const response = require("../utils/response");
module.exports = {
    // Crear un nuevo empleador
    createTrabajador: async (req, res, next) => {
        const { workExperience,education,certifications} = req.body;
        try {
            const create = await createTrabajadorService({workExperience,education,certifications});
            response(res,200,create)
        } catch (error) {
            next(error); // Maneja el error
        }
    },

    // Obtener todos los trabajadores
    findAll: async (req, res, next) => {
        try {
            const trabajadoresList = await findAll();
            response(res,200,trabajadoresList);
        } catch (error) {
            next(error); // Maneja el error
        }
    },

    // Eliminar un empleador
    deleteTrabajador: async (req, res, next) => {
        const { id } = req.params;
        try {
            const deleted = await deleteTrabajadorService(id);
            res.status(200).json({ message: `Trabajador con ID ${id} eliminado`, deleted });
        } catch (error) {
            next(error); // Maneja el error
        }
    },

    // Actualizar un empleador
    updateTrabajador: async (req, res, next) => {
        const { id } = req.params;
        const { workExperience,education,certifications } = req.body;
        try {
            const updated = await updateTrabajadorService(id, workExperience,education,certifications);
            res.status(200).json(updated);
        } catch (error) {
            next(error); // Maneja el error
        }
    },
};
