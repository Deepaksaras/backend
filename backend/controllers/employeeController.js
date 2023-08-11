const { validationResult, check } = require('express-validator');
const Employee = require('../models/employeeModel');

const employeeController = {
  // Validation rules for employee fields
      validateEmployeeFields: [
        check('EmployeeId').notEmpty().withMessage('EmployeeId is required.'),
        // check('EmployeeUserName').notEmpty().withMessage('EmployeeUserName is required.'),
        // check('EmployeePassword').notEmpty().withMessage('EmployeePassword is required.'),
        check('UserType').notEmpty().withMessage('UserType is required.'),
        check('Name').notEmpty().withMessage('Name is required.'),
        check('LastName').notEmpty().withMessage('LastName is required.'),
        check('Mobile')
          .notEmpty().withMessage('Mobile is required.')
          .isNumeric().withMessage('Mobile must be a numeric value.')
          .isLength({ min: 10, max: 10 }).withMessage('Mobile must be exactly 10 digits.'),
        check('Email')
          .notEmpty().withMessage('Email is required.')
          .isEmail().withMessage('Invalid email format.'),
        check('DateOfBirth').notEmpty().withMessage('DOB is required.'),
        check('Education').notEmpty().withMessage('Education is required.'),
        check('MaritalStatus').notEmpty().withMessage('MaritalStatus is required.'),
        check('PreviousCompany').notEmpty().withMessage('PreviousCompany is required.'),
        check('Experience').notEmpty().withMessage('Experience is required.'),
        check('Designation').notEmpty().withMessage('Designation is required.'),
        check('DateOfJoining').notEmpty().withMessage('DateOfJoining is required.'),
        check('WorkShift').notEmpty().withMessage('WorkShift is required.'),
        check('BloodGroup').notEmpty().withMessage('BloodGroup is required.'),
        check('Address').notEmpty().withMessage('Address is required.'),
        check('City').notEmpty().withMessage('City is required.'),
        check('State').notEmpty().withMessage('State is required.'),
        check('City').notEmpty().withMessage('City is required.'),
        check('Country').notEmpty().withMessage('Country is required.'),
        check('Pincode').notEmpty().withMessage('Pincode is required.'),
    
      ],


    // Create Employee starts
    createEmployee(req, res) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const newEmployee = req.body;

        // Check if the EmployeeId already exists in the database before inserting
        Employee.getEmployeeById(newEmployee.EmployeeId, (err, resultId) => {
          if (err) throw err;
          if (resultId.length > 0) {
            return res.status(409).json({ error: 'Employee Id already exists in the database. Please choose a different employee Id.' });
          }

          // Check if the Employee User Name already exists in the database before inserting
           Employee.getEmployeeByUserName(newEmployee.EmployeeUserName, (err, resultUserName) => {
            if (err) throw err;
            if (resultUserName.length > 0) {
              return res.status(409).json({ error: 'Employee Username already exists in the database. Please choose a different User Name.' });
            }

           // Check if the email already exists in the database before inserting
          Employee.getEmployeeByEmail(newEmployee.Email, (err, resultEmail) => {
            if (err) throw err;
            if (resultEmail.length > 0) {
              return res.status(409).json({ error: 'Email already exists in the database. Please choose a different email.' });
            }

          // If the email and EmployeeId validations pass, proceed with creating the employee
          Employee.createEmployee(newEmployee, (err, result) => {
            if (err) throw err;
            res.status(201).json({ message: 'Employee created successfully', id: result.insertId });
          });
          
        });
      });
    });
    },

    ce(req, res) {
      const newEmployee = req.body;
      Employee.ce(newEmployee,(err, results) => {
        if (err) throw err;
        res.status(201).json({ message: 'Employee created successfully', id: results.insertId });
      });
    },
    
  getAllEmployees(req, res) {
    Employee.getAllEmployees((err, results) => {
      if (err) throw err;
      res.json(results);
    });
  },

  getEmployeeById(req, res) {
    const employeeId = req.params.id;
    Employee.getEmployeeById(employeeId, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({ message: 'Employee not found' });
      } else {
        res.json(result[0]);
      }
    });
  },

  updateEmployee(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const employeeId = req.params.id;
    const updatedEmployee = req.body;
    Employee.updateEmployee(employeeId, updatedEmployee, (err) => {
      if (err) throw err;
      res.json({ message: 'Employee updated successfully' });
    });
  },

  deleteEmployee(req, res) {
    const employeeId = req.params.id;
    Employee.deleteEmployee(employeeId, (err) => {
      if (err) throw err;
      res.json({ message: 'Employee deleted successfully' });
    });
  },

  getCitiesById(req, res) {
    const stateId = req.params.stateId;
    //console.warn(stateId);
    Employee.getCitiesById(stateId, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({ message: 'Failed to fetch cities' });
      } else {
        res.json(result);
       
      }
    });
  },

  getAllStates(req, res) {
    Employee.getAllStates((err, results) => {
      if (err) throw err;
      res.json(results);
    });
  },

  getDesignation(req,res){

    Employee.getDesignation((err, results)=>{

     if(err) throw err;
     res.json(results);

    })

  },


  getWorkShift(req,res){

    Employee.getWorkShift((err,results)=>{

      if(err) throw err;
      res.json(results);

    })

  },


  getAllEmployeesAllocation(req,res){

    Employee.getAllEmployeesAllocation((err,results)=>{

      if(err) throw err;
      res.json(results);

    })

  },

  getManagerList(req,res){

    Employee.getManagerList((err,results)=>{

      if(err) throw err;
      res.json(results);

    })

  },

  getEmployeesList(req,res){

    Employee.getEmployeesList((err,results)=>{

      if(err) throw err;
      res.json(results);

    })

  },

  

  allocateEmployees(req, res) {
    const data = req.body;
    Employee.allocateEmployees(data,(err, results) => {
      if (err) throw err;
      res.status(201).json({ message: 'Employee allocated successfully', id: results.insertId });
    });
  },

  
  // allocateEmployees(req, res) {
  //   const newEmployee = req.body;
  //   Employee.allocateEmployees(newEmployee,(err, results) => {
  //     if (err) throw err;
  //     res.status(201).json({ message: 'Employee allocated successfully', id: results.insertId });
  //   });
  // },
  

  deleteAllocateEmployees(req, res) {
    const employeeId = req.params.id;
    Employee.deleteAllocateEmployees(employeeId, (err) => {
      if (err) throw err;
      res.json({ message: 'Employee deleted successfully' });
    });
  },
  

  // searchEmployeeAllocation(req, res) {
  //   const employeeId = req.params.id;
  //   console.log(employeeId);
  //   Employee.searchEmployeeAllocation(employeeId, (err,resultUserName) => {
  //     if (err) {
  //       return res.status(500).json({ error: 'An error occurred' });
  //     }
      
  //     return res.status(200).json(resultUserName);
  //   });
  // },

  searchEmployeeAllocation(req, res) {
  const { query, column } = req.body;

  console.log(query,column);
  // Validate column name (prevent SQL injection)
  const allowedColumns = ['EmployeeId', 'EmployeeName', 'EmployeeUserName'];
  if (!allowedColumns.includes(column)) {
    return res.status(400).json({ error: 'Invalid search column' });
  }

  Employee.searchEmployeeAllocation(column, query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'An error occurred' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Data not found' });
    }
    return res.status(200).json(results);
  });

},



updateAllocateEmployees(req, res) {

  const employeeSrNo = req.params.srNo;
  const updatedEmployee = req.body;
 
  Employee.updateAllocateEmployees(employeeSrNo, updatedEmployee, (err) => {
    if (err) throw err;
    res.json({ message: 'Employee updated successfully' });
  });
},






  

};

module.exports = employeeController;




