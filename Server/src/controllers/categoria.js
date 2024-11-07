const categoria = require("../services/categoria");

module.exports = {
    create: async (req,res,next) => {
        const {nombre,apellido} = req.body;

        try {
            const create = await categoria.create(nombre,apellido); //metodo del servicio que usamos
            res.status(200).json(create); //
        } catch (error) {
            
        }
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
  