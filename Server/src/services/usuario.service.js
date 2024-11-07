const {createUserDao, findAll, deleteUserDao, updateUserDao, findbyemail }=require ("../dao/usuarioDao")
module.exports = {
    createUserService: async ({name, lastname, password, email, ci, state}) => {
        if(!name){
            throw new Error("nombre is required");
        }
        if(!lastname){
            throw new Error("apellido is required");
        }
        const usuario = await createUserDao({name, lastname, password, email, ci, state});
        return usuario
    },
    findAll: async () => {
        const usuarios=await findAll();
        return usuarios
      },
      findByEmailService: async (email) => {
        const usuaremail = await findbyemailDao(email);
          return await usuaremail
      },

      deleteUserService: async (id) => {
        const userDel=await deleteUserDao(id);
        return userDel
      },
      updateUserService: async (id, password) => {
        const userUpd=await updateUserDao(id, password);
        return userUpd
      },
    };
    