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

  getDesignation(callback){
    
    connection.query('Select * from hr_designation', callback)

  },


  getWorkShift(callback){

    connection.query('select * from hr_workshiftmaster WHERE status = 1',callback)
  },

  getAllEmployeesAllocation(callback){

    
    connection.query('select * from hr_employeeallocationmaster ',callback)
  },


  getManagerList(callback){
       connection.query('select * from hr_employeemaster WHERE UserType ="MAN" ',callback)
  },

  getEmployeesList(callback){
    connection.query('select * from hr_employeemaster WHERE UserType ="EMP" ',callback)
},


allocateEmployees(newEmployee, callback) {
  connection.query('INSERT INTO hr_employeeallocationmaster SET ?', newEmployee, callback);
},

updateAllocateEmployees(id, updatedEmployee, callback) {
  
  connection.query('UPDATE hr_employeeallocationmaster SET ? WHERE SrNo = ?', [updatedEmployee, id], callback);
},

deleteAllocateEmployees(id, callback) {
  const query = connection.query('DELETE FROM hr_employeeallocationmaster WHERE SrNo = ?', [id], callback);
 
},




// searchEmployeeAllocation(data, callback) {
// //  const query = connection.query('SELECT * FROM hr_employeeallocationmaster WHERE EmployeeId = ? AND EmployeeName = ?', [data.managerId, data.query], callback);



// const query = connection.query(`SELECT * FROM hr_employeeallocationmaster WHERE EmployeeId like '%${data}%' OR EmployeeName like '%${data}'`, callback);
// console.log(query);



// },


searchEmployeeAllocation(column, query, callback) {


  const sql = `SELECT * FROM hr_employeeallocationmaster WHERE ${column} LIKE ?`;
  const searchValue = `%${query}%`;
  connection.query(sql, [searchValue], callback);
},


};

module.exports = Employee;






  


  
