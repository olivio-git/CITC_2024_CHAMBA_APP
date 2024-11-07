const categoria = require("../dao/categoria");

module.exports = {
    create: async ({nombre,apellido}) => {
        if(!nombre){
            throw new Error("nombre is required");
        }
        if(!apellido){
            throw new Error("apellido is required");
        }
        const categoria = await categoria.createCategoria({nombre,apellido});
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