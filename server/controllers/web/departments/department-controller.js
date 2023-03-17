const Department = require('../../../models/departments');

const createDepartment = async function (req, res){    
    try {
        console.log("this is create department")
         console.log(req.body)
        const {department_title,number_of_employee} = req.body;
            const departmentList = await Department.find();
            //console.log(dealerList.length)
            if (departmentList.length ==0 ){
                department_collection_index = 0;
                //console.log(dealer_collection_index)
            }else{
                Robject =departmentList.slice(-1).pop()
                department_collection_index  =Robject.department_collection_index ;
            }
            var department_id = 'vs-department-'+(Number(department_collection_index)+1);
                //console.log(dealer_id)
                department_collection_index = (Number(department_collection_index)+1)
                //console.log(dealer_collection_index)
            
            var qureyresult = await Department.create({
                department_id,
                department_collection_index,
                department_title,
                number_of_employee
            });
            res.send(qureyresult)
    }catch (error) { 
        res.send(error)   
    }
}

const getDepartments = async function (req, res){    
    try {
        const departmentList = await Department.find();
        res.send(departmentList)
    } catch (error) { 
        res.send(error)   
    }
} 

const RemoveDepartment = async function (req, res){    
    try {
        const {department_id} = req.body;
        const updatedEmployee = await Department.findOneAndUpdate({department_id:department_id},{$set :{status:"inactive"}});
        const departmentList = await Department.find({department_id:department_id});
        res.send (departmentList)
    } catch (error) { 
        res.send(error)   
    }
}

module.exports = {
    createDepartment,
    getDepartments,
    RemoveDepartment
}