const express = require('express')
const {create,getprojectdetails} = require('../../controller/projectAllocation/projectAllocationcontroller')
const{ verifyuser}= require('../../middleware/authentication')

var router = express.Router();

router.get('/', verifyuser , create)

router.use('/getproject/:email',getprojectdetails)

module.exports=router;