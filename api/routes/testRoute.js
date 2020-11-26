const express = require('express')
const router = express.Router();
const testController = require('../controller/testController')

//POST Route
router.post('/save/:id', testController.postData)

//GET Route
router.get('/get/:id', testController.getData)

module.exports = router
