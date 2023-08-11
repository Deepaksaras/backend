const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

// Routes
router.get('/employees', employeeController.getAllEmployees);
router.get('/employees/:id', employeeController.getEmployeeById);

router.post('/emp', employeeController.ce);

router.post('/employees', employeeController.validateEmployeeFields, employeeController.createEmployee);
router.put('/employees/:id', employeeController.validateEmployeeFields, employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);


router.get('/states', employeeController.getAllStates);
router.get('/cities/:stateId', employeeController.getCitiesById);


module.exports = router;



