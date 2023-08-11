
const connection = require('../config/db');

// User model
const User = {};
// Method to check username and password
User.checkCredentials = (username, password, callback) => {
  const sql = 'SELECT * FROM hr_employeemaster WHERE EmployeeUserName = ? AND EmployeePassword = ?';
  connection.query(sql, [username, password], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};
module.exports = User;

  