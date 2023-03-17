
const Designation =  require('../../../models/designation');

const createDesignation = async function (req, res){    
    try {
        console.log("this is create designation")
         console.log(req.body)
        const {department_title,designation_title} = req.body;
            const departmentList = await Designation.find();
            //console.log(dealerList.length)
            if (departmentList.length ==0 ){
                designation_collection_index = 0;
                //console.log(dealer_collection_index)
            }else{
                Robject =departmentList.slice(-1).pop()
                designation_collection_index  =Robject.designation_collection_index ;
            }
            var designation_id = 'vs-designation-'+(Number(designation_collection_index)+1);
                //console.log(dealer_id)
                designation_collection_index = (Number(designation_collection_index)+1)
                //console.log(dealer_collection_index)
            
            var qureyresult = await Designation.create({
                designation_id,
                designation_collection_index,
                department_title,
                designation_title
            });
            res.send(qureyresult)
    }catch (error) { 
        res.send(error)   
    }
}

const getDesignation = async function (req, res){    
    try {
        const designationtList = await Designation.find();
        res.send(designationtList)
    } catch (error) { 
        res.send(error)   
    }
}

module.exports = {
    createDesignation,
    getDesignation
}