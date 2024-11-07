const { Employer } = require("../db");

module.exports = {
    createEmpleadorDao: async ({companyName,address,city,country,phone,companyDescription}) => {
        return await create({companyName,address,city,country,phone,companyDescription});
    },
    findAll: async () => {
        return await Employer.findAll();
    },
    deleteEmpleadorDao: async (id) => {
        return await Employer.destroy({
            where: {
                employerId: id
            }
        });
    },
    updateEmpleadorDao: async (id,companyName,address,city,phone,companyDescription) => {
        return await Employer.update({
            companyName: companyName,
            address: address,
            city: city,
            phone: phone,
            companyDescription: companyDescription,

        },
           {where: { 
            employerId:id  
           }})
    },
}