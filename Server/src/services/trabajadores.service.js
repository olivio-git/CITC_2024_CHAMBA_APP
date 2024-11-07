const trabajadores = require("../dao/trabajadores");

module.exports = {
    create: async ({nombre,apellido}) => {
        if(!nombre){
            throw new Error("nombre is required");
        }
        if(!apellido){
            throw new Error("apellido is required");
        }
        const trabajadores = await trabajadores.createCategoria({nombre,apellido});
    },
    findAll: async()=>{
        console.log('findAll');
    },
    delete: async()=>{
        console.log('delte');
    },
}