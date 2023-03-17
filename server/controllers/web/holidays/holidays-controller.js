
const Holiday = require('../../../models/holiday');


const createHoliday = async function (req, res){    
    try {
        console.log("this is create holiday")
         console.log(req.body)
        const {holiday_title,holiday_date,holiday_day} = req.body;
            const holidayList = await Holiday.find();
            //console.log(dealerList.length)
            if (holidayList.length ==0 ){
                holiday_collection_index = 0;
                //console.log(dealer_collection_index)
            }else{
                Robject =holidayList.slice(-1).pop()
                holiday_collection_index  =Robject.holiday_collection_index ;
            }
            var holiday_id = 'vs-holiday-'+(Number(holiday_collection_index)+1);
                //console.log(dealer_id)
                holiday_collection_index = (Number(holiday_collection_index)+1)
                //console.log(dealer_collection_index)
            
            var qureyresult = await Holiday.create({
                holiday_id,
                holiday_collection_index,
                holiday_title,
                holiday_date,
                holiday_day,
            });
            res.send(qureyresult)
    }catch (error) { 
        res.send(error)   
    }
}

const getHoliday = async function (req, res){    
    try {
        const holidayList = await Holiday.find();
        res.send(holidayList)
    } catch (error) { 
        res.send(error)   
    }
}

const editHoliday = async function (req, res){    
    try {
        console.log("edit holiday")
        console.log(req.body)
            const {holiday_title,holiday_date,holiday_day,holiday_id} = req.body;
            const updatedHoliday = await Holiday.findOneAndUpdate({holiday_id:holiday_id},{$set :{holiday_title:holiday_title,holiday_date:holiday_date,holiday_day:holiday_day}});
            
            const holidayList = await Holiday.find({holiday_id:holiday_id});
            res.send (holidayList)
    } catch (error) { 
        res.send(error)   
    }
}


const RemoveHoliday = async function (req, res){    
    try {
        const {holiday_id} = req.body;
        const updatedHoliday = await Holiday.findOneAndUpdate({holiday_id:holiday_id},{$set :{status:"inactive"}});

        const holidayList = await Holiday.find({holiday_id:holiday_id});
        res.send (holidayList)
    } catch (error) { 
        res.send(error)   
    }
}




module.exports = {
    createHoliday,
    getHoliday,
    editHoliday,
    RemoveHoliday
}