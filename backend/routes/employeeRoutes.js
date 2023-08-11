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


router.get('/designation',employeeController.getDesignation)

router.get('/workshift',employeeController.getWorkShift)

router.get('/employeeallocation',employeeController.getAllEmployeesAllocation)

router.get('/managerlist',employeeController.getManagerList)
router.get('/emplyeeslist',employeeController.getEmployeesList)

router.post('/allocateemployee',employeeController.allocateEmployees)
router.put('/employeeallocation/:srNo',employeeController.updateAllocateEmployees)
router.delete('/employeeallocation/:id',employeeController.deleteAllocateEmployees)

router.get('/searchEmployeeAllocation',employeeController.searchEmployeeAllocation)


module.exports = router;



