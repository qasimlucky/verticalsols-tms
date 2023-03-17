var router = require('express').Router();

const { 
    createHoliday,
    getHoliday,
    editHoliday
} = require('../../../controllers/web/holidays/holidays-controller');


router.post('/create',createHoliday);
router.get('/get',getHoliday);
router.get('/edit',editHoliday);


module.exports = router;