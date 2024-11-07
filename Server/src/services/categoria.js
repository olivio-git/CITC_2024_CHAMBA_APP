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
    findAll: async () => {
      console.log("findAll");
    },
    delete: async () => {
      console.log("findAll");
    },
    update: async () => {
      console.log("delete");
    },
  };
  