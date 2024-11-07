const { categoria } = require("../db");

module.exports = {
    createCategoria: async ({nombre,apellido}) => {
        return await categoria.create({nombre,apellido});
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
}