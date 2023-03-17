const Leaves = require('../../../models/leaves');

const createLeaves = async function (req, res){    
    try {
        console.log("this is create leaves")
         console.log(req.body)
        const {leave_reason,start_date,end_date} = req.body;
            const leaveList = await Leaves.find();
            //console.log(dealerList.length)
            if (leaveList.length ==0 ){
                leave_collection_index = 0;
                //console.log(dealer_collection_index)
            }else{
                Robject =leaveList.slice(-1).pop()
                leave_collection_index  =Robject.leave_collection_index ;
            }
            var leave_id = 'vs-leave-'+(Number(leave_collection_index)+1);
                //console.log(dealer_id)
                leave_collection_index = (Number(leave_collection_index)+1)
                //console.log(dealer_collection_index)
            
            var qureyresult = await Leaves.create({
                leave_id,
                leave_collection_index,
                leave_reason,
                start_date,
                end_date
            });
            res.send(qureyresult)
    }catch (error) { 
        res.send(error)   
    }
}


module.exports = {
    createLeaves
}