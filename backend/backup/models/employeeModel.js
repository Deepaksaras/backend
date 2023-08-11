const connection = require('../config/db'); // Import the MySQL connection

// Model functions
const Employee = {
  getAllEmployees(callback) {
    connection.query('SELECT * FROM hr_employeemaster', callback);
  },

  getEmployeeById(id, callback) {
    
    connection.query('SELECT * FROM hr_employeemaster WHERE EmployeeId = ?', [id], callback);
  },


  getEmployeeByUserName(username, callback) {
    
    connection.query('SELECT * FROM hr_employeemaster WHERE EmployeeUserName = ?', [username], callback);
  },

  createEmployee(newEmployee, callback) {
    connection.query('INSERT INTO hr_employeemaster SET ?', newEmployee, callback);
  },

  ce(newEmployee, callback) {
    connection.query('INSERT INTO hr_employeemaster SET ?', newEmployee, callback);
  },

  getEmployeeByEmail(email, callback) {
    connection.query('SELECT * FROM hr_employeemaster WHERE Email = ?', [email], callback);
  },

  updateEmployee(id, updatedEmployee, callback) {
    connection.query('UPDATE hr_employeemaster SET ? WHERE EmployeeId = ?', [updatedEmployee, id], callback);
  },

  deleteEmployee(id, callback) {
    connection.query('DELETE FROM hr_employeemaster WHERE EmployeeId = ?', [id], callback);
  },

  getAllStates( callback) {
    
    connection.query('SELECT * FROM statemaster', callback);
  },

  getCitiesById(stateId, callback) {
    
   connection.query('SELECT * FROM citymaster WHERE StateName = ?', [stateId], callback);
  
  },

};

module.exports = Employee;






  


  
