const usuario = require("../dao/usuario");

module.exports = {
    create: async ({nombre,apellido}) => {
        if(!nombre){
            throw new Error("nombre is required");
        }
        if(!apellido){
            throw new Error("apellido is required");
        }
        const usuario = await usuario.createCategoria({nombre,apellido});
    },findAll: async () => {
        console.log("findAll");
      },
      delete: async () => {
        console.log("findAll");
      },
      update: async () => {
        console.log("delete");
      },
    };
    