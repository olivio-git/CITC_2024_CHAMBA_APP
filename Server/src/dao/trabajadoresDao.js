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
    findFilteredWorkers: async (filters) => {
        const queryOptions = {
          where: {},
        };
      
        if (filters.workExperience) {
          queryOptions.where.workExperience = { $like: `%${filters.workExperience}%` };
        }
        if (filters.education) {
          queryOptions.where.education = { $like: `%${filters.education}%` };
        }
        if (filters.certifications) {
          queryOptions.where.certifications = { $like: `%${filters.certifications}%` };
        }
        if (filters.userId) {
          queryOptions.where.userId = filters.userId;
        }
      
        try {
          const workers = await Worker.findAll(queryOptions);
          return workers;
        } catch (error) {
          throw new Error("Error retrieving workers with filters");
        }
      }
}