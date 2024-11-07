const { empleadores } = require("../db");

module.exports = {
    createCategoria: async ({nombre,apellido}) => {
        return await empleadores.create({nombre,apellido});
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