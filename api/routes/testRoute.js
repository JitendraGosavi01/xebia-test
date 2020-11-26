const express = require('express')
const router = express.Router();
const reqCheck = require('../middleware/requestCheck')
const testController = require('../controller/testController')
router.post('/save/:id', testController.postData)
router.get('/get/:id', testController.getData)

module.exports = router