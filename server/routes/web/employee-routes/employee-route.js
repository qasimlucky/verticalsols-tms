var router = require('express').Router();
const multer  = require('multer')
const path = require("path");
const { 
    CreateEmployee,
    employeestorage,
    getEmployee,
    editEmployee,
    RemoveEmployee
} = require('../../../controllers/web/employee/employee-controllers');


const maxSize = 1 * 1000 * 1000 *10000;
var RouteUploadEmployeeImage = multer({ storage: employeestorage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb){
    
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
  
        var extname = filetypes.test(path.extname(
                    file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }else{            
          cb("Error: File upload only supports the " + "following filetypes - " + filetypes); 
        }
      } 
}).single('file');

router.post('/create',RouteUploadEmployeeImage,CreateEmployee);
router.post('/edit',RouteUploadEmployeeImage,editEmployee);
router.get('/get',getEmployee);
router.get('/remove',RemoveEmployee);


module.exports = router;