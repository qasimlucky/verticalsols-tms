var router = require('express').Router();

const { 
    createAttendance,
    getEmployeeAttendance
} = require('../../../controllers/web/employee-attendance/attendance-controller');


router.post('/create',createAttendance);
router.post('/get',getEmployeeAttendance);


module.exports = router;