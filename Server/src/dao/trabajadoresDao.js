const { createTrabajador } = require("../controllers/trabajadores");
const { worker } = require("../db");

module.exports = {
    createTrabajadorDao: async ({workExperience,education,certifications}) => {
        return await worker.create({workExperience,education,certifications});
    },
    findAll: async () => {
        return await worker.findAll();
    },
    deleteTrabajadorDao: async (id) => {
        return await worker.destroy({
            where: {
                workerId: id
            }
        });
    },
    updateTrabajadorDao: async (id, workExperience,education,certifications) => {
        return await worker.update({
            workExperience: workExperience,
            education: education,
            certifications: certifications
        },
           {where: { 
            workerId:id  
           }})
    },
}