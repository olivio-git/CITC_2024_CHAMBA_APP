const {User} =require("../db")
module.exports = {
    createUserDao: async ({name, lastname, password, email, ci, state}) => {
        return await User.create({name, lastname, password, email, ci, state})
    },
    findAll: async () => {
        return await User.findAll();
    },
    findbyemailDao:async (email) => {
        return await User.find({
            where: {
                email: email
            }
        });
    },
    deleteUserDao: async (id) => {
        return await User.destroy({
            where: {
                userId: id
            }
        });
    },
    updateUserDao: async (id, password) => {
        return await User.update({
            password: password
        },
           {where: { 
            userId:id  
           }})
    },
}