var router = require('express').Router();

const { 
    createDepartment,
    getDepartments,
    RemoveDepartment

} = require('../../../controllers/web/departments/department-controller');


router.post('/create',createDepartment);
router.get('/get',getDepartments);
router.post('/remove',RemoveDepartment);


module.exports = router;