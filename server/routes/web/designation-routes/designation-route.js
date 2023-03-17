var router = require('express').Router();

const { 
    createDesignation,
    getDesignation
} = require('../../../controllers/web/designations/designation-controller');


router.post('/create',createDesignation);
router.get('/get',getDesignation);


module.exports = router;