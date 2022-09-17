const express = require('express')
const customerController = require('../controller/CustomerController');

const router = express.Router();

router.post('/save', customerController.saveCustomer);
router.post('/update', customerController.updateCustomer);
router.post('/get', customerController.getCustomer);
router.post('/delete', customerController.deleteCustomer);
router.post('/getAll', customerController.getAllCustomers);


module.exports = router;