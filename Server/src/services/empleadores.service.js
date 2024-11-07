const empleadores = require("../dao/empleadores");

module.exports = {
    create: async ({nombre,apellido}) => {
        if(!nombre){
            throw new Error("nombre is required");
        }
        if(!apellido){
            throw new Error("apellido is required");
        }
        const empleadores = await empleadores.createCategoria({nombre,apellido});
    },
    find: async()=>{
        console.log('create');
    },
    findAll: async()=>{
        console.log('findAll');
    },
    delete: async()=>{
        console.log('delte');
    },
}