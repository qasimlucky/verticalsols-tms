var router = require('express').Router();

const { 
    createLeaves,
} = require('../../../controllers/web/leaves/leaves-controller');


router.post('/create',createLeaves);


module.exports = router;