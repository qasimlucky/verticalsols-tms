
const EmployeeAttendance = require('../../../models/employee-attendance');


const createAttendance = async function (req, res){    
    try {
        console.log("this is create employee-attendence")
         console.log(req.body)
        const {employee_id,date,punch_in} = req.body;
            const attendanceList = await EmployeeAttendance.find();
            //console.log(dealerList.length)
            if (attendanceList.length ==0 ){
                attendance_collection_index = 0;
                //console.log(dealer_collection_index)
            }else{
                Robject =attendanceList.slice(-1).pop()
                attendance_collection_index  =Robject.attendance_collection_index ;
            }
            var attendance_id = 'vs-attendance-'+(Number(attendance_collection_index)+1);
                //console.log(dealer_id)
                attendance_collection_index = (Number(attendance_collection_index)+1)
                //console.log(dealer_collection_index)
            
            var qureyresult = await EmployeeAttendance.create({
                attendance_id,
                attendance_collection_index,
                employee_id,
                date,
                punch_in
            });
            res.send(qureyresult)
    }catch (error) { 
        res.send(error)   
    }
}

const getEmployeeAttendance = async function (req, res){    
    try {
        const {employee_id} = req.body;
        console.log(req.body)
        const attendanceList = await EmployeeAttendance.find({employee_id:employee_id});
        res.send(attendanceList)
    } catch (error) { 
        res.send(error)   
    }
} 


module.exports = {
    createAttendance,
    getEmployeeAttendance
}