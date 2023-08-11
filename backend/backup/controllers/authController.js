const User = require('../models/user');
const { validationResult, check } = require('express-validator');

const authController = {
  validateEmployeeFields: [
    check('username').notEmpty().withMessage('Employee UserName is required.'),
    check('password').notEmpty().withMessage('Employee Password is required.'),
  ]
};

// Handle login request
authController.login = (req, res) => {

  const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

  const { username, password } = req.body;

  User.checkCredentials(username, password, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred.' });
    } else {
      if (result.length > 0) {
        res.json({ success: true, message: 'Login successful!' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid username or password!' });
      }
    }
  });



  
};

module.exports = authController;
