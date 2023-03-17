const Employee = require('../../../models/employee');
const BankAccountDetails = require('../../../models/bank_information') ;
const EmergencyContact = require('../../../models/emergency-contact')
const multer  = require('multer')
const path = require("path");
const { CleanData } = require("../../../helper/cleanEmptyData");

var employeestorage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "server/public/employee")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now()+".jpg");
        var filePath = file.fieldname + "-" + Date.now()+".jpg";
    } 
});

const CreateEmployee = async function (req, res){    
    try {
        //console.log("this is employee")

        const {first_name,last_name,department_name,address,email,phone_number,gender,joining_date,birth_day,bank_name,bank_account_no,ifsc_code,pan_no,p_name,p_relationshp,p_phone,s_name,s_relationship,s_phone} = req.body;
            const employeeList = await Employee.find();
            console.log(employeeList.length)
            if (employeeList.length ==0 ){
                employee_collection_index = 0;
                console.log(employee_collection_index)
            }else{
                Robject =employeeList.slice(-1).pop()
                employee_collection_index  =Robject.employee_collection_index ;
            }
            console.log(employee_collection_index)
            var employee_id = 'vs-employee-'+(Number(employee_collection_index)+1);
                employee_collection_index = (Number(employee_collection_index)+1)
            console.log(employee_id)
            console.log(employee_collection_index)
            if(req.file){
                const employee_image =("http://localhost:7000/static/"+req.file.filename);
                console.log(employee_image)
                var employee = await Employee.create({
                    employee_id,
                    employee_collection_index,
                    first_name,
                    last_name,
                    department_name,
                    address,
                    email,
                    phone_number,
                    gender,
                    joining_date,
                    birth_day,
                    employee_image
                });
            }else{
                var employee = await Employee.create({
                    employee_id,
                    employee_collection_index,
                    first_name,
                    last_name,
                    department_name,
                    address,
                    email,
                    phone_number,
                    gender,
                    joining_date,
                    birth_day
                });

            }

            var addempaccount = await HandleBankAccount(employee_id,bank_name,bank_account_no,ifsc_code,pan_no)
            var addempemergencycontact = await HandleEmergencyContact(employee_id,p_name,p_relationshp,p_phone,s_name,s_relationship,s_phone)



            res.send(employee) 
    
        } catch (error) { 
        res.send(error)   
    }
}

async function HandleBankAccount(employee_id,bank_name,bank_account_no,ifsc_code,pan_no){
    console.log("this is storing bank information" )
    try{
        const List = await BankAccountDetails.find();

        console.log(List.length)
        if (List.length ==0 ){
            bank_info_collection_index = 0;
            
        }else{
            Robject =List.slice(-1).pop()
            bank_info_collection_index  =Robject.bank_info_collection_index ;
        }
       
        var bank_info_id = 'vs-bank-'+(Number(bank_info_collection_index)+1);
        console.log(bank_info_id)
        bank_info_collection_index = (Number(bank_info_collection_index)+1)
        console.log(bank_info_collection_index)
       
        var empBank = await BankAccountDetails.create({
                bank_info_id,
                bank_info_collection_index,
                employee_id,
                bank_name,
                bank_account_no,
                ifsc_code,
                pan_no
        });
            console.log(empBank)

        }catch(error){
            console.log(error)
        }
}

// employee emergancy contact info
async function HandleEmergencyContact(employee_id,p_name,p_relationshp,p_phone,s_name,s_relationship,s_phone){
    console.log("this is storing contact info" )
    try{
        const List = await EmergencyContact.find();

        console.log(List.length)
        if (List.length ==0 ){
            e_contact_collection_index = 0;
            
        }else{
            Robject =List.slice(-1).pop()
            e_contact_collection_index  =Robject.e_contact_collection_index ;
        }
       
        var e_contact_id = 'vs-contact-'+(Number(e_contact_collection_index)+1);
        console.log(e_contact_id)
        e_contact_collection_index = (Number(e_contact_collection_index)+1)
        console.log(e_contact_collection_index)
       
        var empContact = await EmergencyContact.create({
                e_contact_id,
                e_contact_collection_index,
                employee_id,
                p_name,
                p_relationshp,
                p_phone,
                s_name,
                s_relationship,
                s_phone
        });
            console.log(empContact)

        }catch(error){
            console.log(error)
        }
}

const getEmployee = async function (req, res){    
    try {
        const employeeList = await Employee.find();
        res.send(employeeList)
    } catch (error) { 
        res.send(error)   
    }
} 

const editEmployee = async function (req, res){    
    try {
        console.log("edit employee")
        if(req.file){
            const employee_image =("http://localhost:7000/static/"+req.file.filename);
            const {employee_id,first_name,last_name,email,department_name,address,phone_number,gender,joining_date,birth_day} = req.body;
            const updatedEmployee = await Employee.findOneAndUpdate({employee_id:employee_id},{$set :{first_name:first_name,last_name:last_name,email:email,department_name:department_name,address:address,gender:gender,joining_date:joining_date,phone_number:phone_number,birth_day:birth_day,employee_image:employee_image}});
        }
        else{
            const {employee_id,first_name,last_name,email,department_name,address,phone_number,gender,joining_date,birth_day} = req.body;
            const updatedEmployee = await Employee.findOneAndUpdate({employee_id:employee_id},{$set :{first_name:first_name,last_name:last_name,email:email,department_name:department_name,address:address,gender:gender,joining_date:joining_date,phone_number:phone_number,birth_day:birth_day}});
        }

        const employeeList = await Employee.find({employee_id:req.body.employee_id});
        res.send (employeeList)
    } catch (error) { 
        res.send(error)   
    }
}

const RemoveEmployee = async function (req, res){    
    try {
        const {employee_id} = req.body;
        const updatedEmployee = await Employee.findOneAndUpdate({employee_id:employee_id},{$set :{status:"inactive"}});

        const employeeList = await Employee.find({employee_id:employee_id});
        res.send (employeeList)
    } catch (error) { 
        res.send(error)   
    }
}

module.exports = {
    getEmployee,
    CreateEmployee,
    employeestorage,
    editEmployee,
    RemoveEmployee
}