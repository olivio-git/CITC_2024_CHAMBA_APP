const {createEmpleadorDao, findAll, deleteEmpleadorDao, updateEmpleadorDao }=require ("../dao/empleadoresDao")

module.exports = {
    createEmpleadorService: async ({companyName,address,city,country,phone,companyDescription}) => {
        const emp = await createUserDao({companyName,address,city,country,phone,companyDescription});
        return emp
    },
    findAll: async()=>{
        const empl=await findAll();
        return empl
    },
    deleteEmpleadorService: async(id)=>{
        const emplDel=await deleteUserDao(id);
        return emplDel
    },
    updateEmpleadorService: async(id,companyName,address,city,phone,companyDescription)=>{
        const emplUpd=await updateEmpleadorDao(id, companyName,address,city,phone,companyDescription);
        return emplUpd
    },
    
}